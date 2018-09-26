import React, { Component } from 'react'
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

  handleSelectTab(e) {
    const type = e.target.getAttribute('data-type')
    this.setState({
        selectedTab: type
    })

    this.props.handleSelectTabs(type)
  }

  render() {
    return (
      <div className="integraltabbar">
        <div className="tabbar">
          <div
            onClick={this.handleSelectTab}
            data-type={this.state.tabConfig[0]}
            className={`tabitem ${
                this.state.selectedTab === tabConfig[0] ? 'active' : ''
            }`}
            >
            游戏礼包
          </div>
          <div
            onClick={this.handleSelectTab}
            data-type={this.state.tabConfig[1]}
            className={`tabitem ${
              this.state.selectedTab === tabConfig[1] ? 'active' : ''
            }`}
          >
            我的礼包
          </div>
        </div>
      </div>
    )
  }
}

export default IntegralTabBar
