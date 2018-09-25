
import { request } from './axios'

export const getUser = () => request({method:'get',url:'api_v1.2.8/club/influenceRanking',data:{a:'1',b:'2'}});
