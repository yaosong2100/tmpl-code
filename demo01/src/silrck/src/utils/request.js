/**
 * axios配置
 */

import * as Axios from 'axios';
import uri from '@/api/uri';
// import store from '@/store';

const axios = Axios.default.create({
    baseURL: uri.baseUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(response => {
    //const data = response.data;
    const status = response.status;
    if (status === 200) {
        return Promise.resolve(response.data);
    } else {
        // 可在此根据不同的status定义不同的错误信息
        return Promise.reject(response);
    }
});

export default axios;
