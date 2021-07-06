## vue-styled-components with styled-system@4 example

- https://github.com/styled-components/vue-styled-components
- https://styled-system.com/api

## add theme provider
```
<div id="app">
<ThemeProvider :theme="theme">
    <main>
        <router-view />
    </main>
</ThemeProvider>
</div>
```

## create box component and map propTypes
```
<template functional>
  <component :is="$options.components.StyledBox" v-bind="props">
    <slot />
  </component>
</template>

<script>
import styled from 'vue-styled-components'
import { space, fontSize, color } from 'styled-system'
import propTypes from './propTypes'

const props = {
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.color
}

const StyledBox = styled('div', props)`
  ${space}
  ${fontSize}
  ${color}
`

export default {
  name: 'Box',
  components: {
    StyledBox
  },
  props
}
</script>

```

## usage
```
<Box m="1" :bg="['red']" :fontSize="[2, 3]">box 1</Box
<Box m="1" bg="blue" fontSize="0">box 2</Box
<Box fontSize="0">Box3 component</Box>
```
