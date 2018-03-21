import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import Checkbox from '~/checkbox'
import CheckboxGroup from '~/checkbox-group'

describe('Checkbox', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a checked checkbox', () => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: true
      }
    })
    expect(wrapper.contains('.ic-checkbox')).to.be.true
    expect(wrapper.contains('.ic-checkbox--checked')).to.be.true
  })

  it('create a label checkbox and disabled it', () => {
    wrapper = mount(Checkbox, {
      slots: {
        default: '禁用'
      },
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.text()).to.equal('禁用')
    expect(wrapper.contains('.ic-checkbox--disabled')).to.be.true
  })

  it('create a round checkbox', () => {
    wrapper = mount(Checkbox, {
      propsData: {
        round: true
      }
    })
    expect(wrapper.contains('.ic-checkbox--round')).to.be.true
  })
})

// describe('CheckboxGroup', () => {
//   let wrapper
//   afterEach(() => {
//     wrapper && wrapper.destroy()
//   })

//   it('create a checkbox-group', () => {
//     wrapper = mount(CheckboxGroup, {
//       stubs: {
//         'ic-checkbox': Checkbox
//       }
//     })
//   })
//   expect(wrapper.contains('.ic-checkbox-group')).to.be.true
// })
