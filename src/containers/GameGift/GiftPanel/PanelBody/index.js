import React, { Component } from 'react'
import './styl.less'

class PanelBody extends Component {
  constructor(props) {
    super(props)
    this.handleBuyShop = this.handleBuyShop.bind(this)
  }
  componentWillMount() {
    console.log('=== PanelBody ===', this.props.list)
  }
  componentDidMount() {
    console.log('=== PanelBody ===', this.props.list)
    const a = $('.panelbody')
    console.log()
  }
  handleBuyShop(e) {
    console.log(e)
  }
  render() {
    const { list } = this.props
    if (!list.length) return null
    return (
      <>
        {list.map(v => {
          const { img, id, integral, name, game, start, end } = v
          return (
            <div id={`panel-${id}`} className="panelbody" key={id}>
              <img src={img} alt="" className="avatar" />
              <div className="content">
                <div className="title">{game}({name})</div>
                <div className="integral">
                  所需积分：
                  {integral}
                </div>
                <div className="period">
                  有效期：
                  {start}-{end}
                </div>
              </div>
              <a onClick={this.handleBuyShop} data-id={id} href="javascript:;" className="btn-recharge">
                积分兑换
              </a>
            </div>
          )
        })}
      </>
    )
  }
}

export default PanelBody
