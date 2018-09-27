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
    return <Flex.Item>xxx</Flex.Item>
  }
}

export default GameKind
