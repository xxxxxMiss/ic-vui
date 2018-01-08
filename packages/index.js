// This file is generated automatically by bin/build-entry.js

import IcAvatar from './avatar'
import IcBadge from './badge'
import IcButton from './button'
import IcCell from './cell'
import IcCheckbox from './checkbox'
import IcCollapse from './collapse'
import IcCollapseItem from './collapse-item'
import IcDialog from './dialog'
import IcFilter from './filter'
import IcHeader from './header'
import IcIcon from './icon'
import IcInput from './input'
import IcLoading from './loading'
import IcLocation from './location'
import IcModal from './modal'
import IcRadio from './radio'
import IcSpinner from './spinner'
import IcSwitch from './switch'
import IcTab from './tab'
import IcTabItem from './tab-item'
import IcTabbar from './tabbar'
import IcTabbarItem from './tabbar-item'
import IcTag from './tag'
import IcTimeline from './timeline'
import IcToast from './toast'

const version = '0.0.4'
const components = [
  IcAvatar,
  IcBadge,
  IcButton,
  IcCell,
  IcCheckbox,
  IcCollapse,
  IcCollapseItem,
  IcDialog,
  IcFilter,
  IcHeader,
  IcIcon,
  IcInput,
  IcLoading,
  IcLocation,
  IcModal,
  IcRadio,
  IcSpinner,
  IcSwitch,
  IcTab,
  IcTabItem,
  IcTabbar,
  IcTabbarItem,
  IcTag,
  IcTimeline,
  IcToast
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  IcAvatar,
  IcBadge,
  IcButton,
  IcCell,
  IcCheckbox,
  IcCollapse,
  IcCollapseItem,
  IcDialog,
  IcFilter,
  IcHeader,
  IcIcon,
  IcInput,
  IcLoading,
  IcLocation,
  IcModal,
  IcRadio,
  IcSpinner,
  IcSwitch,
  IcTab,
  IcTabItem,
  IcTabbar,
  IcTabbarItem,
  IcTag,
  IcTimeline,
  IcToast
}

export default {
  IcAvatar,
  IcBadge,
  IcButton,
  IcCell,
  IcCheckbox,
  IcCollapse,
  IcCollapseItem,
  IcDialog,
  IcFilter,
  IcHeader,
  IcIcon,
  IcInput,
  IcLoading,
  IcLocation,
  IcModal,
  IcRadio,
  IcSpinner,
  IcSwitch,
  IcTab,
  IcTabItem,
  IcTabbar,
  IcTabbarItem,
  IcTag,
  IcTimeline,
  IcToast
}
