// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../assets/Vector_about.svg":[["Vector_about.30452af3.svg","assets/Vector_about.svg"],"assets/Vector_about.svg"],"./../assets/Vector2_about.svg":[["Vector2_about.43002d8a.svg","assets/Vector2_about.svg"],"assets/Vector2_about.svg"],"./../assets/dot_prices.png":[["dot_prices.6c197969.png","assets/dot_prices.png"],"assets/dot_prices.png"],"./../assets/vector_prices.svg":[["vector_prices.be3f7a7b.svg","assets/vector_prices.svg"],"assets/vector_prices.svg"],"./../assets/top_price.png":[["top_price.d8646b99.png","assets/top_price.png"],"assets/top_price.png"],"./../assets/background_contacts.png":[["background_contacts.dd455416.png","assets/background_contacts.png"],"assets/background_contacts.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"sass/menu.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"sass/button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"sass/scroll.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/ellipse-orange_about.png":[function(require,module,exports) {
module.exports = "/ellipse-orange_about.9bc21254.png";
},{}],"assets/ellipse-grey_about.png":[function(require,module,exports) {
module.exports = "/ellipse-grey_about.18b53ff2.png";
},{}],"sass/wheel.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../assets/ellipse-orange_about.png":[["ellipse-orange_about.9bc21254.png","assets/ellipse-orange_about.png"],"assets/ellipse-orange_about.png"],"./../assets/ellipse-grey_about.png":[["ellipse-grey_about.18b53ff2.png","assets/ellipse-grey_about.png"],"assets/ellipse-grey_about.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"sass/mediaqueries.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/heading_price-mobile.png":[function(require,module,exports) {
module.exports = "/heading_price-mobile.d5ac7609.png";
},{}],"assets/heading_price.png":[function(require,module,exports) {
module.exports = "/heading_price.4725d3c1.png";
},{}],"assets/logo_home.png":[function(require,module,exports) {
module.exports = "/logo_home.07ed628a.png";
},{}],"assets/star_home.svg":[function(require,module,exports) {
module.exports = "/star_home.b575be31.svg";
},{}],"assets/man_home.png":[function(require,module,exports) {
module.exports = "/man_home.0c6dc632.png";
},{}],"assets/chevron_home.svg":[function(require,module,exports) {
module.exports = "/chevron_home.56ec1954.svg";
},{}],"assets/heading_about.png":[function(require,module,exports) {
module.exports = "/heading_about.11a8b692.png";
},{}],"assets/heading-about-mobile.png":[function(require,module,exports) {
module.exports = "/heading-about-mobile.a5c957d0.png";
},{}],"assets/fonts/Pavanam.ttf":[function(require,module,exports) {
module.exports = "/Pavanam.7f676f72.ttf";
},{}],"assets/fonts/PaytoneOne.ttf":[function(require,module,exports) {
module.exports = "/PaytoneOne.b89b6053.ttf";
},{}],"assets/fonts/post.ttf":[function(require,module,exports) {
module.exports = "/post.c445bcca.ttf";
},{}],"assets/fonts/PatuaOne.ttf":[function(require,module,exports) {
module.exports = "/PatuaOne.34d699df.ttf";
},{}],"../node_modules/os-browserify/browser.js":[function(require,module,exports) {
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};

},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("../sass/style.scss"));

var _menu = _interopRequireDefault(require("../sass/menu.scss"));

var _button = _interopRequireDefault(require("../sass/button.scss"));

var _scroll = _interopRequireDefault(require("../sass/scroll.scss"));

var _wheel = _interopRequireDefault(require("../sass/wheel.scss"));

var _mediaqueries = _interopRequireDefault(require("../sass/mediaqueries.scss"));

var _heading_priceMobile = _interopRequireDefault(require("../assets/heading_price-mobile.png"));

var _heading_price = _interopRequireDefault(require("../assets/heading_price.png"));

var _logo_home = _interopRequireDefault(require("../assets/logo_home.png"));

var _star_home = _interopRequireDefault(require("../assets/star_home.svg"));

var _man_home = _interopRequireDefault(require("../assets/man_home.png"));

