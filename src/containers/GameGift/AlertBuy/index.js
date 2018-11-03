import React, { Component } from 'react'
import { Modal, Toast } from 'antd-mobile'
import AlertSuc from '../AlertSuc/index'
import AlertFail from '../AlertFail'
import { buyShop } from '@src/api/index'
import './styl.less'
import Utils from '@src/utils/index'
import { type } from 'os';

const changeCharter = Utils.changeCharter
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
          console.log('确认购买', id, typeof id)
          buyShop(id).then(res => {
            const data = typeof res === 'string' ? JSON.parse(res) : res
            var { code, info, msg } = data
            // code = 0
            switch (code) {
              case 0:
                console.log('suc')
                
                // test
                // const buyCody = 'sssssssssss'
                // const start = changeCharter('2018-01-01', '-', '.')
                // const end = changeCharter('2018-01-01', '-', '.')
            //     Toast.success('sssss', 1)
                // const timer = setTimeout(() => {
                //     AlertSuc({
                //         code: 'ssssa',
                //         period: `有效期：${start}-${end}`
                //       })
                //       clearTimeout(timer)
                //     }, 100);
                    
                var { start, end } = info
                var buyCody = info.code
                const param = {
                  code: buyCody,
                  period: `有效期：${changeCharter(start, '-', '.')}-${changeCharter(end, '-', '.')}`
                }
                Toast.success(msg, 1)
                const timer = setTimeout(() => {
                  AlertSuc(param)
                  clearTimeout(timer)
                }, 100);
                break
              case 1:
                console.log('fail')
                Toast.fail(msg, 1)
                break
              case 2:
                Toast.fail(msg, 1)
                pop_lr.login()
                break
            }
          })
        }
      },
      { text: '取消', onPress: () => console.log('取消购买')}
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
