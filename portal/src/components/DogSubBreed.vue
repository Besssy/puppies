<template>
	<div class="content col-10">
		<ul>
			<li v-for="subbreed in subbreedList">
				<router-link :to="'/dog-image/' + breed + '/' + subbreed">{{subbreed}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  data () {
    return {
      subbreedList: []
    }
  },
  props: ['breed'],
  created: function () {
    this.loadSubBreed()
  },
  methods: {
    loadSubBreed: function () {
      this.$http.get('https://dog.ceo/api/breed/' + this.breed + '/list').then((response) => {
        this.subbreedList = response.body.message
      })
    }
  }
}
</script>