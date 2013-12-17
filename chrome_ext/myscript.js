chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	if (request.greeting == "test")
      window.Boundarizr.testCurrentDocument();
  });