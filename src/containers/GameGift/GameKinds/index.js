import React, { Component } from 'react'
import { Flex } from 'antd-mobile'
import GameKind from '../GameKind/index'

class GameKinds extends Component {
  constructor(props) {
    super(props)
    this.handleSelectTab = this.handleSelectTab.bind(this)
  }
  componentWillMount() {
    console.log('=== GameKinds ===')
  }
  componentDidMount() {}
  handleSelectTab() {}
  render() {
    // if (this.props.list.length) return null
    return (
      <Flex justify="around" className="gamekinds">
        {this.props.list.map(v => {
          return <GameKind value={v} key={v.id} />
        })}
      </Flex>
    )
  }
}

export default GameKinds
