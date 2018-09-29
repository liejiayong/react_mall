import React, { Component } from 'react'
import { Modal, Toast } from 'antd-mobile'
import Clipboard from 'clipboard'
import './styl.less'

const Alert = Modal.alert
const clipboard = new Clipboard('.btn-copy')
clipboard.on(
  'success',
  function() {
    Toast.info(
      <div>
        <div>复制成功!</div>
        <div>快到游戏中心进行兑换吧！</div>
      </div>
    )
  },
  2
)

clipboard.on('error', function() {
  Toast.fail('复制失败！', 1)
})

const alert = ({ code, period }) => {
  Alert(
    <div className="buysuctit">购买成功!</div>,
    <div className="buysucBody">
      礼包兑换码：
      <span id="code" className="buysucintegral">
        {code}
      </span>
      <div className="buysucperiod">{period}</div>
    </div>,
    [
      {
        text: (
          <div data-clipboard-text={code} className="btn-copy">
            复制兑换码
          </div>
        ),
        onPress: () => {}
      }
    ]
  )
}

export default alert

// class alert extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       clipboard: null
//     }
//   }
//   componentWillMount() {
//   }
//   componentDidMount() {
//     this.state.clipboard = new Clipboard('.btn-copy')
//   }
//   render() {
//     const { code, period } = this.props
//     if (code.length === 0 || period.length === 0 ) return null
//     Alert(
//       <div className="buysuctit">购买成功!</div>,
//       <div className="buysucBody">
//         礼包兑换码：
//         <span id="code" className="buysucintegral">
//           {code}
//         </span>
//         <div className="buysucperiod">{period}</div>
//       </div>,
//       [
//         {
//           text: (
//             <div data-clipboard-text={code} className="btn-copy">
//               复制兑换码
//             </div>
//           ),
//           onPress: () => {
//             console.log('ssssssssssssssssssssssssssssssss')
//             const clipboard = this.state
//             clipboard.on(
//               'success',
//               function() {
//                 Toast.info(
//                   <div>
//                     <div>复制成功!</div>
//                     <div>快到游戏中心进行兑换吧！</div>
//                   </div>
//                 )
//               },
//               2
//             )

//             clipboard.on('error', function() {
//               Toast.fail('复制失败！', 1)
//             })
//           }
//         }
//       ]
//     )
//   }
// }
