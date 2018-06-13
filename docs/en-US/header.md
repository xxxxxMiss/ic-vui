## Header Props

| prop         |   descripiton     | type     |  defaults  |   available   |
| ----------- | ------------- | -------- | --------- | ---------------- |
| theme  | `backgroundColor` of header  | string |  `#fff`  |  -   |
| color | text color | string | `#333` | - |
| title | header title | string | - | - |
| leftText | the left text | string | - | - |
| leftIcon | the left icon | string | `titlebar-back` | - |
| rightText | the right text | string | - | - |
| rightIcon | the right icon | string、array | - |
| showDivider | whether to show a bottom border | boolean | false | - |

## Header Slots

|   name  |      descripiton       |
|  ------  |    ---------   |
| title | you can use the title slot to customize your title content that in some case you may has actions with it |

## Header Events

|      event name     |    descripiton   |  parameters  |
|    --------------    | --------- |  --------- |
| click-left | triggers when clicked the left area  |  clicked element  |
| click-right | triggers when clicked the right area | `(e, index)`: index is an index of the right icon when rightIcon is an array or is `undefined` |

## Header Methods

|  method  |   descripiton   |  parameters   |
| ------- | ------  |  ------  |
|         |         |          |
