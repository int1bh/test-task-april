<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
  div
    Navbar
    main
      .container
        nuxt
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar
  }
})
</script>

<style lang="scss" scoped>
.container {
  margin: 0 20px 10px 20px;
  display: flex;
}
</style>
