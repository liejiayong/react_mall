import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter , HashRouter, Route} from 'react-router-dom';
// HashRouter URL上会带#号 打包本地用这个查看
//<BrowserRouter> 使用 HTML5 提供的 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步。
import './utils/rem.js';
import './utils/login.js'
//import './style/index.css';
import './style/index.less';

import store from '@src/store/index';
import Root from '@src/router/index';

//console.log(BrowserRouter);

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Root />
		</HashRouter>
	</Provider>, 
	document.getElementById('app')
);