var _chevron_home = _interopRequireDefault(require("../assets/chevron_home.svg"));

var _heading_about = _interopRequireDefault(require("../assets/heading_about.png"));

var _headingAboutMobile = _interopRequireDefault(require("../assets/heading-about-mobile.png"));

var _Pavanam = _interopRequireDefault(require("../assets/fonts/Pavanam.ttf"));

var _PaytoneOne = _interopRequireDefault(require("../assets/fonts/PaytoneOne.ttf"));

var _post = _interopRequireDefault(require("../assets/fonts/post.ttf"));

var _PatuaOne = _interopRequireDefault(require("../assets/fonts/PatuaOne.ttf"));

var _ellipseGrey_about = _interopRequireDefault(require("../assets/ellipse-grey_about.png"));

var _ellipseOrange_about = _interopRequireDefault(require("../assets/ellipse-orange_about.png"));

var _os = require("os");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//imports
//fonts
var newStyle = document.createElement("style");
newStyle.appendChild(document.createTextNode("\
@font-face {\
    font-family: " + "Pavanam" + ";\
    src: url('" + _Pavanam.default + "') format('truetype');\
}\
"));
newStyle.appendChild(document.createTextNode("\
  @font-face {\
      font-family: " + "PaytoneOne" + ";\
      src: url('" + _PaytoneOne.default + "') format('truetype');\
  }\
  "));
newStyle.appendChild(document.createTextNode("\
  @font-face {\
      font-family: " + "Post" + ";\
      src: url('" + _post.default + "') format('truetype');\
  }\
  "));
newStyle.appendChild(document.createTextNode("\
  @font-face {\
      font-family: " + "PatuaOne" + ";\
      src: url('" + _PatuaOne.default + "') format('truetype');\
  }\
  "));
document.head.appendChild(newStyle); //images HOME SECTION

var i = document.getElementsByClassName("section-home__star");
var c = document.createElement("img");
c.src = _star_home.default;
c.alt = "start background image";
c.className = "section-home__star-img";
i[0].appendChild(c);
var b = document.createElement("img");
b.src = _man_home.default;
b.alt = "athlete picture";
b.className = "section-home__man-picture";
i[0].appendChild(b);
var h = document.getElementsByClassName("section-home__nav");
var a = document.createElement("img");
a.src = _logo_home.default;
a.alt = "logo";
a.className = "section-home__logo";
h[0].insertBefore(a, h[0].childNodes[0]);
var homeSection = document.getElementsByClassName("section-home");
var alink = document.createElement("a");
alink.href = "#about";
alink.className = "section-home__link-scroll";
var scrollHomePageInd = document.createElement("img");
var scrollHomePageInd2 = document.createElement("img");
var scrollHomePageInd3 = document.createElement("img");
scrollHomePageInd.src = _chevron_home.default;
scrollHomePageInd2.src = _chevron_home.default;
scrollHomePageInd3.src = _chevron_home.default;
scrollHomePageInd.alt = "scroll arrow";
scrollHomePageInd2.alt = "scroll arrow";
scrollHomePageInd3.alt = "scroll arrow";
scrollHomePageInd.className = "section-home__scroll";
scrollHomePageInd2.className = "section-home__scroll section-home__scroll--delayed-2";
scrollHomePageInd3.className = "section-home__scroll section-home__scroll--delayed-3";
homeSection[0].appendChild(alink);
alink.appendChild(scrollHomePageInd);
alink.appendChild(scrollHomePageInd2);
alink.appendChild(scrollHomePageInd3); // images ABOUT SEC

var secAbout = document.getElementsByClassName("section-about");
var imgHead = document.createElement("img");

var replaceImage = function replaceImage() {
  if (window.innerWidth < 768) {
    imgHead.src = _headingAboutMobile.default;
  } else {
    imgHead.src = _heading_about.default;
  }
};

window.addEventListener("resize", replaceImage);
replaceImage();
imgHead.alt = "heading picture";
imgHead.className = "section-about__heading"; //text content for about sec

