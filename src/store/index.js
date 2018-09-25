/*
   创建唯一 store 状态树
*/
import configureStore from './configureStore';
import reducer from '../reducers/index';

// 给增强后的 createStore 函数传入 reducer，生成唯一的 store 状态树
const store = configureStore(reducer);

/*
   由于单独使用 react-hot-loader 不会更新 reducer 
   此处需要通过 webpack 提供的接口根据文件变化更新 reducer
   store.replaceReducer() 是 redux 提供接口，用于更换当前的 reducer 
   注意：同样不会触发更新的还有 react 组件中的 ‘this.state’ 
   手动修改 state 中数据不会触发视图更新
*/

if (module.hot) {
   module.hot.accept('../reducers/index.js', () => {
      console.log('reducer changed');
      store.replaceReducer(require('../reducers/index').default);
   });
}

export default store;