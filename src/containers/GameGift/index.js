import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameKinds from './GameKinds/index'
import GiftPanel from './GiftPanel/index'
import { getShopList } from '../../api/index'
import './styl.less'

class GameGift extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: null, // 分类
      giftList: null // 礼包列表
    }
  }
  componentWillMount() {
    getShopList().then(res => {
      let { category, list } = res.data
      category.push(...category)
      category.push(...category)
      category.push(...category.slice(0,1))

      this.initGiftList(list)
      this.setState({
        category,
        giftList: list
      })
      console.log(category, this.state.category, '11')
    })
  }
  componentDidMount() {
    console.log('componentDidMount', this.props)
  }
  handleClick() {
  }
  // 选择菜单
  handleSelectTab(e) {
    console.log(e)
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
        <GameKinds list={this.state.category} />
        <GiftPanel list={this.state.giftList}></GiftPanel>
      </div>
    )
  }
}

// GameGift.propTypes = {
//   children: PropTypes.array.isRequired
// }

export default connect()(GameGift)
