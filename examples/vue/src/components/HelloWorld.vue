<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Box mt="1" :bg="['red']" :fontSize="[2, 3]">
      Box1 component
      <Box bg="blue" pt="2">Box2 component</Box>
    </Box>
  </div>
</template>

<script>
import Box from "./styled-system/Box";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Box
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
