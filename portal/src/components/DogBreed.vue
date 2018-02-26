<template>
	<div class="content col-10">
		<DogSubBreed :breed='$route.params.breed'/>
		<div v-for="image in breedImages">
			<img :src='image' />
		</div>
	</div>
</template>

<script>
import DogSubBreed from './DogSubBreed'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  data () {
    return {
      breedImages: []
    }
  },
  created: function () {
    this.loadBreedImages()
  },
  methods: {
    loadBreedImages: function () {
      this.$http.get('https://dog.ceo/api/breed/' + this.$route.params.breed + '/images').then((response) => {
        this.breedImages = response.body.message
      })
    }
  },
  components: {DogSubBreed}
}
</script>