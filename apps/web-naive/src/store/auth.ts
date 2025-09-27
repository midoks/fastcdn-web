import type { Recordable, UserInfo } from '@vben/types';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { LOGIN_PATH } from '@vben/constants';
import { preferences } from '@vben/preferences';
import { resetAllStores, useAccessStore, useUserStore } from '@vben/stores';

import { defineStore } from 'pinia';

import { notification } from '#/adapter/naive';
import { getAccessCodesApi, getUserInfoApi, loginApi, logoutApi } from '#/api';
import { $t } from '#/locales';

export const useAuthStore = defineStore('auth', () => {
    const accessStore = useAccessStore();
    const userStore = useUserStore();
    const router = useRouter();

    const loginLoading = ref(false);

    /**
     * 异步处理登录操作
     * Asynchronously handle the login process
     * @param params 登录表单数据
     */
    async function authLogin(
        params: Recordable<any>,
        onSuccess?: () => Promise<void> | void,
    ) {
        // 异步处理用户登录操作并获取 accessToken
        let userInfo: null | UserInfo = null;
        console.log("123123:", params);

        try {
            const response = await loginApi(params);

            console.log("response:", response);
            // 直接使用响应对象，不解构
            console.log("完整响应:", response);

            // 从控制台可以看到token直接在response中
            const token = response;
            
            if (token) {
                // 将 token 存储到 accessStore 中
                accessStore.setAccessToken(token);

                // 获取用户信息并存储到 accessStore 中
                const [fetchUserInfoResult, accessCodes] = await Promise.all([
                    fetchUserInfo(),
                    getAccessCodesApi(),
                ]);

                userInfo = fetchUserInfoResult;

                userStore.setUserInfo(userInfo);
                accessStore.setAccessCodes(accessCodes);

                if (accessStore.loginExpired) {
                    accessStore.setLoginExpired(false);
                } else {
                    onSuccess
                        ? await onSuccess?.()
                        : await router.push(
                              userInfo.homePath ||
                                  preferences.app.defaultHomePath,
                          );
                }

                if (userInfo?.realName) {
                    notification.success({
                        content: $t('authentication.loginSuccess'),
                        description: `${$t('authentication.loginSuccessDesc')}:${userInfo?.realName}`,
                        duration: 3000,
                    });
                }
            }
        } catch (error: any) {
            console.error('authLogin:', error);
        } finally {
            loginLoading.value = false;
        }
        userInfo = {
            desc: '',
            homePath: '',
            token: '',
            avatar: '',
            realName: '',
            userId: '',
            username: '',
        };
        return {
            userInfo,
        };
    }

    async function logout(redirect: boolean = true) {
        try {
            await logoutApi();
        } catch {
            // 不做任何处理
        }
        resetAllStores();
        accessStore.setLoginExpired(false);

        // 回登录页带上当前路由地址
        await router.replace({
            path: LOGIN_PATH,
            query: redirect
                ? {
                      redirect: encodeURIComponent(
                          router.currentRoute.value.fullPath,
                      ),
                  }
                : {},
        });
    }

    async function fetchUserInfo() {
        let userInfo: null | UserInfo = null;
        userInfo = await getUserInfoApi();
        userStore.setUserInfo(userInfo);
        return userInfo;
    }

    function $reset() {
        loginLoading.value = false;
    }

    return {
        $reset,
        authLogin,
        fetchUserInfo,
        loginLoading,
        logout,
    };
});
