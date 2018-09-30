import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { tabConfig } from '../../../utils/config'
import './index.less'


class IntegralTabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabConfig: tabConfig,
      selectedTab: tabConfig[0]
    }
    this.handleSelectTab = this.handleSelectTab.bind(this)
  }
  componentDidMount() {
    console.log('=== TarBar ===')
    const pathname = this.getParam()
    var selectedTab
    tabConfig.forEach(v => {
      const par = new RegExp(v, 'g')
      if (par.test(pathname)) {
        // console.log(v)
        selectedTab = v
      }
    })
    this.setState({selectedTab})
  }
  getParam() {
    return window.location.href
  }
  handleSelectTab(e) {
    const type = e.target.getAttribute('data-type')
    this.setState({
        selectedTab: type
    })

    // this.props.handleSelectTabs(type)
  }

  render() {
    return (
      <div className="integraltabbar">
        <div className="tabbar">
          <Link
            to="/game-gift"
            onClick={this.handleSelectTab}
            data-type={this.state.tabConfig[0]}
            className={`tabitem ${
                this.state.selectedTab === tabConfig[0] ? 'active' : ''
            }`}
            >
            游戏礼包
          </Link>
          <Link
            to="/my-gift"
            onClick={this.handleSelectTab}
            data-type={this.state.tabConfig[1]}
            className={`tabitem ${
                this.state.selectedTab === tabConfig[1] ? 'active' : ''
            }`}
          >
          我的礼包
          </Link>
        </div>
      </div>
    )
  }
}

export default IntegralTabBar
