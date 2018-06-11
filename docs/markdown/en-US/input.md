## Input Props

| prop         |   descripiton     | type     |  defaults  |   available   |
| ----------- | ------------- | -------- | --------- | ---------------- |
| prefixIcon | a icon prepend the input |  string  | -    | -   |
| suffixIcon | a icon append the input | string | - | - |
| size | input size | string | medium | large、small |
| clearable | whether to show a clear button | boolean | false | - |
| round | show a round input | boolean | false | - |
| autofocus | same as `autofocus` in native input | boolean | false | - |
| type | type of input | string | text | password、 textarea etc. | - |
| rows | specify a rows attr when the type of input is textarea | number | 3 | - |
| readonly | same as `readonly` in native input | boolean | false | - |
| placeholder | placeholder of input | string | - | - |

::: tip
if you want a input with a timer, you can pass relevant props of timer as described in [button section](/en-US/button.md)
:::

## Input Slots

|   name  |      descripiton       |
|  ------  |    ---------   |
| prepend  | content to prepend before input  |
| append |  content to append after input |

## Input Events

|   event name   |    descripiton   |  parameters  |
| -------    | --------- |  --------- |
| click-suffix | triggers when the `suffixIcon` is clicked | suffixIcon element |
| timer-click | triggers when the input with a timer | timer element |
| focus | triggers when the input is focus |  input element |
| blur | triggers when the input is blur | input element |


## Input Methods

|  method  |   descripiton   |  parameters   |
| ------- | ------  |  ------  |
|         |         |          |
