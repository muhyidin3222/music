import axios from "axios";

const httpApi = axios.create({
    baseURL: "https://itunes.apple.com",
});

httpApi.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
    };

    return config;
});

httpApi.interceptors.response.use((data) => {
    return data?.data;
},
    error => {
        return Promise.reject(error?.response);
    }
);

export default httpApi;