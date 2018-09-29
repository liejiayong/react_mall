import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd-mobile'
import PanelBody from './PanelBody/index'
import PanelBodylose from './PanelBodylose/index'
import { getMyList } from '../../api/index'
import './styl.less'

class MyGift extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [{ title: '已兑积分' }, { title: '失效礼包' }],
      res: {
        code: 0,
        msg: '请求成功',
        list: [
          {
            id: '2',
            type: '1',
            ext1: 'dFf4JmyaKN7',
            logtime: '09-25',
            name: '中秋大礼包',
            img: 'http://upload.tanwan.com/upload/201809/5ba3445ca6726.png',
            start: '2018-09-01',
            end: '2018-09-30'
          },
          {
            id: '1',
            type: '1',
            ext1: 'abdccccc',
            logtime: '09-25',
            name: '中秋大礼包',
            img: 'http://upload.tanwan.com/upload/201809/5ba3445ca6726.png',
            start: '2018-09-01',
            end: '2018-09-30'
          }
        ],
        expired: [
          {
            id: '2',
            type: '1',
            ext1: '',
            logtime: '09-25',
            name: '3000元宝',
            img: 'http://upload.tanwan.com/upload/201809/5baa00ac31182.png',
            start: '2018-09-01',
            end: '2018-09-21'
          }
        ]
      }
    }
  }
  componentWillMount() {
    getMyList().then(res => {
      console.log(res, '11')
    })
  }
  componentDidMount() {
    console.log('=== MyGift ===', )
  }
  handleClick() {
    //这里请求数据
    console.log('getData')
    console.log(this.props)

    // axios去请求数据
    //const { dispatch, } = this.props
    //dispatch()
  }
  // 选择菜单
  handleSelectTab(e) {
    console.log(e)
  }
  render() {
    const { list, expired } = this.state.res
    if (!list.length) return null
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