var parCont = document.createElement("div");
parCont.className = "section-about__container";
var par = document.createElement("p");
par.innerHTML = '"What? Do you not know that your body is the temple of the Holy Spirit, who is in you, whom you have received from God, and that you are not your own? You were bought with a price. Therefore glorify God in your body and in your spirit, which are God\'s." ';
par.className = "section-about__paragraph";
parCont.appendChild(par);
var subText = document.createElement("p");
subText.innerHTML = "– 1 Corinthians 6:19-20 (MEV)";
subText.className = "section-about__subtext";
parCont.appendChild(subText);
var aboutContainer = document.createElement("div");
aboutContainer.className = "section-about__about-container";
aboutContainer.appendChild(imgHead);
aboutContainer.appendChild(parCont);
secAbout[0].appendChild(aboutContainer); //button effect

var aa = document.querySelector(".section-home__button");
var ab = document.querySelector(".section-home__arrow");
aa.addEventListener("mouseover", function () {
  console.log("hover");
  this.classList.add("section-home__button--hover");
  ab.classList.add("section-home__arrow--hover");
});
aa.addEventListener("mouseout", function () {
  console.log("hover");
  this.classList.remove("section-home__button--hover");
  ab.classList.remove("section-home__arrow--hover");
}); //NAVIGATION WHEEL ***********************************
//appear on every sections just slightly hide on home due to home menu

window.addEventListener("scroll", function () {
  var sectionHomeH = document.querySelector("#home").offsetHeight;
  var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (scrollTop < sectionHomeH / 1.3) {
    document.querySelector(".section-about__navigation-wheel").style.right = "-30px";
  } else if (scrollTop >= sectionHomeH / 5) {
    document.querySelector(".section-about__navigation-wheel").style.right = "0";
  }
});
var homeDot = document.querySelector(".section-about__ball-1");
homeDot.addEventListener("mouseover", function () {
  var styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML = ".section-about__ball-1::before {transform: scale(1) translateX(0);}";
});
homeDot.addEventListener("mouseout", function () {
  var styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML = ".section-about__ball-1::before {transform: scale(0) translateX(-200px);}";
});
var homeDot2 = document.querySelector(".section-about__ball-2");
homeDot2.addEventListener("mouseover", function () {
  var styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML = ".section-about__ball-2::before {transform: scale(1) translateX(0);}";
});
homeDot2.addEventListener("mouseout", function () {
  var styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML = ".section-about__ball-2::before {transform: scale(0) translateX(-200px);}";
});
var homeDot3 = document.querySelector(".section-about__ball-3");
homeDot3.addEventListener("mouseover", function () {
  var styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML = ".section-about__ball-3::before {transform: scale(1) translateX(0);}";
});
homeDot3.addEventListener("mouseout", function () {
  var styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML = ".section-about__ball-3::before {transform: scale(0) translateX(-200px);}";
});
var homeDot4 = document.querySelector(".section-about__ball-4");
homeDot4.addEventListener("mouseover", function () {
  var styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML = ".section-about__ball-4::before {transform: scale(1) translateX(0);}";
});
homeDot4.addEventListener("mouseout", function () {
  var styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML = ".section-about__ball-4::before {transform: scale(0) translateX(-200px);}";
});
var homeDot5 = document.querySelector(".section-about__ball-5");
homeDot5.addEventListener("mouseover", function () {
  var styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML = ".section-about__ball-5::before {transform: scale(1) translateX(0);}";
});
homeDot5.addEventListener("mouseout", function () {
  var styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML = ".section-about__ball-5::before {transform: scale(0) translateX(-200px);}";
}); //change the dot color down to active section

