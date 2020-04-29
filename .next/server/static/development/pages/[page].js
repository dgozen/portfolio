module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Head/index.jsx":
/*!******************************************!*\
  !*** ./components/common/Head/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\nazdu\\Documents\\portfolio\\components\\common\\Head\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* This is the html <header> NOT a visual header */

const Head = ({
  title,
  description
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 2
  }
}, __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, title || ''), __jsx("meta", {
  name: "description",
  content: description || '',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, inititial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Poppins&display=swap",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}), __jsx("link", {
  rel: "shortcut icon",
  type: "image/x-icon",
  href: "/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/layouts/DefaultLayout/DefaultLayout.jsx":
/*!************************************************************!*\
  !*** ./components/layouts/DefaultLayout/DefaultLayout.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DefaultLayout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultLayout.scss */ "./components/layouts/DefaultLayout/DefaultLayout.scss");
/* harmony import */ var _DefaultLayout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DefaultLayout_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleReset.scss */ "./components/layouts/DefaultLayout/styleReset.scss");
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styleReset_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Head */ "./components/common/Head/index.jsx");
var _jsxFileName = "C:\\Users\\nazdu\\Documents\\portfolio\\components\\layouts\\DefaultLayout\\DefaultLayout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DefaultLayout = props => {
  const title = 'Duygu Gözen';
  const description = 'My Portfolio';
  return __jsx("div", {
    className: (_styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default.a, _DefaultLayout_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(_common_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    description: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./components/layouts/DefaultLayout/DefaultLayout.scss":
/*!*************************************************************!*\
  !*** ./components/layouts/DefaultLayout/DefaultLayout.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___2WzJ8"
};

/***/ }),

/***/ "./components/layouts/DefaultLayout/styleReset.scss":
/*!**********************************************************!*\
  !*** ./components/layouts/DefaultLayout/styleReset.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/modules/HeadlineModule/HeadlineModule.jsx":
/*!**************************************************************!*\
  !*** ./components/modules/HeadlineModule/HeadlineModule.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadlineModule_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadlineModule.scss */ "./components/modules/HeadlineModule/HeadlineModule.scss");
/* harmony import */ var _HeadlineModule_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HeadlineModule_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\nazdu\\Documents\\portfolio\\components\\modules\\HeadlineModule\\HeadlineModule.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HeadlineModule = ({
  title
}) => {
  return __jsx("h1", {
    className: _HeadlineModule_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (HeadlineModule);

/***/ }),

/***/ "./components/modules/HeadlineModule/HeadlineModule.scss":
/*!***************************************************************!*\
  !*** ./components/modules/HeadlineModule/HeadlineModule.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___1H-wC"
};

/***/ }),

/***/ "./components/modules/ImageModule/ImageModule.jsx":
/*!********************************************************!*\
  !*** ./components/modules/ImageModule/ImageModule.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\nazdu\\Documents\\portfolio\\components\\modules\\ImageModule\\ImageModule.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ImageModule = ({
  image,
  text
}) => {
  return __jsx("img", {
    src: image,
    alt: text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageModule);

/***/ }),

/***/ "./components/modules/MarkupModule/MarkupModule.jsx":
/*!**********************************************************!*\
  !*** ./components/modules/MarkupModule/MarkupModule.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MarkupModule_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkupModule.scss */ "./components/modules/MarkupModule/MarkupModule.scss");
/* harmony import */ var _MarkupModule_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MarkupModule_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\nazdu\\Documents\\portfolio\\components\\modules\\MarkupModule\\MarkupModule.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MarkupModule = ({
  text,
  href
}) => {
  return __jsx("p", {
    className: _MarkupModule_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, text, ' ', __jsx("a", {
    target: "_blank",
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, href));
};

/* harmony default export */ __webpack_exports__["default"] = (MarkupModule);

/***/ }),

/***/ "./components/modules/MarkupModule/MarkupModule.scss":
/*!***********************************************************!*\
  !*** ./components/modules/MarkupModule/MarkupModule.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___33ddD"
};

/***/ }),

