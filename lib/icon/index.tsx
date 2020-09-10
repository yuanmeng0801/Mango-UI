import React from 'react'
import './svg/labi.svg'
import './style/icon.less'
// 定义Icon组件的props类型为SVGAttributes
interface IconProps extends React.SVGAttributes<SVGElement> {
  type: string
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className='mango-icon' {...props}>
      <use xlinkHref={`#${props.type}`}></use>
    </svg>
  )
}
export default Icon
