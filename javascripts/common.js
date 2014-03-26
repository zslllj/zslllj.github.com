function addOnload(func) {
	var oldOnload = window.onload;
	if ((typeof window.onload) != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldOnload();
			func();
		}
	}
}
function getHeight() {
	var yScroll;
	if (window.innerHeight && window.scrollMaxY) {
		yScroll = window.innerHeight + window.scrollMaxY;
		} else if (document.body.scrollHeight > document.body.offsetHeight){//all but Explorer Mac
		yScroll = document.body.scrollHeight;
		} else {//Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		yScroll = document.body.offsetHeight;
	}
	var windowHeight;
	if (self.innerHeight) {//all except Explorer
		windowHeight = self.innerHeight;
		} else if (document.documentElement && document.documentElement.clientHeight) {// Explorer 6 Strict Mode
			windowHeight = document.documentElement.clientHeight;
			} else if (document.body) {//other Explorers
		windowHeight = document.body.clientHeight;
		}//for small pages with total height less then height of the viewport
	if (yScroll < windowHeight) {
		pageHeight = windowHeight;
	} else {
		pageHeight = yScroll;
	}
	return pageHeight;
}
function getWidth() {
	var xScroll;
	if (window.innerHeight && window.scrollMaxY) {
		xScroll = document.body.scrollWidth;
		} else if (document.body.scrollHeight > document.body.offsetHeight) {//all but Explorer Mac
			xScroll = document.body.scrollWidth;
		} else {
			xScroll = document.body.offsetWidth;
		}
		var windowWidth;
		if (self.innerHeight) {//all except Explorer
			windowWidth = self.innerWidth;
			} else if (document.documentElement && document.documentElement.clientHeight) {//Explorer 6 Strict Mode
				windowWidth = document.documentElement.clientWidth;
				} else if (document.body) {//other Explorers
		windowWidth = document.body.clientWidth;
	}
	if (xScroll < windowWidth) {
		pageWidth = windowWidth;
	} else {
		pageWidth = xScroll;
	}
	return pageWidth;
}