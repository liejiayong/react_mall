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
  }
  componentDidUpdate() {
    console.log(this.props.selectTab)
    const selectTab = this.props.selectTab
    if (selectTab) {
      let anchorElement = document.querySelector(`.${selectTab}`);
      if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
    }
  }
  render() {
    const { list } = this.props
    if (!list.length) return null
    return (
      <>
        {list.map(v => {
          return (
            <div className={`giftpanel category-${v.id}`} key={v.id}>
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
