new Vue({
	el:"#vue-app",
	data : {
		name : "hello vue",
		job : "web开发",
		website:"http://www.baidu.com",
		websiteTag:"<a href='http://www.baidu.com'></a>"
	},
	methods:{
		great:function(time){
			return "good"+time+this.name+"!";
		}
	}
});