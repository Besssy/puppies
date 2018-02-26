<template>
  <div id="app">
    <NavBar/>
    <div class="row">
      <SideBar/>
      <router-view/> 
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import SideBar from '@/components/SideBar'
  import board from '@/components/board'

  export default {
    name: 'app',
    components: { NavBar, SideBar, board }
  }
</script>

<style lang="less">
@import './style/variables.less';

  body{
    font-family: @font-family;
  }
  #app {
    background-color: @beige;
    color: #2f1700;
  }
  .row{
    margin-left: 0px;
    margin-right: 0px;
  }
  .fa-paw::before{
    color: @orange;
  }
  ul{
    list-style: none;
  }
</style>
