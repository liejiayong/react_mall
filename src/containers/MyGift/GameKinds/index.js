import React, { Component } from 'react'
import { Flex } from 'antd-mobile'
import GameKind from '../GameKind/index'

class GameKinds extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: [1,2,3,4,5]
    }
    this.handleSelectTab = this.handleSelectTab.bind(this)
  }
  componentWillMount() {
    console.log('=== GameKinds ===')
   }
   componentDidMount() {
     console.log(this.props)
   }
   handleSelectTab() {}
   render() {
     return (
       <Flex>
         {
           this.state.count.map((v, i) => {
             return (
              <GameKind key={i}></GameKind>
             )
           })
         }
       </Flex>
     )
   }
}

export default GameKinds
