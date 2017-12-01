<template>
  <section class="hero is-primary is-fullheight my-section">
    <my-title />
    <photo-versus />
    <my-footer />
  </section>
</template>

<script>
import MyTitle from '~/components/Title.vue'
import MyFooter from '~/components/Footer.vue'
import PhotoVersus from '~/components/PhotoVersus.vue'

export default {
  components: {
    MyTitle,
    MyFooter,
    PhotoVersus
  }
}
</script>

<style lang="scss" scoped>
.my-section {
  // background-color: red;
  background-color: #209cee;
}
</style>

