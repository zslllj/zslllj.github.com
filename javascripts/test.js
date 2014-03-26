var h;
var w;
var toright=true;
var todown=true;

function init() {
	 h=getHeight()-100;
     w=getWidth()-100;
     console.log(h);
     console.log(w);
	document.getElementById("yi").style.position="absolute";
	document.getElementById("yi").style.left="50px";
	document.getElementById("yi").style.top="50px";
	moveTo();
}

function getTime() {
	var today = new Date();
	return today.toTimeString();
}

function setTime() {
	document.getElementById("mytime").childNodes[0].nodeValue = getTime();
}

function movePo() {
	if (!document.getElementById) {
		return false;
	}
	var node = document.getElementById("yi");
	var xpos=parseInt(node.style.left);
	var ypos=parseInt(node.style.top);

	if (xpos==w)
		toright=false;
	if (ypos==h) 
		todown=false;
	if (xpos==0)
		toright=true;
	if (ypos==0) 
		todown=true;

	if (!toright) {
		node.style.left=xpos-1;
	}else{
		node.style.left=xpos+1;
	}
	if (!todown) {
		node.style.top= ypos-1;
	}else{
		node.style.top= ypos+1;
	}
	setTimeout(movePo,20);	
}

function moveTo() { //将elename的元素每隔times遍向下和右方移动多少像素
	setTimeout(movePo,20);
	
}

addOnload(init);
addOnload(setTime);