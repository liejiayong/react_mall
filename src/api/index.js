
import { request } from './axios'
// import jsonp from './jsonp'

export const getUser = () => request({method:'get',url:'api_v1.2.8/club/influenceRanking',data:{a:'1',b:'2'}});
// 获取商品信息
export const getShopList = () =>request({method: 'post', url: 'shop.php?do=index'})
// 获取我的礼包
export const getMyList = () => request({method: 'post', url: 'shop.php?do=myPrize'})
// 购买商品
export const buyShop = (id) => request({method: 'post', url: 'shop.php?do=exchange', data: { id: id }})

// export const getMyList = () => jsonp('/twapi/shop.php?do=myPrize')
// export const getShopList = () =>request('/twapi/shop.php?do=index')