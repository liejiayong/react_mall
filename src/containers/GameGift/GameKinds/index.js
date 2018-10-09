import React, { Component } from 'react'
import { Flex } from 'antd-mobile'
import GameKind from '../GameKind/index'

class GameKinds extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('=== GameKinds ===')
  }
  componentDidMount() {}
  render() {
    // if (this.props.list.length) return null
    return (
      <Flex justify="around" wrap="wrap" className="gamekinds">
        {this.props.list.map(v => {
          return <GameKind handleSelectTab={this.props.handleSelectTab} data-kind={v} value={v} key={v.id} />
        })}
      </Flex>
    )
  }
}

export default GameKinds
