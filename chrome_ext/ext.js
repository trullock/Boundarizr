chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.action == "on")
		window.Boundarizr.testCurrentDocument();
	 else if(request.action == "off")
		window.Boundarizr.hideBoundaries();
});