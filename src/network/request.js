// import axios from 'axios'


// const instance = axios.create({
// 	baseURL: "/api",
// 	timeout: 2000,
// 	headers:{}
// })


// import axios from "axios"

// // 1.创建一个axios的关键
// // 发送真正的网络请求


// export function request(config) {
// 	return new Promise((resolve, reject) => {
// 		// 1.创建一个axios的关键
// 		const instance = axios.create({
// 			baseURL: '/api/token',
// 			timeout: 2000
// 		})
// 		// 拦截器
// 		instance.interceptors.request.use(
// 			config => {
// 				if (localStorage.getItem('Authorization')) {
// 					config.headers.Authorization = localStorage.getItem('Authorization');
// 				}

// 				return config;
// 			},
// 			error => {
// 				return Promise.reject(error);
// 			}
// 		)
// 		// 发送真正的网络请求
// 		instance(config)
// 			.then(res => {
// 				resolve(res)
// 			})
// 			.catch(err => {
// 				reject(err)
// 			})
// 	})
// }


// instance.interceptors.request.use(
// 	config => {
// 		if (localStorage.getItem('Authorization')) {
// 			config.headers.Authorization = localStorage.getItem('Authorization');
// 		}

// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error);
// 	}
// )

export default instance