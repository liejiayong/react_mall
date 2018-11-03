import React, { Component } from 'react'
import ClipboardJS from 'clipboard'
import { Toast, Modal } from 'antd-mobile'
import './styl.less'

const alert = Modal.alert
class PanelBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '', // 激活码
      isCopyFailed: false // 复制错误标识
    }
    this.handleRecharge = this.handleRecharge.bind(this)
  }
  componentWillMount() {
    console.log('=== PanelBody ===')
  }
  componentDidMount() {
    this.initialClipboard()
  }
  initialClipboard() {
    const clipboard = new ClipboardJS('.btn-recharge')
    clipboard.on('success', () => {
      Toast.info(
        <div className="giftcopy">
          <p>复制成功!</p>
          <p>快到游戏中心进行兑换吧！</p>
        </div>,
        2
      )
    })
    clipboard.on('error', function() {
      Toast.fail('该机型不支持点击复制，请长按复制！', 1)
      this.setState(
        {
          isCopyFailed: true
        },
        () => {
          const timer = setTimeout(() => {
            alert('请长按复制兑换码！', <p>{this.state.code}</p>, [
              {
                text: '关闭',
                onPress: () => {
                  this.setState({ isCopyFailed: false })
                }
              }
            ])
            clearTimeout(timer)
          }, 100)
        }
      )
    })
  }
  handleRecharge(e) {
    const code = e.target.getAttribute('data-clipboard-text')
    this.setState({
      code
    })
  }
  render() {
    const { list } = this.props
    if (!list) return null
    return (
      <>
        {list.map(v => {
          const {
            id,
            type,
            ext1,
            logtime,
            name,
            img,
            start,
            end,
            category_name
          } = v
          return (
            <div className="mypanelbody" key={id}>
              <img src={img} alt="" className="avatar" />
              <div className="content">
                <div className="title">{`${category_name}(${name})`}</div>
                {/* <div className="code">
                  兑换码：{ext1}
                </div> */}
                <div className="period">
                  有效期：
                  {start}-{end}
                </div>
              </div>
              <a
                data-id={id}
                data-clipboard-text={ext1}
                href="javascript:;"
                onClick={this.handleRecharge}
                className="btn-recharge"
              >
                复制兑换码
              </a>
            </div>
          )
        })}
      </>
    )
  }
}

export default PanelBody
