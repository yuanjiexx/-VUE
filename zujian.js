Vue.component("greeting",{
	template:`
		<p>
			<p>{{name}}:大家好</p>
			<button v-on:click="changeName"></button>
		</p>
		`,
	data:function(){
		return {
			name:"yuanjie"
		}
	},
	methods:{
		changeName:function(){
			this.name = "hrey";
		}
	}
})

new Vue({
	el:"#one"
});
new Vue({
	el:"#two"
});