var bgFlag = "";
window.addEventListener("scroll", function () {
  var sectionHomeH = document.querySelector("#home").offsetHeight;
  var sectionAboutH = document.querySelector("#about").offsetHeight;
  var sectionTrainersH = document.querySelector("#trainers").offsetHeight;
  var sectionPriceH = document.querySelector("#price").offsetHeight;
  var sectionContactsH = document.querySelector("#contacts").offsetHeight;
  var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; //if user on about section

  if (scrollTop <= sectionHomeH + sectionAboutH - 200 && scrollTop > sectionAboutH - 200) {
    var styleBall1 = document.querySelector(".section-about__ball-1");
    styleBall1.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
    styleBall1.style.backgroundPosition = "center";
    styleBall1.style.backgroundSize = "cover";
    var styleBall2 = document.querySelector(".section-about__ball-2");
    styleBall2.style.background = "url('" + _ellipseOrange_about.default + "') no-repeat";
    styleBall2.style.backgroundPosition = "center";
    styleBall2.style.backgroundSize = "cover";
    var styleBall3 = document.querySelector(".section-about__ball-3");
    styleBall3.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
    styleBall3.style.backgroundPosition = "center";
    styleBall3.style.backgroundSize = "cover";
    var styleBall4 = document.querySelector(".section-about__ball-4");
    styleBall4.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
    styleBall4.style.backgroundPosition = "center";
    styleBall4.style.backgroundSize = "cover";
    var styleBall5 = document.querySelector(".section-about__ball-5");
    styleBall5.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
    styleBall5.style.backgroundPosition = "center";
    styleBall5.style.backgroundSize = "cover"; //before elements background

    if (bgFlag !== "about") {
      var styleBg = document.head.appendChild(document.createElement("style"));
      styleBg.innerHTML = ".section-about__ball-1::before {background: #d9d9d9;}.section-about__ball-2::before {background: #fff;}.section-about__ball-3::before {background: #d9d9d9;}.section-about__ball-4::before {background: #d9d9d9;}.section-about__ball-5::before {background: #d9d9d9;}";
      bgFlag = "about";
    }
  } //if user is over home section
  else if (scrollTop < sectionAboutH - 200) {
      var _styleBall = document.querySelector(".section-about__ball-1");

      _styleBall.style.background = "url('" + _ellipseOrange_about.default + "') no-repeat";
      _styleBall.style.backgroundPosition = "center";
      _styleBall.style.backgroundSize = "cover";

      var _styleBall2 = document.querySelector(".section-about__ball-2");

      _styleBall2.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
      _styleBall2.style.backgroundPosition = "center";
      _styleBall2.style.backgroundSize = "cover";

      var _styleBall3 = document.querySelector(".section-about__ball-3");

      _styleBall3.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
      _styleBall3.style.backgroundPosition = "center";
      _styleBall3.style.backgroundSize = "cover";

      var _styleBall4 = document.querySelector(".section-about__ball-4");

      _styleBall4.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
      _styleBall4.style.backgroundPosition = "center";
      _styleBall4.style.backgroundSize = "cover";

      var _styleBall5 = document.querySelector(".section-about__ball-5");

      _styleBall5.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
      _styleBall5.style.backgroundPosition = "center";
      _styleBall5.style.backgroundSize = "cover"; //before elements background

      if (bgFlag !== "home") {
        var _styleBg = document.head.appendChild(document.createElement("style"));

        _styleBg.innerHTML = ".section-about__ball-1::before {background: #fff;}.section-about__ball-2::before {background: #d9d9d9;}.section-about__ball-3::before {background: #d9d9d9;}.section-about__ball-4::before {background: #d9d9d9;}.section-about__ball-5::before {background: #d9d9d9;}";
        bgFlag = "home";
      }
    } //if user is over trainers section
    else if (scrollTop >= sectionHomeH + sectionAboutH - 200 && scrollTop < sectionAboutH + sectionHomeH + sectionPriceH - 200) {
        var _styleBall6 = document.querySelector(".section-about__ball-1");

        _styleBall6.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
        _styleBall6.style.backgroundPosition = "center";
        _styleBall6.style.backgroundSize = "cover";

        var _styleBall7 = document.querySelector(".section-about__ball-2");

        _styleBall7.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
        _styleBall7.style.backgroundPosition = "center";
        _styleBall7.style.backgroundSize = "cover";

        var _styleBall8 = document.querySelector(".section-about__ball-3");

        _styleBall8.style.background = "url('" + _ellipseOrange_about.default + "') no-repeat";
        _styleBall8.style.backgroundPosition = "center";
        _styleBall8.style.backgroundSize = "cover";

        var _styleBall9 = document.querySelector(".section-about__ball-4");

        _styleBall9.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
        _styleBall9.style.backgroundPosition = "center";
        _styleBall9.style.backgroundSize = "cover";

        var _styleBall10 = document.querySelector(".section-about__ball-5");

        _styleBall10.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
        _styleBall10.style.backgroundPosition = "center";
        _styleBall10.style.backgroundSize = "cover"; //before elements background

        if (bgFlag !== "trainers") {
          var _styleBg2 = document.head.appendChild(document.createElement("style"));

          _styleBg2.innerHTML = ".section-about__ball-1::before {background: #d9d9d9;}.section-about__ball-2::before {background: #d9d9d9;}.section-about__ball-3::before {background: #fff;}.section-about__ball-4::before {background: #d9d9d9;}.section-about__ball-5::before {background: #d9d9d9;}";
          bgFlag = "trainers";
        }
      } //if user is over price section
      else if (scrollTop >= sectionHomeH + sectionAboutH + sectionPriceH - 200 && scrollTop < sectionAboutH + sectionHomeH + sectionPriceH + sectionContactsH - 200) {
          var _styleBall11 = document.querySelector(".section-about__ball-1");

          _styleBall11.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
          _styleBall11.style.backgroundPosition = "center";
          _styleBall11.style.backgroundSize = "cover";

          var _styleBall12 = document.querySelector(".section-about__ball-2");

          _styleBall12.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
          _styleBall12.style.backgroundPosition = "center";
          _styleBall12.style.backgroundSize = "cover";

          var _styleBall13 = document.querySelector(".section-about__ball-3");

          _styleBall13.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
          _styleBall13.style.backgroundPosition = "center";
          _styleBall13.style.backgroundSize = "cover";

          var _styleBall14 = document.querySelector(".section-about__ball-4");

          _styleBall14.style.background = "url('" + _ellipseOrange_about.default + "') no-repeat";
          _styleBall14.style.backgroundPosition = "center";
          _styleBall14.style.backgroundSize = "cover";

          var _styleBall15 = document.querySelector(".section-about__ball-5");

          _styleBall15.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
          _styleBall15.style.backgroundPosition = "center";
          _styleBall15.style.backgroundSize = "cover"; //before elements background

          if (bgFlag !== "price") {
            var _styleBg3 = document.head.appendChild(document.createElement("style"));

            _styleBg3.innerHTML = ".section-about__ball-1::before {background: #d9d9d9;}.section-about__ball-2::before {background: #d9d9d9;}.section-about__ball-3::before {background: #d9d9d9;}.section-about__ball-4::before {background: #fff;}.section-about__ball-5::before {background: #d9d9d9;}";
            bgFlag = "price";
          }
        } //if user is over contacts section
        else if (scrollTop > sectionAboutH + sectionHomeH + sectionPriceH + sectionContactsH - 200) {
            var _styleBall16 = document.querySelector(".section-about__ball-1");

            _styleBall16.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
            _styleBall16.style.backgroundPosition = "center";
            _styleBall16.style.backgroundSize = "cover";

            var _styleBall17 = document.querySelector(".section-about__ball-2");

            _styleBall17.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
            _styleBall17.style.backgroundPosition = "center";
            _styleBall17.style.backgroundSize = "cover";

            var _styleBall18 = document.querySelector(".section-about__ball-3");

            _styleBall18.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
            _styleBall18.style.backgroundPosition = "center";
            _styleBall18.style.backgroundSize = "cover";

            var _styleBall19 = document.querySelector(".section-about__ball-4");

            _styleBall19.style.background = "url('" + _ellipseGrey_about.default + "') no-repeat";
            _styleBall19.style.backgroundPosition = "center";
            _styleBall19.style.backgroundSize = "cover";

            var _styleBall20 = document.querySelector(".section-about__ball-5");

            _styleBall20.style.background = "url('" + _ellipseOrange_about.default + "') no-repeat";
            _styleBall20.style.backgroundPosition = "center";
            _styleBall20.style.backgroundSize = "cover"; //before elements background

            if (bgFlag !== "contacts") {
              var _styleBg4 = document.head.appendChild(document.createElement("style"));

              _styleBg4.innerHTML = ".section-about__ball-1::before {background: #d9d9d9;}.section-about__ball-2::before {background: #d9d9d9;}.section-about__ball-3::before {background: #d9d9d9;}.section-about__ball-4::before {background: #d9d9d9;}.section-about__ball-5::before {background: #fff;}";
              bgFlag = "contacts";
            }
          }
}); //content slide effects

