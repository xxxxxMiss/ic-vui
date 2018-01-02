// This file is generated automatically by build-dev-pages.js

import XmAvatar from '~/avatar'
import XmBadge from '~/badge'
import XmButton from '~/button'
import XmCell from '~/cell'
import XmCheckbox from '~/checkbox'
import XmDialog from '~/dialog'
import XmFilter from '~/filter'
import XmHeader from '~/header'
import XmIcon from '~/icon'
import XmInput from '~/input'
import XmLoading from '~/loading'
import XmModal from '~/modal'
import XmRadio from '~/radio'
import XmSpinner from '~/spinner'
import XmSwitch from '~/switch'
import XmTab from '~/tab'
import XmTabItem from '~/tab-item'
import XmTabbar from '~/tabbar'
import XmTag from '~/tag'
import XmTimeline from '~/timeline'
import XmToast from '~/toast'

const version = '1.0.0'
const components = [
  XmAvatar,
  XmBadge,
  XmButton,
  XmCell,
  XmCheckbox,
  XmDialog,
  XmFilter,
  XmHeader,
  XmIcon,
  XmInput,
  XmLoading,
  XmModal,
  XmRadio,
  XmSpinner,
  XmSwitch,
  XmTab,
  XmTabItem,
  XmTabbar,
  XmTag,
  XmTimeline,
  XmToast
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
  XmAvatar,
  XmBadge,
  XmButton,
  XmCell,
  XmCheckbox,
  XmDialog,
  XmFilter,
  XmHeader,
  XmIcon,
  XmInput,
  XmLoading,
  XmModal,
  XmRadio,
  XmSpinner,
  XmSwitch,
  XmTab,
  XmTabItem,
  XmTabbar,
  XmTag,
  XmTimeline,
  XmToast
}

export default {
  XmAvatar,
  XmBadge,
  XmButton,
  XmCell,
  XmCheckbox,
  XmDialog,
  XmFilter,
  XmHeader,
  XmIcon,
  XmInput,
  XmLoading,
  XmModal,
  XmRadio,
  XmSpinner,
  XmSwitch,
  XmTab,
  XmTabItem,
  XmTabbar,
  XmTag,
  XmTimeline,
  XmToast
}
