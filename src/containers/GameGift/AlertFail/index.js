import React, { Component } from 'react'
import { Modal } from 'antd-mobile'
import { buyShop } from '@src/api/index'
import './styl.less'

const Alert = Modal.alert

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
  
const alert = ({ id, name, integral }) => {
  Alert(
    (<div className="buytit">{name}</div>),
    (
      <div className="buyBody">
        礼品将扣除您
        <span className="buyintegral">
          {integral}
          积分
        </span>
        <div>是否确认购买？</div>
      </div>
    ),
    [
      { text: '确认', onPress: () => {
        console.log('确认购买', id)
        buyShop(id).then((res) => {
          console.log(res)
        })
      } },
      { text: '取消', onPress: () => console.log('取消购买') }
    ]
  )
}

export default alert
  