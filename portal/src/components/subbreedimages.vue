<template>
  <div class="content col-10">
    <div v-for="image in subbreedImages">
      <img :src='image' />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  data () {
    return {
      subbreedImages: []
    }
  },
  created: function () {
    this.loadSubBreedImages()
  },
  methods: {
    loadSubBreedImages: function () {
      this.$http.get('https://dog.ceo/api/breed/' + this.$route.params.breed + '/' + this.$route.params.subbreed + '/images').then((response) => {
        this.subbreedImages = response.body.message
      })
    }
  }
}
</script>