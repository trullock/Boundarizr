var state = {};

chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.getSelected(null, function(tab) {
		// change state
		state[tab.id] = !state[tab.id];
		// set icon
		setIconState(state[tab.id]);
		// send message to page
		chrome.tabs.sendMessage(tab.id, {
		  active: state[tab.id]
		});
	});
});

// Sets the state of the icon
function setIconState(active){
	chrome.browserAction.setIcon({
		path: active ? 'icon_on_48.png' : 'icon_off_48.png'
	});
	chrome.browserAction.setTitle({
		title: active ? 'Turn Off Boundarizer' : 'Turn On Boundarizer'
	});
}

// set icon state on tab change
chrome.tabs.onActivated.addListener(function(e){
	setIconState(!!state[e.tabId]);
})

// Reset on navigate
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    state[tabId] = false;
	setIconState(false);
});