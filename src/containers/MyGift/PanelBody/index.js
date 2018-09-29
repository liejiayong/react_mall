import React, { Component } from 'react'
import ClipboardJS from 'clipboard'
import  { Toast } from 'antd-mobile'
import './styl.less'

class PanelBody extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('=== PanelBody ===')
  }
  componentDidMount() {
    this.initialClipboard()
  }
  initialClipboard() {
    const clipboard = new ClipboardJS('.btn-recharge')
    clipboard.on('success', function() {
      Toast.info((
        <div className="giftcopy">
          <p>复制成功!</p>
          <p>快到游戏中心进行兑换吧！</p>
        </div>
      ), 2)
    })
    clipboard.on('error', function() {
      Toast.fail('复制失败！', 2)
    })
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
              <a data-id={id} data-clipboard-text={ext1} href="javascript:;" className="btn-recharge">
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
