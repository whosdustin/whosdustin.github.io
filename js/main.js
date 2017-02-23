// Remove double tap on ios for hover links
if (!("ontouchstart" in document.documentElement)) {
	document.documentElement.className += " no-touch ";
}

(function(){
	var listener = new window.keypress.Listener();
	listener.sequence_combo('m a r i o', function() {
		var d = document,
				marioPath = d.createElement('div'),
				marioImg = d.createElement('img'),
				marioWait;
			marioPath.className = 'mario_path';
			marioImg.className = 'mario';
			marioImg.src = '/images/img-mario-running.gif';
			marioPath.appendChild(marioImg);
		d.body.appendChild(marioPath);
		marioWait = setTimeout(function() {
			d.body.removeChild(marioPath);
		}, 5000);
	}, true);
})();
