import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMyList } from '../../api/index'

class MyGift extends Component {
  constructor(props) {
    super(props)
    this.state = {
      res: {
        code: 0,
        msg: '请求成功',
        list: [
          {
            id: '1',
            type: '1',
            ext1: 'dFf4JmyaKN7',
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
    console.log('componentDidMount')
    console.log(this.props)
    pop_lr.login()
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
    return <div>xxxqqq</div>
  }
}

export default connect()(MyGift)
