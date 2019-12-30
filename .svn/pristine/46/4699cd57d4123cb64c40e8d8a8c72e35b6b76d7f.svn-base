import axios from 'axios';
import qs from 'qs';

//配置
//配置前后端数据交互的请求头：
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://10.0.6.5:16012'; 

// axios.interceptors.request.use((config) => {
// 	if (config.method === 'post') {
// 		config.data = qs.stringify(config.data,{arrayFormat: 'repeat' });
// 	}
// 	return config;
// }, (error) => {
// 	return Promise.reject(error);
// });

export default axios;