var slideEffect = function slideEffect() {
  var sectionHomeH = document.querySelector("#home").offsetHeight;
  var sectionAboutH = document.querySelector("#about").offsetHeight;
  var sectionTrainersH = document.querySelector("#trainers").offsetHeight;
  var sectionPriceH = document.querySelector("#price").offsetHeight;
  var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop; //about

  if (scrollTop > sectionHomeH - 300) {
    var elem = document.querySelector(".section-about__heading");
    elem.style.transform = "translateY(0)";
    var elem2 = document.querySelector(".section-about__container");
    elem2.style.transform = "translateY(0)";
  } //trainers


  if (scrollTop > sectionHomeH + sectionAboutH - 300) {
    var _elem = document.querySelector(".section-trainers__paragraph");

    _elem.style.transform = "translateY(0)";

    var _elem2 = document.querySelector(".section-trainers h1");

    _elem2.style.transform = "translateY(0)";
    var elem3 = document.querySelector(".section-trainers__pictures-container");
    elem3.style.transform = "translateY(0)";
  } //price + three free images


  if (scrollTop > sectionHomeH + sectionAboutH + sectionTrainersH - 300) {
    var _elem3 = document.querySelector(".section-price__heading-container");

    _elem3.style.transform = "translateY(0)";

    var _elem4 = document.querySelector(".section-price__people-container");

    _elem4.style.transform = "translateY(0)";

    var _elem5 = document.querySelector(".section-price__boxes-labels");

    _elem5.style.transform = "translateY(0)";
    var elem4 = document.querySelector(".section-price__boxes");
    elem4.style.transform = "translateY(0)";
    var elem5 = document.querySelectorAll(".section-contacts__image");
    elem5[0].style.transform = "translateY(0)";
    elem5[1].style.transform = "translateY(0)";
    elem5[2].style.transform = "translateY(0)";
  } //contacts


  if (scrollTop > sectionHomeH + sectionAboutH + sectionTrainersH + sectionPriceH - 300) {
    var _elem6 = document.querySelector(".section-contacts__content img");

    _elem6.style.transform = "translatex(0)";

    var _elem7 = document.querySelector(".section-contacts__content p");

    _elem7.style.transform = "translatex(0)";
    document.querySelector(".section-contacts__content").style.overflow = "visible";
  }
};

