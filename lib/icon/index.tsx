import React, { useEffect } from 'react'
import './style/icon.less'
import renderSprite from './loadSvg'
// 定义Icon组件的props类型为SVGAttributes
interface IconProps extends React.SVGAttributes<SVGElement> {
  type: string
  size?: string
}

const Icon: React.FunctionComponent<IconProps> = ({
  type,
  className,
  size = 'm',
  ...restProps
}) => {
  useEffect(() => {
    renderSprite()
  }, [])
  return (
    <svg className={`mango-icon mango-icon-${size}`} {...restProps}>
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}
export default Icon
