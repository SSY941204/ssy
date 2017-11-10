window.onload = function(){
	let button1 = document.querySelector("#banner .button1");
	let button2 = document.querySelector("#banner .button2");
	let bannerimg1 = document.querySelector("#banner .bannerimg1");
	let bannerimg2 = document.querySelector("#banner .bannerimg2");
	let banner = document.querySelector("#banner");
	let now = 0;
	let dianjia = "r";
	let st = setInterval(Fn,2000);
	function Fn(dianji){
		if(dianji="r"){
			now++;
		}else if(dianji = "l"){
			now --;
		}	
		if(now%2==0){
			bannerimg1.style.opacity = "1";
			bannerimg2.style.opacity = "0";
			now = 0;
		}
		else{
			bannerimg2.style.opacity = "1";
			bannerimg1.style.opacity = "0";
		}
	}

	banner.onmouseover = window.onblur =function(){
		clearInterval(st);
	}
	banner.onmouseout = window.onfocus =function(){
		st = setInterval(Fn,2000);
	}
	button1.onclick = function(){
		Fn("l");
	}
	button2.onclick = function(){
		Fn("r");
	}










}
