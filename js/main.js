// Remove double tap on ios for hover links
if (!("ontouchstart" in document.documentElement)) {
	document.documentElement.className += " no-touch ";
}

var listener = new window.keypress.Listener();
listener.sequence_combo('m a r i o', function() {
	document.body.innerHTML += '<div id="marioPath" class="mario__path"><img id="mario" class="mario" src="/images/img-mario-running.gif" /></div>';
	var marioWait = setTimeout(function() {
		var mario = document.getElementById('marioPath');
		document.body.removeChild(mario);
	}, 5000);
}, true);
