import React, { Component } from 'react'
import IntegralTabBar from './TabBar/index'
import './index.less'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'react-home',
      userInfo: {}
    }
  }
  componentDidMount() {}
  // 选择菜单
  handleSelectTab(e) {
    console.log(e)
  }
  render() {
    return (
      <div className="integralindex">
        <div className="integral-container">
          <div className="integral-content">{this.props.children}</div>
        </div>
        <IntegralTabBar handleSelectTabs={this.handleSelectTab} />
      </div>
    )
  }
}

export default Home
