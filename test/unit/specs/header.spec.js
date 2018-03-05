import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import Header from '~/header'

describe('Header', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a header contains leftText, leftIcon, rightIcon, rightText, title', () => {
    wrapper = mount(Header, {
      propsData: {
        leftText: '返回',
        leftIcon: 'back',
        rightText: '分享',
        rightIcon: 'share',
        title: '职位详情'
      }
    })
    expect(wrapper.text().replace(/\s*/mg, '')).to.equal('返回职位详情分享')
    expect(wrapper.contains('.icon-back')).to.be.true
  })

  it('rightIcon can be an array', () => {
    wrapper = mount(Header, {
      propsData: {
        rightIcon: ['back', 'share']
      }
    })
    expect(wrapper.contains('.icon-back')).to.be.true
    expect(wrapper.contains('.icon-share')).to.be.true
  })

  it('can customize a theme and color', () => {
    wrapper = mount(Header, {
      propsData: {
        theme: '#fff',
        color: '#333'
      }
    })
    expect(wrapper.attributes().style).to.equal('background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);')
  })

  it('show bottom divider', () => {
    wrapper = mount(Header, {
      propsData: { showDivider: true }
    })
    expect(wrapper.contains('.ic-header--divider')).to.be.true
  })

  it('click right icon when rightIcon is an array', () => {
    wrapper = mount(Header)
    wrapper.vm.$emit('right-click', 'e', 123)
    expect(wrapper.emitted('right-click')[0].length).to.equal(2)
  })
})