/***/ "./components/modules/ParagraphModule/ParagraphModule.jsx":
/*!****************************************************************!*\
  !*** ./components/modules/ParagraphModule/ParagraphModule.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParagraphModule_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParagraphModule.scss */ "./components/modules/ParagraphModule/ParagraphModule.scss");
/* harmony import */ var _ParagraphModule_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ParagraphModule_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\nazdu\\Documents\\portfolio\\components\\modules\\ParagraphModule\\ParagraphModule.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ParagraphModule = ({
  text
}) => {
  return __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (ParagraphModule);

/***/ }),

/***/ "./components/modules/ParagraphModule/ParagraphModule.scss":
/*!*****************************************************************!*\
  !*** ./components/modules/ParagraphModule/ParagraphModule.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/[page].js":
/*!*************************!*\
  !*** ./pages/[page].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_DefaultLayout_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/DefaultLayout/DefaultLayout */ "./components/layouts/DefaultLayout/DefaultLayout.jsx");
/* harmony import */ var _components_modules_ParagraphModule_ParagraphModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/ParagraphModule/ParagraphModule */ "./components/modules/ParagraphModule/ParagraphModule.jsx");
/* harmony import */ var _components_modules_HeadlineModule_HeadlineModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modules/HeadlineModule/HeadlineModule */ "./components/modules/HeadlineModule/HeadlineModule.jsx");
/* harmony import */ var _components_modules_MarkupModule_MarkupModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modules/MarkupModule/MarkupModule */ "./components/modules/MarkupModule/MarkupModule.jsx");
/* harmony import */ var _components_modules_ImageModule_ImageModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modules/ImageModule/ImageModule */ "./components/modules/ImageModule/ImageModule.jsx");
var _jsxFileName = "C:\\Users\\nazdu\\Documents\\portfolio\\pages\\[page].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*  client side */






/* Helper function to fetch data - do we need this as an extra function? Debatable. 😊 */

function fetchUrl(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url).then(r => r.json());
}
/* This route gets hit first, appends a slug to the url 
and therefore the page request, e.g. your-site.com/about */


const SlugPage = ({
  data
}) => {
  const {
    content
  } = data;
  const codeString = JSON.stringify(content);
  const headlineModuleData = content.body.find(item => item.component === 'Headline');
  const paragraphModuleData = content.body.filter(item => item.component.includes('Paragraph Module'));
  const markupModuleData = content.body.filter(item => item.component.includes('Markup'));
  const imageModuleData = content.body.find(item => item.component === 'Image Module');
  return __jsx(_components_layouts_DefaultLayout_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, imageModuleData ? __jsx(_components_modules_ImageModule_ImageModule__WEBPACK_IMPORTED_MODULE_6__["default"], {
    image: imageModuleData.Image,
    text: imageModuleData.Text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }) : null, headlineModuleData ? __jsx(_components_modules_HeadlineModule_HeadlineModule__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: headlineModuleData.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }) : null, paragraphModuleData ? paragraphModuleData.map((module, index) => {
    return __jsx(_components_modules_ParagraphModule_ParagraphModule__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      text: module.Text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 14
      }
    });
  }) : null, markupModuleData ? markupModuleData.map((module, index) => {
    return __jsx(_components_modules_MarkupModule_MarkupModule__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: index,
      text: module.Markup.content[0].content[0].text,
      href: module.Markup.content[0].content[1].text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 8
      }
    });
  }) : null);
};
/* calling internal API endpoint (server).
This call is hitting the code written in 'pages/api/page/[slug].js' */


SlugPage.getInitialProps = async ({
  query
}) => {
  /* {query} is an object received within this method from Next,
   so that we can retrieve the slug (e.g. '/welcome') coming with the route */
  const {
    page
  } = query;
  /* Calling internal api endpoint to fetch Storyblok content server-side 
  (client-side here) */

  const data = await fetchUrl(`https://duygu-gozen.now.sh/api/page/${page}`);
  /* Returning the data back into SlugPage as props */

  return {
    data
  };
  /* This is the same as { data: data } */
};

/* harmony default export */ __webpack_exports__["default"] = (SlugPage);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/[page].js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nazdu\Documents\portfolio\pages\[page].js */"./pages/[page].js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[page].js.map