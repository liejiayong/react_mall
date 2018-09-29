import React, { Component, PropTypes } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import './index.css'

class Navigation extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.pop()} className="jy-navigation">
        {this.props.title}
      </NavBar>
    )
  }
}
export default Navigation
