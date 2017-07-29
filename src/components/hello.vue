<template>
  <div class="hello">
    1232323{{msg}}{{a}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  props:['a'],
  created () {
    debugger
    console.log(this.$props.a)
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      b: '2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
