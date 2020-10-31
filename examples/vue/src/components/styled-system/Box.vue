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
