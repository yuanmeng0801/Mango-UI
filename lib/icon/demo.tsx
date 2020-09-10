import ReactDOM from 'react-dom'
import React from 'react'
import Icon from './index'

const fn: React.MouseEventHandler = e => {
  console.dir(e)
  console.log(e.target)
}
ReactDOM.render(
  <div>
    <Icon type='labi' onClick={fn} />
  </div>,
  document.getElementById('root')
)
