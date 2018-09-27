import React from 'react'
import './styl.less'

const PanelTitle = ({name}) => {
  console.log(name)
  return (
    <div className="paneltitleindex">{name}</div>
  )
}

export default PanelTitle
