import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../index'
import { mount } from 'enzyme'

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon type='labi' />).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    const component = mount(<Icon name='' />)
  })
})
