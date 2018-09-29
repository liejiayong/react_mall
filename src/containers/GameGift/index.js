import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameKinds from './GameKinds/index'
import GiftPanel from './GiftPanel/index'
import { getShopList, buyShop } from '@src/api/index'
import './styl.less'

class GameGift extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: null, // 分类
      giftList: null, // 礼包列表
      selectTab: '' // tab所选类
    }
  }
  componentWillMount() {
    getShopList().then(res => {
      let { category, list } = res.data

      // 测试
      category = [
        {id: "2", name: "蓝月手游2", img: "http://upload.tanwan.com/upload/201809/5ba367ad002bc.png"},
        {id: "3", name: "蓝月手游3", img: "http://upload.tanwan.com/upload/201809/5ba367ad002bc.png"},
        {id: "4", name: "蓝月手游4", img: "http://upload.tanwan.com/upload/201809/5ba367ad002bc.png"},
        {id: "5", name: "蓝月手游5", img: "http://upload.tanwan.com/upload/201809/5ba367ad002bc.png"},
        {id: "6", name: "蓝月手游6", img: "http://upload.tanwan.com/upload/201809/5ba367ad002bc.png"}
      ]
      list = [
        {id: "2", name: "蓝月手游2", list: [
          {category_id: "21",end: "2018-09-30",game: "蓝月手游",id: "21",img: "http://upload.tanwan.com/upload/201809/5ba368302f8d2.png",integral: "1",name: "中秋大礼包",start: "2018-09-01",type: "1"}
          ,{category_id: "22",end: "2018-09-30",game: "蓝月手游",id: "22",img: "http://upload.tanwan.com/upload/201809/5ba368302f8d2.png",integral: "1",name: "中秋大礼包",start: "2018-09-01",type: "1"}
        ]},
        {id: "3", name: "蓝月手游3", list: [
          {category_id: "31",end: "2018-09-30",game: "蓝月手游",id: "31",img: "http://upload.tanwan.com/upload/201809/5ba368302f8d2.png",integral: "1",name: "中秋大礼包",start: "2018-09-01",type: "1"}
          ,{category_id: "32",end: "2018-09-30",game: "蓝月手游",id: "32",img: "http://upload.tanwan.com/upload/201809/5ba368302f8d2.png",integral: "1",name: "中秋大礼包",start: "2018-09-01",type: "1"}
        ]},
        {id: "4", name: "蓝月手游4", list: [
          {category_id: "41",end: "2018-09-30",game: "蓝月手游",id: "41",img: "http://upload.tanwan.com/upload/201809/5ba368302f8d2.png",integral: "1",name: "中秋大礼包",start: "2018-09-01",type: "1"}
          ,{category_id: "42",end: "2018-09-30",game: "蓝月手游",id: "42",img: "http://upload.tanwan.com/upload/201809/5ba368302f8d2.png",integral: "1",name: "中秋大礼包",start: "2018-09-01",type: "1"}
        ]},
        {id: "5", name: "蓝月手游5", list: [
          {category_id: "51",end: "2018-09-30",game: "蓝月手游",id: "51",img: "http://upload.tanwan.com/upload/201809/5ba368302f8d2.png",integral: "1",name: "中秋大礼包",start: "2018-09-01",type: "1"}
          ,{category_id: "52",end: "2018-09-30",game: "蓝月手游",id: "52",img: "http://upload.tanwan.com/upload/201809/5ba368302f8d2.png",integral: "1",name: "中秋大礼包",start: "2018-09-01",type: "1"}
        ]},
        {id: "6", name: "蓝月手游6", list: [
          {category_id: "61",end: "2018-09-30",game: "蓝月手游",id: "61",img: "http://upload.tanwan.com/upload/201809/5ba368302f8d2.png",integral: "1",name: "中秋大礼包",start: "2018-09-01",type: "1"}
          ,{category_id: "62",end: "2018-09-30",game: "蓝月手游",id: "62",img: "http://upload.tanwan.com/upload/201809/5ba368302f8d2.png",integral: "1",name: "中秋大礼包",start: "2018-09-01",type: "1"}
        ]}
      ]

      this.initGiftList(list)

      this.setState({
        category,
        giftList: list
      })
      console.log(category, list, '11')
    })
  }
  componentDidMount() {
    console.log('componentDidMount', this.props)
  }
  // 选择菜单
  handleSelectTab(e) {
    const selectTab = e.currentTarget.getAttribute('data-id')
    this.setState({
      selectTab
    })
  }
  // 序列化gifylist
  initGiftList(list) {
    if (list.length === 0) return
    list.forEach(v => {
      const name = v.name
      if (v.list.length !== 0) {
        v.list.forEach(c => {
          c['game'] = name
        })
      }
    })
  }
  render() {
    if (!this.state.category) return null
    return (
      <div className="gamegift">
        <GameKinds handleSelectTab={this.handleSelectTab.bind(this)} list={this.state.category} />
        <GiftPanel list={this.state.giftList} selectTab={this.state.selectTab}></GiftPanel>
      </div>
    )
  }
}

// GameGift.propTypes = {
//   children: PropTypes.array.isRequired
// }

export default connect()(GameGift)
