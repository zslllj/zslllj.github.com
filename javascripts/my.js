function getTime(){
	var today=new Date();
	return today.toTimeString();
}
function setTime(){
    document.getElementById("mytime").childNodes[0].nodeValue=getTime();
}
function addOnload(func){
	var oldOnload=window.onload;
	if ((typeof window.onload)!='function') {
		window.onload=func;
	}
	else{
		window.onload=function(){
			oldOnload();
			func();
		}		
	}
}
addOnload(setTime);