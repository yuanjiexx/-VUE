new Vue ({
	el:"#hello",
	data:{
		age:30,
		x:0,
		y:0
	},
	methods:{
		add:function(a){
			this.age+=a;
		},
		subtract:function(b){
			this.age-=b;
		},
		updateXY:function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopmove:function(event){
			event.stopPropagation();
		}
	}
});