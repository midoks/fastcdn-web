<script lang="ts" setup>
import type { VbenFormSchema } from '@vben/common-ui';

import { computed, markRaw } from 'vue';

import { AuthenticationLogin, SliderCaptcha, z } from '@vben/common-ui';
import { $t } from '@vben/locales';
import { message } from '#/adapter/naive';

import { useAuthStore } from '#/store';

defineOptions({ name: 'Login' });

const authStore = useAuthStore();

//{
//    component: markRaw(SliderCaptcha),
//    fieldName: 'captcha',
//    rules: z.boolean().refine((value) => value, {
//        message: $t('authentication.verifyRequiredTip'),
//    }),
//},

const formSchema = computed((): VbenFormSchema[] => {
    return [
        {
            component: 'VbenInput',
            componentProps: {
                placeholder: $t('authentication.usernameTip'),
            },
            fieldName: 'username',
            label: $t('authentication.username'),
            rules: z
                .string()
                .min(1, { message: $t('authentication.usernameTip') }),
        },
        {
            component: 'VbenInputPassword',
            componentProps: {
                placeholder: $t('authentication.password'),
            },
            fieldName: 'password',
            label: $t('authentication.password'),
            rules: z
                .string()
                .min(1, { message: $t('authentication.passwordTip') }),
        },
    ];
});

// 处理表单提交，并捕获可能的错误
async function handleSubmit(values: any) {
    try {
        const result = await authStore.authLogin(values);
        console.log("handleSubmit:",result);
        // 检查返回结果，确保登录成功
        //if (!result || !result.userInfo) {
        //    console.error('登录失败: 用户信息获取失败');
        //    message.error('登录失败: 用户信息获取失败');
        //}
    } catch (error: any) {
        console.error('登录失败:', error);
        // 如果错误对象看起来像是API响应，则提取有用的错误信息
        if (error && typeof error === 'object') {
            if (error.message) {
                message.error(`登录失败: ${error.message}`);
            } else if (error.data && error.data.message) {
                message.error(`登录失败: ${error.data.message}`);
            } else {
                message.error('登录失败，请稍后重试');
            }
        } else {
            message.error('登录失败，请稍后重试');
        }
    }
}
</script>

<template>
    <AuthenticationLogin
        :form-schema="formSchema"
        :loading="authStore.loginLoading"
        @submit="handleSubmit"
    />
</template>
