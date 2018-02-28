import Button from '~/button'
import { mount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Button', () => {
  let wrapper = null
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a default button', () => {
    wrapper = mount(Button)
    expect(wrapper.contains('.ic-btn--default')).to.be.true
  })

  it('create a primary button', () => {
    wrapper = mount(Button, {
      propsData: {
        type: 'primary'
      }
    })
    expect(wrapper.contains('.ic-btn--primary')).to.be.true
  })

  it('create a large button', () => {
    wrapper = mount(Button, {
      propsData: {
        size: 'large'
      }
    })
    expect(wrapper.contains('.ic-btn--large')).to.be.true
  })

  it('create a round button', () => {
    wrapper = mount(Button, {
      propsData: {
        round: true
      }
    })
    expect(wrapper.contains('.ic-btn--round')).to.be.true
  })

  it('create a block button', () => {
    wrapper = mount(Button, {
      propsData: {
        block: true
      }
    })
    expect(wrapper.contains('.ic-btn--block')).to.be.true
  })

  it('create a disabled button', () => {
    wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.attributes().disabled).to.equal('disabled')
  })

  it('create a fixed button', () => {
    wrapper = mount(Button, {
      propsData: {
        fixed: true
      }
    })
    expect(wrapper.contains('.ic-btn--fixed')).to.be.true
  })

  it('create a suffixIcon button', () => {
    wrapper = mount(Button, {
      propsData: {
        suffixIcon: 'setting'
      }
    })
    const iEl = wrapper.find('i')
    expect(iEl.contains('.ic-btn--suffix-icon')).to.be.true
  })

  it('emit a click event', () => {
    wrapper = mount(Button)
    wrapper.vm.$emit('click', 123)
    expect(wrapper.emitted('click')[0]).to.include(123)
  })
})
