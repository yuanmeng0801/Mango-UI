import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../index'
import { mount } from 'enzyme'

describe('icon', () => {
  // 检测渲染结果时否正常
  it('render successfully', () => {
    const json = renderer.create(<Icon type='add' />).toJSON()
    expect(json).toMatchSnapshot()
  })
  // 检测点击事件
  it('onClick', () => {
    const fn = jest.fn()
    const component = mount(<Icon type='add' onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})
