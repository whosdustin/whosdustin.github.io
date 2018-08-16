// Remove double tap on ios for hover links
if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += " no-touch ";
}

(function() {
  initMario()
  initModal()
  initScrollMe()
  initNomad("https://nomadlist.com/@whosdustin.json");

  function initScrollMe() {
    var arrow = document.createElement('img');
    arrow.className = 'scrollme';
    arrow.src = '/images/scroll.gif';
    document.body.appendChild(arrow);
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        if (document.body.contains(arrow)) {
          document.body.removeChild(arrow);
        }
        return;
      }
    });

  }

  function initMario() {
    // Mario sequence
    var listener = new window.keypress.Listener();
    listener.sequence_combo('m a r i o', function() {
      var d = document,
        marioPath = d.createElement('div'),
        marioImg = d.createElement('img'),
        marioWait;
      marioPath.className = 'mario-path';
      marioImg.className = 'mario';
      marioImg.src = '/images/img-mario-running.gif';
      marioPath.appendChild(marioImg);
      d.body.appendChild(marioPath);
      marioWait = setTimeout(function() {
        d.body.removeChild(marioPath);
      }, 5000);
    }, true);
  }

  function initNomad(json) {
    loadJSON(json, function(response) {
      var data = JSON.parse(response);
      var city = data.location.now.city,
          country = data.location.now.country,
          locate = document.getElementById("current_location");
      locate.innerHTML = city + ', ' + country;
    });
  }

  function initModal() {

    var modalTrigger = document.querySelectorAll('[data-modal]'),
        overlay = document.createElement('div');
        overlay.className = 'overlay';

    for (var i = 0; i < modalTrigger.length; i++) {
      modalTrigger[i].addEventListener('click', function() {
        var modal = document.getElementById(this.dataset.modal);

        modal.classList.toggle('open')
        document.body.classList.toggle('stop-scroll')
        document.body.appendChild(overlay)
      });
    }

    overlay.addEventListener('click', function(e) {
      var modal = document.querySelectorAll('.modal');
      for(var i=0;i<modal.length;i++) {
        if (modal[i].classList.contains('open')) {
          modal[i].classList.remove('open');
          document.body.classList.remove('stop-scroll')
          document.body.removeChild(overlay)
        }
      }

    });

  }

  function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }

})();

(function() {

     'use strict';

    // Feature Test
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        // Function to animate the scroll
        var smoothScroll = function (anchor, duration) {

            // Calculate how far and how fast to scroll
            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop + 100;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            // If scrolling down
            if ( increments >= 0 ) {
                // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            // If scrolling up
            else {
                // Stop animation when you reach the anchor OR the top of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            // Loop the animation function
            var runAnimation = setInterval(animateScroll, 16);

        };

        // Define smooth scroll links
        var scrollToggle = document.querySelectorAll('.scroll');

        // For each smooth scroll link
        [].forEach.call(scrollToggle, function (toggle) {

            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {

                // Prevent the default link behavior
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                // If the anchor exists
                if (dataTarget) {
                    // Scroll to the anchor
                    smoothScroll(dataTarget, dataSpeed || 500);
                }

            }, false);

        });

    }

 })();


// RETIRED MOBILE NAV FUNCTION
// (function() {
//   // Define the constructor
//   this.Nav = function() {
//
//     this.nav = document.getElementById('nav_header');
//     this.navtrigger = null;
//
//     var defaults = {
//       className: 'drop-down',
//       menuText: 'Menu',
//       closeText: 'Close'
//     }
//
//     // Create options by extending defaults with the passed in arugments
//     if (arguments[0] && typeof arguments[0] == "object") {
//       this.options = extendDefaults(defaults, arguments[0]);
//     } else {
//       this.options = defaults;
//     }
//
//   }
//
//   //=====================
//   // Public Methods
//   //=====================
//
//   Nav.prototype.trigger = function() {
//     var navTrigger,
//       $this = this;
//
//     navTrigger = document.querySelectorAll('[data-nav]');
//
//     for (var i = 0; i < navTrigger.length; i++) {
//       navTrigger[i].addEventListener('click', function() {
//         $this.nav = document.getElementById(this.dataset.nav);
//         $this.navtrigger = this;
//
//         translateStyle.call($this);
//
//         $this.toggle();
//       });
//     }
//   }
//
//   Nav.prototype.toggle = function() {
//
//     // Toggle the navigation from open and close states
//     toggleNav.call(this);
//
//   }
//
//   //=====================
//   // Private Methods
//   //=====================
//
//   // Utility method to extend defaults with user options
//   function extendDefaults(source, properties) {
//     var property;
//     for (property in properties) {
//       if (properties.hasOwnProperty(property)) {
//         source[property] = properties[property];
//       }
//     }
//     return source;
//   }
//
//   function toggleText(elem, newText) {
//     var textnode,
//       whitespace,
//       i;
//
//     // Iterate through contents in trigger
//     // Find the only content that is text and switch to close text
//     whitespace = /^\s*$/;
//     i = document.createNodeIterator(elem, NodeFilter.SHOW_TEXT);
//     while (textnode = i.nextNode()) {
//       if (textnode.nodeName === "#text" && !(whitespace.test(textnode.nodeValue))) {
//         textnode.nodeValue = newText;
//       }
//     }
//   }
//
//   function toggleNav() {
//     this.navtrigger.classList.toggle('-is-open');
//
//     if (!this.navtrigger.classList.contains('-is-open')) {
//       toggleText(this.navtrigger, this.options.menuText);
//     } else {
//       toggleText(this.navtrigger, this.options.closeText);
//     }
//
//     if (!this.nav.classList.contains('-is-open')) {
//       this.nav.className = this.nav.className + ' -is-open ' + '_' + this.options.className;
//     } else {
//       this.nav.className = this.nav.className.replace(' -is-open ', '');
//       this.nav.className = this.nav.className.replace('_' + this.options.className, '');
//     }
//   }
//
//   function translateStyle() {
//     if (this.options.className == 'drop-down') {
//       var elHeight = this.nav.offsetHeight;
//       this.nav.style.top = -Math.abs(elHeight) + 'px';
//     }
//   }
// })();
//
// var nav = new Nav();
// nav.trigger();
