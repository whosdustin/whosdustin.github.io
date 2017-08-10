// Remove double tap on ios for hover links
if (!("ontouchstart" in document.documentElement)) {
	document.documentElement.className += " no-touch ";
}

(function(){

	// Mario sequence
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

	function load(json) {
    loadJSON(json, function(response) {
      var data = JSON.parse(response);
			var city = data.location.now.city,
					country = data.location.now.country,
					anchor = document.getElementById("current_location");

			anchor.innerHTML = city + ", " + country;
    });
  }

	load("https://nomadlist.com/@whos_dustin.json");


	// Private

	function loadJSON(file, callback) {
		var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
      	// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      	callback(xobj.responseText);
      }
    };
    xobj.send(null);
 }

})();

(function(){
	// Define the constructor
  this.Nav = function() {

    this.nav = document.getElementById('nav_header');
    this.navtrigger = null;

    var defaults = {
      className : 'drop-down',
      menuText  : 'Menu',
      closeText : 'Close'
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] == "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    } else {
      this.options = defaults;
    }

  }

  //=====================
  // Public Methods
  //=====================


  Nav.prototype.trigger = function() {
    var navTrigger, $this = this;

    navTrigger = document.querySelectorAll('[data-nav]');

    for (var i=0; i<navTrigger.length; i++) {
      navTrigger[i].addEventListener('click', function() {
        $this.nav = document.getElementById(this.dataset.nav);
        $this.navtrigger = this;

        translateStyle.call($this);

        $this.toggle();
      });
    }
  }

  Nav.prototype.toggle = function() {

    // Toggle the navigation from open and close states
    toggleNav.call(this);

  }

  //=====================
  // Private Methods
  //=====================

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
    var property;
    for(property in properties) {
      if(properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  function toggleText(elem, newText) {
    var textnode, whitespace, i;

    // Iterate through contents in trigger
    // Find the only content that is text and switch to close text
    whitespace = /^\s*$/;
    i = document.createNodeIterator(elem, NodeFilter.SHOW_TEXT);
    while (textnode = i.nextNode()) {
      if (textnode.nodeName === "#text" && !(whitespace.test(textnode.nodeValue))) {
        textnode.nodeValue = newText;
      }
    }
  }

  function toggleNav() {
    this.navtrigger.classList.toggle('-is-open');

    if (!this.navtrigger.classList.contains('-is-open')) {
      toggleText(this.navtrigger, this.options.menuText);
    } else {
      toggleText(this.navtrigger, this.options.closeText);
    }

    if (!this.nav.classList.contains('-is-open')) {
      this.nav.className = this.nav.className + ' -is-open ' +  '_' + this.options.className;
    } else {
      this.nav.className = this.nav.className.replace(' -is-open ', '');
      this.nav.className = this.nav.className.replace('_' + this.options.className, '');
    }
  }

  function translateStyle() {
    if (this.options.className == 'drop-down') {
      var elHeight = this.nav.offsetHeight;
      this.nav.style.top = -Math.abs(elHeight) + 'px';
    }
  }
})();

var nav = new Nav();
nav.trigger();
