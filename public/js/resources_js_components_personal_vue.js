"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_personal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "personal",
  data: function data() {
    return {
      user: '',
      user_appointments: [],
      available_appointments: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.getUser();

      _this.getClientAppointments();

      _this.getDoctorAppointments();

      _this.getAdminAppointments();
    }, 300);
  },
  methods: {
    getUser: function getUser() {
      var _this2 = this;

      axios.get('/api/user').then(function (r) {
        _this2.user = r.data;
      });
    },
    getClientAppointments: function getClientAppointments() {
      var _this3 = this;

      setTimeout(function () {
        if (_this3.user.role === 'client') {
          axios.get('/api/appointments/client/available').then(function (r) {
            _this3.available_appointments = r.data;
          });
          axios.get('/api/appointments/client/scheduled').then(function (r) {
            _this3.user_appointments = r.data;
          });
        }
      }, 300);
    },
    getDoctorAppointments: function getDoctorAppointments() {
      var _this4 = this;

      setTimeout(function () {
        if (_this4.user.role === 'doctor') {
          axios.get('/api/appointments/doctor/scheduled').then(function (r) {
            _this4.user_appointments = r.data;
          });
        }
      }, 300);
    },
    getAdminAppointments: function getAdminAppointments() {
      var _this5 = this;

      setTimeout(function () {
        if (_this5.user.role === 'admin') {
          axios.get('/api/appointments/admin').then(function (r) {
            _this5.user_appointments = r.data;
          });
        }
      }, 300);
    },
    redirectToCreateAppointment: function redirectToCreateAppointment() {
      this.$router.push({
        name: 'appointment.create'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".name-title[data-v-00f8c78b] {\n  text-align: center;\n}\n.appointments[data-v-00f8c78b] {\n  display: flex;\n  width: 75%;\n}\n.appointments-table[data-v-00f8c78b] {\n  width: 750px;\n  margin: auto;\n}\nth[data-v-00f8c78b], tr[data-v-00f8c78b] {\n  text-align: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_style_index_0_id_00f8c78b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_style_index_0_id_00f8c78b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_style_index_0_id_00f8c78b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/personal.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/personal.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _personal_vue_vue_type_template_id_00f8c78b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal.vue?vue&type=template&id=00f8c78b&scoped=true& */ "./resources/js/components/personal.vue?vue&type=template&id=00f8c78b&scoped=true&");
/* harmony import */ var _personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.vue?vue&type=script&lang=js& */ "./resources/js/components/personal.vue?vue&type=script&lang=js&");
/* harmony import */ var _personal_vue_vue_type_style_index_0_id_00f8c78b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true& */ "./resources/js/components/personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _personal_vue_vue_type_template_id_00f8c78b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _personal_vue_vue_type_template_id_00f8c78b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "00f8c78b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/personal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/personal.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/personal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./personal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_style_index_0_id_00f8c78b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=style&index=0&id=00f8c78b&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/personal.vue?vue&type=template&id=00f8c78b&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/personal.vue?vue&type=template&id=00f8c78b&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_template_id_00f8c78b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_template_id_00f8c78b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_personal_vue_vue_type_template_id_00f8c78b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./personal.vue?vue&type=template&id=00f8c78b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=template&id=00f8c78b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=template&id=00f8c78b&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/personal.vue?vue&type=template&id=00f8c78b&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mb-5" }, [
    this.user.role === "client"
      ? _c("div", [
          _c("div", [
            _c("div", { staticClass: "name-title" }, [
              _c("h1", [_vm._v("Hello, " + _vm._s(this.user.name) + "!")]),
              _vm._v(" "),
              _c("h2", [_vm._v("Glad to see you.")]),
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "mb-3" }, [
              _vm._v("Your personal client id: " + _vm._s(this.user.id)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card m-auto appointments" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("table", { staticClass: "table appointments-table mt-3" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.user_appointments, function (appointment) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(appointment.specialization))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(appointment.doctor_name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(appointment.beginning_time_formatted)),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(appointment.ending_time_formatted)),
                        ]),
                        _vm._v(" "),
                        _vm._m(2, true),
                      ])
                    }),
                    0
                  ),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card m-auto appointments mt-5" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("table", { staticClass: "table appointments-table mt-3" }, [
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.available_appointments, function (appointment) {
                    return _c("tr", [
                      _c("td", [_vm._v(_vm._s(appointment.specialization))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(appointment.doctor_name))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(appointment.beginning_time_formatted)),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(appointment.ending_time_formatted)),
                      ]),
                      _vm._v(" "),
                      _vm._m(5, true),
                    ])
                  }),
                  0
                ),
              ]),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    this.user.role === "doctor"
      ? _c("div", [
          _c("div", [
            _c("div", { staticClass: "name-title" }, [
              _c("h1", [_vm._v("Hello, " + _vm._s(this.user.name) + "!")]),
              _vm._v(" "),
              _c("h2", [_vm._v("Glad to see you.")]),
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "mb-3" }, [
              _vm._v("Your personal worker id: " + _vm._s(this.user.id)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card m-auto appointments" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "m-auto text-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.redirectToCreateAppointment.apply(
                            null,
                            arguments
                          )
                        },
                      },
                    },
                    [
                      _vm._v(
                        "Create new\n                            appointment\n                        "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("table", { staticClass: "table appointments-table mt-3" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.user_appointments, function (appointment) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(appointment.specialization))]),
                        _vm._v(" "),
                        appointment.client_name
                          ? _c("td", [_vm._v(_vm._s(appointment.client_name))])
                          : _c("td", [_vm._v("No one scheduled yet")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(appointment.beginning_time_formatted)),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(appointment.ending_time_formatted)),
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          appointment.client_name
                            ? _c("button", { staticClass: "btn btn-success" }, [
                                _vm._v("Chat"),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("button", { staticClass: "btn btn-danger" }, [
                            _vm._v("Cancel"),
                          ]),
                        ]),
                      ])
                    }),
                    0
                  ),
                ]),
              ]),
            ]),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    this.user.role === "admin"
      ? _c("div", [
          _c("div", [
            _c("div", { staticClass: "name-title" }, [
              _c("h1", [_vm._v("Hello, " + _vm._s(this.user.name) + "!")]),
              _vm._v(" "),
              _c("h2", [_vm._v("Glad to see you.")]),
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "mb-3" }, [
              _vm._v("Your personal admin id: " + _vm._s(this.user.id)),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "card m-auto appointments" }, [
                _vm._m(8),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("h3", { staticClass: "card-title pt-3" }, [
                    _vm._v("All appointments:"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "m-auto text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.redirectToCreateAppointment.apply(
                              null,
                              arguments
                            )
                          },
                        },
                      },
                      [
                        _vm._v(
                          "Create new\n                                appointment\n                            "
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "table",
                    { staticClass: "table appointments-table mt-3" },
                    [
                      _vm._m(9),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.user_appointments, function (appointment) {
                          return _c("tr", [
                            _c("td", [_vm._v(_vm._s(appointment.doctor_id))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(appointment.doctor_name))]),
                            _vm._v(" "),
                            appointment.client_id
                              ? _c("td", [
                                  _vm._v(_vm._s(appointment.client_id)),
                                ])
                              : _c("td", [_vm._v("-")]),
                            _vm._v(" "),
                            appointment.client_name
                              ? _c("td", [
                                  _vm._v(_vm._s(appointment.client_name)),
                                ])
                              : _c("td", [_vm._v("No one scheduled yet")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(appointment.beginning_time_formatted)
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(appointment.ending_time_formatted)),
                            ]),
                            _vm._v(" "),
                            _vm._m(10, true),
                          ])
                        }),
                        0
                      ),
                    ]
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(11),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Your appointments:")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Specialist")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Beginning time")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ending time")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("button", { staticClass: "btn btn-danger" }, [_vm._v("Cancel")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _vm._v("Available appointments:"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Specialist")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Beginning time")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ending time")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("button", { staticClass: "btn btn-success" }, [_vm._v("Register")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title pt-3" }, [
        _vm._v("Your appointments:"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Specialization")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Client")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Beginning time")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ending time")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h2", { staticClass: "text-center" }, [_vm._v("Appointments")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Doctor_id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Doctor name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Client_id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Client name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Beginning time")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ending time")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("div", [
        _c("button", { staticClass: "btn btn-warning" }, [_vm._v("Edit")]),
      ]),
      _vm._v(" "),
      _c("div", [
        _c("button", { staticClass: "btn btn-danger" }, [_vm._v("Delete")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-5" }, [
      _c("div", { staticClass: "card m-auto appointments" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h2", { staticClass: "text-center" }, [_vm._v("Users")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("h3", { staticClass: "card-title pt-3" }, [_vm._v("All users:")]),
          _vm._v(" "),
          _c("table", { staticClass: "table appointments-table mt-3" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { attrs: { scope: "col" } }, [_vm._v("id")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("name")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("email")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("role")]),
                _vm._v(" "),
                _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")]),
              ]),
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("1")]),
                _vm._v(" "),
                _c("td", [_vm._v("Mark Otto")]),
                _vm._v(" "),
                _c("td", [_vm._v("example@mail.ru")]),
                _vm._v(" "),
                _c("td", [_vm._v("client")]),
                _vm._v(" "),
                _c("td", [
                  _c("button", { staticClass: "btn btn-success" }, [
                    _vm._v("Change role"),
                  ]),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-danger" }, [
                    _vm._v("Delete"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);