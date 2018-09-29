import React, { Component } from 'react'
import { Flex } from 'antd-mobile'

class GameKind extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('=== GameKind ===')
  }
  render() {
    const { img, name, id }  = this.props.value
    return <Flex.Item
    onClick={this.props.handleSelectTab}
    data-id={`category-${id}`}
    className="gamekind">
      <img src={img} className="icon-kind" />
      <p className="name">{name}</p>
    </Flex.Item>
  }
}

export default GameKind
