export default {
  name: 'ic_validator',
  messages: {
    email (field) {
      return `${field}非法`
    },
    required (field) {
      return `${field}不能为空`
    },
    date_fomat (field) {
      return `${field}必须符合这种格式`
    },
    max (field, n) {
      return `${field}不能超过${n}个字符`
    }
  },
  attributes: {
    email: '邮箱',
    date: '日期',
    skill: '专业技能'
  }
}
