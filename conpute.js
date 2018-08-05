new Vue ({
	el:"#comput",
	data:{
		a:0,
		b:0,
		age:20
	},
	methods:{
		
	},
	computed:{
		addToA:function(){
			console.log("a");
			return this.a + this.age;
		},
		addToB:function(){
			console.log("b");
			return this.b + this.age;
		}	
	}
});