import axios from "axios";

const interceptor = axios.create({
  headers: {
    "content-type": "application/x-www-form-urlencoded"
  }
});

//请求拦截
interceptor.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

//响应拦截
interceptor.interceptors.response.use(
  response => {
    return response;
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error.response.status); // 返回接口返回的错误信息
  }
);

export default interceptor;
