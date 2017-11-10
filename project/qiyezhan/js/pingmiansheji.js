window.onload = function(){
	let ones = document.querySelectorAll(".longdj .one");
	let boximgs = document.querySelectorAll(".boximg 	img");
	ones.forEach(function(val,index){
		val.onmouseover = function(){
			console.log(1)
			for(i = 0;i<boximgs.length;i++){
				boximgs[i].style.opacity = "0"
			}
			boximgs[index].style.opacity = "1";
		}
	})
}
