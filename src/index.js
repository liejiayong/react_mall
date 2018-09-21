import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import './style/app.less';

import store from './store/index';
import routes from './router/index';  //路由

/*
    react-redux 提供 Provider 组件; (被 Provider 组件包裹的整个APP中的每个组件，都可以通过 connect 去连接 store)
    主要功能:
    1：在原应用组件上包裹一层，使原来整个应用成为Provider的子组件；
    2：接收Redux的store作为props，通过context对象传递给子孙组件上的connect；
*/
render(
	<Provider store={store} key="provider">
		<Router history={hashHistory} routes={routes}/>  
	</Provider>,
	document.getElementById('app')
)

