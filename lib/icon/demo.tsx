import ReactDOM from 'react-dom'
import React from 'react'
import Icon from './index'

const fn: React.MouseEventHandler = e => {
  console.dir(e)
  console.log(e.target)
}
ReactDOM.render(
  <div>
    <Icon className='userClass' type='add' onClick={fn} size='1' color='red' />
  </div>,
  document.getElementById('root')
)
