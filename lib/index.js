'use strict';

exports.__esModule = true;
exports.IcToast = exports.IcTimeline = exports.IcTag = exports.IcTabbar = exports.IcTabItem = exports.IcTab = exports.IcSwitch = exports.IcSpinner = exports.IcRadio = exports.IcModal = exports.IcLoading = exports.IcInput = exports.IcIndexList = exports.IcIcon = exports.IcHeader = exports.IcFilter = exports.IcDialog = exports.IcCheckbox = exports.IcCell = exports.IcButton = exports.IcBadge = exports.IcAvatar = exports.version = exports.install = undefined;

var _avatar = require('./avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _badge = require('./badge');

var _badge2 = _interopRequireDefault(_badge);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _indexList = require('./index-list');

var _indexList2 = _interopRequireDefault(_indexList);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _loading = require('./loading');

var _loading2 = _interopRequireDefault(_loading);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _switch = require('./switch');

var _switch2 = _interopRequireDefault(_switch);

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

var _tabItem = require('./tab-item');

var _tabItem2 = _interopRequireDefault(_tabItem);

var _tabbar = require('./tabbar');

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _timeline = require('./timeline');

var _timeline2 = _interopRequireDefault(_timeline);

var _toast = require('./toast');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is generated automatically by bin/build-entry.js

var version = '0.0.4';
var components = [_avatar2.default, _badge2.default, _button2.default, _cell2.default, _checkbox2.default, _dialog2.default, _filter2.default, _header2.default, _icon2.default, _indexList2.default, _input2.default, _loading2.default, _modal2.default, _radio2.default, _spinner2.default, _switch2.default, _tab2.default, _tabItem2.default, _tabbar2.default, _tag2.default, _timeline2.default, _toast2.default];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

exports.install = install;
exports.version = version;
exports.IcAvatar = _avatar2.default;
exports.IcBadge = _badge2.default;
exports.IcButton = _button2.default;
exports.IcCell = _cell2.default;
exports.IcCheckbox = _checkbox2.default;
exports.IcDialog = _dialog2.default;
exports.IcFilter = _filter2.default;
exports.IcHeader = _header2.default;
exports.IcIcon = _icon2.default;
exports.IcIndexList = _indexList2.default;
exports.IcInput = _input2.default;
exports.IcLoading = _loading2.default;
exports.IcModal = _modal2.default;
exports.IcRadio = _radio2.default;
exports.IcSpinner = _spinner2.default;
exports.IcSwitch = _switch2.default;
exports.IcTab = _tab2.default;
exports.IcTabItem = _tabItem2.default;
exports.IcTabbar = _tabbar2.default;
exports.IcTag = _tag2.default;
exports.IcTimeline = _timeline2.default;
exports.IcToast = _toast2.default;
exports.default = {
  IcAvatar: _avatar2.default,
  IcBadge: _badge2.default,
  IcButton: _button2.default,
  IcCell: _cell2.default,
  IcCheckbox: _checkbox2.default,
  IcDialog: _dialog2.default,
  IcFilter: _filter2.default,
  IcHeader: _header2.default,
  IcIcon: _icon2.default,
  IcIndexList: _indexList2.default,
  IcInput: _input2.default,
  IcLoading: _loading2.default,
  IcModal: _modal2.default,
  IcRadio: _radio2.default,
  IcSpinner: _spinner2.default,
  IcSwitch: _switch2.default,
  IcTab: _tab2.default,
  IcTabItem: _tabItem2.default,
  IcTabbar: _tabbar2.default,
  IcTag: _tag2.default,
  IcTimeline: _timeline2.default,
  IcToast: _toast2.default
};