window.addEventListener("scroll", function () {
  slideEffect();
});
slideEffect(); //trainers onmouseover effect
//check opacity on overlay and hide/show description

if (window.innerWidth > 767) {
  (function () {
    var checkOpacity = function checkOpacity() {
      var a = document.querySelector("#trainer1");
      var b = document.querySelector("#trainer2");
      var c = document.querySelector("#trainer3");
      var d = document.querySelector("#trainer4");

      if (a.style.opacity === "0.6") {
        document.querySelector(".section-trainers__description-1").style.opacity = "1";
      } else if (a.style.opacity === "0") {
        document.querySelector(".section-trainers__description-1").style.opacity = "0";
      }

      if (b.style.opacity === "0.6") {
        document.querySelector(".section-trainers__description-2").style.opacity = "1";
      } else if (b.style.opacity === "0") {
        document.querySelector(".section-trainers__description-2").style.opacity = "0";
      }

      if (c.style.opacity === "0.6") {
        document.querySelector(".section-trainers__description-3").style.opacity = "1";
      } else if (c.style.opacity === "0") {
        document.querySelector(".section-trainers__description-3").style.opacity = "0";
      }

      if (d.style.opacity === "0.6") {
        document.querySelector(".section-trainers__description-4").style.opacity = "1";
      } else if (d.style.opacity === "0") {
        document.querySelector(".section-trainers__description-4").style.opacity = "0";
      }
    };

    var trainer = document.querySelectorAll(".section-trainers__trainer");

    for (var _i = 0; _i < trainer.length; _i++) {
      trainer[_i].addEventListener("mouseover", function (e) {
        e.target.style.opacity = 0.6;
        e.target.parentNode.style.filter = "blur(2px)";
        checkOpacity();
      });
    }

    for (var _i2 = 0; _i2 < trainer.length; _i2++) {
      trainer[_i2].addEventListener("mouseout", function (e) {
        e.target.style.opacity = 0;
        e.target.parentNode.style.filter = "blur(0px)";
        checkOpacity();
      });
    } //Enable on/off when user over the description text


    var trainerDes1 = document.querySelector(".section-trainers__description-1");
    var trainerDes2 = document.querySelector(".section-trainers__description-2");
    var trainerDes3 = document.querySelector(".section-trainers__description-3");
    var trainerDes4 = document.querySelector(".section-trainers__description-4"); //description1

    trainerDes1.addEventListener("mouseover", function () {
      document.querySelector("#trainer1").style.opacity = 0.6;
      document.querySelector("#trainer1").parentNode.style.filter = "blur(2px)";
      checkOpacity();
    });
    trainerDes1.addEventListener("mouseout", function (e) {
      document.querySelector("#trainer1").style.opacity = 0;
      document.querySelector("#trainer1").parentNode.style.filter = "blur(0px)";
      checkOpacity();
    }); //description2

    trainerDes2.addEventListener("mouseover", function () {
      document.querySelector("#trainer2").style.opacity = 0.6;
      document.querySelector("#trainer2").parentNode.style.filter = "blur(2px)";
      checkOpacity();
    });
    trainerDes2.addEventListener("mouseout", function (e) {
      document.querySelector("#trainer2").style.opacity = 0;
      document.querySelector("#trainer2").parentNode.style.filter = "blur(0px)";
      checkOpacity();
    }); //description3

    trainerDes3.addEventListener("mouseover", function () {
      document.querySelector("#trainer3").style.opacity = 0.6;
      document.querySelector("#trainer3").parentNode.style.filter = "blur(2px)";
      checkOpacity();
    });
    trainerDes3.addEventListener("mouseout", function (e) {
      document.querySelector("#trainer3").style.opacity = 0;
      document.querySelector("#trainer3").parentNode.style.filter = "blur(0px)";
      checkOpacity();
    }); //description4

    trainerDes4.addEventListener("mouseover", function () {
      document.querySelector("#trainer4").style.opacity = 0.6;
      document.querySelector("#trainer4").parentNode.style.filter = "blur(2px)";
      checkOpacity();
    });
    trainerDes4.addEventListener("mouseout", function (e) {
      document.querySelector("#trainer4").style.opacity = 0;
      document.querySelector("#trainer4").parentNode.style.filter = "blur(0px)";
      checkOpacity();
    });
  })();
} //remove new line only if screen is narrow - in heading section home


