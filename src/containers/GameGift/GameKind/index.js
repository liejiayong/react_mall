import React, { Component } from 'react'
import { Flex } from 'antd-mobile'

class GameKind extends Component {
  constructor(props) {
    super(props)
    this.handleSelectTab = this.handleSelectTab.bind(this)
  }
  componentWillMount() {
    console.log('=== GameKind ===')
  }
  handleSelectTab(e) {
    console.log(e, e.target.getAttribute('data-name'), 'kindssssssssssssssssssssssssssss')
  }
  render() {
    const { img, name, id }  = this.props.value
    return <Flex.Item
    onClick={this.handleSelectTab}
    data-name={name}
    data-id={id}
    className="gamekind">
      <img src={img} className="icon-kind" />
      <p className="name">{name}</p>
    </Flex.Item>
  }
}

export default GameKind
