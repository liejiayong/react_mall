import axios from 'axios';
//history/browserHistory需要服务器端做配置，路径是真实的URL，是官方推荐首选。
import createHashHistory from 'history/createHashHistory'
const qs = require('qs');
const history = createHashHistory();
const CancelToken = axios.CancelToken;
let cancel;
//console.log(process.env.NODE_ENV);

// let baseURL = 'http://hd.tanwan.com/api/twapp/';
let baseURL = '/twapi';

axios.defaults.timeout = 10000
axios.defaults.baseURL = baseURL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers.post['Cache-Control'] = 'no-cache'
axios.defaults.withCredentials = true //配置允许跨域携带cookie
//responseType: "json",
axios.defaults.transformRequest = [function (data) {
    let newData = ''
    for (let k in data) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
    }
    return newData
}]
axios.interceptors.request.use(config => {
    // console.log( '加载中。。。');
    // console.log(history)
    // console.log(config)
	return config
}, err => {
    // console.log('加载超时')
	return Promise.reject(err)
});

axios.interceptors.response.use(response =>{
    if (response.data.code == 2) {
        // pop_lr.login()
    }
    console.log('加载结束', response)
    //history.push('/user')
	return response
}, err => {
	// if (err.response) {
	// 	console.log(err.response);
    // }
    console.log('网络不给力呀！请稍候再试', err)
	return Promise.reject(err.response)
});

const jointData = function (data) {
    for (let i in data) {
        if (typeof data[i] === 'object') {
            data[i] = JSON.stringify(data[i])
        }
    }
    return data
}

export const request = (obj) =>{
    var data = jointData(obj.data); 
    return new Promise((resolve, reject) => {
        axios({
            method: obj.method,
            url: obj.url,
            data: qs.stringify(data, {allowDots: true, withCredentials:true}),
            withCredentials: true,
            cancelToken: new CancelToken(c => {
                cancel = c
            })
        }).then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        });
    })
}

export const requestAll = (arr) =>{
    var aRequest = [];
    for (var i of arr) {
        var data = jointRequestData(i.data);
        aRequest.push(axios({method: i.method,url: i.url,data: qs.stringify(data, {allowDots: true})}));
    }
    return axios.all(aRequest).then(axios.spread(function (){
        var rall = []
        for (var i of arguments) {
            rall.push(i)
        }
        return rall
    }))
}

/*
requestAll([{method:'get',url:'api/1',data:{id:'a'}}, {method:'get',url:'api/1',data:{id:'b'}}]).then((res) => {
    console.log('请求1', res[0])
    console.log('请求2', res[1])
});
*/