var replaceHeadHome = function replaceHeadHome() {
  var headHome = document.querySelector("#home-header");

  if (window.innerWidth < 767) {
    headHome.innerHTML = "BUILD YOUR BODY";
    document.querySelector("#homeLink").style.display = "block";
  } else {
    headHome.innerHTML = "BUILD <br />YOUR BODY";
    document.querySelector("#homeLink").style.display = "none";
  }
};

replaceHeadHome();
window.addEventListener("resize", replaceHeadHome); //MENU on mobile devices (phone and tablet)

function toggleMenu() {
  var line1 = document.querySelector(".section-home__line1");
  var line2 = document.querySelector(".section-home__line2");
  var line3 = document.querySelector(".section-home__line3");
  line1.classList.toggle("change");
  line2.classList.toggle("change");
  line3.classList.toggle("change");
  toggleMenuLinks();
}

var hamMenu = document.querySelector(".section-home__hamburger-menu");
hamMenu.addEventListener("click", toggleMenu);

function toggleMenuLinks() {
  if (document.querySelector(".section-home__menu").style.display !== "block") {
    document.querySelector(".section-home__menu").style.display = "block";
    document.querySelector(".section-home__menu").style.visibility = "visible";
  } else {
    document.querySelector(".section-home__menu").style.display = "none";
    document.querySelector(".section-home__menu").style.visibility = "hidden";
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 767) {
    document.querySelector(".section-home__menu").removeAttribute("style");
  }
}); //hide ham-menu when clicked on mobile

