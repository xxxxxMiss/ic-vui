## Button Props

| prop         |   descripiton     | type     |  defaults  |   available   |
| ----------- | ------------- | -------- | --------- | ---------------- |
|  size    | button size  |    string    |   normal  |  large、small、mini   |
| type | a button's appearance | string | default | success、info、danger、primary |
| round | is a round button | boolean | false | - |
| disabled | disabled a button | boolean | false | - |
| block | span the entire line | boolean | false | - |
| fixed | a fixed button | boolean | false | - |
| text | is a text button | boolean | false | - |
| timer | a button with a timer | boolean | false | - |
| autoTimer | startup the timer automatically when a page is mounted | boolean | false | - |
| timerCount | the start point of a timer button | number | 59 | - |
| beforeTimer | call it before startup the timer, startup timer if it return true otherwise don't startup | function | - | - |
| startText | the visible text before startup timer | string | 获取验证码 | - |
| endText | the visible text after timer is end | string | 重新发送 | - |
| prefixIcon | a icon prepend the button content | string | - | - |
| suffixIcon | a icon append the button content | string | - | - |
