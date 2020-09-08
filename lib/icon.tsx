import React from 'react'
import './icons/labi.svg'
interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    </span>
  )
}
export default Icon
