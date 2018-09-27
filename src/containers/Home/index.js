import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import Navigation from '../../components/Navigation/index'
import IntegralTabBar from './TabBar/index'
import './index.less'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'react-home'
    }
    this.handleSelectTab = this.handleSelectTab.bind(this)
  }
  componentWillMount() {
  }
  componentDidMount() {
    console.log('componentDidMount')
    console.log(this.props)
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
    return (
      <div className="integralindex">
        <Navigation title={'积分商城'} />
        <div className="integral-container">
          <div className="integral-content">
            {this.props.children}
          </div>
        </div>
        <IntegralTabBar handleSelectTabs={this.handleSelectTab} />
      </div>
    )
  }
}

export default Home
