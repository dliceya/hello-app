<template>
  <div>
    {{temp}}
  </div>
</template>

<script>
import api from '../api/temp'

export default {
  name: 'temp',

  data () {
    return {
      temp: 'Hello Vue1'
    }
  },
  methods: {
    test () {
      api.test('queryForm')
    }
  }
}
</script>

<style >

</style>
