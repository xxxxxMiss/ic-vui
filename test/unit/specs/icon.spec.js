import { mount } from '@vue/test-utils'
import Icon from '~/icon'
import { expect } from 'chai'

describe('Icon', () => {
  let wrapper = null
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a icon', () => {
    wrapper = mount(Icon, {
      propsData: {
        name: 'setting'
      }
    })
    expect(wrapper.classes()).to.include('ic-icon')
    expect(wrapper.classes()).to.include('icon-setting')
  })
})
