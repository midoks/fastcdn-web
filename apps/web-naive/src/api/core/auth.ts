import { baseRequestClient, requestClient } from '#/api/request';

export namespace AuthApi {
    /** 登录接口参数 */
    export interface LoginParams {
        password?: string;
        username?: string;
    }

    /** 登录接口返回值 */
    export interface LoginResult {
        token:string;
        message: string;
        code: number;
    }

    export interface RefreshTokenResult {
        data: string;
        status: number;
    }
}

/**
 * 登录
 */
export async function loginApi(data: AuthApi.LoginParams) {
    // 使用baseRequestClient直接获取原始响应，不经过拦截器处理
    const response = await baseRequestClient.post<AuthApi.LoginResult>('/api/auth/login', data);
    console.log('原始登录响应:', response);
    // 返回token字段
    return response;
}

/**
 * 刷新accessToken
 */
export async function refreshTokenApi() {
    return baseRequestClient.post<AuthApi.RefreshTokenResult>('/api/auth/refresh', {
        withCredentials: true,
    });
}

/**
 * 退出登录
 */
export async function logoutApi() {
    return baseRequestClient.post('/api/auth/logout', {
        withCredentials: true,
    });
}

/**
 * 获取用户权限码
 */
export async function getAccessCodesApi() {
    return requestClient.get<string[]>('/api/auth/codes');
}
