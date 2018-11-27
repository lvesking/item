	var values=location.href;
	    var str=values.split("=")[1];
		new Vue({
			el:".main",
			data:{
				inportdata:str,
			},
			methods:{
				addtodo:function(ev){
						this.$refs.input.value=str;
					},		
			}
			
		});