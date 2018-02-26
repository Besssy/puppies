<template>
	<nav class="navbar navbar-toggleable-md">
	  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <a class="navbar-brand" href="#">
	  	<img src="../assets/logo.png" alt="logo"/>
	  </a>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Link</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link disabled" href="#">Disabled</a>
	      </li>
	    </ul>
			<span :class="{badge: badge > 0}" @click="showNotificationList()">
				{{badge}}
			</span>
			<div v-show="showList">
				<span v-for="notification in notifications">
					<span>{{notification.title}}</span>
					<span>{{notification.message}}</span>
				</span>
			</div>
	     <!-- <v-select :value.sync="selected" :clearSearchOnSelect="false" :options="options"></v-select> -->
	  </div>
	</nav>
</template>
<script>
import vSelect from "vue-select";
import socketIO from "socket.io-client";
export default {
	components: {vSelect},
	data() {
      return {
        selected: null,
        options: ['foo','bar','baz'],
				badge: 0,
				notifications: [],
				showList: false,
      }
    },
	methods: {
		showNotificationList(){
			this.showList = !this.showList;
			this.badge = 0;
		}
	},
	mounted() {
		var socket = socketIO('http://localhost:3030');

		socket.on('notification', (notification) => {
			this.notifications.push(notification);
			this.badge++;
		});
	}
}
</script>
<style lang="less">
@import '../style/variables.less';

.navbar{
	color: #fff;
	background-color: @dark-brown;
	    padding: 1rem 1rem;
}

a{
	color: @dark-orange;
	outline: 0;
	&:hover, &:focus{
		color: @light-orange;
	}
}

.badge{
	height: 15px;
	width: 15px;
	color: #fff;
	background-color: red;
	border-radius: 50%;
}
</style>
