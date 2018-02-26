<template>
  <div class="content col-10">
    <h1 class="text-center">Ola ta skulakia</h1>
    <!-- <button class="btn" v-on:click="loadBreeds">Refresh list</button> -->
    <div class="row">
      <div class="col-3" v-for="dogList,letter in breedList"> 
        <span class="row d-flex justify-content-center">   
          <h2>{{letter}}</h2>
        </span>
        <div class="d-flex justify-content-center">
          <ul class="fa-ul">
            <li v-for="name in dogList">
              <i class="fa-li fa fa-paw"></i>
              <router-link :to="'/dog-image/' + name" >{{ name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
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
      breedList: {}
    }
  },
  created: function () {
    this.loadBreeds()
  },
  methods: {
    loadBreeds: function () {
      this.$http.get('https://dog.ceo/api/breeds/list/all').then((response) => {
        // console.log(response.body.message)
        this.breedList = this.groupByLetter(response.body.message)
      })
    },
    groupByLetter: function (list) {
      let obj = {}
      for (let dog in list) {
        let i = dog.substring(0,1).toUpperCase()
        if(!(i in obj)){
          obj[i] = []
        }
        obj[i].push(dog)
      }
      return obj
    }
  }
}
</script>
<style>
.content{
  color: #000;
}

</style>
