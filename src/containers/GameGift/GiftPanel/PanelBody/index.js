import React, { Component } from 'react'
import alert from '@src/containers/GameGift/AlertBuy/index'
import './styl.less'

class PanelBody extends Component {
  constructor(props) {
    super(props)
    this.handleBuyShop = this.handleBuyShop.bind(this)
  }
  componentWillMount() {
    console.log('=== PanelBody ===')
  }
  componentDidMount() {
  }
  handleBuyShop(e) {
    const tar = e.target
    const id = +tar.getAttribute('data-id')
    const integral = tar.getAttribute('data-integral')
    const name = tar.getAttribute('data-name')
    // console.log(id, name, integral)
    alert({ id, name, integral})
  }
  render() {
    const { list } = this.props
    if (!list.length) return null
    return (
      <div className="panellist">
        {list.map(v => {
          const { img, id, integral, name, game, start, end } = v
          return (
            <div id={`panel-${id}`} className="panelbody" key={id}>
              <img src={img} alt="" className="avatar" />
              <div className="content">
                <div className="title">
                  {game}({name})
                </div>
                <div className="integral">
                  所需积分：
                  {integral}
                </div>
                <div className="period">
                  有效期：
                  {start}-{end}
                </div>
              </div>
              <a onClick={this.handleBuyShop} data-id={id} data-name={`${game}(${name})`} data-integral={integral} href="javascript:;" className="btn-recharge">
                积分兑换
              </a>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PanelBody
