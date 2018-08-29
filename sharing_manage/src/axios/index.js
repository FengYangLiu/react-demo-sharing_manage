import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';

export default class Axios {
	static jsonp(options) {
		return new Promise(
			(resolve, reject) => {
				JsonP(options.url, {
					param: 'callback'
				}, function (err, response) {

				})
			}
		)
	}

	static ajax (options){
		let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
		let loading;
		if(options.data && options.data.isShowLoading !== false){
			loading = document.getElementById('ajaxLoading');
			loading.style.display = 'block';
		}

		return new Promise((resolve, reject)=>{
			axios({
				url: options.url,
				method: 'get',
				// timeout: '500',
				baseURL:baseApi,
				params: (options.data && options.data.params)|| ''
			}).then((responese)=>{
				if(responese.status === 200 ){
					let res = responese.data;
					if(res){
						resolve(res)
						loading.style.display = 'none'
					}else{
						Modal.info({
							title:"提示",
							content: res.data.msg
						})
					}
				}else{
					reject(responese.data)
				}
			})
		});
	}
}