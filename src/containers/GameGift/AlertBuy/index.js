import React, { Component } from 'react'
import { Modal, Toast } from 'antd-mobile'
import AlertSuc from '../AlertSuc/index'
import AlertFail from '../AlertFail'
import { buyShop } from '@src/api/index'
import './styl.less'

const Alert = Modal.alert

const alert = ({ id, name, integral }) => {
  Alert(
    <div className="buytit">{name}</div>,
    <div className="buyBody">
      礼品将扣除您
      <span className="buyintegral">
        {integral}
        积分
      </span>
      <div>是否确认购买？</div>
    </div>,
    [
      {
        text: '确认',
        onPress: () => {
          console.log('确认购买', id)
          buyShop(id).then(res => {
            var { code, list, msg } = res.data
            // var code = 0
            switch (code) {
              case 0:
                console.log('suc')
                var { start, end } = list
                var buyCody = list.code

                // const buyCody = 'sssssssssss'
                // const start = '2018-01-01'
                // const end = '2018-01-01'

                const param = {
                  code: buyCody,
                  period: `有效期：${start}-${end}`
                }
                AlertSuc(param)
                break
              case 1:
                console.log('fail')
                Toast.fail(msg, 2)
                break
              case 2:
                Toast.fail(msg, 1)
                // pop_lr.login()
                break
            }
          })
        }
      },
      { text: '取消', onPress: () => console.log('取消购买') }
    ]
  )
}

export default alert

// class AlertBuy extends Component {
//   constructor(props) {
//     super(props)
//   }
//   componentWillMount() {
//     const { name, integral } = this.props
//     Alert(
//       (<div className="buytit">{name}</div>),
//       (
//         <div className="buyBody">
//           礼品将扣除您
//           <span className="buyintegral">
//             {integral}
//             积分
//           </span>
//           是否确认购买？
//         </div>
//       ),
//       [
//         { text: '确认', onPress: () => console.log('确认购买') },
//         { text: '取消', onPress: () => console.log('取消购买') }
//       ]
//     )
//   }
//   // render() {
//     //   return <Alert />
//     // }
//   }
