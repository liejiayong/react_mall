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
    if (!list) return null
    return (
      <>
        {list.map(v => {
          const { id, type, ext1, logtime, name, img, start, end, category_name } = v
          return (
            <div className="mypanelbodylose" key={id}>
              <div className="avatar" >
                <img src={img} alt=""/>
              </div>
              <div className="content">
                <div className="title">{`${category_name}(${name})`}</div>
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
                已过期
              </a>
            </div>
          )
        })}
      </>
    )
  }
}

export default PanelBody
