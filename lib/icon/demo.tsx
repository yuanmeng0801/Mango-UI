import React from 'react'
import Icon from './index'

const fn: React.MouseEventHandler = e => {
  console.dir(e)
  console.log(e.target)
}

const icon = (
  <Icon className='userClass' type='add' onClick={fn} size='1' color='red' />
)
export default icon
