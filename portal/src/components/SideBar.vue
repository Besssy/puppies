<template>
	<div class="sidebar col-2">
		<ul class="navbar-nav">
	      <li class="nav-item active">
	        <router-link class="nav-link" to="dogs">All dogs</router-link>
	      </li>
	      <li class="nav-item">
	        <router-link class="nav-link" to="board">By breed</router-link>
	      </li>
	      <li class="nav-item">
	        <router-link class="nav-link" to="dogs">By sub-breed</router-link>
	      </li>
	    </ul>
	</div>
</template>
<style lang="less">
@import '../style/variables.less';

.sidebar{
	background-color: @light-brown;
}
</style>