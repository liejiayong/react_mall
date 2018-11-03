import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd-mobile'
import PanelBody from './PanelBody/index'
import PanelBodylose from './PanelBodylose/index'
import { getMyList } from '@src/api/index'
import Utils from '@src/utils/index'
import './styl.less'
const changeCharter = Utils.changeCharter

class MyGift extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [{ title: '已兑礼包' }, { title: '失效礼包' }],
      list: null, // 待兑换礼包
      expired: null, // 失效列表
      // list: [
      //   {
      //     id: '2',
      //     type: '1',
      //     ext1: 'dFf4JmyaKN7',
      //     logtime: '09-25',
      //     name: '中秋大礼包',
      //     img: 'http://upload.tanwan.com/upload/201809/5ba3445ca6726.png',
      //     start: '2018-09-01',
      //     category_name: '哈哈月',
      //     end: '2018-09-30'
      //   },
      //   {
      //     id: '1',
      //     type: '1',
      //     ext1: 'abdccccc',
      //     logtime: '09-25',
      //     name: '中秋大礼包',
      //     category_name: '哈哈月',
      //     img: 'http://upload.tanwan.com/upload/201809/5ba3445ca6726.png',
      //     start: '2018-09-01',
      //     end: '2018-09-30'
      //   }
      // ],
      // expired: [
      //   {
      //     id: '2',
      //     type: '1',
      //     ext1: '',
      //     category_name: '哈哈月',
      //     logtime: '09-25',
      //     name: '3000元宝',
      //     img: 'http://upload.tanwan.com/upload/201809/5baa00ac31182.png',
      //     start: '2018-09-01',
      //     end: '2018-09-21'
      //   }
      // ]
    }
  }

  componentWillMount() {
    console.log('=== MyGift ===')
    getMyList().then(res => {
      const data = typeof res === 'string' ? JSON.parse(res) : res
      const { code, msg, list, expired } = data
      if (code === 0) {
        this.normalizeGift(list)
        this.normalizeGift(expired)
        this.setState({
          list: list,
          expired: expired
        })
      }
    })
  }
  componentDidMount() {
    // // test
    // this.normalizeGift(this.state.list)
    // this.normalizeGift(this.state.expired)
    // this.setState({
    //   list: this.state.list,
    //   expired: this.state.expired
    // })
  }
    
  normalizeGift(list) {
    list.forEach(v => {
      if (v.start) {
        v.start = changeCharter(v.start, '-', '.')
      }
      if (v.end) {
        v.end = changeCharter(v.end, '-', '.')
      }
    })
  }

  // 选择菜单
  handleSelectTab(e) {
    console.log(e)
  }
  render() {
    const { list, expired } = this.state
    return (
      <div className="mygift">
        <Tabs
          initialPage={this.state.initialPage}
          tabs={this.state.tabs}
          tabBarActiveTextColor="#333333"
          tabBarInactiveTextColor="#999999"
        >
          <PanelBody list={list} />
          <PanelBodylose list={expired} />
        </Tabs>
      </div>
    )
  }
}

export default connect()(MyGift)
