import React, { Component } from 'react'
import './styl.less'

class PanelBody extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('=== PanelBody ===', this.props.list)
  }
  render() {
    const { list } = this.props
    if (!list.length) return null
    return (
      <>
        {list.map(v => {
          const { id, type, ext1, logtime, name, img, start, end } = v
          return (
            <div className="mypanelbody" key={id}>
              <img src={img} alt="" className="avatar" />
              <div className="content">
                <div className="title">{name}</div>
                <div className="period">
                  有效期：
                  {start}-{end}
                </div>
              </div>
              <a
                data-id={id}
                data-ext1={ext1}
                href="javascript:;"
                className="btn-recharge"
              >
                负责兑换码
              </a>
            </div>
          )
        })}
      </>
    )
  }
}

export default PanelBody
