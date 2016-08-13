// Remove double tap on ios for hover links
if (!("ontouchstart" in document.documentElement)) {
	document.documentElement.className += " no-touch";
}

var listener = new window.keypress.Listener();
listener.sequence_combo('m a r i o', function() {
	var marioPath = document.getElementById('marioPath');
	marioPath.innerHTML += '<img id="mario" class="mario" src="/images/img-mario-running.gif" />';
	var marioWait = setTimeout(function() {
		var mario = document.getElementById('mario');
		marioPath.removeChild(mario);
	}, 5000);
}, true);
