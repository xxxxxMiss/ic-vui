### Loading
> In more cases, you should use it's method `$loading` to show a loading.
> As a available, you can register it as a component in one page if you like :smile:

## Loading Props
| prop         |   descripiton     | type     |  defaults  |   available   |
| ----------- | ------------- | -------- | --------- | ---------------- |
| text | bottom text | string | - | - |
| spinnerType | inner spinner | string | default | - |
| color | inner spinner color and text color if it present | white | - |
| visible | whether the loading is visible | boolean | false | - |


::: tip
about more infomations of spinnerType, you can see [here](/en-US/spinner)
:::

## Loading Slots

|   name  |      descripiton       |
|  ------  |    ---------   |
| default | you can customize the inner content |


## Loading Methods

|  method  |   descripiton   |  parameters   |
| ------- | ------  |  ------  |
| $loading | we mounted a `$loading` method to `Vue` prototype, so you can use it like this: `this.$loading()` |  you can pass an object with some props as described above |
