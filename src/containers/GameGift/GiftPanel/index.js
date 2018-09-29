import React, { Component } from 'react'
import PanelTitle from '../../../components/PanelTitle/index'
import PanelBody from './PanelBody/index'
import './styl.less'

class GiftPanel extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('=== GiftPanel ===')
  }
  componentDidMount() {
    const a = $('.giftpanel')
    console.log('aaaaaaaaaaaaaaaaaaaa', a)
  }
  render() {
    const { list } = this.props
    if (!list.length) return null
    return (
      <>
        {list.map(v => {
          return (
            <div className="giftpanel" key={v.id}>
              <PanelTitle name={v.name} />
              <PanelBody list={v.list}></PanelBody>
            </div>
          )
        })}
      </>
    )
  }
}

export default GiftPanel
