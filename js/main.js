// Widow be gone.
// var headings = document.getElementsByTagName( 'h1' );
// for ( var i=0; i<headings.length; i++ ) {
//   var h1s = headings[i].innerHTML.split( ' ' );
//   h1s[h1s.length-2] += "&nbsp;" + h1s[h1s.length-1];
//   h1s.pop();
//   headings[i].innerHTML = h1s.join( ' ' );
// }

// var styleNode = document.createElement('link');
// styleNode.rel = "stylesheet";
// styleNode.setAttribute("href", "/css/color.css");
// window.setTimeout(function() {
// 	document.getElementsByTagName('head')[0].appendChild(styleNode)
// }, 5000);

var listener = new window.keypress.Listener();
listener.sequence_combo('m a r i o', function() {
	// window.innerHTML = "<div class=\"mario__path\"><img class=\"mario\" src=\"/images/img-mario-running.gif\" /></div>";
}, true);
