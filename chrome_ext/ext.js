
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.active)
		window.Boundarizr.testCurrentDocument();
	 else
		window.Boundarizr.removeBoundaries();
});

window.addEventListener("resize", function(){
	// TODO: debounce
	window.Boundarizr.removeBoundaries();
	window.Boundarizr.testCurrentDocument();
},false);