if (window.innerWidth < 767) {
  var hideWhenClick = function hideWhenClick() {
    var a = document.querySelectorAll(".section-home__menu > a");
    a.forEach(function (element) {
      element.addEventListener("click", function () {
        document.querySelector(".section-home__hamburger-menu").click();
      });
    });
  };

  hideWhenClick();
} //swap the price logo to a mobile version


var togglePriceLogo = function togglePriceLogo() {
  var headingPrice = document.querySelector(".section-price__heading");

  if (window.innerWidth > 767) {
    headingPrice.src = _heading_price.default;
  } else if (window.innerWidth < 767) {
    headingPrice.src = _heading_priceMobile.default;
  }
};

togglePriceLogo();
window.addEventListener("resize", togglePriceLogo); //toggle price cards content - ul has only one item on mobile and more on tablet and desktop

var makeOneItemList = function makeOneItemList() {
  var boxes = document.querySelectorAll(".section-price__box > ul");
  boxes[0].innerHTML = "<li>No time limit</li>";
  boxes[1].innerHTML = "<li>Access to all facilities</li>";
  boxes[2].innerHTML = "<li>All classes free</li>";
  boxes[3].innerHTML = "<li>Personal Plan</li>";
};

var makeMultiItemList = function makeMultiItemList() {
  var boxes = document.querySelectorAll(".section-price__box > ul");
  boxes[0].innerHTML = "<li>No time limit</li>";
  boxes[1].innerHTML = "<li>No time limit</li><li>Access to all facilities</li>";
  boxes[2].innerHTML = "<li>No time limit</li><li>Access to all facilities</li><li>All classes free</li>";
  boxes[3].innerHTML = "<li>No time limit</li><li>Access to all facilities</li><li>All classes free</li><li>Personal Plan</li>";
};

var togglePriceCards = function togglePriceCards() {
  if (window.innerWidth > 767) {
    makeMultiItemList();
  } else if (window.innerWidth < 767) {
    makeOneItemList();
  }
};

togglePriceCards();
window.addEventListener("resize", togglePriceCards); //change the overflow to contact content to show full map and prevent, when map is sliding in to, show horizontal scroll bars
},{"../sass/style.scss":"sass/style.scss","../sass/menu.scss":"sass/menu.scss","../sass/button.scss":"sass/button.scss","../sass/scroll.scss":"sass/scroll.scss","../sass/wheel.scss":"sass/wheel.scss","../sass/mediaqueries.scss":"sass/mediaqueries.scss","../assets/heading_price-mobile.png":"assets/heading_price-mobile.png","../assets/heading_price.png":"assets/heading_price.png","../assets/logo_home.png":"assets/logo_home.png","../assets/star_home.svg":"assets/star_home.svg","../assets/man_home.png":"assets/man_home.png","../assets/chevron_home.svg":"assets/chevron_home.svg","../assets/heading_about.png":"assets/heading_about.png","../assets/heading-about-mobile.png":"assets/heading-about-mobile.png","../assets/fonts/Pavanam.ttf":"assets/fonts/Pavanam.ttf","../assets/fonts/PaytoneOne.ttf":"assets/fonts/PaytoneOne.ttf","../assets/fonts/post.ttf":"assets/fonts/post.ttf","../assets/fonts/PatuaOne.ttf":"assets/fonts/PatuaOne.ttf","../assets/ellipse-grey_about.png":"assets/ellipse-grey_about.png","../assets/ellipse-orange_about.png":"assets/ellipse-orange_about.png","os":"../node_modules/os-browserify/browser.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59781" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.map