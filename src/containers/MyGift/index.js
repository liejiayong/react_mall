import React, { Component } from 'react'
import { connect } from 'react-redux'

class MyGift extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'react-home'
    }
  }
  componentWillMount() {
  }
  componentDidMount() {
    console.log('componentDidMount')
    console.log(this.props)
  }
  handleClick() {
    //这里请求数据
    console.log('getData')
    console.log(this.props)

    // axios去请求数据
    //const { dispatch, } = this.props
    //dispatch()
  }
  // 选择菜单
  handleSelectTab(e) {
        console.log(e)
  }
  render() {
    return (
      <div>
        xxxqqq
      </div>
    )
  }
}

export default connect()(MyGift)
