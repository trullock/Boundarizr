var active = false;

chrome.browserAction.onClicked.addListener(function(){

	var action, icon;
	
	if(active){
		action = 'off',
		icon = 'icon-off.png'
	} else {
		action = 'on',
		icon = 'icon-on.png'
	}
	
	active = !active;

	chrome.browserAction.setIcon({
		path: icon
	});

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {
		  action: action
		});
	});

});