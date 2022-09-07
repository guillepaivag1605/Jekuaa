exports.ids = [40,2];
exports.modules = {

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "capitalize", function() { return /* reexport */ utils_capitalize; });
__webpack_require__.d(__webpack_exports__, "defer", function() { return /* reexport */ defer["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "isDomElement", function() { return /* reexport */ utils_isDomElement; });
__webpack_require__.d(__webpack_exports__, "getContainerNode", function() { return /* reexport */ utils_getContainerNode; });
__webpack_require__.d(__webpack_exports__, "isSpecialClick", function() { return /* reexport */ utils_isSpecialClick; });
__webpack_require__.d(__webpack_exports__, "prepareTemplateProps", function() { return /* reexport */ utils_prepareTemplateProps; });
__webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return /* reexport */ utils_renderTemplate; });
__webpack_require__.d(__webpack_exports__, "getRefinements", function() { return /* reexport */ getRefinements["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "clearRefinements", function() { return /* reexport */ clearRefinements["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "escapeFacetValue", function() { return /* reexport */ escapeFacetValue["a" /* escapeFacetValue */]; });
__webpack_require__.d(__webpack_exports__, "unescapeFacetValue", function() { return /* reexport */ escapeFacetValue["b" /* unescapeFacetValue */]; });
__webpack_require__.d(__webpack_exports__, "checkRendering", function() { return /* reexport */ checkRendering["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "checkIndexUiState", function() { return /* reexport */ checkIndexUiState; });
__webpack_require__.d(__webpack_exports__, "getPropertyByPath", function() { return /* reexport */ getPropertyByPath["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "getObjectType", function() { return /* reexport */ getObjectType["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "noop", function() { return /* reexport */ noop["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "isFiniteNumber", function() { return /* reexport */ isFiniteNumber["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return /* reexport */ isPlainObject["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "uniq", function() { return /* reexport */ uniq["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "range", function() { return /* reexport */ range["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "isEqual", function() { return /* reexport */ isEqual["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "escape", function() { return /* reexport */ utils_escape["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "unescape", function() { return /* reexport */ utils_unescape["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "concatHighlightedParts", function() { return /* reexport */ concatHighlightedParts["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "getHighlightedParts", function() { return /* reexport */ getHighlightedParts["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "getHighlightFromSiblings", function() { return /* reexport */ getHighlightFromSiblings["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "reverseHighlightedParts", function() { return /* reexport */ reverseHighlightedParts["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "find", function() { return /* reexport */ find["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "findIndex", function() { return /* reexport */ findIndex["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "mergeSearchParameters", function() { return /* reexport */ mergeSearchParameters["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "resolveSearchParameters", function() { return /* reexport */ resolveSearchParameters["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "toArray", function() { return /* reexport */ toArray["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "warning", function() { return /* reexport */ logger["b" /* warning */]; });
__webpack_require__.d(__webpack_exports__, "deprecate", function() { return /* reexport */ logger["a" /* deprecate */]; });
__webpack_require__.d(__webpack_exports__, "escapeHits", function() { return /* reexport */ escape_highlight["d" /* escapeHits */]; });
__webpack_require__.d(__webpack_exports__, "TAG_PLACEHOLDER", function() { return /* reexport */ escape_highlight["a" /* TAG_PLACEHOLDER */]; });
__webpack_require__.d(__webpack_exports__, "TAG_REPLACEMENT", function() { return /* reexport */ escape_highlight["b" /* TAG_REPLACEMENT */]; });
__webpack_require__.d(__webpack_exports__, "escapeFacets", function() { return /* reexport */ escape_highlight["c" /* escapeFacets */]; });
__webpack_require__.d(__webpack_exports__, "createDocumentationLink", function() { return /* reexport */ documentation["a" /* createDocumentationLink */]; });
__webpack_require__.d(__webpack_exports__, "createDocumentationMessageGenerator", function() { return /* reexport */ documentation["b" /* createDocumentationMessageGenerator */]; });
__webpack_require__.d(__webpack_exports__, "aroundLatLngToPosition", function() { return /* reexport */ geo_search["a" /* aroundLatLngToPosition */]; });
__webpack_require__.d(__webpack_exports__, "insideBoundingBoxToBoundingBox", function() { return /* reexport */ geo_search["b" /* insideBoundingBoxToBoundingBox */]; });
__webpack_require__.d(__webpack_exports__, "addAbsolutePosition", function() { return /* reexport */ hits_absolute_position["a" /* addAbsolutePosition */]; });
__webpack_require__.d(__webpack_exports__, "addQueryID", function() { return /* reexport */ hits_query_id["a" /* addQueryID */]; });
__webpack_require__.d(__webpack_exports__, "isFacetRefined", function() { return /* reexport */ isFacetRefined["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "createSendEventForFacet", function() { return /* reexport */ createSendEventForFacet["a" /* createSendEventForFacet */]; });
__webpack_require__.d(__webpack_exports__, "createSendEventForHits", function() { return /* reexport */ createSendEventForHits["b" /* createSendEventForHits */]; });
__webpack_require__.d(__webpack_exports__, "createBindEventForHits", function() { return /* reexport */ createSendEventForHits["a" /* createBindEventForHits */]; });
__webpack_require__.d(__webpack_exports__, "getAppIdAndApiKey", function() { return /* reexport */ getAppIdAndApiKey; });
__webpack_require__.d(__webpack_exports__, "convertNumericRefinementsToFilters", function() { return /* reexport */ convertNumericRefinementsToFilters; });
__webpack_require__.d(__webpack_exports__, "createConcurrentSafePromise", function() { return /* reexport */ createConcurrentSafePromise["a" /* createConcurrentSafePromise */]; });
__webpack_require__.d(__webpack_exports__, "debounce", function() { return /* reexport */ debounce["a" /* debounce */]; });
__webpack_require__.d(__webpack_exports__, "serializePayload", function() { return /* reexport */ serializer["b" /* serializePayload */]; });
__webpack_require__.d(__webpack_exports__, "deserializePayload", function() { return /* reexport */ serializer["a" /* deserializePayload */]; });
__webpack_require__.d(__webpack_exports__, "getWidgetAttribute", function() { return /* reexport */ getWidgetAttribute["a" /* getWidgetAttribute */]; });
__webpack_require__.d(__webpack_exports__, "safelyRunOnBrowser", function() { return /* reexport */ safelyRunOnBrowser["a" /* safelyRunOnBrowser */]; });

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/capitalize.js
function capitalize(text) {
  return text.toString().charAt(0).toUpperCase() + text.toString().slice(1);
}

/* harmony default export */ var utils_capitalize = (capitalize);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/defer.js
var defer = __webpack_require__(315);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/isDomElement.js
function isDomElement(object) {
  return object instanceof HTMLElement || Boolean(object) && object.nodeType > 0;
}

/* harmony default export */ var utils_isDomElement = (isDomElement);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/getContainerNode.js

/**
 * Return the container. If it's a string, it is considered a
 * css selector and retrieves the first matching element. Otherwise
 * test if it validates that it's a correct DOMElement.
 *
 * @param {string|HTMLElement} selectorOrHTMLElement CSS Selector or container node.
 * @return {HTMLElement} Container node
 * @throws Error when the type is not correct
 */

function getContainerNode(selectorOrHTMLElement) {
  var isSelectorString = typeof selectorOrHTMLElement === 'string';
  var domElement = isSelectorString ? document.querySelector(selectorOrHTMLElement) : selectorOrHTMLElement;

  if (!utils_isDomElement(domElement)) {
    var errorMessage = 'Container must be `string` or `HTMLElement`.';

    if (isSelectorString) {
      errorMessage += " Unable to find ".concat(selectorOrHTMLElement);
    }

    throw new Error(errorMessage);
  }

  return domElement;
}

/* harmony default export */ var utils_getContainerNode = (getContainerNode);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/isSpecialClick.js
function isSpecialClick(event) {
  var isMiddleClick = event.button === 1;
  return isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}

/* harmony default export */ var utils_isSpecialClick = (isSpecialClick);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/uniq.js
var uniq = __webpack_require__(271);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/prepareTemplateProps.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}



function prepareTemplates( // can not use = {} here, since the template could have different constraints
defaultTemplates) {
  var templates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var allKeys = Object(uniq["a" /* default */])([].concat(_toConsumableArray(Object.keys(defaultTemplates || {})), _toConsumableArray(Object.keys(templates))));
  return allKeys.reduce(function (config, key) {
    var defaultTemplate = defaultTemplates ? defaultTemplates[key] : undefined;
    var customTemplate = templates[key];
    var isCustomTemplate = customTemplate !== undefined && customTemplate !== defaultTemplate;
    config.templates[key] = isCustomTemplate ? customTemplate // typescript doesn't recognize that this condition asserts customTemplate is defined
    : defaultTemplate;
    config.useCustomCompileOptions[key] = isCustomTemplate;
    return config;
  }, {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    templates: {},
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    useCustomCompileOptions: {}
  });
}
/**
 * Prepares an object to be passed to the Template widget
 */


function prepareTemplateProps(_ref) {
  var defaultTemplates = _ref.defaultTemplates,
      templates = _ref.templates,
      templatesConfig = _ref.templatesConfig;
  var preparedTemplates = prepareTemplates(defaultTemplates, templates);
  return _objectSpread({
    templatesConfig: templatesConfig
  }, preparedTemplates);
}

/* harmony default export */ var utils_prepareTemplateProps = (prepareTemplateProps);
// EXTERNAL MODULE: external "hogan.js"
var external_hogan_js_ = __webpack_require__(236);
var external_hogan_js_default = /*#__PURE__*/__webpack_require__.n(external_hogan_js_);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/renderTemplate.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function renderTemplate_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function renderTemplate_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      renderTemplate_ownKeys(Object(source), true).forEach(function (key) {
        renderTemplate_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      renderTemplate_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function renderTemplate_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

 // We add all our template helper methods to the template as lambdas. Note
// that lambdas in Mustache are supposed to accept a second argument of
// `render` to get the rendered value, not the literal `{{value}}`. But
// this is currently broken (see https://github.com/twitter/hogan.js/issues/222).

function transformHelpersToHogan() {
  var helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var compileOptions = arguments.length > 1 ? arguments[1] : undefined;
  var data = arguments.length > 2 ? arguments[2] : undefined;
  return Object.keys(helpers).reduce(function (acc, helperKey) {
    return renderTemplate_objectSpread(renderTemplate_objectSpread({}, acc), {}, renderTemplate_defineProperty({}, helperKey, function () {
      var _this = this;

      return function (text) {
        var render = function render(value) {
          return external_hogan_js_default.a.compile(value, compileOptions).render(_this);
        };

        return helpers[helperKey].call(data, text, render);
      };
    }));
  }, {});
}

function renderTemplate(_ref) {
  var templates = _ref.templates,
      templateKey = _ref.templateKey,
      compileOptions = _ref.compileOptions,
      helpers = _ref.helpers,
      data = _ref.data,
      bindEvent = _ref.bindEvent;
  var template = templates[templateKey];

  if (typeof template !== 'string' && typeof template !== 'function') {
    throw new Error("Template must be 'string' or 'function', was '".concat(_typeof(template), "' (key: ").concat(templateKey, ")"));
  }

  if (typeof template === 'function') {
    return template(data, bindEvent);
  }

  var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);
  return external_hogan_js_default.a.compile(template, compileOptions).render(renderTemplate_objectSpread(renderTemplate_objectSpread({}, data), {}, {
    helpers: transformedHelpers
  })).replace(/[ \n\r\t\f\xA0]+/g, function (spaces) {
    return spaces.replace(/(^|\xA0+)[^\xA0]+/g, '$1 ');
  }).trim();
}

/* harmony default export */ var utils_renderTemplate = (renderTemplate);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getRefinements.js
var getRefinements = __webpack_require__(301);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/clearRefinements.js
var clearRefinements = __webpack_require__(299);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escapeFacetValue.js
var escapeFacetValue = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/checkRendering.js
var checkRendering = __webpack_require__(298);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/typedObject.js
/**
 * A typed version of Object.keys, to use when looping over a static object
 * inspired from https://stackoverflow.com/a/65117465/3185307
 */
var keys = Object.keys;
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/checkIndexUiState.js
function checkIndexUiState_toConsumableArray(arr) {
  return checkIndexUiState_arrayWithoutHoles(arr) || checkIndexUiState_iterableToArray(arr) || checkIndexUiState_unsupportedIterableToArray(arr) || checkIndexUiState_nonIterableSpread();
}

function checkIndexUiState_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function checkIndexUiState_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function checkIndexUiState_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return checkIndexUiState_arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || checkIndexUiState_unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function checkIndexUiState_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return checkIndexUiState_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return checkIndexUiState_arrayLikeToArray(o, minLen);
}

function checkIndexUiState_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



 // Some connectors are responsible for multiple widgets so we need
// to map them.

function getWidgetNames(connectorName) {
  switch (connectorName) {
    case 'range':
      return [];

    case 'menu':
      return ['menu', 'menuSelect'];

    default:
      return [connectorName];
  }
}

var stateToWidgetsMap = {
  query: {
    connectors: ['connectSearchBox'],
    widgets: ['ais.searchBox', 'ais.autocomplete', 'ais.voiceSearch']
  },
  refinementList: {
    connectors: ['connectRefinementList'],
    widgets: ['ais.refinementList']
  },
  menu: {
    connectors: ['connectMenu'],
    widgets: ['ais.menu']
  },
  hierarchicalMenu: {
    connectors: ['connectHierarchicalMenu'],
    widgets: ['ais.hierarchicalMenu']
  },
  numericMenu: {
    connectors: ['connectNumericMenu'],
    widgets: ['ais.numericMenu']
  },
  ratingMenu: {
    connectors: ['connectRatingMenu'],
    widgets: ['ais.ratingMenu']
  },
  range: {
    connectors: ['connectRange'],
    widgets: ['ais.rangeInput', 'ais.rangeSlider', 'ais.range']
  },
  toggle: {
    connectors: ['connectToggleRefinement'],
    widgets: ['ais.toggleRefinement']
  },
  geoSearch: {
    connectors: ['connectGeoSearch'],
    widgets: ['ais.geoSearch']
  },
  sortBy: {
    connectors: ['connectSortBy'],
    widgets: ['ais.sortBy']
  },
  page: {
    connectors: ['connectPagination'],
    widgets: ['ais.pagination', 'ais.infiniteHits']
  },
  hitsPerPage: {
    connectors: ['connectHitsPerPage'],
    widgets: ['ais.hitsPerPage']
  },
  configure: {
    connectors: ['connectConfigure'],
    widgets: ['ais.configure']
  },
  places: {
    connectors: [],
    widgets: ['ais.places']
  }
};
function checkIndexUiState(_ref) {
  var index = _ref.index,
      indexUiState = _ref.indexUiState;
  var mountedWidgets = index.getWidgets().map(function (widget) {
    return widget.$$type;
  }).filter(Boolean);
  var missingWidgets = keys(indexUiState).reduce(function (acc, parameter) {
    var widgetUiState = stateToWidgetsMap[parameter];

    if (!widgetUiState) {
      return acc;
    }

    var requiredWidgets = widgetUiState.widgets;

    if (requiredWidgets && !requiredWidgets.some(function (requiredWidget) {
      return mountedWidgets.includes(requiredWidget);
    })) {
      acc.push([parameter, {
        connectors: widgetUiState.connectors,
        widgets: widgetUiState.widgets.map(function (widgetIdentifier) {
          return widgetIdentifier.split('ais.')[1];
        })
      }]);
    }

    return acc;
  }, []);
   false ? undefined : void 0;
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getPropertyByPath.js
var getPropertyByPath = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getObjectType.js
var getObjectType = __webpack_require__(281);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(280);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/isFiniteNumber.js
var isFiniteNumber = __webpack_require__(307);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/isPlainObject.js
var isPlainObject = __webpack_require__(286);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/range.js
var range = __webpack_require__(308);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/isEqual.js
var isEqual = __webpack_require__(306);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escape.js
var utils_escape = __webpack_require__(285);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/unescape.js
var utils_unescape = __webpack_require__(288);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/concatHighlightedParts.js
var concatHighlightedParts = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getHighlightedParts.js
var getHighlightedParts = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getHighlightFromSiblings.js
var getHighlightFromSiblings = __webpack_require__(289);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/reverseHighlightedParts.js
var reverseHighlightedParts = __webpack_require__(318);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/find.js
var find = __webpack_require__(283);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/findIndex.js
var findIndex = __webpack_require__(282);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js
var mergeSearchParameters = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/resolveSearchParameters.js
var resolveSearchParameters = __webpack_require__(319);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/toArray.js
var toArray = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/logger.js
var logger = __webpack_require__(274);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escape-highlight.js
var escape_highlight = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(279);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/geo-search.js
var geo_search = __webpack_require__(287);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/hits-absolute-position.js
var hits_absolute_position = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/hits-query-id.js
var hits_query_id = __webpack_require__(305);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/isFacetRefined.js
var isFacetRefined = __webpack_require__(284);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/createSendEventForFacet.js
var createSendEventForFacet = __webpack_require__(302);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/createSendEventForHits.js
var createSendEventForHits = __webpack_require__(303);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/getAppIdAndApiKey.js
// typed as any, since it accepts the _real_ js clients, not the interface we otherwise expect
function getAppIdAndApiKey(searchClient) {
  if (searchClient.transporter) {
    // searchClient v4
    var _searchClient$transpo = searchClient.transporter,
        headers = _searchClient$transpo.headers,
        queryParameters = _searchClient$transpo.queryParameters;
    var APP_ID = 'x-algolia-application-id';
    var API_KEY = 'x-algolia-api-key';
    var appId = headers[APP_ID] || queryParameters[APP_ID];
    var apiKey = headers[API_KEY] || queryParameters[API_KEY];
    return [appId, apiKey];
  } else {
    // searchClient v3
    return [searchClient.applicationID, searchClient.apiKey];
  }
}
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/convertNumericRefinementsToFilters.js
function convertNumericRefinementsToFilters(state, attribute) {
  if (!state) {
    return null;
  }

  var filtersObj = state.numericRefinements[attribute];
  /*
    filtersObj === {
      "<=": [10],
      "=": [],
      ">=": [5]
    }
  */

  var filters = [];
  Object.keys(filtersObj).filter(function (operator) {
    return Array.isArray(filtersObj[operator]) && filtersObj[operator].length > 0;
  }).forEach(function (operator) {
    filtersObj[operator].forEach(function (value) {
      filters.push("".concat(attribute).concat(operator).concat(value));
    });
  });
  return filters;
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/createConcurrentSafePromise.js
var createConcurrentSafePromise = __webpack_require__(312);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/debounce.js
var debounce = __webpack_require__(313);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/serializer.js
var serializer = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getWidgetAttribute.js
var getWidgetAttribute = __webpack_require__(314);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/safelyRunOnBrowser.js
var safelyRunOnBrowser = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/utils/index.js
















































/***/ }),

/***/ 269:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "LeQ7EcO-53ZeTkhOt6UeKg==",
	"container--fluid": "jpJySC8RK82TprRJHuWbZA==",
	"row": "sttnF9Ruo-pIcp7Rfw3s3w==",
	"row--dense": "_6kstBiwDGNRDO7UlzN0m5w==",
	"col": "kZEIbDJWhizMH5zt08UPCg==",
	"no-gutters": "NP3SBE0loV49NvUcpbztvw==",
	"col-1": "VAKq00P4Ys4SzCPhmaItDg==",
	"col-2": "pFpLekLV-yI95HconMO7pw==",
	"col-3": "G-noH1AblwxLWHGpvisEzA==",
	"col-4": "Kxl1NkcdBE3jL3zjs-DYAA==",
	"col-5": "dMdM9ehKdPtb3HZ8JnkSJw==",
	"col-6": "P8TMtMphgiy-oJBlTnrdiQ==",
	"col-7": "_280erBkESdqPS+iAC1udzg==",
	"col-8": "GcRIjj8d9Qv-sTaQL1hinA==",
	"col-9": "s8LW1yWJRWShgPX6WjRoGw==",
	"col-10": "r91rvSWMeNpcetbykIjTeg==",
	"col-11": "_4ow8nQVw6BwINiiVQnwg3w==",
	"col-12": "O7Q9Ucbape2JobWrPYL06w==",
	"col-auto": "S5tm2wAb5Fg8bt6uNwcEaQ==",
	"col-lg": "nKWdSEruWgjVcBymCtfVeQ==",
	"col-lg-1": "u2hv88pROGLD4vNZoyVHTw==",
	"col-lg-2": "x6Ki-yHHUfhc14+tuTl4MA==",
	"col-lg-3": "SwsrlxFyu-oeC1g1bkz0Tg==",
	"col-lg-4": "_8U3-dWndZF36zgEXpUISYw==",
	"col-lg-5": "AbfZeJSUyxCdPmnq1Iibug==",
	"col-lg-6": "B1vH3aNVX3pIUo8Gn9E1YA==",
	"col-lg-7": "-7KAFdJxNunPLBkHze9Nag==",
	"col-lg-8": "bJL4mHbmo4rFjV7DiONwow==",
	"col-lg-9": "_6kzwdlPBOstX66f9X+KbpQ==",
	"col-lg-10": "v0auDA3xw-w0uABATre-cQ==",
	"col-lg-11": "hPMz5eASGCWew2BQLhe1HQ==",
	"col-lg-12": "_9LPrvlL8DRrX1yfXnBd+XA==",
	"col-lg-auto": "OZ2GuYbXnX7-I2p+GbgMpQ==",
	"col-md": "-VewLhGd7n90c5ZVCGUVfw==",
	"col-md-1": "wkpc19bAcPzw5oQvQmNw2A==",
	"col-md-2": "f42b4GozQOTlyOMiitn6cA==",
	"col-md-3": "REus6GQl2Nle4ZiLrNA6Lw==",
	"col-md-4": "_4zMSrc6fVVR7Y7w1tMnLUg==",
	"col-md-5": "x4d7Sxf5YFlFlCMGEcacwQ==",
	"col-md-6": "iqxFM-6ea8vCiNV0on8x5w==",
	"col-md-7": "Mkbyf9HLnVuP4unUiXZ7OA==",
	"col-md-8": "wGsRs2uq3RUCB9vr9U1Xyg==",
	"col-md-9": "_6gFpDPg0WgVMx+lxQhm-Ww==",
	"col-md-10": "_9GBjWCknarKAbIi-8fjU-A==",
	"col-md-11": "is63r0v3nUzYKKmO-dvkYg==",
	"col-md-12": "wnXFLxOSpe2L8YYR8TyaqQ==",
	"col-md-auto": "IdfLeUS-Gojo+tz+-1CXVw==",
	"col-sm": "+DJFQl8leDECL1gZYF7EaA==",
	"col-sm-1": "xFfZaGUTwjVjAVvryWJRpg==",
	"col-sm-2": "cCBJhrPBbiYVKvirZgNCxg==",
	"col-sm-3": "_7hy8blP7FJCWNtcGpFUCKw==",
	"col-sm-4": "+ITiIUscBqLokMQfxXA6Fw==",
	"col-sm-5": "B5DWw1AMya+QPAo36Elurg==",
	"col-sm-6": "XIKefi7PmsN90Qcfxd-vlw==",
	"col-sm-7": "GGa-TP6V8FYOhm4+XSFvlg==",
	"col-sm-8": "kkpCeI1HjM9bYRZ1bKBARA==",
	"col-sm-9": "tuncmr6PYGAdFmqKeBOjTw==",
	"col-sm-10": "_29HPH0MWo2tNxmaL-a9tJA==",
	"col-sm-11": "_3f1VBtYT1TwqOBSJE0E-CA==",
	"col-sm-12": "mcH-KGmAVQWa6KkfN83aoQ==",
	"col-sm-auto": "x9YelKKcOIRLFT1VDyyroA==",
	"col-xl": "eORaqbL6WJFQQfkSD6dj2A==",
	"col-xl-1": "ZgNkT5ZB0NgIUsI4cuOL8Q==",
	"col-xl-2": "_2rTwUEJ04v8K70-tainPSQ==",
	"col-xl-3": "q3+GXMEGxKNcWfPT3ptxjg==",
	"col-xl-4": "lqhcRZ9ePE40OpzViBUMTg==",
	"col-xl-5": "RRZpmS6yYtzCmXpxSXTlaQ==",
	"col-xl-6": "Gz+RzqqvQ1ce-bHDbp84gA==",
	"col-xl-7": "CXjR1cdccIQpzYI3vvueUw==",
	"col-xl-8": "nrT816fPLg8v1b-l-0D5fg==",
	"col-xl-9": "JQ5Yg9T5E6GxkR34Es1BAw==",
	"col-xl-10": "_4Z3Ghj-7tp8M6zk1aCIJYQ==",
	"col-xl-11": "sPfsUzRGB2sAP975WVR+iQ==",
	"col-xl-12": "Td5PyaoFEulbOWvzerVOIg==",
	"col-xl-auto": "M+zzuZiZgoWv4tMKiyIN3A==",
	"v-application--is-ltr": "E0+OIIjH94A8Cv3D9OybwQ==",
	"offset-1": "_1QsaGDaikzIevkZlHdhdRg==",
	"v-application--is-rtl": "_2r0A1zPVOo1sJjU2-yLQnQ==",
	"offset-2": "dFApvMLViueExYtsrgweFQ==",
	"offset-3": "CtZMX6RAps1-Absm81iV-A==",
	"offset-4": "AFRskJv5nmVWhhe5FgPY1g==",
	"offset-5": "D5hlelx44slGNqeCl1zOKQ==",
	"offset-6": "e5DO2lZlCZGwJaOZk0ePEw==",
	"offset-7": "lzLuxHtNbOTGP6JJQtiyIA==",
	"offset-8": "aI-su1PBvYXtJlkkC1KN7g==",
	"offset-9": "ZzNr+Bk8xNEHnfsEbKQ90A==",
	"offset-10": "YhaMN-Uaq386ZW1TKmFBDA==",
	"offset-11": "YCofJ9GHX0XLOv2O3meRow==",
	"offset-sm-0": "i9A96gaW7VhyXSke01+EyQ==",
	"offset-sm-1": "XvtKRpLDhWc9ukgPWX--VQ==",
	"offset-sm-2": "KfOrSOGZh0MbJnv0JII4JQ==",
	"offset-sm-3": "SwQE41suMMbpxjyDg4brQg==",
	"offset-sm-4": "JrI-Qfoi0ZMpMQ-Mq5ZEqQ==",
	"offset-sm-5": "amox91L9K4OGosS2IsvRLg==",
	"offset-sm-6": "hZC47LU5FfSSxyIEagDqNw==",
	"offset-sm-7": "_4yYzv9OfmUygeIcbxTjIOA==",
	"offset-sm-8": "aWOx8RoMw2jtX9yV8eg9Cg==",
	"offset-sm-9": "T0w4Msd-qg-8E5vNvEGlcQ==",
	"offset-sm-10": "hIEXkXot5vRFqOm7C2Bjbw==",
	"offset-sm-11": "WMUUUK3zZefRhbxcKAdItw==",
	"offset-md-0": "alyyP4CoCLaAxzWtK590wg==",
	"offset-md-1": "mOiXoGBu7kT1q-ox4HTLOw==",
	"offset-md-2": "qJbOPxgfwx6fWzBqnfjblA==",
	"offset-md-3": "_97MTzwsw-qrQQ-JvoIsrKA==",
	"offset-md-4": "LKQ6Q+bmJnfE5pIAcadXfw==",
	"offset-md-5": "P5dqLX8iXiVe66x-lblEtw==",
	"offset-md-6": "_241Jty4bxNMjeAedhAqlcg==",
	"offset-md-7": "Eo-FxPNqeoOEvXla6bEUYw==",
	"offset-md-8": "dMmsKR-MUJIB2BlamXg+MA==",
	"offset-md-9": "g-XNOECKpnc5oTKhBmMtVg==",
	"offset-md-10": "aoKZ-nrJ7W4hgCMc7qQcDA==",
	"offset-md-11": "M0OJfahMwvx1QmcVew070Q==",
	"offset-lg-0": "OkzRO3w0g0JZbMayHvWyCw==",
	"offset-lg-1": "xJeaagOC38NRKD4ayM4iMA==",
	"offset-lg-2": "s9kXYoSPLYY609uOjKMB2w==",
	"offset-lg-3": "gIgcgdc7XMvPrI51SGWabA==",
	"offset-lg-4": "vyHMVX6ZwcnOdivESrcqUQ==",
	"offset-lg-5": "rD5FCk1NCHVkmPhnR-3UHg==",
	"offset-lg-6": "iPKfvnYKEA5ZF2GzR-RCCg==",
	"offset-lg-7": "uJ+2Bd1-ZXV6s68tLH2afw==",
	"offset-lg-8": "+6CIm1kZZt0ER6hLdse8Rw==",
	"offset-lg-9": "O1KtyxbMajfkQ4Br7Kv5Tw==",
	"offset-lg-10": "WApW29oiiK6g6YdEKpq+mg==",
	"offset-lg-11": "yiF9HL3eyc-7iWalV830Cg==",
	"offset-xl-0": "b3GE+0ND19k3xsxDOk-4Kw==",
	"offset-xl-1": "nuHVVWAeNvSCdvOo+w0i-A==",
	"offset-xl-2": "+xtfCA7N8CXV+bMeNPwCUQ==",
	"offset-xl-3": "ZezrUf0oMDOUJ+jsFbD+kg==",
	"offset-xl-4": "_4c274rhAp8jOT0msYmu0TA==",
	"offset-xl-5": "nYwD+KWBBcfJfMpP2uoNeA==",
	"offset-xl-6": "+BQ82eIKuuDGgiE47kNvyQ==",
	"offset-xl-7": "jCtoPggh0PVnOLZiEv4JhA==",
	"offset-xl-8": "Jc6AuyFlC71dJDdTqNTeQQ==",
	"offset-xl-9": "gGbhzqwtTh2r4o3Ojv79-w==",
	"offset-xl-10": "J7YmBqUxYBuofPeQaj1clA==",
	"offset-xl-11": "+fHhiSG+TLRQy8XbE27sZg=="
};


/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TAG_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TAG_REPLACEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return escapeHits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return escapeFacets; });
/* harmony import */ var _escape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(285);
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(286);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}



var TAG_PLACEHOLDER = {
  highlightPreTag: '__ais-highlight__',
  highlightPostTag: '__/ais-highlight__'
};
var TAG_REPLACEMENT = {
  highlightPreTag: '<mark>',
  highlightPostTag: '</mark>'
};

function replaceTagsAndEscape(value) {
  return Object(_escape_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, 'g'), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, 'g'), TAG_REPLACEMENT.highlightPostTag);
}

function recursiveEscape(input) {
  if (Object(_isPlainObject_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(input) && typeof input.value !== 'string') {
    return Object.keys(input).reduce(function (acc, key) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, recursiveEscape(input[key])));
    }, {});
  }

  if (Array.isArray(input)) {
    return input.map(recursiveEscape);
  }

  return _objectSpread(_objectSpread({}, input), {}, {
    value: replaceTagsAndEscape(input.value)
  });
}

function escapeHits(hits) {
  if (hits.__escaped === undefined) {
    // We don't override the value on hit because it will mutate the raw results
    // instead we make a shallow copy and we assign the escaped values on it.
    hits = hits.map(function (_ref) {
      var hit = _extends({}, _ref);

      if (hit._highlightResult) {
        hit._highlightResult = recursiveEscape(hit._highlightResult);
      }

      if (hit._snippetResult) {
        hit._snippetResult = recursiveEscape(hit._snippetResult);
      }

      return hit;
    });
    hits.__escaped = true;
  }

  return hits;
}
function escapeFacets(facetHits) {
  return facetHits.map(function (h) {
    return _objectSpread(_objectSpread({}, h), {}, {
      highlighted: replaceTagsAndEscape(h.highlighted)
    });
  });
}

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function uniq(array) {
  return array.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

/* harmony default export */ __webpack_exports__["a"] = (uniq);

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unescapeFacetValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return escapeFacetValue; });
function unescapeFacetValue(value) {
  if (typeof value === 'string') {
    return value.replace(/^\\-/, '-');
  }

  return value;
}
function escapeFacetValue(value) {
  if (typeof value === 'number' && value < 0 || typeof value === 'string') {
    return String(value).replace(/^-/, '\\-');
  }

  return value;
}

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return serializePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deserializePayload; });
function serializePayload(payload) {
  return btoa(encodeURIComponent(JSON.stringify(payload)));
}
function deserializePayload(serialized) {
  return JSON.parse(decodeURIComponent(atob(serialized)));
}

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export warn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _warning; });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);

/**
 * Logs a warning when this function is called, in development environment only.
 */

var deprecate = function deprecate(fn, message) {
  return fn;
};
/**
 * Logs a warning
 * This is used to log issues in development environment only.
 */


var warn = _noop_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */

var _warning = _noop_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];

if (false) {}



/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return component; });
var NAMESPACE = 'ais';
var component = function component(componentName) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        descendantName = _ref.descendantName,
        modifierName = _ref.modifierName;

    var descendent = descendantName ? "-".concat(descendantName) : '';
    var modifier = modifierName ? "--".concat(modifierName) : '';
    return "".concat(NAMESPACE, "-").concat(componentName).concat(descendent).concat(modifier);
  };
};

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(198);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(199);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(200);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(201);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(202);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(203);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(204);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(205);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(206);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(207);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(208);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(269);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];

function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "A"])(val)] = def();
    return props;
  }, {});
}

const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));

const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));

const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);

const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};

function breakpointClass(type, prop, val) {
  let className = classMap[type];

  if (val == null) {
    return undefined;
  }

  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },

  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(198);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(199);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(200);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(201);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(202);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(203);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(204);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(205);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(206);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(207);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(208);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(269);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();

const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "A"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "A"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};

function breakpointClass(type, prop, val) {
  let className = type;

  if (val == null || val === false) {
    return undefined;
  }

  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createDocumentationLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createDocumentationMessageGenerator; });
var createDocumentationLink = function createDocumentationLink(_ref) {
  var name = _ref.name,
      _ref$connector = _ref.connector,
      connector = _ref$connector === void 0 ? false : _ref$connector;
  return ['https://www.algolia.com/doc/api-reference/widgets/', name, '/js/', connector ? '#connector' : ''].join('');
};
var createDocumentationMessageGenerator = function createDocumentationMessageGenerator() {
  for (var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++) {
    widgets[_key] = arguments[_key];
  }

  var links = widgets.map(function (widget) {
    return createDocumentationLink(widget);
  }).join(', ');
  return function (message) {
    return [message, "See documentation: ".concat(links)].filter(Boolean).join('\n\n');
  };
};

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function noop() {}

/* harmony default export */ __webpack_exports__["a"] = (noop);

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getObjectType(object) {
  return Object.prototype.toString.call(object).slice(8, -1);
}

/* harmony default export */ __webpack_exports__["a"] = (getObjectType);

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// We aren't using the native `Array.prototype.findIndex` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `findIndex` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.findIndex` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
function findIndex(array, comparator) {
  if (!Array.isArray(array)) {
    return -1;
  }

  for (var i = 0; i < array.length; i++) {
    if (comparator(array[i])) {
      return i;
    }
  }

  return -1;
}

/* harmony default export */ __webpack_exports__["a"] = (findIndex);

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// We aren't using the native `Array.prototype.find` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `find` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.find` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
function find(items, predicate) {
  var value;

  for (var i = 0; i < items.length; i++) {
    value = items[i]; // inlined for performance: if (Call(predicate, thisArg, [value, i, list])) {

    if (predicate(value, i, items)) {
      return value;
    }
  }

  return undefined;
}

/* harmony default export */ __webpack_exports__["a"] = (find);

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isFacetRefined; });
function isFacetRefined(helper, facet, value) {
  if (helper.state.isHierarchicalFacet(facet)) {
    return helper.state.isHierarchicalFacetRefined(facet, value);
  } else if (helper.state.isConjunctiveFacet(facet)) {
    return helper.state.isFacetRefined(facet, value);
  } else {
    return helper.state.isDisjunctiveFacetRefined(facet, value);
  }
}

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/escape.js
 */
// Used to map characters to HTML entities.
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}; // Used to match HTML entities and HTML characters.

var regexUnescapedHtml = /[&<>"']/g;
var regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);
/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 */

function escape(value) {
  return value && regexHasUnescapedHtml.test(value) ? value.replace(regexUnescapedHtml, function (character) {
    return htmlEscapes[character];
  }) : value;
}

/* harmony default export */ __webpack_exports__["a"] = (escape);

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/master/isPlainObject.js
 */


function getTag(value) {
  if (value === null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return Object.prototype.toString.call(value);
}

function isObjectLike(value) {
  return _typeof(value) === 'object' && value !== null;
}
/**
 * Checks if `value` is a plain object.
 *
 * A plain object is an object created by the `Object`
 * constructor or with a `[[Prototype]]` of `null`.
 */


function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return aroundLatLngToPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return insideBoundingBoxToBoundingBox; });
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var latLngRegExp = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/;
function aroundLatLngToPosition(value) {
  var pattern = value.match(latLngRegExp); // Since the value provided is the one send with the request, the API should
  // throw an error due to the wrong format. So throw an error should be safe.

  if (!pattern) {
    throw new Error("Invalid value for \"aroundLatLng\" parameter: \"".concat(value, "\""));
  }

  return {
    lat: parseFloat(pattern[1]),
    lng: parseFloat(pattern[2])
  };
}

function insideBoundingBoxArrayToBoundingBox(value) {
  var _value = _slicedToArray(value, 1),
      _value$ = _value[0];

  _value$ = _value$ === void 0 ? [undefined, undefined, undefined, undefined] : _value$;

  var _value$2 = _slicedToArray(_value$, 4),
      neLat = _value$2[0],
      neLng = _value$2[1],
      swLat = _value$2[2],
      swLng = _value$2[3]; // Since the value provided is the one send with the request, the API should
  // throw an error due to the wrong format. So throw an error should be safe.


  if (!neLat || !neLng || !swLat || !swLng) {
    throw new Error("Invalid value for \"insideBoundingBox\" parameter: [".concat(value, "]"));
  }

  return {
    northEast: {
      lat: neLat,
      lng: neLng
    },
    southWest: {
      lat: swLat,
      lng: swLng
    }
  };
}

function insideBoundingBoxStringToBoundingBox(value) {
  var _value$split$map = value.split(',').map(parseFloat),
      _value$split$map2 = _slicedToArray(_value$split$map, 4),
      neLat = _value$split$map2[0],
      neLng = _value$split$map2[1],
      swLat = _value$split$map2[2],
      swLng = _value$split$map2[3]; // Since the value provided is the one send with the request, the API should
  // throw an error due to the wrong format. So throw an error should be safe.


  if (!neLat || !neLng || !swLat || !swLng) {
    throw new Error("Invalid value for \"insideBoundingBox\" parameter: \"".concat(value, "\""));
  }

  return {
    northEast: {
      lat: neLat,
      lng: neLng
    },
    southWest: {
      lat: swLat,
      lng: swLng
    }
  };
}

function insideBoundingBoxToBoundingBox(value) {
  if (Array.isArray(value)) {
    return insideBoundingBoxArrayToBoundingBox(value);
  }

  return insideBoundingBoxStringToBoundingBox(value);
}

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unescape; });
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/unescape.js
 */
// Used to map HTML entities to characters.
var htmlEscapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
}; // Used to match HTML entities and HTML characters.

var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);
/**
 * Converts the HTML entities "&", "<", ">", '"', and "'" in `string` to their
 * characters.
 */

function unescape(value) {
  return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function (character) {
    return htmlEscapes[character];
  }) : value;
}

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHighlightFromSiblings; });
/* harmony import */ var _unescape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);

var hasAlphanumeric = new RegExp(/\w/i);
function getHighlightFromSiblings(parts, i) {
  var _parts, _parts2;

  var current = parts[i];
  var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
  var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;

  if (!hasAlphanumeric.test(Object(_unescape_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(current.value)) && isPreviousHighlighted === isNextHighlighted) {
    return isPreviousHighlighted;
  }

  return current.isHighlighted;
}

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let secciones = {}; // Secciones

agregarSecciones([{
  uid: 'informatica',
  nombre: 'Informática'
}, {
  uid: 'matematica',
  nombre: 'Matemática'
}]); // Categorias

agregarCategorias([{
  uid: 'algoritmos',
  nombre: 'Algoritmos'
}, {
  uid: 'desarrollo-web',
  nombre: 'Desarrollo Web'
}, {
  uid: 'redes',
  nombre: 'Redes'
}], 'informatica');
agregarCategorias([{
  uid: 'calculo',
  nombre: 'Cálculo'
}], 'matematica');
/* harmony default export */ __webpack_exports__["a"] = (secciones); // Funciones para agregar varios elementos

function agregarSecciones(secciones) {
  for (let i = 0; i < secciones.length; i++) {
    const seccion = secciones[i];
    agregarSeccion(seccion);
  }
}

function agregarCategorias(categorias, idSeccion) {
  for (let i = 0; i < categorias.length; i++) {
    const categoria = categorias[i];
    agregarCategoria(categoria, idSeccion);
  }
} // Funciones para agregar un elemento


function agregarSeccion(seccion) {
  secciones[seccion.uid] = { ...seccion,
    categorias: {}
  };
}

function agregarCategoria(categoria, idSeccion) {
  secciones[idSeccion].categorias[categoria.uid] = categoria;
}
/*
 * Estructura: 
 * 
*/
// let secciones = {
//     informatica: {
//         uid: 'informatica',
//         nombre: 'Informática',
//         categorias: {
//             algoritmos: {
//                 uid: 'algoritmos',
//                 nombre: 'Algoritmos',
//             },
//         }
//     },
// }

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"v-input--selection-controls": "Tqi0Bi2tE4+OV4eQvkWlXg==",
	"v-input__append-outer": "KOGWsOBemLMEaKW20EDvNQ==",
	"v-input__prepend-outer": "dub8iolHcGH0rOM+RYiK1A==",
	"v-input--hide-details": "GPQO8At0xKc2ZtFoYY3Reg==",
	"v-input__slot": "G6wbMFGikQrOY16S966iXA==",
	"v-radio": "TKs+zwCAD60ZgELDfXmC8g==",
	"v-label": "em-nvt1p8f1eYTLO1ltYXg==",
	"v-input--selection-controls__input": "_6yasaEAWG73RSVwTorkEaA==",
	"v-icon": "EIZVLSqVM2TNWKarPHceVw==",
	"v-application--is-ltr": "c4OFtIQIf284fQuzc83LRw==",
	"v-application--is-rtl": "TuGm67wrOSkibwjO9Qmc4g==",
	"v-input--selection-controls__ripple": "ppuWGexPh3NUs-XwWKpnAw==",
	"v-ripple__container": "wN1uPdx8PLJAc5rz-5w9Qw==",
	"v-input--dense": "vMgFmSnHZyZNZXP0QjX56w==",
	"v-input--switch": "q37IAjEMBYNhk4TQjZ7-XQ==",
	"v-input": "_6Yr61+Tr3RNQGDy5E+7PlA==",
	"v-input--is-focused": "jD-NNaTeYcm8wiYHYz+7Tg==",
	"v-radio--is-focused": "EMywvun3la+3rZPNttZhzw==",
	"v-input--is-disabled": "bwiGY-swGRsRjPp3F4PAGQ==",
	"v-input--indeterminate": "ZGWvP84CTKO6j2gI+ut-8g==",
	"v-input--is-readonly": "g3sAl1YluFCteVhlXMzi6g=="
};


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prevent; });
/* harmony import */ var _components_VInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _rippleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(293);
/* harmony import */ var _comparable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
// Components
 // Mixins


 // Utilities


function prevent(e) {
  e.preventDefault();
}
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_components_VInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _rippleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _comparable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).extend({
  name: 'selectable',
  model: {
    prop: 'inputValue',
    event: 'change'
  },
  props: {
    id: String,
    inputValue: null,
    falseValue: null,
    trueValue: null,
    multiple: {
      type: Boolean,
      default: null
    },
    label: String
  },

  data() {
    return {
      hasColor: this.inputValue,
      lazyValue: this.inputValue
    };
  },

  computed: {
    computedColor() {
      if (!this.isActive) return undefined;
      if (this.color) return this.color;
      if (this.isDark && !this.appIsDark) return 'white';
      return 'primary';
    },

    isMultiple() {
      return this.multiple === true || this.multiple === null && Array.isArray(this.internalValue);
    },

    isActive() {
      const value = this.value;
      const input = this.internalValue;

      if (this.isMultiple) {
        if (!Array.isArray(input)) return false;
        return input.some(item => this.valueComparator(item, value));
      }

      if (this.trueValue === undefined || this.falseValue === undefined) {
        return value ? this.valueComparator(value, input) : Boolean(input);
      }

      return this.valueComparator(input, this.trueValue);
    },

    isDirty() {
      return this.isActive;
    },

    rippleState() {
      return !this.isDisabled && !this.validationState ? undefined : this.validationState;
    }

  },
  watch: {
    inputValue(val) {
      this.lazyValue = val;
      this.hasColor = val;
    }

  },
  methods: {
    genLabel() {
      const label = _components_VInput__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].options.methods.genLabel.call(this);
      if (!label) return label;
      label.data.on = {
        // Label shouldn't cause the input to focus
        click: prevent
      };
      return label;
    },

    genInput(type, attrs) {
      return this.$createElement('input', {
        attrs: Object.assign({
          'aria-checked': this.isActive.toString(),
          disabled: this.isDisabled,
          id: this.computedId,
          role: type,
          type
        }, attrs),
        domProps: {
          value: this.value,
          checked: this.isActive
        },
        on: {
          blur: this.onBlur,
          change: this.onChange,
          focus: this.onFocus,
          keydown: this.onKeydown,
          click: prevent
        },
        ref: 'input'
      });
    },

    onClick(e) {
      this.onChange();
      this.$emit('click', e);
    },

    onChange() {
      if (!this.isInteractive) return;
      const value = this.value;
      let input = this.internalValue;

      if (this.isMultiple) {
        if (!Array.isArray(input)) {
          input = [];
        }

        const length = input.length;
        input = input.filter(item => !this.valueComparator(item, value));

        if (input.length === length) {
          input.push(value);
        }
      } else if (this.trueValue !== undefined && this.falseValue !== undefined) {
        input = this.valueComparator(input, this.trueValue) ? this.falseValue : this.trueValue;
      } else if (value) {
        input = this.valueComparator(input, value) ? null : value;
      } else {
        input = !input;
      }

      this.validate(true, input);
      this.internalValue = input;
      this.hasColor = input;
    },

    onFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },

    onBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },

    /** @abstract */
    onKeydown(e) {}

  }
}));

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
// Directives
 // Types


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'rippleable',
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  props: {
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  methods: {
    genRipple(data = {}) {
      if (!this.ripple) return null;
      data.staticClass = 'v-input--selection-controls__ripple';
      data.directives = data.directives || [];
      data.directives.push({
        name: 'ripple',
        value: {
          center: true
        }
      });
      return this.$createElement('div', data);
    }

  }
}));

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"theme--light": "CtUCVke28X1yUiKgYHOfCw==",
	"v-breadcrumbs": "UZ+yyZjgxZT5jmN+27Sx0Q==",
	"v-breadcrumbs__divider": "_2BCMsUcoHrgtJczO9p6wkQ==",
	"v-breadcrumbs__item--disabled": "ppaQL56-k3KhAef4uMjgjA==",
	"theme--dark": "_1+cvkOZaz6ZNOM--xGbPQw==",
	"v-icon": "hPzU2LOzX42wkZz-RemCsg==",
	"v-breadcrumbs__item": "Kf4rJVWheSd5TyQk6xyylw==",
	"v-breadcrumbs--large": "HqQjUfHuUUnVUkEtM5ktcg=="
};


/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* createSimpleFunctional */ "i"])('v-breadcrumbs__divider', 'li'));

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_mixins_routable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]).extend({
  name: 'v-breadcrumbs-item',
  props: {
    // In a breadcrumb, the currently
    // active item should be dimmed
    activeClass: {
      type: String,
      default: 'v-breadcrumbs__item--disabled'
    },
    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'v-breadcrumbs__item': true,
        [this.activeClass]: this.disabled
      };
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    return h('li', [h(tag, { ...data,
      attrs: { ...data.attrs,
        'aria-current': this.isActive && this.isLink ? 'page' : undefined
      }
    }, this.$slots.default)]);
  }

}));

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"v-input--checkbox": "vwQBdrRiZ5dyADvkStJ0lQ==",
	"v-input--indeterminate": "xbXSFwM7KwjqV5LaUWXixQ==",
	"v-input--is-disabled": "_3JXlutiE7G0m8cFex+NcjA==",
	"v-input--dense": "nOSZZdQmRqFjICt6yzSh5g=="
};


/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getObjectType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);


function checkRendering(rendering, usage) {
  if (rendering === undefined || typeof rendering !== 'function') {
    throw new Error("The render function is not valid (received type ".concat(Object(_getObjectType_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(rendering), ").\n\n").concat(usage));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (checkRendering);

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Clears the refinements of a SearchParameters object based on rules provided.
 * The included attributes list is applied before the excluded attributes list. If the list
 * is not provided, this list of all the currently refined attributes is used as included attributes.
 * @param {object} $0 parameters
 * @param {Helper} $0.helper instance of the Helper
 * @param {string[]} [$0.attributesToClear = []] list of parameters to clear
 * @returns {SearchParameters} search parameters with refinements cleared
 */
function clearRefinements(_ref) {
  var helper = _ref.helper,
      _ref$attributesToClea = _ref.attributesToClear,
      attributesToClear = _ref$attributesToClea === void 0 ? [] : _ref$attributesToClea;
  var finalState = helper.state.setPage(0);
  finalState = attributesToClear.reduce(function (state, attribute) {
    if (finalState.isNumericRefined(attribute)) {
      return state.removeNumericRefinement(attribute);
    }

    if (finalState.isHierarchicalFacet(attribute)) {
      return state.removeHierarchicalFacetRefinement(attribute);
    }

    if (finalState.isDisjunctiveFacet(attribute)) {
      return state.removeDisjunctiveFacetRefinement(attribute);
    }

    if (finalState.isConjunctiveFacet(attribute)) {
      return state.removeFacetRefinement(attribute);
    }

    return state;
  }, finalState);

  if (attributesToClear.indexOf('query') !== -1) {
    finalState = finalState.setQuery('');
  }

  return finalState;
}

/* harmony default export */ __webpack_exports__["a"] = (clearRefinements);

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(271);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




var mergeWithRest = function mergeWithRest(left, right) {
  var facets = right.facets,
      disjunctiveFacets = right.disjunctiveFacets,
      facetsRefinements = right.facetsRefinements,
      facetsExcludes = right.facetsExcludes,
      disjunctiveFacetsRefinements = right.disjunctiveFacetsRefinements,
      numericRefinements = right.numericRefinements,
      tagRefinements = right.tagRefinements,
      hierarchicalFacets = right.hierarchicalFacets,
      hierarchicalFacetsRefinements = right.hierarchicalFacetsRefinements,
      ruleContexts = right.ruleContexts,
      rest = _objectWithoutProperties(right, ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"]);

  return left.setQueryParameters(rest);
}; // Merge facets


var mergeFacets = function mergeFacets(left, right) {
  return right.facets.reduce(function (_, name) {
    return _.addFacet(name);
  }, left);
};

var mergeDisjunctiveFacets = function mergeDisjunctiveFacets(left, right) {
  return right.disjunctiveFacets.reduce(function (_, name) {
    return _.addDisjunctiveFacet(name);
  }, left);
};

var mergeHierarchicalFacets = function mergeHierarchicalFacets(left, right) {
  return left.setQueryParameters({
    hierarchicalFacets: right.hierarchicalFacets.reduce(function (facets, facet) {
      var index = Object(_findIndex_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(facets, function (_) {
        return _.name === facet.name;
      });

      if (index === -1) {
        return facets.concat(facet);
      }

      var nextFacets = facets.slice();
      nextFacets.splice(index, 1, facet);
      return nextFacets;
    }, left.hierarchicalFacets)
  });
}; // Merge facet refinements


var mergeTagRefinements = function mergeTagRefinements(left, right) {
  return right.tagRefinements.reduce(function (_, value) {
    return _.addTagRefinement(value);
  }, left);
};

var mergeFacetRefinements = function mergeFacetRefinements(left, right) {
  return left.setQueryParameters({
    facetsRefinements: _objectSpread(_objectSpread({}, left.facetsRefinements), right.facetsRefinements)
  });
};

var mergeFacetsExcludes = function mergeFacetsExcludes(left, right) {
  return left.setQueryParameters({
    facetsExcludes: _objectSpread(_objectSpread({}, left.facetsExcludes), right.facetsExcludes)
  });
};

var mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements(left, right) {
  return left.setQueryParameters({
    disjunctiveFacetsRefinements: _objectSpread(_objectSpread({}, left.disjunctiveFacetsRefinements), right.disjunctiveFacetsRefinements)
  });
};

var mergeNumericRefinements = function mergeNumericRefinements(left, right) {
  return left.setQueryParameters({
    numericRefinements: _objectSpread(_objectSpread({}, left.numericRefinements), right.numericRefinements)
  });
};

var mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements(left, right) {
  return left.setQueryParameters({
    hierarchicalFacetsRefinements: _objectSpread(_objectSpread({}, left.hierarchicalFacetsRefinements), right.hierarchicalFacetsRefinements)
  });
};

var mergeRuleContexts = function mergeRuleContexts(left, right) {
  var ruleContexts = Object(_uniq_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));

  if (ruleContexts.length > 0) {
    return left.setQueryParameters({
      ruleContexts: ruleContexts
    });
  }

  return left;
};

var merge = function merge() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  return parameters.reduce(function (left, right) {
    var hierarchicalFacetsRefinementsMerged = mergeHierarchicalFacetsRefinements(left, right);
    var hierarchicalFacetsMerged = mergeHierarchicalFacets(hierarchicalFacetsRefinementsMerged, right);
    var tagRefinementsMerged = mergeTagRefinements(hierarchicalFacetsMerged, right);
    var numericRefinementsMerged = mergeNumericRefinements(tagRefinementsMerged, right);
    var disjunctiveFacetsRefinementsMerged = mergeDisjunctiveFacetsRefinements(numericRefinementsMerged, right);
    var facetsExcludesMerged = mergeFacetsExcludes(disjunctiveFacetsRefinementsMerged, right);
    var facetRefinementsMerged = mergeFacetRefinements(facetsExcludesMerged, right);
    var disjunctiveFacetsMerged = mergeDisjunctiveFacets(facetRefinementsMerged, right);
    var ruleContextsMerged = mergeRuleContexts(disjunctiveFacetsMerged, right);
    var facetsMerged = mergeFacets(ruleContextsMerged, right);
    return mergeWithRest(facetsMerged, right);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (merge);

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRefinements; });
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _escapeFacetValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(272);



function getRefinement(state, type, attribute, name) {
  var resultsFacets = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var res = {
    type: type,
    attribute: attribute,
    name: name,
    escapedValue: Object(_escapeFacetValue_js__WEBPACK_IMPORTED_MODULE_1__[/* escapeFacetValue */ "a"])(name)
  };
  var facet = Object(_find_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(resultsFacets, function (resultsFacet) {
    return resultsFacet.name === attribute;
  });
  var count;

  if (type === 'hierarchical') {
    (function () {
      var facetDeclaration = state.getHierarchicalFacetByName(attribute);
      var nameParts = name.split(facetDeclaration.separator);

      var getFacetRefinement = function getFacetRefinement(facetData) {
        return function (refinementKey) {
          return facetData[refinementKey];
        };
      };

      var _loop = function _loop(i) {
        facet = facet && facet.data && Object(_find_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object.keys(facet.data).map(getFacetRefinement(facet.data)), function (refinement) {
          return refinement.name === nameParts[i];
        });
      };

      for (var i = 0; facet !== undefined && i < nameParts.length; ++i) {
        _loop(i);
      }

      count = facet && facet.count;
    })();
  } else {
    count = facet && facet.data && facet.data[res.name];
  }

  if (count !== undefined) {
    res.count = count;
  }

  if (facet && facet.exhaustive !== undefined) {
    res.exhaustive = facet.exhaustive;
  }

  return res;
}

function getRefinements(results, state) {
  var includesQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var refinements = [];
  var _state$facetsRefineme = state.facetsRefinements,
      facetsRefinements = _state$facetsRefineme === void 0 ? {} : _state$facetsRefineme,
      _state$facetsExcludes = state.facetsExcludes,
      facetsExcludes = _state$facetsExcludes === void 0 ? {} : _state$facetsExcludes,
      _state$disjunctiveFac = state.disjunctiveFacetsRefinements,
      disjunctiveFacetsRefinements = _state$disjunctiveFac === void 0 ? {} : _state$disjunctiveFac,
      _state$hierarchicalFa = state.hierarchicalFacetsRefinements,
      hierarchicalFacetsRefinements = _state$hierarchicalFa === void 0 ? {} : _state$hierarchicalFa,
      _state$numericRefinem = state.numericRefinements,
      numericRefinements = _state$numericRefinem === void 0 ? {} : _state$numericRefinem,
      _state$tagRefinements = state.tagRefinements,
      tagRefinements = _state$tagRefinements === void 0 ? [] : _state$tagRefinements;
  Object.keys(facetsRefinements).forEach(function (attribute) {
    var refinementNames = facetsRefinements[attribute];
    refinementNames.forEach(function (refinementName) {
      refinements.push(getRefinement(state, 'facet', attribute, refinementName, results.facets));
    });
  });
  Object.keys(facetsExcludes).forEach(function (attribute) {
    var refinementNames = facetsExcludes[attribute];
    refinementNames.forEach(function (refinementName) {
      refinements.push({
        type: 'exclude',
        attribute: attribute,
        name: refinementName,
        exclude: true
      });
    });
  });
  Object.keys(disjunctiveFacetsRefinements).forEach(function (attribute) {
    var refinementNames = disjunctiveFacetsRefinements[attribute];
    refinementNames.forEach(function (refinementName) {
      refinements.push(getRefinement(state, 'disjunctive', attribute, // We unescape any disjunctive refined values with `unescapeFacetValue` because
      // they can be escaped on negative numeric values with `escapeFacetValue`.
      Object(_escapeFacetValue_js__WEBPACK_IMPORTED_MODULE_1__[/* unescapeFacetValue */ "b"])(refinementName), results.disjunctiveFacets));
    });
  });
  Object.keys(hierarchicalFacetsRefinements).forEach(function (attribute) {
    var refinementNames = hierarchicalFacetsRefinements[attribute];
    refinementNames.forEach(function (refinement) {
      refinements.push(getRefinement(state, 'hierarchical', attribute, refinement, results.hierarchicalFacets));
    });
  });
  Object.keys(numericRefinements).forEach(function (attribute) {
    var operators = numericRefinements[attribute];
    Object.keys(operators).forEach(function (operatorOriginal) {
      var operator = operatorOriginal;
      var valueOrValues = operators[operator];
      var refinementNames = Array.isArray(valueOrValues) ? valueOrValues : [valueOrValues];
      refinementNames.forEach(function (refinementName) {
        refinements.push({
          type: 'numeric',
          attribute: attribute,
          name: "".concat(refinementName),
          numericValue: refinementName,
          operator: operator
        });
      });
    });
  });
  tagRefinements.forEach(function (refinementName) {
    refinements.push({
      type: 'tag',
      attribute: '_tags',
      name: refinementName
    });
  });

  if (includesQuery && state.query && state.query.trim()) {
    refinements.push({
      attribute: 'query',
      type: 'query',
      name: state.query,
      query: state.query
    });
  }

  return refinements;
}

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSendEventForFacet; });
/* harmony import */ var _isFacetRefined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}


function createSendEventForFacet(_ref) {
  var instantSearchInstance = _ref.instantSearchInstance,
      helper = _ref.helper,
      attribute = _ref.attribute,
      widgetType = _ref.widgetType;

  var sendEventForFacet = function sendEventForFacet() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var eventType = args[0],
        facetValue = args[1],
        _args$ = args[2],
        eventName = _args$ === void 0 ? 'Filter Applied' : _args$;

    if (args.length === 1 && _typeof(args[0]) === 'object') {
      instantSearchInstance.sendEventToInsights(args[0]);
    } else if (eventType === 'click' && (args.length === 2 || args.length === 3)) {
      if (!Object(_isFacetRefined_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(helper, attribute, facetValue)) {
        // send event only when the facet is being checked "ON"
        instantSearchInstance.sendEventToInsights({
          insightsMethod: 'clickedFilters',
          widgetType: widgetType,
          eventType: eventType,
          payload: {
            eventName: eventName,
            index: helper.getIndex(),
            filters: ["".concat(attribute, ":").concat(facetValue)]
          },
          attribute: attribute
        });
      }
    } else if (false) {}
  };

  return sendEventForFacet;
}

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createSendEventForHits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBindEventForHits; });
/* harmony import */ var _serializer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * @jest-environment jsdom
 */




function chunk(arr) {
  var chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var chunks = [];

  for (var i = 0; i < Math.ceil(arr.length / chunkSize); i++) {
    chunks.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
  }

  return chunks;
}

var buildPayloads = function buildPayloads(_ref) {
  var index = _ref.index,
      widgetType = _ref.widgetType,
      methodName = _ref.methodName,
      args = _ref.args,
      isSearchStalled = _ref.isSearchStalled; // when there's only one argument, that means it's custom

  if (args.length === 1 && _typeof(args[0]) === 'object') {
    return [args[0]];
  }

  var eventType = args[0];
  var hits = args[1];
  var eventName = args[2];

  if (!hits) {
    if (false) {} else {
      return [];
    }
  }

  if ((eventType === 'click' || eventType === 'conversion') && !eventName) {
    if (false) {} else {
      return [];
    }
  }

  var hitsArray = Array.isArray(hits) ? removeEscapedFromHits(hits) : [hits];

  if (hitsArray.length === 0) {
    return [];
  }

  var queryID = hitsArray[0].__queryID;
  var hitsChunks = chunk(hitsArray);
  var objectIDsByChunk = hitsChunks.map(function (batch) {
    return batch.map(function (hit) {
      return hit.objectID;
    });
  });
  var positionsByChunk = hitsChunks.map(function (batch) {
    return batch.map(function (hit) {
      return hit.__position;
    });
  });

  if (eventType === 'view') {
    if (isSearchStalled) {
      return [];
    }

    return hitsChunks.map(function (batch, i) {
      return {
        insightsMethod: 'viewedObjectIDs',
        widgetType: widgetType,
        eventType: eventType,
        payload: {
          eventName: eventName || 'Hits Viewed',
          index: index,
          objectIDs: objectIDsByChunk[i]
        },
        hits: batch
      };
    });
  } else if (eventType === 'click') {
    return hitsChunks.map(function (batch, i) {
      return {
        insightsMethod: 'clickedObjectIDsAfterSearch',
        widgetType: widgetType,
        eventType: eventType,
        payload: {
          eventName: eventName,
          index: index,
          queryID: queryID,
          objectIDs: objectIDsByChunk[i],
          positions: positionsByChunk[i]
        },
        hits: batch
      };
    });
  } else if (eventType === 'conversion') {
    return hitsChunks.map(function (batch, i) {
      return {
        insightsMethod: 'convertedObjectIDsAfterSearch',
        widgetType: widgetType,
        eventType: eventType,
        payload: {
          eventName: eventName,
          index: index,
          queryID: queryID,
          objectIDs: objectIDsByChunk[i]
        },
        hits: batch
      };
    });
  } else if (false) {} else {
    return [];
  }
};

function removeEscapedFromHits(hits) {
  // remove `hits.__escaped` without mutating
  return hits.slice();
}

function createSendEventForHits(_ref2) {
  var instantSearchInstance = _ref2.instantSearchInstance,
      index = _ref2.index,
      widgetType = _ref2.widgetType;

  var sendEventForHits = function sendEventForHits() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var payloads = buildPayloads({
      widgetType: widgetType,
      index: index,
      methodName: 'sendEvent',
      args: args,
      isSearchStalled: instantSearchInstance._isSearchStalled
    });
    payloads.forEach(function (payload) {
      return instantSearchInstance.sendEventToInsights(payload);
    });
  };

  return sendEventForHits;
}
function createBindEventForHits(_ref3) {
  var index = _ref3.index,
      widgetType = _ref3.widgetType;

  var bindEventForHits = function bindEventForHits() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var payloads = buildPayloads({
      widgetType: widgetType,
      index: index,
      methodName: 'bindEvent',
      args: args,
      isSearchStalled: false
    });
    return payloads.length ? "data-insights-event=".concat(Object(_serializer_js__WEBPACK_IMPORTED_MODULE_0__[/* serializePayload */ "b"])(payloads)) : '';
  };

  return bindEventForHits;
}

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAbsolutePosition; });
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function addAbsolutePosition(hits, page, hitsPerPage) {
  return hits.map(function (hit, idx) {
    return _objectSpread(_objectSpread({}, hit), {}, {
      __position: hitsPerPage * page + idx + 1
    });
  });
}

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addQueryID; });
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function addQueryID(hits, queryID) {
  if (!queryID) {
    return hits;
  }

  return hits.map(function (hit) {
    return _objectSpread(_objectSpread({}, hit), {}, {
      __queryID: queryID
    });
  });
}

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isPrimitive(obj) {
  return obj !== Object(obj);
}

function isEqual(first, second) {
  if (first === second) {
    return true;
  }

  if (isPrimitive(first) || isPrimitive(second) || typeof first === 'function' || typeof second === 'function') {
    return first === second;
  }

  if (Object.keys(first).length !== Object.keys(second).length) {
    return false;
  }

  for (var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (!(key in second)) {
      return false;
    }

    if (!isEqual(first[key], second[key])) {
      return false;
    }
  }

  return true;
}

/* harmony default export */ __webpack_exports__["a"] = (isEqual);

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// This is the `Number.isFinite()` polyfill recommended by MDN.
// We do not provide any tests for this function.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
function isFiniteNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

/* harmony default export */ __webpack_exports__["a"] = (isFiniteNumber);

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function range(_ref) {
  var _ref$start = _ref.start,
      start = _ref$start === void 0 ? 0 : _ref$start,
      end = _ref.end,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step; // We can't divide by 0 so we re-assign the step to 1 if it happens.

  var limitStep = step === 0 ? 1 : step; // In some cases the array to create has a decimal length.
  // We therefore need to round the value.
  // Example:
  //   { start: 1, end: 5000, step: 500 }
  //   => Array length = (5000 - 1) / 500 = 9.998

  var arrayLength = Math.round((end - start) / limitStep);
  return _toConsumableArray(Array(arrayLength)).map(function (_, current) {
    return start + current * limitStep;
  });
}

/* harmony default export */ __webpack_exports__["a"] = (range);

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

/* harmony default export */ __webpack_exports__["a"] = (toArray);

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return safelyRunOnBrowser; });
// eslint-disable-next-line no-restricted-globals

/**
 * Runs code on browser environments safely.
 */
function safelyRunOnBrowser(callback) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    fallback: function fallback() {
      return undefined;
    }
  },
      fallback = _ref.fallback; // eslint-disable-next-line no-restricted-globals


  if (typeof window === 'undefined') {
    return fallback();
  } // eslint-disable-next-line no-restricted-globals


  return callback({
    window: window
  });
}

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getPropertyByPath(object, path) {
  var parts = Array.isArray(path) ? path : path.split('.');
  return parts.reduce(function (current, key) {
    return current && current[key];
  }, object);
}

/* harmony default export */ __webpack_exports__["a"] = (getPropertyByPath);

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createConcurrentSafePromise; });
// copied from
// https://github.com/algolia/autocomplete.js/blob/307a7acc4283e10a19cb7d067f04f1bea79dc56f/packages/autocomplete-core/src/utils/createConcurrentSafePromise.ts#L1:L1

/**
 * Creates a runner that executes promises in a concurrent-safe way.
 *
 * This is useful to prevent older promises to resolve after a newer promise,
 * otherwise resulting in stale resolved values.
 */
function createConcurrentSafePromise() {
  var basePromiseId = -1;
  var latestResolvedId = -1;
  var latestResolvedValue = undefined;
  return function runConcurrentSafePromise(promise) {
    var currentPromiseId = ++basePromiseId;
    return Promise.resolve(promise).then(function (x) {
      // The promise might take too long to resolve and get outdated. This would
      // result in resolving stale values.
      // When this happens, we ignore the promise value and return the one
      // coming from the latest resolved value.
      //
      // +----------------------------------+
      // |        100ms                     |
      // | run(1) +--->  R1                 |
      // |        300ms                     |
      // | run(2) +-------------> R2 (SKIP) |
      // |        200ms                     |
      // | run(3) +--------> R3             |
      // +----------------------------------+
      if (latestResolvedValue && currentPromiseId < latestResolvedId) {
        return latestResolvedValue;
      }

      latestResolvedId = currentPromiseId;
      latestResolvedValue = x;
      return x;
    });
  };
}

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
// Debounce a function call to the trailing edge.
// The debounced function returns a promise.
function debounce(func, wait) {
  var lastTimeout = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      if (lastTimeout) {
        clearTimeout(lastTimeout);
      }

      lastTimeout = setTimeout(function () {
        lastTimeout = null;
        Promise.resolve(func.apply(void 0, args)).then(resolve).catch(reject);
      }, wait);
    });
  };
}

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWidgetAttribute; });
function getWidgetAttribute(widget, initOptions) {
  var _widget$getWidgetRend;

  var renderState = (_widget$getWidgetRend = widget.getWidgetRenderState) === null || _widget$getWidgetRend === void 0 ? void 0 : _widget$getWidgetRend.call(widget, initOptions);
  var attribute = null;

  if (renderState && renderState.widgetParams) {
    // casting as widgetParams is checked just before
    var widgetParams = renderState.widgetParams;

    if (widgetParams.attribute) {
      attribute = widgetParams.attribute;
    } else if (Array.isArray(widgetParams.attributes)) {
      attribute = widgetParams.attributes[0];
    }
  }

  if (typeof attribute !== 'string') {
    throw new Error("Could not find the attribute of the widget:\n\n".concat(JSON.stringify(widget), "\n\nPlease check whether the widget's getWidgetRenderState returns widgetParams.attribute correctly."));
  }

  return attribute;
}

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var nextMicroTask = Promise.resolve();

var defer = function defer(callback) {
  var progress = null;
  var cancelled = false;

  var fn = function fn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (progress !== null) {
      return;
    }

    progress = nextMicroTask.then(function () {
      progress = null;

      if (cancelled) {
        cancelled = false;
        return;
      }

      callback.apply(void 0, args);
    });
  };

  fn.wait = function () {
    if (progress === null) {
      throw new Error('The deferred function should be called before calling `wait()`');
    }

    return progress;
  };

  fn.cancel = function () {
    if (progress === null) {
      return;
    }

    cancelled = true;
  };

  return fn;
};

/* harmony default export */ __webpack_exports__["a"] = (defer);

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return concatHighlightedParts; });
/* harmony import */ var _escape_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);

function concatHighlightedParts(parts) {
  var highlightPreTag = _escape_highlight_js__WEBPACK_IMPORTED_MODULE_0__[/* TAG_REPLACEMENT */ "b"].highlightPreTag,
      highlightPostTag = _escape_highlight_js__WEBPACK_IMPORTED_MODULE_0__[/* TAG_REPLACEMENT */ "b"].highlightPostTag;
  return parts.map(function (part) {
    return part.isHighlighted ? highlightPreTag + part.value + highlightPostTag : part.value;
  }).join('');
}

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHighlightedParts; });
/* harmony import */ var _escape_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);

function getHighlightedParts(highlightedValue) {
  var highlightPostTag = _escape_highlight_js__WEBPACK_IMPORTED_MODULE_0__[/* TAG_REPLACEMENT */ "b"].highlightPostTag,
      highlightPreTag = _escape_highlight_js__WEBPACK_IMPORTED_MODULE_0__[/* TAG_REPLACEMENT */ "b"].highlightPreTag;
  var splitByPreTag = highlightedValue.split(highlightPreTag);
  var firstValue = splitByPreTag.shift();
  var elements = !firstValue ? [] : [{
    value: firstValue,
    isHighlighted: false
  }];
  splitByPreTag.forEach(function (split) {
    var splitByPostTag = split.split(highlightPostTag);
    elements.push({
      value: splitByPostTag[0],
      isHighlighted: true
    });

    if (splitByPostTag[1] !== '') {
      elements.push({
        value: splitByPostTag[1],
        isHighlighted: false
      });
    }
  });
  return elements;
}

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reverseHighlightedParts; });
/* harmony import */ var _getHighlightFromSiblings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(289);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


function reverseHighlightedParts(parts) {
  if (!parts.some(function (part) {
    return part.isHighlighted;
  })) {
    return parts.map(function (part) {
      return _objectSpread(_objectSpread({}, part), {}, {
        isHighlighted: false
      });
    });
  }

  return parts.map(function (part, i) {
    return _objectSpread(_objectSpread({}, part), {}, {
      isHighlighted: !Object(_getHighlightFromSiblings_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(parts, i)
    });
  });
}

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var resolveSearchParameters = function resolveSearchParameters(current) {
  var parent = current.getParent();
  var states = [current.getHelper().state];

  while (parent !== null) {
    states = [parent.getHelper().state].concat(states);
    parent = parent.getParent();
  }

  return states;
};

/* harmony default export */ __webpack_exports__["a"] = (resolveSearchParameters);

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexWidget", function() { return isIndexWidget; });
/* harmony import */ var algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209);
/* harmony import */ var algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(279);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(300);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(319);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var withUsage = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__[/* createDocumentationMessageGenerator */ "b"])({
  name: 'index-widget'
});
function isIndexWidget(widget) {
  return widget.$$type === 'ais.index';
}
/**
 * This is the same content as helper._change / setState, but allowing for extra
 * UiState to be synchronized.
 * see: https://github.com/algolia/algoliasearch-helper-js/blob/6b835ffd07742f2d6b314022cce6848f5cfecd4a/src/algoliasearch.helper.js#L1311-L1324
 */

function privateHelperSetState(helper, _ref) {
  var state = _ref.state,
      isPageReset = _ref.isPageReset,
      _uiState = _ref._uiState;

  if (state !== helper.state) {
    helper.state = state;
    helper.emit('change', {
      state: helper.state,
      results: helper.lastResults,
      isPageReset: isPageReset,
      _uiState: _uiState
    });
  }
}

function getLocalWidgetsUiState(widgets, widgetStateOptions) {
  var initialUiState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return widgets.reduce(function (uiState, widget) {
    if (isIndexWidget(widget)) {
      return uiState;
    }

    if (!widget.getWidgetUiState && !widget.getWidgetState) {
      return uiState;
    }

    if (widget.getWidgetUiState) {
      return widget.getWidgetUiState(uiState, widgetStateOptions);
    }

    return widget.getWidgetState(uiState, widgetStateOptions);
  }, initialUiState);
}

function getLocalWidgetsSearchParameters(widgets, widgetSearchParametersOptions) {
  var initialSearchParameters = widgetSearchParametersOptions.initialSearchParameters,
      rest = _objectWithoutProperties(widgetSearchParametersOptions, ["initialSearchParameters"]);

  return widgets.filter(function (widget) {
    return !isIndexWidget(widget);
  }).reduce(function (state, widget) {
    if (!widget.getWidgetSearchParameters) {
      return state;
    }

    return widget.getWidgetSearchParameters(state, rest);
  }, initialSearchParameters);
}

function resetPageFromWidgets(widgets) {
  var indexWidgets = widgets.filter(isIndexWidget);

  if (indexWidgets.length === 0) {
    return;
  }

  indexWidgets.forEach(function (widget) {
    var widgetHelper = widget.getHelper();
    privateHelperSetState(widgetHelper, {
      state: widgetHelper.state.resetPage(),
      isPageReset: true
    });
    resetPageFromWidgets(widget.getWidgets());
  });
}

function resolveScopedResultsFromWidgets(widgets) {
  var indexWidgets = widgets.filter(isIndexWidget);
  return indexWidgets.reduce(function (scopedResults, current) {
    return scopedResults.concat.apply(scopedResults, [{
      indexId: current.getIndexId(),
      results: current.getResults(),
      helper: current.getHelper()
    }].concat(_toConsumableArray(resolveScopedResultsFromWidgets(current.getWidgets()))));
  }, []);
}

var index = function index(widgetParams) {
  if (widgetParams === undefined || widgetParams.indexName === undefined) {
    throw new Error(withUsage('The `indexName` option is required.'));
  }

  var indexName = widgetParams.indexName,
      _widgetParams$indexId = widgetParams.indexId,
      indexId = _widgetParams$indexId === void 0 ? indexName : _widgetParams$indexId;
  var localWidgets = [];
  var localUiState = {};
  var localInstantSearchInstance = null;
  var localParent = null;
  var helper = null;
  var derivedHelper = null;
  return {
    $$type: 'ais.index',
    $$widgetType: 'ais.index',
    getIndexName: function getIndexName() {
      return indexName;
    },
    getIndexId: function getIndexId() {
      return indexId;
    },
    getHelper: function getHelper() {
      return helper;
    },
    getResults: function getResults() {
      return derivedHelper && derivedHelper.lastResults;
    },
    getScopedResults: function getScopedResults() {
      var widgetParent = this.getParent(); // If the widget is the root, we consider itself as the only sibling.

      var widgetSiblings = widgetParent ? widgetParent.getWidgets() : [this];
      return resolveScopedResultsFromWidgets(widgetSiblings);
    },
    getParent: function getParent() {
      return localParent;
    },
    createURL: function createURL(nextState) {
      return localInstantSearchInstance._createURL(_defineProperty({}, indexId, getLocalWidgetsUiState(localWidgets, {
        searchParameters: nextState,
        helper: helper
      })));
    },
    getWidgets: function getWidgets() {
      return localWidgets;
    },
    addWidgets: function addWidgets(widgets) {
      var _this = this;

      if (!Array.isArray(widgets)) {
        throw new Error(withUsage('The `addWidgets` method expects an array of widgets.'));
      }

      if (widgets.some(function (widget) {
        return typeof widget.init !== 'function' && typeof widget.render !== 'function';
      })) {
        throw new Error(withUsage('The widget definition expects a `render` and/or an `init` method.'));
      }

      localWidgets = localWidgets.concat(widgets);

      if (localInstantSearchInstance && Boolean(widgets.length)) {
        privateHelperSetState(helper, {
          state: getLocalWidgetsSearchParameters(localWidgets, {
            uiState: localUiState,
            initialSearchParameters: helper.state
          }),
          _uiState: localUiState
        }); // We compute the render state before calling `init` in a separate loop
        // to construct the whole render state object that is then passed to
        // `init`.

        widgets.forEach(function (widget) {
          if (widget.getRenderState) {
            var renderState = widget.getRenderState(localInstantSearchInstance.renderState[_this.getIndexId()] || {}, {
              uiState: localInstantSearchInstance._initialUiState,
              helper: _this.getHelper(),
              parent: _this,
              instantSearchInstance: localInstantSearchInstance,
              state: helper.state,
              renderState: localInstantSearchInstance.renderState,
              templatesConfig: localInstantSearchInstance.templatesConfig,
              createURL: _this.createURL,
              scopedResults: [],
              searchMetadata: {
                isSearchStalled: localInstantSearchInstance._isSearchStalled
              }
            });
            storeRenderState({
              renderState: renderState,
              instantSearchInstance: localInstantSearchInstance,
              parent: _this
            });
          }
        });
        widgets.forEach(function (widget) {
          if (widget.init) {
            widget.init({
              helper: helper,
              parent: _this,
              uiState: localInstantSearchInstance._initialUiState,
              instantSearchInstance: localInstantSearchInstance,
              state: helper.state,
              renderState: localInstantSearchInstance.renderState,
              templatesConfig: localInstantSearchInstance.templatesConfig,
              createURL: _this.createURL,
              scopedResults: [],
              searchMetadata: {
                isSearchStalled: localInstantSearchInstance._isSearchStalled
              }
            });
          }
        });
        localInstantSearchInstance.scheduleSearch();
      }

      return this;
    },
    removeWidgets: function removeWidgets(widgets) {
      var _this2 = this;

      if (!Array.isArray(widgets)) {
        throw new Error(withUsage('The `removeWidgets` method expects an array of widgets.'));
      }

      if (widgets.some(function (widget) {
        return typeof widget.dispose !== 'function';
      })) {
        throw new Error(withUsage('The widget definition expects a `dispose` method.'));
      }

      localWidgets = localWidgets.filter(function (widget) {
        return widgets.indexOf(widget) === -1;
      });

      if (localInstantSearchInstance && Boolean(widgets.length)) {
        var nextState = widgets.reduce(function (state, widget) {
          // the `dispose` method exists at this point we already assert it
          var next = widget.dispose({
            helper: helper,
            state: state,
            parent: _this2
          });
          return next || state;
        }, helper.state);
        localUiState = getLocalWidgetsUiState(localWidgets, {
          searchParameters: nextState,
          helper: helper
        });
        helper.setState(getLocalWidgetsSearchParameters(localWidgets, {
          uiState: localUiState,
          initialSearchParameters: nextState
        }));

        if (localWidgets.length) {
          localInstantSearchInstance.scheduleSearch();
        }
      }

      return this;
    },
    init: function init(_ref2) {
      var _this3 = this,
          _instantSearchInstanc;

      var instantSearchInstance = _ref2.instantSearchInstance,
          parent = _ref2.parent,
          uiState = _ref2.uiState;

      if (helper !== null) {
        // helper is already initialized, therefore we do not need to set up
        // any listeners
        return;
      }

      localInstantSearchInstance = instantSearchInstance;
      localParent = parent;
      localUiState = uiState[indexId] || {}; // The `mainHelper` is already defined at this point. The instance is created
      // inside InstantSearch at the `start` method, which occurs before the `init`
      // step.

      var mainHelper = instantSearchInstance.mainHelper;
      var parameters = getLocalWidgetsSearchParameters(localWidgets, {
        uiState: localUiState,
        initialSearchParameters: new algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default.a.SearchParameters({
          index: indexName
        })
      }); // This Helper is only used for state management we do not care about the
      // `searchClient`. Only the "main" Helper created at the `InstantSearch`
      // level is aware of the client.

      helper = algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default()({}, parameters.index, parameters); // We forward the call to `search` to the "main" instance of the Helper
      // which is responsible for managing the queries (it's the only one that is
      // aware of the `searchClient`).

      helper.search = function () {
        if (instantSearchInstance.onStateChange) {
          instantSearchInstance.onStateChange({
            uiState: instantSearchInstance.mainIndex.getWidgetUiState({}),
            setUiState: instantSearchInstance.setUiState.bind(instantSearchInstance)
          }); // We don't trigger a search when controlled because it becomes the
          // responsibility of `setUiState`.

          return mainHelper;
        }

        return mainHelper.search();
      };

      helper.searchWithoutTriggeringOnStateChange = function () {
        return mainHelper.search();
      }; // We use the same pattern for the `searchForFacetValues`.


      helper.searchForFacetValues = function (facetName, facetValue, maxFacetHits, userState) {
        var state = helper.state.setQueryParameters(userState);
        return mainHelper.searchForFacetValues(facetName, facetValue, maxFacetHits, state);
      };

      derivedHelper = mainHelper.derive(function () {
        return _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].apply(void 0, _toConsumableArray(Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this3)));
      });
      var indexInitialResults = (_instantSearchInstanc = instantSearchInstance._initialResults) === null || _instantSearchInstanc === void 0 ? void 0 : _instantSearchInstanc[this.getIndexId()];

      if (indexInitialResults) {
        // We restore the shape of the results provided to the instance to respect
        // the helper's structure.
        var results = new algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default.a.SearchResults(new algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default.a.SearchParameters(indexInitialResults.state), indexInitialResults.results);
        derivedHelper.lastResults = results;
        helper.lastResults = results;
      } // Subscribe to the Helper state changes for the page before widgets
      // are initialized. This behavior mimics the original one of the Helper.
      // It makes sense to replicate it at the `init` step. We have another
      // listener on `change` below, once `init` is done.


      helper.on('change', function (_ref3) {
        var isPageReset = _ref3.isPageReset;

        if (isPageReset) {
          resetPageFromWidgets(localWidgets);
        }
      });
      derivedHelper.on('search', function () {
        // The index does not manage the "staleness" of the search. This is the
        // responsibility of the main instance. It does not make sense to manage
        // it at the index level because it's either: all of them or none of them
        // that are stalled. The queries are performed into a single network request.
        instantSearchInstance.scheduleStalledRender();

        if (false) {}
      });
      derivedHelper.on('result', function (_ref4) {
        var results = _ref4.results; // The index does not render the results it schedules a new render
        // to let all the other indices emit their own results. It allows us to
        // run the render process in one pass.

        instantSearchInstance.scheduleRender(); // the derived helper is the one which actually searches, but the helper
        // which is exposed e.g. via instance.helper, doesn't search, and thus
        // does not have access to lastResults, which it used to in pre-federated
        // search behavior.

        helper.lastResults = results;
      }); // We compute the render state before calling `init` in a separate loop
      // to construct the whole render state object that is then passed to
      // `init`.

      localWidgets.forEach(function (widget) {
        if (widget.getRenderState) {
          var renderState = widget.getRenderState(instantSearchInstance.renderState[_this3.getIndexId()] || {}, {
            uiState: uiState,
            helper: helper,
            parent: _this3,
            instantSearchInstance: instantSearchInstance,
            state: helper.state,
            renderState: instantSearchInstance.renderState,
            templatesConfig: instantSearchInstance.templatesConfig,
            createURL: _this3.createURL,
            scopedResults: [],
            searchMetadata: {
              isSearchStalled: instantSearchInstance._isSearchStalled
            }
          });
          storeRenderState({
            renderState: renderState,
            instantSearchInstance: instantSearchInstance,
            parent: _this3
          });
        }
      });
      localWidgets.forEach(function (widget) {
         false ? undefined : void 0;

        if (widget.init) {
          widget.init({
            uiState: uiState,
            helper: helper,
            parent: _this3,
            instantSearchInstance: instantSearchInstance,
            state: helper.state,
            renderState: instantSearchInstance.renderState,
            templatesConfig: instantSearchInstance.templatesConfig,
            createURL: _this3.createURL,
            scopedResults: [],
            searchMetadata: {
              isSearchStalled: instantSearchInstance._isSearchStalled
            }
          });
        }
      }); // Subscribe to the Helper state changes for the `uiState` once widgets
      // are initialized. Until the first render, state changes are part of the
      // configuration step. This is mainly for backward compatibility with custom
      // widgets. When the subscription happens before the `init` step, the (static)
      // configuration of the widget is pushed in the URL. That's what we want to avoid.
      // https://github.com/algolia/instantsearch.js/pull/994/commits/4a672ae3fd78809e213de0368549ef12e9dc9454

      helper.on('change', function (event) {
        var state = event.state;
        var _uiState = event._uiState;
        localUiState = getLocalWidgetsUiState(localWidgets, {
          searchParameters: state,
          helper: helper
        }, _uiState || {}); // We don't trigger an internal change when controlled because it
        // becomes the responsibility of `setUiState`.

        if (!instantSearchInstance.onStateChange) {
          instantSearchInstance.onInternalStateChange();
        }
      });

      if (indexInitialResults) {
        // If there are initial results, we're not notified of the next results
        // because we don't trigger an initial search. We therefore need to directly
        // schedule a render that will render the results injected on the helper.
        instantSearchInstance.scheduleRender();
      }
    },
    render: function render(_ref5) {
      var _this4 = this;

      var instantSearchInstance = _ref5.instantSearchInstance;

      if (!this.getResults()) {
        return;
      }

      localWidgets.forEach(function (widget) {
        if (widget.getRenderState) {
          var renderState = widget.getRenderState(instantSearchInstance.renderState[_this4.getIndexId()] || {}, {
            helper: _this4.getHelper(),
            parent: _this4,
            instantSearchInstance: instantSearchInstance,
            results: _this4.getResults(),
            scopedResults: _this4.getScopedResults(),
            state: _this4.getResults()._state,
            renderState: instantSearchInstance.renderState,
            templatesConfig: instantSearchInstance.templatesConfig,
            createURL: _this4.createURL,
            searchMetadata: {
              isSearchStalled: instantSearchInstance._isSearchStalled
            }
          });
          storeRenderState({
            renderState: renderState,
            instantSearchInstance: instantSearchInstance,
            parent: _this4
          });
        }
      });
      localWidgets.forEach(function (widget) {
        // At this point, all the variables used below are set. Both `helper`
        // and `derivedHelper` have been created at the `init` step. The attribute
        // `lastResults` might be `null` though. It's possible that a stalled render
        // happens before the result e.g with a dynamically added index the request might
        // be delayed. The render is triggered for the complete tree but some parts do
        // not have results yet.
        if (widget.render) {
          widget.render({
            helper: helper,
            parent: _this4,
            instantSearchInstance: instantSearchInstance,
            results: _this4.getResults(),
            scopedResults: _this4.getScopedResults(),
            state: _this4.getResults()._state,
            renderState: instantSearchInstance.renderState,
            templatesConfig: instantSearchInstance.templatesConfig,
            createURL: _this4.createURL,
            searchMetadata: {
              isSearchStalled: instantSearchInstance._isSearchStalled
            }
          });
        }
      });
    },
    dispose: function dispose() {
      var _this5 = this;

      localWidgets.forEach(function (widget) {
        if (widget.dispose) {
          // The dispose function is always called once the instance is started
          // (it's an effect of `removeWidgets`). The index is initialized and
          // the Helper is available. We don't care about the return value of
          // `dispose` because the index is removed. We can't call `removeWidgets`
          // because we want to keep the widgets on the instance, to allow idempotent
          // operations on `add` & `remove`.
          widget.dispose({
            helper: helper,
            state: helper.state,
            parent: _this5
          });
        }
      });
      localInstantSearchInstance = null;
      localParent = null;
      helper.removeAllListeners();
      helper = null;
      derivedHelper.detach();
      derivedHelper = null;
    },
    getWidgetUiState: function getWidgetUiState(uiState) {
      return localWidgets.filter(isIndexWidget).reduce(function (previousUiState, innerIndex) {
        return innerIndex.getWidgetUiState(previousUiState);
      }, _objectSpread(_objectSpread({}, uiState), {}, _defineProperty({}, this.getIndexId(), localUiState)));
    },
    getWidgetState: function getWidgetState(uiState) {
       false ? undefined : void 0;
      return this.getWidgetUiState(uiState);
    },
    getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
      var uiState = _ref6.uiState;
      return getLocalWidgetsSearchParameters(localWidgets, {
        uiState: uiState,
        initialSearchParameters: searchParameters
      });
    },
    refreshUiState: function refreshUiState() {
      localUiState = getLocalWidgetsUiState(localWidgets, {
        searchParameters: this.getHelper().state,
        helper: this.getHelper()
      }, localUiState);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (index);

function storeRenderState(_ref7) {
  var renderState = _ref7.renderState,
      instantSearchInstance = _ref7.instantSearchInstance,
      parent = _ref7.parent;
  var parentIndexName = parent ? parent.getIndexId() : instantSearchInstance.mainIndex.getIndexId();
  instantSearchInstance.renderState = _objectSpread(_objectSpread({}, instantSearchInstance.renderState), {}, _defineProperty({}, parentIndexName, _objectSpread(_objectSpread({}, instantSearchInstance.renderState[parentIndexName]), renderState)));
}

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('4.45.0');

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(323);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _utils_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _utils_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _algoliasearch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(324);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _algoliasearch_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _algoliasearch_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(325);
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_results_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _results_js__WEBPACK_IMPORTED_MODULE_2__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _results_js__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(326);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_component_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _component_js__WEBPACK_IMPORTED_MODULE_3__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _component_js__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _instantsearch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(327);
/* harmony import */ var _instantsearch_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_instantsearch_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _instantsearch_js__WEBPACK_IMPORTED_MODULE_4__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _instantsearch_js__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _middleware_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(328);
/* harmony import */ var _middleware_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_middleware_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _middleware_js__WEBPACK_IMPORTED_MODULE_5__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _middleware_js__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(329);
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_router_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _router_js__WEBPACK_IMPORTED_MODULE_6__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _router_js__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _insights_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(330);
/* harmony import */ var _insights_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_insights_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _insights_js__WEBPACK_IMPORTED_MODULE_7__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _insights_js__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _connector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(331);
/* harmony import */ var _connector_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_connector_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _connector_js__WEBPACK_IMPORTED_MODULE_8__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _connector_js__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _widget_factory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(332);
/* harmony import */ var _widget_factory_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_widget_factory_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _widget_factory_js__WEBPACK_IMPORTED_MODULE_9__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _widget_factory_js__WEBPACK_IMPORTED_MODULE_9__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _widget_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(333);
/* harmony import */ var _widget_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_widget_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _widget_js__WEBPACK_IMPORTED_MODULE_10__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _widget_js__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ui_state_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(334);
/* harmony import */ var _ui_state_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ui_state_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ui_state_js__WEBPACK_IMPORTED_MODULE_11__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ui_state_js__WEBPACK_IMPORTED_MODULE_11__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _render_state_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(335);
/* harmony import */ var _render_state_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_render_state_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _render_state_js__WEBPACK_IMPORTED_MODULE_12__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _render_state_js__WEBPACK_IMPORTED_MODULE_12__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(336);
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_templates_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _templates_js__WEBPACK_IMPORTED_MODULE_13__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _templates_js__WEBPACK_IMPORTED_MODULE_13__[key]; }) }(__WEBPACK_IMPORT_KEY__));
// internal
 // Algolia-related
// eslint-disable-next-line import/export


 // component-related

 // instantsearch-related




 // widget-related








/***/ }),

/***/ 323:
/***/ (function(module, exports) {



/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var algoliasearch_helper_types_algoliasearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var algoliasearch_helper_types_algoliasearch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_helper_types_algoliasearch_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in algoliasearch_helper_types_algoliasearch_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return algoliasearch_helper_types_algoliasearch_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ 325:
/***/ (function(module, exports) {



/***/ }),

/***/ 326:
/***/ (function(module, exports) {



/***/ }),

/***/ 327:
/***/ (function(module, exports) {



/***/ }),

/***/ 328:
/***/ (function(module, exports) {



/***/ }),

/***/ 329:
/***/ (function(module, exports) {



/***/ }),

/***/ 330:
/***/ (function(module, exports) {



/***/ }),

/***/ 331:
/***/ (function(module, exports) {



/***/ }),

/***/ 332:
/***/ (function(module, exports) {



/***/ }),

/***/ 333:
/***/ (function(module, exports) {



/***/ }),

/***/ 334:
/***/ (function(module, exports) {



/***/ }),

/***/ 335:
/***/ (function(module, exports) {



/***/ }),

/***/ 336:
/***/ (function(module, exports) {



/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./informatica.webp": 339,
	"./marketing.webp": 340,
	"./matematica.webp": 341,
	"./sin-seccion.webp": 342
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 338;

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/informatica.fa3c667.webp";

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/marketing.54862fd.webp";

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/matematica.761aff7.webp";

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sin-seccion.0b23ce7.webp";

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(220);

__webpack_require__(221);

__webpack_require__(222);

__webpack_require__(223);

__webpack_require__(224);

__webpack_require__(225);

__webpack_require__(226);

__webpack_require__(227);

__webpack_require__(228);

__webpack_require__(229);

__webpack_require__(230);

__webpack_require__(231);

__webpack_require__(232);

__webpack_require__(233);

__webpack_require__(234);

__webpack_require__(235);

__webpack_require__(196);

__webpack_require__(197);

__webpack_require__(198);

__webpack_require__(199);

__webpack_require__(200);

__webpack_require__(201);

__webpack_require__(202);

__webpack_require__(203);

__webpack_require__(204);

__webpack_require__(205);

__webpack_require__(206);

__webpack_require__(207);

__webpack_require__(208);

function _interopDefault(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var connectors = __webpack_require__(347),
    Vue = _interopDefault(__webpack_require__(1)),
    utils = __webpack_require__(268),
    indexWidget = _interopDefault(__webpack_require__(320)),
    instantsearch = _interopDefault(__webpack_require__(346));

function suit(e, t, n) {
  if (!e) throw new Error("You need to provide `widgetName` in your data");
  var i = ["ais-" + e];
  return t && i.push("-" + t), n && i.push("--" + n), i.join("");
}

var createSuitMixin = function (e) {
  var t = e.name;
  return {
    props: {
      classNames: {
        type: Object,
        default: void 0
      }
    },
    methods: {
      suit: function (e, n) {
        var i = suit(t, e, n),
            s = this.classNames && this.classNames[i];
        return s ? [i, s].join(" ") : i;
      }
    }
  };
},
    cache = new Set();

function warn(e) {
  cache.has(e) || (cache.add(e), console.warn(e));
}

var createWidgetMixin = function (e) {
  void 0 === e && (e = {});
  var t = e.connector;
  return {
    inject: {
      instantSearchInstance: {
        from: "$_ais_instantSearchInstance",
        default: function () {
          var e = this.$options._componentTag;
          throw new TypeError('It looks like you forgot to wrap your Algolia search component "<' + e + '>" inside of an "<ais-instant-search>" component.');
        }
      },
      getParentIndex: {
        from: "$_ais_getParentIndex",
        default: function () {
          var e = this;
          return function () {
            return e.instantSearchInstance.mainIndex;
          };
        }
      }
    },
    data: function () {
      return {
        state: null
      };
    },
    created: function () {
      if ("function" == typeof t) {
        if (this.factory = t(this.updateState, function () {}), this.widget = this.factory(this.widgetParams), this.getParentIndex().addWidgets([this.widget]), this.instantSearchInstance._initialResults && !this.instantSearchInstance.started) {
          if ("function" != typeof this.instantSearchInstance.__forceRender) throw new Error("You are using server side rendering with <ais-instant-search> instead of <ais-instant-search-ssr>.");

          this.instantSearchInstance.__forceRender(this.widget, this.getParentIndex());
        }
      } else !0 !== t && warn("You are using the InstantSearch widget mixin, but didn't provide a connector.\nWhile this is technically possible, and will give you access to the Helper,\nit's not the recommended way of making custom components.\n\nIf you want to disable this message, pass { connector: true } to the mixin.\n\nRead more on using connectors: https://alg.li/vue-custom");
    },
    beforeDestroy: function () {
      this.widget && this.getParentIndex().removeWidgets([this.widget]);
    },
    watch: {
      widgetParams: {
        handler: function (e) {
          this.state = null, this.getParentIndex().removeWidgets([this.widget]), this.widget = this.factory(e), this.getParentIndex().addWidgets([this.widget]);
        },
        deep: !0
      }
    },
    methods: {
      updateState: function (e, t) {
        void 0 === e && (e = {}), t || (this.state = e);
      }
    }
  };
},
    Autocomplete = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("p", [e._v("This widget doesn't render anything without a filled in default slot.")]), e._v(" "), n("p", [e._v("query, function to refine and results are provided.")]), e._v(" "), n("pre", [e._v("refine: Function")]), e._v(" "), n("pre", [e._v('currentRefinement: "' + e._s(e.state.currentRefinement) + '"')]), e._v(" "), n("details", [e._m(0), e._v(" "), n("pre", [e._v(e._s(e.state.indices))])])], {
      refine: e.state.refine,
      currentRefinement: e.state.currentRefinement,
      indices: e.state.indices
    })], 2) : e._e();
  },
  staticRenderFns: [function () {
    var e = this.$createElement,
        t = this._self._c || e;
    return t("summary", [t("code", [this._v("indices")]), this._v(":")]);
  }],
  name: "AisAutocomplete",
  mixins: [createWidgetMixin({
    connector: connectors.connectAutocomplete
  }), createSuitMixin({
    name: "Autocomplete"
  })],
  props: {
    escapeHTML: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        escapeHTML: this.escapeHTML
      };
    }
  }
},
    PANEL_EMITTER_NAMESPACE = "instantSearchPanelEmitter",
    PANEL_CHANGE_EVENT = "PANEL_CHANGE_EVENT",
    createPanelProviderMixin = function () {
  return {
    props: {
      emitter: {
        type: Object,
        required: !1,
        default: function () {
          return new Vue({
            name: "PanelProvider"
          });
        }
      }
    },
    provide: function () {
      var e;
      return (e = {})[PANEL_EMITTER_NAMESPACE] = this.emitter, e;
    },
    data: function () {
      return {
        canRefine: !0
      };
    },
    created: function () {
      var e = this;
      this.emitter.$on(PANEL_CHANGE_EVENT, function (t) {
        e.updateCanRefine(t);
      });
    },
    beforeDestroy: function () {
      this.emitter.$destroy();
    },
    methods: {
      updateCanRefine: function (e) {
        this.canRefine = e;
      }
    }
  };
},
    createPanelConsumerMixin = function (e) {
  var t = e.mapStateToCanRefine;
  return {
    inject: {
      emitter: {
        from: PANEL_EMITTER_NAMESPACE,
        default: function () {
          return {
            $emit: function () {}
          };
        }
      }
    },
    data: function () {
      return {
        state: null,
        hasAlreadyEmitted: !1
      };
    },
    watch: {
      state: {
        immediate: !0,
        handler: function (e, n) {
          if (e) {
            var i = t(n || {}),
                s = t(e);
            this.hasAlreadyEmitted && i === s || (this.emitter.$emit(PANEL_CHANGE_EVENT, s), this.hasAlreadyEmitted = !0);
          }
        }
      }
    }
  };
},
    Breadcrumb = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: [e.suit(), !e.state.canRefine && e.suit("", "noRefinement")]
    }, [e._t("default", [n("ul", {
      class: e.suit("list")
    }, [n("li", {
      class: [e.suit("item"), !e.state.items.length && e.suit("item", "selected")]
    }, [Boolean(e.state.items.length) ? n("a", {
      class: e.suit("link"),
      attrs: {
        href: e.state.createURL()
      },
      on: {
        click: function (t) {
          t.preventDefault(), e.state.refine();
        }
      }
    }, [e._t("rootLabel", [e._v("Home")])], 2) : n("span", [e._t("rootLabel", [e._v("Home")])], 2)]), e._v(" "), e._l(e.state.items, function (t, i) {
      return n("li", {
        key: t.label,
        class: [e.suit("item"), e.isLastItem(i) && e.suit("item", "selected")]
      }, [n("span", {
        class: e.suit("separator"),
        attrs: {
          "aria-hidden": "true"
        }
      }, [e._t("separator", [e._v(">")])], 2), e._v(" "), e.isLastItem(i) ? n("span", [e._v(e._s(t.label))]) : n("a", {
        class: e.suit("link"),
        attrs: {
          href: e.state.createURL(t.value)
        },
        on: {
          click: function (n) {
            n.preventDefault(), e.state.refine(t.value);
          }
        }
      }, [e._v(e._s(t.label))])]);
    })], 2)], {
      items: e.state.items,
      canRefine: e.state.canRefine,
      refine: e.state.refine,
      createURL: e.state.createURL
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisBreadcrumb",
  mixins: [createWidgetMixin({
    connector: connectors.connectBreadcrumb
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return Boolean(e.canRefine);
    }
  }), createSuitMixin({
    name: "Breadcrumb"
  })],
  props: {
    attributes: {
      type: Array,
      required: !0
    },
    separator: {
      type: String,
      default: void 0
    },
    rootPath: {
      type: String,
      default: void 0
    },
    transformItems: {
      type: Function,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        attributes: this.attributes,
        separator: this.separator,
        rootPath: this.rootPath,
        transformItems: this.transformItems
      };
    }
  },
  methods: {
    isLastItem: function (e) {
      return this.state.items.length - 1 === e;
    }
  }
},
    ClearRefinements = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("button", {
      class: [e.suit("button"), !e.canRefine && e.suit("button", "disabled")],
      attrs: {
        type: "reset",
        disabled: !e.canRefine
      },
      on: {
        click: function (t) {
          return t.preventDefault(), e.state.refine(t);
        }
      }
    }, [e._t("resetLabel", [e._v("Clear refinements")])], 2)], {
      canRefine: e.canRefine,
      refine: e.state.refine,
      createURL: e.state.createURL
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisClearRefinements",
  mixins: [createWidgetMixin({
    connector: connectors.connectClearRefinements
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return Boolean(e.hasRefinements);
    }
  }), createSuitMixin({
    name: "ClearRefinements"
  })],
  props: {
    excludedAttributes: {
      type: Array,
      default: void 0
    },
    includedAttributes: {
      type: Array,
      default: void 0
    },
    transformItems: {
      type: Function,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        includedAttributes: this.includedAttributes,
        excludedAttributes: this.excludedAttributes,
        transformItems: this.transformItems
      };
    },
    canRefine: function () {
      return this.state.hasRefinements;
    }
  }
},
    Configure = {
  inheritAttrs: !1,
  name: "AisConfigure",
  mixins: [createSuitMixin({
    name: "Configure"
  }), createWidgetMixin({
    connector: connectors.connectConfigure
  })],
  computed: {
    widgetParams: function () {
      return {
        searchParameters: this.$attrs
      };
    }
  },
  render: function (e) {
    return this.state && this.$scopedSlots.default ? e("div", {
      class: this.suit()
    }, [this.$scopedSlots.default({
      refine: this.state.refine,
      searchParameters: this.state.widgetParams.searchParameters
    })]) : null;
  }
},
    ConfigureRelatedItems = {
  inheritAttrs: !1,
  name: "AisExperimentalConfigureRelatedItems",
  mixins: [createWidgetMixin({
    connector: connectors.EXPERIMENTAL_connectConfigureRelatedItems
  })],
  props: {
    hit: {
      type: Object,
      required: !0
    },
    matchingPatterns: {
      type: Object,
      required: !0
    },
    transformSearchParameters: {
      type: Function,
      required: !1
    }
  },
  computed: {
    widgetParams: function () {
      return {
        hit: this.hit,
        matchingPatterns: this.matchingPatterns,
        transformSearchParameters: this.transformSearchParameters
      };
    }
  },
  render: function () {
    return null;
  }
},
    CurrentRefinements = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: [e.suit(), e.noRefinement && e.suit("", "noRefinement")]
    }, [e._t("default", [n("ul", {
      class: e.suit("list")
    }, e._l(e.state.items, function (t) {
      return n("li", {
        key: t.attribute,
        class: e.suit("item")
      }, [e._t("item", [n("span", {
        class: e.suit("label")
      }, [e._v(e._s(e._f("capitalize")(t.label)) + ": ")]), e._v(" "), e._l(t.refinements, function (i) {
        return n("span", {
          key: e.createItemKey(i),
          class: e.suit("category")
        }, [e._t("refinement", [n("span", {
          class: e.suit("categoryLabel")
        }, ["query" === i.attribute ? n("q", [e._v(e._s(i.label))]) : [e._v(" " + e._s(i.label) + " ")]], 2), e._v(" "), n("button", {
          class: e.suit("delete"),
          on: {
            click: function (e) {
              t.refine(i);
            }
          }
        }, [e._v(" ✕ ")])], {
          refine: t.refine,
          refinement: i,
          createURL: e.state.createURL
        })], 2);
      })], {
        refine: t.refine,
        item: t,
        createURL: e.state.createURL
      })], 2);
    }))], {
      refine: e.state.refine,
      items: e.state.items,
      createURL: e.state.createURL
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisCurrentRefinements",
  mixins: [createSuitMixin({
    name: "CurrentRefinements"
  }), createWidgetMixin({
    connector: connectors.connectCurrentRefinements
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return Boolean(e.items) && e.items.length > 0;
    }
  })],
  props: {
    includedAttributes: {
      type: Array,
      default: void 0
    },
    excludedAttributes: {
      type: Array,
      default: void 0
    },
    transformItems: {
      type: Function,
      default: void 0
    }
  },
  computed: {
    noRefinement: function () {
      return this.state && 0 === this.state.items.length;
    },
    widgetParams: function () {
      return {
        includedAttributes: this.includedAttributes,
        excludedAttributes: this.excludedAttributes,
        transformItems: this.transformItems
      };
    }
  },
  methods: {
    createItemKey: function (e) {
      var t = e.attribute,
          n = e.value;
      return [t, e.type, n, e.operator].join(":");
    }
  },
  filters: {
    capitalize: function (e) {
      return e ? e.toString().charAt(0).toLocaleUpperCase() + e.toString().slice(1) : "";
    }
  }
},
    HierarchicalMenuList = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return n("ul", {
      class: [e.suit("list"), e.level > 0 && e.suit("list", "child"), e.suit("list", "lvl" + e.level)]
    }, e._l(e.items, function (t) {
      return n("li", {
        key: t.value,
        class: [e.suit("item"), t.data && e.suit("item", "parent"), t.isRefined && e.suit("item", "selected")]
      }, [n("a", {
        class: e.suit("link"),
        attrs: {
          href: e.createURL(t.value)
        },
        on: {
          click: function (n) {
            n.preventDefault(), e.refine(t.value);
          }
        }
      }, [n("span", {
        class: e.suit("label")
      }, [e._v(e._s(t.label))]), e._v(" "), n("span", {
        class: e.suit("count")
      }, [e._v(e._s(t.count))])]), e._v(" "), t.data ? n("hierarchical-menu-list", {
        attrs: {
          items: t.data,
          level: e.level + 1,
          refine: e.refine,
          createURL: e.createURL,
          suit: e.suit
        }
      }) : e._e()], 1);
    }));
  },
  staticRenderFns: [],
  name: "HierarchicalMenuList",
  props: {
    items: {
      type: Array,
      required: !0
    },
    level: {
      type: Number,
      required: !0
    },
    refine: {
      type: Function,
      required: !0
    },
    createURL: {
      type: Function,
      required: !0
    },
    suit: {
      type: Function,
      required: !0
    }
  }
},
    mapStateToCanRefine = function (e) {
  return Boolean(e.items) && e.items.length > 0;
},
    HierarchicalMenu = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: [e.suit(), !e.canRefine && e.suit("", "noRefinement")]
    }, [e._t("default", [n("hierarchical-menu-list", {
      attrs: {
        items: e.state.items,
        level: 0,
        refine: e.state.refine,
        createURL: e.state.createURL,
        suit: e.suit
      }
    }), e._v(" "), e.showMore ? n("button", {
      class: [e.suit("showMore"), !e.state.canToggleShowMore && e.suit("showMore", "disabled")],
      attrs: {
        disabled: !e.state.canToggleShowMore
      },
      on: {
        click: function (t) {
          return t.preventDefault(), e.state.toggleShowMore(t);
        }
      }
    }, [e._t("showMoreLabel", [e._v(e._s(e.state.isShowingMore ? "Show less" : "Show more"))], {
      isShowingMore: e.state.isShowingMore
    })], 2) : e._e()], {
      items: e.state.items,
      canRefine: e.canRefine,
      canToggleShowMore: e.state.canToggleShowMore,
      isShowingMore: e.state.isShowingMore,
      refine: e.state.refine,
      createURL: e.state.createURL,
      toggleShowMore: e.state.toggleShowMore,
      sendEvent: e.state.sendEvent
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisHierarchicalMenu",
  mixins: [createSuitMixin({
    name: "HierarchicalMenu"
  }), createWidgetMixin({
    connector: connectors.connectHierarchicalMenu
  }), createPanelConsumerMixin({
    mapStateToCanRefine: mapStateToCanRefine
  })],
  components: {
    HierarchicalMenuList: HierarchicalMenuList
  },
  props: {
    attributes: {
      type: Array,
      required: !0
    },
    limit: {
      type: Number,
      default: void 0
    },
    showMoreLimit: {
      type: Number,
      default: void 0
    },
    showMore: {
      type: Boolean,
      default: !1
    },
    sortBy: {
      type: [Array, Function],
      default: void 0
    },
    separator: {
      type: String,
      default: void 0
    },
    rootPath: {
      type: String,
      default: void 0
    },
    showParentLevel: {
      type: Boolean,
      default: void 0
    },
    transformItems: {
      type: Function,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        attributes: this.attributes,
        limit: this.limit,
        showMore: this.showMore,
        showMoreLimit: this.showMoreLimit,
        separator: this.separator,
        rootPath: this.rootPath,
        showParentLevel: this.showParentLevel,
        sortBy: this.sortBy,
        transformItems: this.transformItems
      };
    },
    canRefine: function () {
      return mapStateToCanRefine(this.state);
    }
  }
},
    htmlUnescapes = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
},
    reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);

function unescape(e) {
  return e && reHasEscapedHtml.test(e) ? e.replace(reEscapedHtml, function (e) {
    return htmlUnescapes[e];
  }) : e;
}

var TAG_PLACEHOLDER = {
  highlightPreTag: "__ais-highlight__",
  highlightPostTag: "__/ais-highlight__"
};

function parseHighlightedAttribute(e) {
  var t = e.preTag,
      n = e.postTag,
      i = e.highlightedValue;
  void 0 === i && (i = "");
  var s = i.split(t),
      a = s.shift(),
      r = "" === a ? [] : [{
    value: a,
    isHighlighted: !1
  }];

  if (n === t) {
    var o = !0;
    s.forEach(function (e) {
      r.push({
        value: e,
        isHighlighted: o
      }), o = !o;
    });
  } else s.forEach(function (e) {
    var t = e.split(n);
    r.push({
      value: t[0],
      isHighlighted: !0
    }), "" !== t[1] && r.push({
      value: " " === t[1] ? "  " : t[1],
      isHighlighted: !1
    });
  });

  return r;
}

function parseAlgoliaHit(e) {
  var t = e.preTag;
  void 0 === t && (t = TAG_PLACEHOLDER.highlightPreTag);
  var n = e.postTag;
  void 0 === n && (n = TAG_PLACEHOLDER.highlightPostTag);
  var i = e.highlightProperty,
      s = e.attribute,
      a = e.hit;
  if (!a) throw new Error("`hit`, the matching record, must be provided");
  var r = utils.getPropertyByPath(a[i], s) || {};
  return Array.isArray(r) ? r.map(function (e) {
    return parseHighlightedAttribute({
      preTag: t,
      postTag: n,
      highlightedValue: unescape(e.value)
    });
  }) : parseHighlightedAttribute({
    preTag: t,
    postTag: n,
    highlightedValue: unescape(r.value)
  });
}

var AisHighlighter = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return n("span", {
      class: e.suit()
    }, e._l(e.parsedHighlights, function (t, i) {
      var s = t.value,
          a = t.isHighlighted;
      return n(a ? e.highlightedTagName : e.textNode, {
        key: i,
        tag: "component",
        class: [a && e.suit("highlighted")]
      }, [e._v(e._s(s))]);
    }), 1);
  },
  staticRenderFns: [],
  name: "AisHighlighter",
  props: {
    hit: {
      type: Object,
      required: !0
    },
    attribute: {
      type: String,
      required: !0
    },
    highlightedTagName: {
      type: String,
      default: "mark"
    },
    suit: {
      type: Function,
      required: !0
    },
    highlightProperty: {
      type: String,
      required: !0
    },
    preTag: {
      type: String,
      required: !0
    },
    postTag: {
      type: String,
      required: !0
    }
  },
  data: function () {
    return {
      textNode: {
        functional: !0,
        render: function (e, t) {
          return t.slots().default;
        }
      }
    };
  },
  computed: {
    parsedHighlights: function () {
      return parseAlgoliaHit({
        attribute: this.attribute,
        hit: this.hit,
        highlightProperty: this.highlightProperty,
        preTag: this.preTag,
        postTag: this.postTag
      });
    }
  }
},
    AisHighlight = {
  render: function () {
    var e = this.$createElement;
    return (this._self._c || e)("ais-highlighter", {
      attrs: {
        hit: this.hit,
        attribute: this.attribute,
        "highlighted-tag-name": this.highlightedTagName,
        suit: this.suit,
        "highlight-property": "_highlightResult",
        "pre-tag": "<mark>",
        "post-tag": "</mark>"
      }
    });
  },
  staticRenderFns: [],
  name: "AisHighlight",
  mixins: [createSuitMixin({
    name: "Highlight"
  })],
  components: {
    AisHighlighter: AisHighlighter
  },
  props: {
    hit: {
      type: Object,
      required: !0
    },
    attribute: {
      type: String,
      required: !0
    },
    highlightedTagName: {
      type: String,
      default: "mark"
    }
  }
},
    Hits = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("ol", {
      class: e.suit("list")
    }, e._l(e.items, function (t, i) {
      return n("li", {
        key: t.objectID,
        class: e.suit("item")
      }, [e._t("item", [e._v("objectID: " + e._s(t.objectID) + ", index: " + e._s(i))], {
        item: t,
        index: i,
        insights: e.state.insights
      })], 2);
    }))], {
      items: e.items,
      insights: e.state.insights,
      sendEvent: e.state.sendEvent
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisHits",
  mixins: [createWidgetMixin({
    connector: connectors.connectHitsWithInsights
  }), createSuitMixin({
    name: "Hits"
  })],
  props: {
    escapeHTML: {
      type: Boolean,
      default: !0
    },
    transformItems: {
      type: Function,
      default: void 0
    }
  },
  computed: {
    items: function () {
      return this.state.hits;
    },
    widgetParams: function () {
      return {
        escapeHTML: this.escapeHTML,
        transformItems: this.transformItems
      };
    }
  }
},
    HitsPerPage = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.selected,
        expression: "selected"
      }],
      class: e.suit("select"),
      on: {
        change: [function (t) {
          var n = Array.prototype.filter.call(t.target.options, function (e) {
            return e.selected;
          }).map(function (e) {
            return "_value" in e ? e._value : e.value;
          });
          e.selected = t.target.multiple ? n : n[0];
        }, e.handleChange]
      }
    }, e._l(e.state.items, function (t) {
      return n("option", {
        key: t.value,
        class: e.suit("option"),
        domProps: {
          value: t.value
        }
      }, [e._v(e._s(t.label))]);
    }))], {
      items: e.state.items,
      refine: e.state.refine,
      hasNoResults: e.state.hasNoResults
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisHitsPerPage",
  mixins: [createSuitMixin({
    name: "HitsPerPage"
  }), createWidgetMixin({
    connector: connectors.connectHitsPerPage
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return !1 === e.hasNoResults;
    }
  })],
  props: {
    items: {
      type: Array,
      required: !0
    },
    transformItems: {
      type: Function,
      default: void 0
    }
  },
  data: function () {
    return {
      selected: this.items.find(function (e) {
        return !0 === e.default;
      }).value
    };
  },
  computed: {
    widgetParams: function () {
      return {
        items: this.items,
        transformItems: this.transformItems
      };
    }
  },
  methods: {
    handleChange: function () {
      this.state.refine(this.selected);
    }
  }
},
    connectIndex = function () {
  return indexWidget;
},
    Index = {
  name: "AisIndex",
  mixins: [createSuitMixin({
    name: "Index"
  }), createWidgetMixin({
    connector: connectIndex
  })],
  provide: function () {
    var e = this;
    return {
      $_ais_getParentIndex: function () {
        return e.widget;
      }
    };
  },
  props: {
    indexName: {
      type: String,
      required: !0
    },
    indexId: {
      type: String,
      required: !1
    }
  },
  render: function (e) {
    return e("div", {}, this.$slots.default);
  },
  computed: {
    widgetParams: function () {
      return {
        indexName: this.indexName,
        indexId: this.indexId
      };
    }
  }
},
    version = "3.9.0";

function _objectSpread(e) {
  for (var t = arguments, n = 1; n < arguments.length; n++) {
    var i = null != t[n] ? t[n] : {},
        s = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable;
    }))), s.forEach(function (t) {
      _defineProperty(e, t, i[t]);
    });
  }

  return e;
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

var createInstantSearchComponent = function (e) {
  return _objectSpread({
    mixins: [createSuitMixin({
      name: "InstantSearch"
    })],
    provide: function () {
      return {
        $_ais_instantSearchInstance: this.instantSearchInstance
      };
    },
    watch: {
      searchClient: function (e) {
        this.instantSearchInstance.helper.setClient(e).search();
      },
      indexName: function (e) {
        this.instantSearchInstance.helper.setIndex(e).search();
      },
      stalledSearchDelay: function (e) {
        this.instantSearchInstance._stalledSearchDelay = e;
      },
      routing: function () {
        throw new Error("routing configuration can not be changed dynamically at this point.\n\nPlease open a new issue: https://github.com/algolia/vue-instantsearch/issues/new?template=feature.md");
      },
      searchFunction: function (e) {
        this.instantSearchInstance._searchFunction = e;
      },
      middlewares: {
        immediate: !0,
        handler: function (e, t) {
          var n = this;
          (t || []).filter(function (t) {
            return -1 === (e || []).indexOf(t);
          }).forEach(function (e) {
            n.instantSearchInstance.unuse(e);
          }), (e || []).filter(function (e) {
            return -1 === (t || []).indexOf(e);
          }).forEach(function (e) {
            n.instantSearchInstance.use(e);
          });
        }
      }
    },
    created: function () {
      var e = this.instantSearchInstance.client;
      "function" == typeof e.addAlgoliaAgent && (e.addAlgoliaAgent("Vue (" + Vue.version + ")"), e.addAlgoliaAgent("Vue InstantSearch (" + version + ")"));
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        e.instantSearchInstance.started || e.instantSearchInstance.start();
      });
    },
    beforeDestroy: function () {
      this.instantSearchInstance.started && this.instantSearchInstance.dispose(), this.instantSearchInstance.__initialSearchResults = void 0;
    }
  }, e);
},
    oldApiWarning = "Vue InstantSearch: You used the prop api-key or app-id.\nThese have been replaced by search-client.\n\nSee more info here: https://www.algolia.com/doc/api-reference/widgets/instantsearch/vue/#widget-param-search-client",
    InstantSearch = createInstantSearchComponent({
  name: "AisInstantSearch",
  props: {
    searchClient: {
      type: Object,
      required: !0
    },
    insightsClient: {
      type: Function,
      default: void 0
    },
    indexName: {
      type: String,
      required: !0
    },
    routing: {
      default: void 0,
      validator: function (e) {
        return !("boolean" == typeof e || !e.router && !e.stateMapping) || (warn("The `routing` option expects an object with `router` and/or `stateMapping`.\n\nSee https://www.algolia.com/doc/api-reference/widgets/instantsearch/vue/#widget-param-routing"), !1);
      }
    },
    stalledSearchDelay: {
      type: Number,
      default: void 0
    },
    searchFunction: {
      type: Function,
      default: void 0
    },
    initialUiState: {
      type: Object,
      default: void 0
    },
    apiKey: {
      type: String,
      default: void 0,
      validator: function (e) {
        return e && warn(oldApiWarning), !1;
      }
    },
    appId: {
      type: String,
      default: void 0,
      validator: function (e) {
        return e && warn(oldApiWarning), !1;
      }
    },
    middlewares: {
      type: Array,
      default: null
    }
  },
  data: function () {
    return {
      instantSearchInstance: instantsearch({
        searchClient: this.searchClient,
        insightsClient: this.insightsClient,
        indexName: this.indexName,
        routing: this.routing,
        stalledSearchDelay: this.stalledSearchDelay,
        searchFunction: this.searchFunction,
        initialUiState: this.initialUiState
      })
    };
  },
  render: function (e) {
    var t;
    return e("div", {
      class: (t = {}, t[this.suit()] = !0, t[this.suit("", "ssr")] = !1, t)
    }, this.$slots.default);
  }
}),
    InstantSearchSsr = createInstantSearchComponent({
  name: "AisInstantSearchSsr",
  inject: {
    $_ais_ssrInstantSearchInstance: {
      default: function () {
        throw new Error("`createServerRootMixin` is required when using SSR.");
      }
    }
  },
  data: function () {
    return {
      instantSearchInstance: this.$_ais_ssrInstantSearchInstance
    };
  },
  render: function (e) {
    var t;
    return e("div", {
      class: (t = {}, t[this.suit()] = !0, t[this.suit("", "ssr")] = !0, t)
    }, this.$slots.default);
  }
}),
    InfiniteHits = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e.showPrevious ? e._t("loadPrevious", [n("button", {
      class: [e.suit("loadPrevious"), e.state.isFirstPage && e.suit("loadPrevious", "disabled")],
      attrs: {
        disabled: e.state.isFirstPage
      },
      on: {
        click: function (t) {
          e.refinePrevious();
        }
      }
    }, [e._v("Show previous results")])], {
      refinePrevious: e.refinePrevious,
      page: e.state.results.page,
      isFirstPage: e.state.isFirstPage
    }) : e._e(), e._v(" "), e._t("default", [n("ol", {
      class: e.suit("list")
    }, e._l(e.items, function (t, i) {
      return n("li", {
        key: t.objectID,
        class: e.suit("item")
      }, [e._t("item", [e._v("objectID: " + e._s(t.objectID) + ", index: " + e._s(i))], {
        item: t,
        index: i,
        insights: e.state.insights
      })], 2);
    })), e._v(" "), e._t("loadMore", [n("button", {
      class: [e.suit("loadMore"), e.state.isLastPage && e.suit("loadMore", "disabled")],
      attrs: {
        disabled: e.state.isLastPage
      },
      on: {
        click: function (t) {
          e.refineNext();
        }
      }
    }, [e._v("Show more results")])], {
      refineNext: e.refineNext,
      refine: e.refineNext,
      page: e.state.results.page,
      isLastPage: e.state.isLastPage
    })], {
      items: e.items,
      results: e.state.results,
      isLastPage: e.state.isLastPage,
      refinePrevious: e.refinePrevious,
      refineNext: e.refineNext,
      refine: e.refineNext,
      insights: e.state.insights,
      sendEvent: e.state.sendEvent
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisInfiniteHits",
  mixins: [createWidgetMixin({
    connector: connectors.connectInfiniteHitsWithInsights
  }), createSuitMixin({
    name: "InfiniteHits"
  })],
  props: {
    showPrevious: {
      type: Boolean,
      default: !1
    },
    escapeHTML: {
      type: Boolean,
      default: !0
    },
    transformItems: {
      type: Function,
      default: void 0
    },
    cache: {
      type: Object,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        showPrevious: this.showPrevious,
        escapeHTML: this.escapeHTML,
        transformItems: this.transformItems,
        cache: this.cache
      };
    },
    items: function () {
      return this.state.hits;
    }
  },
  methods: {
    refinePrevious: function () {
      this.state.showPrevious();
    },
    refineNext: function () {
      this.state.showMore();
    }
  }
},
    Menu = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: [e.suit(), !e.state.canRefine && e.suit("", "noRefinement")]
    }, [e._t("default", [n("ul", {
      class: e.suit("list")
    }, e._l(e.state.items, function (t) {
      return n("li", {
        key: t.value,
        class: [e.suit("item"), t.isRefined && e.suit("item", "selected")]
      }, [n("a", {
        class: e.suit("link"),
        attrs: {
          href: e.state.createURL(t.value)
        },
        on: {
          click: function (n) {
            n.preventDefault(), e.state.refine(t.value);
          }
        }
      }, [n("span", {
        class: e.suit("label")
      }, [e._v(e._s(t.label))]), e._v(" "), n("span", {
        class: e.suit("count")
      }, [e._v(e._s(t.count))])])]);
    })), e._v(" "), e.showShowMoreButton ? n("button", {
      class: [e.suit("showMore"), !e.state.canToggleShowMore && e.suit("showMore", "disabled")],
      attrs: {
        disabled: !e.state.canToggleShowMore
      },
      on: {
        click: function (t) {
          t.preventDefault(), e.state.toggleShowMore();
        }
      }
    }, [e._t("showMoreLabel", [e._v(e._s(e.state.isShowingMore ? "Show less" : "Show more"))], {
      isShowingMore: e.state.isShowingMore
    })], 2) : e._e()], {
      items: e.state.items,
      canRefine: e.state.canRefine,
      canToggleShowMore: e.state.canToggleShowMore,
      isShowingMore: e.state.isShowingMore,
      refine: e.state.refine,
      createURL: e.state.createURL,
      toggleShowMore: e.state.toggleShowMore,
      sendEvent: e.state.sendEvent
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisMenu",
  mixins: [createSuitMixin({
    name: "Menu"
  }), createWidgetMixin({
    connector: connectors.connectMenu
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return Boolean(e.canRefine);
    }
  })],
  props: {
    attribute: {
      type: String,
      required: !0
    },
    limit: {
      type: Number,
      default: void 0
    },
    showMoreLimit: {
      type: Number,
      default: void 0
    },
    showMore: {
      type: Boolean,
      default: !1
    },
    sortBy: {
      type: [Array, Function],
      default: void 0
    },
    transformItems: {
      type: Function,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        attribute: this.attribute,
        limit: this.limit,
        showMore: this.showMore,
        showMoreLimit: this.showMoreLimit,
        sortBy: this.sortBy,
        transformItems: this.transformItems
      };
    },
    showShowMoreButton: function () {
      return this.state.canRefine && this.showMore;
    }
  }
},
    MenuSelect = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: [e.suit(), !e.state.canRefine && e.suit("", "noRefinement")]
    }, [e._t("default", [n("select", {
      class: e.suit("select"),
      on: {
        change: function (t) {
          e.refine(t.currentTarget.value);
        }
      }
    }, [n("option", {
      class: e.suit("option"),
      attrs: {
        value: ""
      }
    }, [e._t("defaultOption", [e._v("See all")])], 2), e._v(" "), e._l(e.state.items, function (t) {
      return n("option", {
        key: t.value,
        class: e.suit("option"),
        domProps: {
          value: t.value,
          selected: t.isRefined
        }
      }, [e._t("item", [e._v(e._s(t.label) + " (" + e._s(t.count) + ")")], {
        item: t
      })], 2);
    })], 2)], {
      items: e.state.items,
      canRefine: e.state.canRefine,
      refine: e.refine,
      createURL: e.state.createURL,
      sendEvent: e.state.sendEvent
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisMenuSelect",
  mixins: [createSuitMixin({
    name: "MenuSelect"
  }), createWidgetMixin({
    connector: connectors.connectMenu
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return Boolean(e.canRefine);
    }
  })],
  props: {
    attribute: {
      type: String,
      required: !0
    },
    limit: {
      type: Number,
      default: 10
    },
    sortBy: {
      type: [Array, Function],
      default: void 0
    },
    transformItems: {
      type: Function,
      default: function (e) {
        return e;
      }
    }
  },
  computed: {
    widgetParams: function () {
      return {
        attribute: this.attribute,
        limit: this.limit,
        sortBy: this.sortBy,
        transformItems: this.transformItems
      };
    }
  },
  methods: {
    refine: function (e) {
      this.state.refine(e);
    }
  }
},
    NumericMenu = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: [e.suit(), !e.canRefine && e.suit("", "noRefinement")]
    }, [e._t("default", [n("ul", {
      class: [e.suit("list")]
    }, e._l(e.state.items, function (t) {
      return n("li", {
        key: t.label,
        class: [e.suit("item"), t.isRefined && e.suit("item", "selected")]
      }, [n("label", {
        class: e.suit("label")
      }, [n("input", {
        class: e.suit("radio"),
        attrs: {
          type: "radio",
          name: e.attribute
        },
        domProps: {
          value: t.value,
          checked: t.isRefined
        },
        on: {
          change: function (t) {
            e.state.refine(t.target.value);
          }
        }
      }), e._v(" "), n("span", {
        class: e.suit("labelText")
      }, [e._v(e._s(t.label))])])]);
    }))], {
      items: e.state.items,
      canRefine: e.canRefine,
      refine: e.state.refine,
      createURL: e.state.createURL,
      sendEvent: e.state.sendEvent
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisNumericMenu",
  mixins: [createWidgetMixin({
    connector: connectors.connectNumericMenu
  }), createSuitMixin({
    name: "NumericMenu"
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return !1 === e.hasNoResults;
    }
  })],
  props: {
    attribute: {
      type: String,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    transformItems: {
      type: Function,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        attribute: this.attribute,
        transformItems: this.transformItems,
        items: this.items
      };
    },
    canRefine: function () {
      return !this.state.hasNoResults;
    }
  }
},
    Pagination = {
  render: function () {
    var e,
        t,
        n,
        i,
        s = this,
        a = s.$createElement,
        r = s._self._c || a;
    return s.state ? r("div", {
      class: s.suit()
    }, [s._t("default", [r("ul", {
      class: s.suit("list")
    }, [s.showFirst ? r("li", {
      class: (e = {}, e[s.suit("item")] = !0, e[s.suit("item", "firstPage")] = !0, e[s.suit("item", "disabled")] = s.state.isFirstPage, e)
    }, [s._t("first", [s.state.isFirstPage ? [r("span", {
      class: s.suit("link"),
      attrs: {
        "aria-label": "First"
      }
    }, [s._v("‹‹")])] : [r("a", {
      class: s.suit("link"),
      attrs: {
        "aria-label": "First",
        href: s.state.createURL(0)
      },
      on: {
        click: function (e) {
          e.preventDefault(), s.refine(0);
        }
      }
    }, [s._v("‹‹")])]], {
      createURL: function () {
        return s.state.createURL(0);
      },
      isFirstPage: s.state.isFirstPage,
      refine: function () {
        return s.refine(0);
      }
    })], 2) : s._e(), s._v(" "), s.showPrevious ? r("li", {
      class: (t = {}, t[s.suit("item")] = !0, t[s.suit("item", "previousPage")] = !0, t[s.suit("item", "disabled")] = s.state.isFirstPage, t)
    }, [s._t("previous", [s.state.isFirstPage ? [r("span", {
      class: s.suit("link"),
      attrs: {
        "aria-label": "Previous"
      }
    }, [s._v("‹")])] : [r("a", {
      class: s.suit("link"),
      attrs: {
        "aria-label": "Previous",
        href: s.state.createURL(s.state.currentRefinement - 1)
      },
      on: {
        click: function (e) {
          e.preventDefault(), s.refine(s.state.currentRefinement - 1);
        }
      }
    }, [s._v("‹")])]], {
      createURL: function () {
        return s.state.createURL(s.state.currentRefinement - 1);
      },
      isFirstPage: s.state.isFirstPage,
      refine: function () {
        return s.refine(s.state.currentRefinement - 1);
      }
    })], 2) : s._e(), s._v(" "), s._l(s.state.pages, function (e) {
      var t;
      return r("li", {
        key: e,
        class: (t = {}, t[s.suit("item")] = !0, t[s.suit("item", "selected")] = s.state.currentRefinement === e, t)
      }, [s._t("item", [r("a", {
        class: s.suit("link"),
        attrs: {
          href: s.state.createURL(e)
        },
        on: {
          click: function (t) {
            t.preventDefault(), s.refine(e);
          }
        }
      }, [s._v(s._s(e + 1))])], {
        page: e,
        createURL: function () {
          return s.state.createURL(e);
        },
        isFirstPage: s.state.isFirstPage,
        isLastPage: s.state.isLastPage,
        refine: function () {
          return s.refine(e);
        }
      })], 2);
    }), s._v(" "), s.showNext ? r("li", {
      class: (n = {}, n[s.suit("item")] = !0, n[s.suit("item", "nextPage")] = !0, n[s.suit("item", "disabled")] = s.state.isLastPage, n)
    }, [s._t("next", [s.state.isLastPage ? [r("span", {
      class: s.suit("link"),
      attrs: {
        "aria-label": "Next"
      }
    }, [s._v("›")])] : [r("a", {
      class: s.suit("link"),
      attrs: {
        "aria-label": "Next",
        href: s.state.createURL(s.state.currentRefinement + 1)
      },
      on: {
        click: function (e) {
          e.preventDefault(), s.refine(s.state.currentRefinement + 1);
        }
      }
    }, [s._v("›")])]], {
      createURL: function () {
        return s.state.createURL(s.state.currentRefinement + 1);
      },
      isLastPage: s.state.isLastPage,
      refine: function () {
        return s.refine(s.state.currentRefinement + 1);
      }
    })], 2) : s._e(), s._v(" "), s.showLast ? r("li", {
      class: (i = {}, i[s.suit("item")] = !0, i[s.suit("item", "lastPage")] = !0, i[s.suit("item", "disabled")] = s.state.isLastPage, i)
    }, [s._t("last", [s.state.isLastPage ? [r("span", {
      class: s.suit("link"),
      attrs: {
        "aria-label": "Last"
      }
    }, [s._v("››")])] : [r("a", {
      class: s.suit("link"),
      attrs: {
        "aria-label": "Last",
        href: s.state.createURL(s.state.nbPages - 1)
      },
      on: {
        click: function (e) {
          e.preventDefault(), s.refine(s.state.nbPages - 1);
        }
      }
    }, [s._v("››")])]], {
      createURL: function () {
        return s.state.createURL(s.state.nbPages - 1);
      },
      isLastPage: s.state.isLastPage,
      refine: function () {
        return s.refine(s.state.nbPages - 1);
      }
    })], 2) : s._e()], 2)], {
      refine: s.refine,
      createURL: s.state.createURL,
      currentRefinement: s.state.currentRefinement,
      nbHits: s.state.nbHits,
      nbPages: s.state.nbPages,
      pages: s.state.pages,
      isFirstPage: s.state.isFirstPage,
      isLastPage: s.state.isLastPage
    })], 2) : s._e();
  },
  staticRenderFns: [],
  name: "AisPagination",
  mixins: [createSuitMixin({
    name: "Pagination"
  }), createWidgetMixin({
    connector: connectors.connectPagination
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return e.nbPages > 1;
    }
  })],
  props: {
    padding: {
      type: Number,
      default: void 0,
      validator: function (e) {
        return e > 0;
      }
    },
    totalPages: {
      type: Number,
      default: void 0,
      validator: function (e) {
        return e > 0;
      }
    },
    showFirst: {
      type: Boolean,
      default: !0
    },
    showLast: {
      type: Boolean,
      default: !0
    },
    showNext: {
      type: Boolean,
      default: !0
    },
    showPrevious: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        padding: this.padding,
        totalPages: this.totalPages
      };
    }
  },
  methods: {
    refine: function (e) {
      var t = Math.min(Math.max(e, 0), this.state.nbPages - 1);
      this.state.refine(t), this.$emit("page-change", t);
    }
  }
},
    Panel = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return n("div", {
      class: [e.suit(), !e.canRefine && e.suit("", "noRefinement")]
    }, [e.$slots.header || e.$scopedSlots.header ? n("div", {
      class: e.suit("header")
    }, [e._t("header", null, {
      hasRefinements: e.canRefine
    })], 2) : e._e(), e._v(" "), n("div", {
      class: e.suit("body")
    }, [e._t("default", null, {
      hasRefinements: e.canRefine
    })], 2), e._v(" "), e.$slots.footer || e.$scopedSlots.footer ? n("div", {
      class: e.suit("footer")
    }, [e._t("footer", null, {
      hasRefinements: e.canRefine
    })], 2) : e._e()]);
  },
  staticRenderFns: [],
  name: "AisPanel",
  mixins: [createSuitMixin({
    name: "Panel"
  }), createPanelProviderMixin()]
},
    PoweredBy = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return n("div", {
      class: e.suit()
    }, [n("a", {
      class: e.suit("link"),
      attrs: {
        href: e.algoliaUrl,
        target: "_blank",
        rel: "noopener",
        "aria-label": "search by Algolia"
      }
    }, [n("svg", {
      class: [e.suit("logo"), e.suit("", e.theme)],
      staticStyle: {
        height: "1.2em",
        width: "auto"
      },
      attrs: {
        viewBox: "0 0 168 24"
      }
    }, [n("path", {
      attrs: {
        fill: "dark" === e.theme ? "#FFF" : "#5D6494",
        d: "M6.97 6.68V8.3a4.47 4.47 0 0 0-2.42-.67 2.2 2.2 0 0 0-1.38.4c-.34.26-.5.6-.5 1.02 0 .43.16.77.49 1.03.33.25.83.53 1.51.83a7.04 7.04 0 0 1 1.9 1.08c.34.24.58.54.73.89.15.34.23.74.23 1.18 0 .95-.33 1.7-1 2.24a4 4 0 0 1-2.6.81 5.71 5.71 0 0 1-2.94-.68v-1.71c.84.63 1.81.94 2.92.94.58 0 1.05-.14 1.39-.4.34-.28.5-.65.5-1.13 0-.29-.1-.55-.3-.8a2.2 2.2 0 0 0-.65-.53 23.03 23.03 0 0 0-1.64-.78 13.67 13.67 0 0 1-1.11-.64c-.12-.1-.28-.22-.46-.4a1.72 1.72 0 0 1-.39-.5 4.46 4.46 0 0 1-.22-.6c-.07-.23-.1-.48-.1-.75 0-.91.33-1.63 1-2.17a4 4 0 0 1 2.57-.8c.97 0 1.8.18 2.47.52zm7.47 5.7v-.3a2.26 2.26 0 0 0-.5-1.44c-.3-.35-.74-.53-1.32-.53-.53 0-.99.2-1.37.58-.38.39-.62.95-.72 1.68h3.91zm1 2.79v1.4c-.6.34-1.38.51-2.36.51a4.02 4.02 0 0 1-3-1.13 4.04 4.04 0 0 1-1.11-2.97c0-1.3.34-2.32 1.02-3.06a3.38 3.38 0 0 1 2.6-1.1c1.03 0 1.85.32 2.46.96.6.64.9 1.57.9 2.78 0 .33-.03.68-.09 1.04h-5.31c.1.7.4 1.24.89 1.61.49.38 1.1.56 1.85.56.86 0 1.58-.2 2.15-.6zm6.61-1.78h-1.21c-.6 0-1.05.12-1.35.36-.3.23-.46.53-.46.89 0 .37.12.66.36.88.23.2.57.32 1.02.32.5 0 .9-.15 1.2-.43.3-.28.44-.65.44-1.1v-.92zm-4.07-2.55V9.33a4.96 4.96 0 0 1 2.5-.55c2.1 0 3.17 1.03 3.17 3.08V17H22.1v-.96c-.42.68-1.15 1.02-2.19 1.02-.76 0-1.38-.22-1.84-.66-.46-.44-.7-1-.7-1.68 0-.78.3-1.38.88-1.81.59-.43 1.4-.65 2.46-.65h1.34v-.46c0-.55-.13-.97-.4-1.25-.26-.29-.7-.43-1.32-.43-.86 0-1.65.24-2.35.72zm9.34-1.93v1.42c.39-1 1.1-1.5 2.12-1.5.15 0 .31.02.5.05v1.53c-.23-.1-.48-.14-.76-.14-.54 0-.99.24-1.34.71a2.8 2.8 0 0 0-.52 1.71V17h-1.57V8.91h1.57zm5 4.09a3 3 0 0 0 .76 2.01c.47.53 1.14.8 2 .8.64 0 1.24-.18 1.8-.53v1.4c-.53.32-1.2.48-2 .48a3.98 3.98 0 0 1-4.17-4.18c0-1.16.38-2.15 1.14-2.98a4 4 0 0 1 3.1-1.23c.7 0 1.34.15 1.92.44v1.44a3.24 3.24 0 0 0-1.77-.5A2.65 2.65 0 0 0 32.33 13zm7.92-7.28v4.58c.46-1 1.3-1.5 2.5-1.5.8 0 1.42.24 1.9.73.48.5.72 1.17.72 2.05V17H43.8v-5.1c0-.56-.14-.99-.43-1.29-.28-.3-.65-.45-1.1-.45-.54 0-1 .2-1.42.6-.4.4-.61 1.02-.61 1.85V17h-1.56V5.72h1.56zM55.2 15.74c.6 0 1.1-.25 1.5-.76.4-.5.6-1.16.6-1.95 0-.92-.2-1.62-.6-2.12-.4-.5-.92-.74-1.55-.74-.56 0-1.05.22-1.5.67-.44.45-.66 1.13-.66 2.06 0 .96.22 1.67.64 2.14.43.47.95.7 1.57.7zM53 5.72v4.42a2.74 2.74 0 0 1 2.43-1.34c1.03 0 1.86.38 2.51 1.15.65.76.97 1.78.97 3.05 0 1.13-.3 2.1-.92 2.9-.62.81-1.47 1.21-2.54 1.21s-1.9-.45-2.46-1.34V17h-1.58V5.72H53zm9.9 11.1l-3.22-7.9h1.74l1 2.62 1.26 3.42c.1-.32.48-1.46 1.15-3.42l.91-2.63h1.66l-2.92 7.87c-.78 2.07-1.96 3.1-3.56 3.1-.28 0-.53-.02-.73-.07v-1.34c.17.04.35.06.54.06 1.03 0 1.76-.57 2.17-1.7z"
      }
    }), e._v(" "), n("path", {
      attrs: {
        fill: "#5468FF",
        d: "M78.99.94h16.6a2.97 2.97 0 0 1 2.96 2.96v16.6a2.97 2.97 0 0 1-2.97 2.96h-16.6a2.97 2.97 0 0 1-2.96-2.96V3.9A2.96 2.96 0 0 1 79 .94"
      }
    }), e._v(" "), n("path", {
      attrs: {
        fill: "#FFF",
        d: "M89.63 5.97v-.78a.98.98 0 0 0-.98-.97h-2.28a.98.98 0 0 0-.97.97V6c0 .09.08.15.17.13a7.13 7.13 0 0 1 3.9-.02c.08.02.16-.04.16-.13m-6.25 1L83 6.6a.98.98 0 0 0-1.38 0l-.46.46a.97.97 0 0 0 0 1.38l.38.39c.06.06.15.04.2-.02a7.49 7.49 0 0 1 1.63-1.62c.07-.04.08-.14.02-.2m4.16 2.45v3.34c0 .1.1.17.2.12l2.97-1.54c.06-.03.08-.12.05-.18a3.7 3.7 0 0 0-3.08-1.87c-.07 0-.14.06-.14.13m0 8.05a4.49 4.49 0 1 1 0-8.98 4.49 4.49 0 0 1 0 8.98m0-10.85a6.37 6.37 0 1 0 0 12.74 6.37 6.37 0 0 0 0-12.74"
      }
    }), e._v(" "), n("path", {
      attrs: {
        fill: "dark" === e.theme ? "#FFF" : "#5468FF",
        d: "M120.92 18.8c-4.38.02-4.38-3.54-4.38-4.1V1.36l2.67-.42v13.25c0 .32 0 2.36 1.71 2.37v2.24zm-10.84-2.18c.82 0 1.43-.04 1.85-.12v-2.72a5.48 5.48 0 0 0-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.11-.44.28-.58.49a.93.93 0 0 0-.22.65c0 .63.22 1 .61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.62.11 2.23.33.6.22 1.09.53 1.44.92.36.4.61.92.76 1.48.16.56.23 1.17.23 1.85v6.87c-.4.1-1.03.2-1.86.32-.84.12-1.78.18-2.82.18-.69 0-1.32-.07-1.9-.2a4 4 0 0 1-1.46-.63c-.4-.3-.72-.67-.96-1.13a4.3 4.3 0 0 1-.34-1.8c0-.66.13-1.08.39-1.53.26-.45.6-.82 1.04-1.1.45-.3.95-.5 1.54-.62a8.8 8.8 0 0 1 3.79.05v-.44c0-.3-.04-.6-.11-.87a1.78 1.78 0 0 0-1.1-1.22c-.31-.12-.7-.2-1.15-.2a9.75 9.75 0 0 0-2.95.46l-.33-2.19c.34-.12.84-.23 1.48-.35.65-.12 1.34-.18 2.08-.18zm52.84 9.63c.82 0 1.43-.05 1.85-.13V13.7a5.42 5.42 0 0 0-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.12-.44.28-.58.5a.93.93 0 0 0-.22.65c0 .63.22.99.61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.63.11 2.23.33.6.22 1.1.53 1.45.92.35.39.6.92.76 1.48.15.56.23 1.18.23 1.85v6.88c-.41.08-1.03.19-1.87.31-.83.12-1.77.18-2.81.18-.7 0-1.33-.06-1.9-.2a4 4 0 0 1-1.47-.63c-.4-.3-.72-.67-.95-1.13a4.3 4.3 0 0 1-.34-1.8c0-.66.13-1.08.38-1.53.26-.45.61-.82 1.05-1.1.44-.3.95-.5 1.53-.62a8.8 8.8 0 0 1 3.8.05v-.43c0-.31-.04-.6-.12-.88-.07-.28-.2-.52-.38-.73a1.78 1.78 0 0 0-.73-.5c-.3-.1-.68-.2-1.14-.2a9.85 9.85 0 0 0-2.95.47l-.32-2.19a11.63 11.63 0 0 1 3.55-.53zm-8.03-1.27a1.62 1.62 0 0 0 0-3.24 1.62 1.62 0 1 0 0 3.24zm1.35 13.22h-2.7V7.27l2.7-.42V18.8zm-4.72 0c-4.38.02-4.38-3.54-4.38-4.1l-.01-13.34 2.67-.42v13.25c0 .32 0 2.36 1.72 2.37v2.24zm-8.7-5.9a4.7 4.7 0 0 0-.74-2.79 2.4 2.4 0 0 0-2.07-1 2.4 2.4 0 0 0-2.06 1 4.7 4.7 0 0 0-.74 2.8c0 1.16.25 1.94.74 2.62a2.4 2.4 0 0 0 2.07 1.02c.88 0 1.57-.34 2.07-1.02.49-.68.73-1.46.73-2.63zm2.74 0a6.46 6.46 0 0 1-1.52 4.23c-.49.53-1.07.94-1.76 1.22-.68.29-1.73.45-2.26.45-.53 0-1.58-.15-2.25-.45a5.1 5.1 0 0 1-2.88-3.13 7.3 7.3 0 0 1-.01-4.84 5.13 5.13 0 0 1 2.9-3.1 5.67 5.67 0 0 1 2.22-.42c.81 0 1.56.14 2.24.42.69.29 1.28.69 1.75 1.22.49.52.87 1.15 1.14 1.89a7 7 0 0 1 .43 2.5zm-20.14 0c0 1.11.25 2.36.74 2.88.5.52 1.13.78 1.91.78a4.07 4.07 0 0 0 2.12-.6V9.33c-.19-.04-.99-.2-1.76-.23a2.67 2.67 0 0 0-2.23 1 4.73 4.73 0 0 0-.78 2.8zm7.44 5.27c0 1.82-.46 3.16-1.4 4-.94.85-2.37 1.27-4.3 1.27-.7 0-2.17-.13-3.34-.4l.43-2.11c.98.2 2.27.26 2.95.26 1.08 0 1.84-.22 2.3-.66.46-.43.68-1.08.68-1.94v-.44a5.2 5.2 0 0 1-2.54.6 5.6 5.6 0 0 1-2.01-.36 4.2 4.2 0 0 1-2.58-2.71 9.88 9.88 0 0 1 .02-5.35 4.92 4.92 0 0 1 2.93-2.96 6.6 6.6 0 0 1 2.43-.46 19.64 19.64 0 0 1 4.43.66v10.6z"
      }
    })])])]);
  },
  staticRenderFns: [],
  name: "AisPoweredBy",
  mixins: [createSuitMixin({
    name: "PoweredBy"
  })],
  props: {
    theme: {
      default: "light",
      validator: function (e) {
        return -1 !== ["light", "dark"].indexOf(e);
      }
    }
  },
  computed: {
    algoliaUrl: function () {
      return "https://www.algolia.com/?utm_source=vue-instantsearch&utm_medium=website&utm_content=" + (location ? location.hostname : "") + "&utm_campaign=poweredby";
    }
  }
},
    QueryRuleContext = {
  name: "AisQueryRuleContext",
  mixins: [createSuitMixin({
    name: "QueryRuleContext"
  }), createWidgetMixin({
    connector: connectors.connectQueryRules
  })],
  props: {
    trackedFilters: {
      type: Object,
      required: !0
    },
    transformRuleContexts: {
      type: Function,
      required: !1,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        trackedFilters: this.trackedFilters,
        transformRuleContexts: this.transformRuleContexts
      };
    }
  },
  render: function () {
    return null;
  }
},
    QueryRuleCustomData = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e._t("default", e._l(e.state.items, function (t, i) {
      return n("div", {
        key: i
      }, [e._t("item", [n("pre", [e._v(e._s(t))])], {
        item: t
      })], 2);
    }), {
      items: e.state.items
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisQueryRuleCustomData",
  mixins: [createSuitMixin({
    name: "QueryRuleCustomData"
  }), createWidgetMixin({
    connector: connectors.connectQueryRules
  })],
  props: {
    transformItems: {
      type: Function,
      required: !1,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        transformItems: this.transformItems
      };
    }
  }
},
    mapStateToCanRefine$1 = function (e) {
  return e && Boolean(e.range) && e.range.min !== e.range.max;
},
    RangeInput = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: [e.suit(), !e.canRefine && e.suit("", "noRefinement")]
    }, [e._t("default", [n("form", {
      class: e.suit("form"),
      on: {
        submit: function (t) {
          t.preventDefault(), e.refine({
            min: e.pick(e.minInput, e.values.min),
            max: e.pick(e.maxInput, e.values.max)
          });
        }
      }
    }, [n("label", {
      class: e.suit("label")
    }, [e._t("minLabel"), e._v(" "), n("input", {
      class: [e.suit("input"), e.suit("input", "min")],
      attrs: {
        type: "number",
        step: e.step,
        min: e.state.range.min,
        max: e.state.range.max,
        placeholder: e.state.range.min
      },
      domProps: {
        value: e.values.min
      },
      on: {
        change: function (t) {
          e.minInput = t.currentTarget.value;
        }
      }
    })], 2), e._v(" "), n("span", {
      class: e.suit("separator")
    }, [e._t("separator", [e._v("to")])], 2), e._v(" "), n("label", {
      class: e.suit("label")
    }, [e._t("maxLabel"), e._v(" "), n("input", {
      class: [e.suit("input"), e.suit("input", "max")],
      attrs: {
        type: "number",
        step: e.step,
        min: e.state.range.min,
        max: e.state.range.max,
        placeholder: e.state.range.max
      },
      domProps: {
        value: e.values.max
      },
      on: {
        change: function (t) {
          e.maxInput = t.currentTarget.value;
        }
      }
    })], 2), e._v(" "), n("button", {
      class: e.suit("submit"),
      attrs: {
        type: "submit"
      }
    }, [e._t("submitLabel", [e._v("Go")])], 2)])], {
      currentRefinement: e.values,
      refine: e.refine,
      canRefine: e.canRefine,
      range: e.state.range,
      sendEvent: e.state.sendEvent
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisRangeInput",
  mixins: [createSuitMixin({
    name: "RangeInput"
  }), createWidgetMixin({
    connector: connectors.connectRange
  }), createPanelConsumerMixin({
    mapStateToCanRefine: mapStateToCanRefine$1
  })],
  props: {
    attribute: {
      type: String,
      required: !0
    },
    min: {
      type: Number,
      required: !1,
      default: -1 / 0
    },
    max: {
      type: Number,
      required: !1,
      default: 1 / 0
    },
    precision: {
      type: Number,
      required: !1,
      default: 0
    }
  },
  data: function () {
    return {
      minInput: void 0,
      maxInput: void 0
    };
  },
  updated: function () {
    this.minInput = void 0, this.maxInput = void 0;
  },
  computed: {
    widgetParams: function () {
      return {
        attribute: this.attribute,
        min: this.min,
        max: this.max,
        precision: this.precision
      };
    },
    canRefine: function () {
      return mapStateToCanRefine$1(this.state);
    },
    step: function () {
      return 1 / Math.pow(10, this.precision);
    },
    values: function () {
      var e = this.state.start,
          t = e[0],
          n = e[1],
          i = this.state.range,
          s = i.min,
          a = i.max;
      return {
        min: t !== -1 / 0 && t !== s ? t : void 0,
        max: n !== 1 / 0 && n !== a ? n : void 0
      };
    }
  },
  methods: {
    pick: function (e, t) {
      return null != e ? e : t;
    },
    refine: function (e) {
      var t = e.min,
          n = e.max;
      this.state.refine([t, n]);
    }
  }
},
    RatingMenu = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("svg", {
      staticStyle: {
        display: "none"
      },
      attrs: {
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [n("symbol", {
      attrs: {
        id: "ais-RatingMenu-starSymbol",
        viewBox: "0 0 24 24"
      }
    }, [n("path", {
      attrs: {
        d: "M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
      }
    })]), e._v(" "), n("symbol", {
      attrs: {
        id: "ais-RatingMenu-starEmptySymbol",
        viewBox: "0 0 24 24"
      }
    }, [n("path", {
      attrs: {
        d: "M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"
      }
    })])]), e._v(" "), n("ul", {
      class: e.suit("list")
    }, e._l(e.state.items, function (t, i) {
      return n("li", {
        key: i,
        class: [e.suit("item"), t.isRefined && e.suit("item", "selected")]
      }, [n("a", {
        class: e.suit("link"),
        attrs: {
          href: e.state.createURL(t.value),
          "aria-label": t.value + " & Up"
        },
        on: {
          click: function (n) {
            n.preventDefault(), e.state.refine(t.value);
          }
        }
      }, [e._l(t.stars, function (t, i) {
        return [t ? n("svg", {
          key: i + "-full",
          class: [e.suit("starIcon"), e.suit("starIcon--full")],
          attrs: {
            "aria-hidden": "true",
            width: "24",
            height: "24"
          }
        }, [n("use", {
          attrs: {
            "xlink:href": "#ais-RatingMenu-starSymbol"
          }
        })]) : n("svg", {
          key: i + "-empty",
          class: [e.suit("starIcon"), e.suit("starIcon--empty")],
          attrs: {
            "aria-hidden": "true",
            width: "24",
            height: "24"
          }
        }, [n("use", {
          attrs: {
            "xlink:href": "#ais-RatingMenu-starEmptySymbol"
          }
        })])];
      }), e._v(" "), n("span", {
        class: e.suit("label"),
        attrs: {
          "aria-hidden": "true"
        }
      }, [e._t("andUp", [e._v("& Up")])], 2), e._v(" "), n("span", {
        class: e.suit("count")
      }, [e._v(e._s(t.count))])], 2)]);
    }))], {
      items: e.state.items,
      refine: e.state.refine,
      createURL: e.state.createURL,
      sendEvent: e.state.sendEvent
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisRatingMenu",
  mixins: [createSuitMixin({
    name: "RatingMenu"
  }), createWidgetMixin({
    connector: connectors.connectRatingMenu
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return !1 === e.hasNoResults;
    }
  })],
  props: {
    attribute: {
      type: String,
      required: !0
    },
    max: {
      type: Number,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        attribute: this.attribute,
        max: this.max
      };
    }
  }
},
    SearchInput = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return n("form", {
      class: e.suit("form"),
      attrs: {
        action: "",
        role: "search",
        novalidate: ""
      },
      on: {
        submit: function (t) {
          return t.preventDefault(), e.onFormSubmit(t);
        },
        reset: function (t) {
          return t.preventDefault(), e.onFormReset(t);
        }
      }
    }, [n("input", {
      ref: "input",
      class: e.suit("input"),
      attrs: {
        type: "search",
        autocorrect: "off",
        autocapitalize: "off",
        autocomplete: "off",
        spellcheck: "false",
        required: "",
        maxlength: "512",
        "aria-label": "Search",
        placeholder: e.placeholder,
        autofocus: e.autofocus
      },
      domProps: {
        value: e.value
      },
      on: {
        focus: function (t) {
          e.$emit("focus", t);
        },
        blur: function (t) {
          e.$emit("blur", t);
        },
        input: function (t) {
          e.$emit("input", t.target.value);
        }
      }
    }), e._v(" "), n("button", {
      class: e.suit("submit"),
      attrs: {
        type: "submit",
        title: e.submitTitle,
        hidden: e.showLoadingIndicator && e.shouldShowLoadingIndicator
      }
    }, [e._t("submit-icon", [n("svg", {
      class: e.suit("submitIcon"),
      attrs: {
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        width: "10",
        height: "10",
        viewBox: "0 0 40 40"
      }
    }, [n("path", {
      attrs: {
        d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z",
        fillRule: "evenodd"
      }
    })])])], 2), e._v(" "), n("button", {
      class: e.suit("reset"),
      attrs: {
        type: "reset",
        title: e.resetTitle,
        hidden: !e.value || e.showLoadingIndicator && e.shouldShowLoadingIndicator
      }
    }, [e._t("reset-icon", [n("svg", {
      class: e.suit("resetIcon"),
      attrs: {
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 20 20"
      }
    }, [n("path", {
      attrs: {
        d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z",
        fillRule: "evenodd"
      }
    })])])], 2), e._v(" "), e.showLoadingIndicator ? n("span", {
      class: e.suit("loadingIndicator"),
      attrs: {
        hidden: !e.shouldShowLoadingIndicator
      }
    }, [e._t("loading-indicator", [n("svg", {
      class: e.suit("loadingIcon"),
      attrs: {
        role: "img",
        "aria-label": "Results are loading",
        width: "16",
        height: "16",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "#444",
        viewBox: "0 0 38 38"
      }
    }, [n("g", {
      attrs: {
        fill: "none",
        "fill-rule": "evenodd"
      }
    }, [n("g", {
      attrs: {
        transform: "translate(1 1)",
        "stroke-width": "2"
      }
    }, [n("circle", {
      attrs: {
        "stroke-opacity": ".5",
        cx: "18",
        cy: "18",
        r: "18"
      }
    }), e._v(" "), n("path", {
      attrs: {
        d: "M36 18c0-9.94-8.06-18-18-18"
      }
    }, [n("animateTransform", {
      attrs: {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "1s",
        repeatCount: "indefinite"
      }
    })], 1)])])])])], 2) : e._e()]);
  },
  staticRenderFns: [],
  name: "SearchInput",
  mixins: [createSuitMixin({
    name: "SearchBox"
  })],
  props: {
    placeholder: {
      type: String,
      default: "Search here…"
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    showLoadingIndicator: {
      type: Boolean,
      default: !1
    },
    shouldShowLoadingIndicator: {
      type: Boolean,
      default: !1
    },
    submitTitle: {
      type: String,
      default: "Search"
    },
    resetTitle: {
      type: String,
      default: "Clear"
    },
    value: {
      type: String,
      required: !0
    }
  },
  data: function () {
    return {
      query: ""
    };
  },
  methods: {
    onFormSubmit: function () {
      this.$refs.input.blur();
    },
    onFormReset: function () {
      this.$emit("input", ""), this.$emit("reset");
    }
  }
},
    noop = function () {},
    RefinementList = {
  render: function () {
    var e,
        t = this,
        n = t.$createElement,
        i = t._self._c || n;
    return t.state ? i("div", {
      class: [t.suit(), !t.state.canRefine && t.suit("", "noRefinement")]
    }, [t._t("default", [t.searchable ? i("div", {
      class: t.suit("searchBox")
    }, [i("search-input", {
      attrs: {
        placeholder: t.searchablePlaceholder,
        "class-names": t.classNames
      },
      model: {
        value: t.searchForFacetValues,
        callback: function (e) {
          t.searchForFacetValues = e;
        },
        expression: "searchForFacetValues"
      }
    })], 1) : t._e(), t._v(" "), t.state.isFromSearch && 0 === t.items.length ? t._t("noResults", [i("div", {
      class: t.suit("noResults")
    }, [t._v("No results.")])], {
      query: t.searchForFacetValues
    }) : t._e(), t._v(" "), i("ul", {
      class: t.suit("list")
    }, t._l(t.items, function (e) {
      return i("li", {
        key: e.value,
        class: [t.suit("item"), e.isRefined && t.suit("item", "selected")]
      }, [t._t("item", [i("label", {
        class: t.suit("label")
      }, [i("input", {
        class: t.suit("checkbox"),
        attrs: {
          type: "checkbox"
        },
        domProps: {
          value: e.value,
          checked: e.isRefined
        },
        on: {
          change: function (n) {
            t.refine(e.value);
          }
        }
      }), t._v(" "), t.searchable ? i("span", {
        class: t.suit("labelText")
      }, [i("ais-highlight", {
        attrs: {
          attribute: "item",
          hit: e
        }
      })], 1) : i("span", {
        class: t.suit("labelText")
      }, [t._v(t._s(e.label))]), t._v(" "), i("span", {
        class: t.suit("count")
      }, [t._v(t._s(e.count))])])], {
        item: e,
        refine: t.refine,
        createURL: t.state.createURL
      })], 2);
    })), t._v(" "), t.showMore ? i("button", {
      class: [t.suit("showMore"), (e = {}, e[t.suit("showMore", "disabled")] = !t.state.canToggleShowMore, e)],
      attrs: {
        disabled: !t.state.canToggleShowMore
      },
      on: {
        click: t.toggleShowMore
      }
    }, [t._t("showMoreLabel", [t._v("Show " + t._s(t.state.isShowingMore ? "less" : "more"))], {
      isShowingMore: t.state.isShowingMore
    })], 2) : t._e()], {
      items: t.items,
      refine: t.refine,
      searchForItems: t.state.searchForItems,
      searchForItemsQuery: t.searchForFacetValuesQuery,
      toggleShowMore: t.toggleShowMore,
      canToggleShowMore: t.state.canToggleShowMore,
      isShowingMore: t.state.isShowingMore,
      createURL: t.state.createURL,
      isFromSearch: t.state.isFromSearch,
      canRefine: t.state.canRefine,
      sendEvent: t.state.sendEvent
    })], 2) : t._e();
  },
  staticRenderFns: [],
  name: "AisRefinementList",
  components: {
    SearchInput: SearchInput,
    AisHighlight: AisHighlight
  },
  mixins: [createSuitMixin({
    name: "RefinementList"
  }), createWidgetMixin({
    connector: connectors.connectRefinementList
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return Boolean(e.canRefine);
    }
  })],
  props: {
    attribute: {
      type: String,
      required: !0
    },
    searchable: {
      type: Boolean,
      default: void 0
    },
    searchablePlaceholder: {
      type: String,
      required: !1,
      default: "Search here…"
    },
    operator: {
      default: "or",
      validator: function (e) {
        return "and" === e || "or" === e;
      },
      required: !1
    },
    limit: {
      type: Number,
      required: !1,
      default: void 0
    },
    showMoreLimit: {
      type: Number,
      required: !1,
      default: void 0
    },
    showMore: {
      type: Boolean,
      required: !1,
      default: !1
    },
    sortBy: {
      type: [Array, Function],
      required: !1,
      default: void 0
    },
    transformItems: {
      type: Function,
      required: !1,
      default: void 0
    }
  },
  data: function () {
    return {
      searchForFacetValuesQuery: ""
    };
  },
  computed: {
    searchForFacetValues: {
      get: function () {
        return this.searchForFacetValuesQuery;
      },
      set: function (e) {
        this.state.searchForItems(e), this.searchForFacetValuesQuery = e;
      }
    },
    toggleShowMore: function () {
      return this.state.toggleShowMore || noop;
    },
    items: function () {
      return this.state.items.map(function (e) {
        return Object.assign({}, e, {
          _highlightResult: {
            item: {
              value: e.highlighted
            }
          }
        });
      });
    },
    widgetParams: function () {
      return {
        attribute: this.attribute,
        operator: this.operator,
        limit: this.limit,
        showMore: this.showMore,
        showMoreLimit: this.showMoreLimit,
        sortBy: this.sortBy,
        escapeFacetValues: !0,
        transformItems: this.transformItems
      };
    }
  },
  methods: {
    refine: function (e) {
      this.state.refine(e), this.searchForFacetValuesQuery = "";
    }
  }
},
    connectStateResults = function (e, t) {
  return void 0 === t && (t = function () {}), function (n) {
    return void 0 === n && (n = {}), {
      init: function (t) {
        var i = t.instantSearchInstance;
        e({
          state: void 0,
          results: void 0,
          instantSearchInstance: i,
          widgetParams: n
        }, !0);
      },
      render: function (t) {
        var i = t.results,
            s = t.instantSearchInstance,
            a = t.state,
            r = _objectSpread({}, i),
            o = _objectSpread({}, a);

        e({
          results: r,
          state: o,
          instantSearchInstance: s,
          widgetParams: n
        }, !1);
      },
      dispose: function () {
        t();
      }
    };
  };
},
    StateResults = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state && e.state.state && e.state.results ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("p", [e._v(" Use this component to have a different layout based on a certain state. ")]), e._v(" "), e._m(0), e._v(" "), n("pre", [e._v("results: " + e._s(Object.keys(e.state.results)))]), e._v(" "), n("pre", [e._v("state: " + e._s(Object.keys(e.state.state)))])], null, e.stateResults)], 2) : e._e();
  },
  staticRenderFns: [function () {
    var e = this.$createElement,
        t = this._self._c || e;
    return t("p", [this._v(" Fill in the slot, and get access to the following things on the "), t("code", [this._v("slot-scope")]), this._v(": ")]);
  }],
  name: "AisStateResults",
  mixins: [createWidgetMixin({
    connector: connectStateResults
  }), createSuitMixin({
    name: "StateResults"
  })],
  computed: {
    stateResults: function () {
      var e = this.state,
          t = e.state,
          n = e.results;
      return _objectSpread({}, n, {
        results: n,
        state: t
      });
    }
  }
},
    SearchBox = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("search-input", {
      attrs: {
        placeholder: e.placeholder,
        autofocus: e.autofocus,
        "show-loading-indicator": e.showLoadingIndicator,
        "should-show-loading-indicator": e.state.isSearchStalled,
        "submit-title": e.submitTitle,
        "reset-title": e.resetTitle,
        "class-names": e.classNames
      },
      on: {
        focus: function (t) {
          e.$emit("focus", t);
        },
        blur: function (t) {
          e.$emit("blur", t);
        },
        reset: function (t) {
          e.$emit("reset");
        }
      },
      model: {
        value: e.currentRefinement,
        callback: function (t) {
          e.currentRefinement = t;
        },
        expression: "currentRefinement"
      }
    }, [e._t("loading-indicator", null, {
      slot: "loading-indicator"
    }), e._v(" "), e._t("submit-icon", null, {
      slot: "submit-icon"
    }), e._v(" "), e._t("reset-icon", null, {
      slot: "reset-icon"
    })], 2)], {
      currentRefinement: e.currentRefinement,
      isSearchStalled: e.state.isSearchStalled,
      refine: e.state.refine
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisSearchBox",
  mixins: [createWidgetMixin({
    connector: connectors.connectSearchBox
  }), createSuitMixin({
    name: "SearchBox"
  })],
  components: {
    SearchInput: SearchInput
  },
  props: {
    placeholder: {
      type: String,
      default: "Search here…"
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    showLoadingIndicator: {
      type: Boolean,
      default: !1
    },
    submitTitle: {
      type: String,
      default: "Search"
    },
    resetTitle: {
      type: String,
      default: "Clear"
    },
    value: {
      type: String,
      default: void 0
    }
  },
  data: function () {
    return {
      localValue: ""
    };
  },
  computed: {
    isControlled: function () {
      return void 0 !== this.value;
    },
    currentRefinement: {
      get: function () {
        return this.isControlled && this.value !== this.localValue && (this.localValue = this.value, this.$emit("input", this.value), this.state.refine(this.value)), this.value || this.state.query || "";
      },
      set: function (e) {
        this.localValue = e, this.state.refine(e), this.isControlled && this.$emit("input", e);
      }
    }
  }
},
    Snippet = {
  render: function () {
    var e = this.$createElement;
    return (this._self._c || e)("ais-highlighter", {
      attrs: {
        hit: this.hit,
        attribute: this.attribute,
        "highlighted-tag-name": this.highlightedTagName,
        suit: this.suit,
        "highlight-property": "_snippetResult",
        "pre-tag": "<mark>",
        "post-tag": "</mark>"
      }
    });
  },
  staticRenderFns: [],
  name: "AisSnippet",
  mixins: [createSuitMixin({
    name: "Snippet"
  })],
  components: {
    AisHighlighter: AisHighlighter
  },
  props: {
    hit: {
      type: Object,
      required: !0
    },
    attribute: {
      type: String,
      required: !0
    },
    highlightedTagName: {
      type: String,
      default: "mark"
    }
  }
},
    SortBy = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("select", {
      class: e.suit("select"),
      on: {
        change: function (t) {
          e.state.refine(t.currentTarget.value);
        }
      }
    }, e._l(e.state.options, function (t) {
      return n("option", {
        key: t.value,
        class: e.suit("option"),
        domProps: {
          value: t.value,
          selected: t.value === e.state.currentRefinement
        }
      }, [e._v(e._s(t.label))]);
    }))], {
      items: e.state.options,
      hasNoResults: e.state.hasNoResults,
      refine: e.state.refine,
      currentRefinement: e.state.currentRefinement
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisSortBy",
  mixins: [createSuitMixin({
    name: "SortBy"
  }), createWidgetMixin({
    connector: connectors.connectSortBy
  }), createPanelConsumerMixin({
    mapStateToCanRefine: function (e) {
      return !1 === e.hasNoResults;
    }
  })],
  props: {
    items: {
      type: Array,
      required: !0
    },
    transformItems: {
      type: Function,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        items: this.items,
        transformItems: this.transformItems
      };
    }
  }
},
    Stats = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("span", {
      class: e.suit("text")
    }, [e.state.areHitsSorted ? [e._v(e._s(e.state.nbSortedHits.toLocaleString()) + " relevant results sorted out of " + e._s(e.state.nbHits.toLocaleString()))] : [e._v(e._s(e.state.nbHits.toLocaleString()) + " results")], e._v(" found in " + e._s(e.state.processingTimeMS.toLocaleString()) + "ms")], 2)], {
      results: e.state.instantSearchInstance.helper.lastResults
    }, e.state)], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisStats",
  mixins: [createWidgetMixin({
    connector: connectors.connectStats
  }), createSuitMixin({
    name: "Stats"
  })],
  computed: {
    widgetParams: function () {
      return {};
    }
  }
},
    mapStateToCanRefine$2 = function (e) {
  return Boolean(e.value && e.value.count);
},
    ToggleRefinement = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: [e.suit(), !e.canRefine && e.suit("", "noRefinement")]
    }, [e._t("default", [n("label", {
      class: e.suit("label")
    }, [n("input", {
      class: e.suit("checkbox"),
      attrs: {
        type: "checkbox",
        name: e.state.value.name
      },
      domProps: {
        value: e.on,
        checked: e.state.value.isRefined
      },
      on: {
        change: function (t) {
          e.state.refine(e.state.value);
        }
      }
    }), e._v(" "), n("span", {
      class: e.suit("labelText")
    }, [e._v(e._s(e.label))]), e._v(" "), null !== e.state.value.count ? n("span", {
      class: e.suit("count")
    }, [e._v(e._s(e.state.value.count.toLocaleString()))]) : e._e()])], {
      value: e.state.value,
      canRefine: e.canRefine,
      refine: e.state.refine,
      createURL: e.state.createURL,
      sendEvent: e.state.sendEvent
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisToggleRefinement",
  mixins: [createSuitMixin({
    name: "ToggleRefinement"
  }), createWidgetMixin({
    connector: connectors.connectToggleRefinement
  }), createPanelConsumerMixin({
    mapStateToCanRefine: mapStateToCanRefine$2
  })],
  props: {
    attribute: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    on: {
      type: [String, Number, Boolean, Array],
      required: !1,
      default: !0
    },
    off: {
      type: [String, Number, Boolean, Array],
      required: !1,
      default: void 0
    }
  },
  computed: {
    widgetParams: function () {
      return {
        attribute: this.attribute,
        label: this.label,
        on: this.on,
        off: this.off
      };
    },
    canRefine: function () {
      return mapStateToCanRefine$2(this.state);
    }
  }
},
    VoiceSearch = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("button", {
      class: e.suit("button"),
      attrs: {
        type: "button",
        title: e.state.isBrowserSupported ? e.buttonTitle : e.disabledButtonTitle,
        disabled: !e.state.isBrowserSupported
      },
      on: {
        click: e.handleClick
      }
    }, [e._t("buttonText", [e.errorNotAllowed ? n("svg", e._b({}, "svg", e.buttonSvgAttrs, !1), [n("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    }), e._v(" "), n("path", {
      attrs: {
        d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
      }
    }), e._v(" "), n("path", {
      attrs: {
        d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
      }
    }), e._v(" "), n("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
      }
    }), e._v(" "), n("line", {
      attrs: {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
      }
    })]) : n("svg", e._b({}, "svg", e.buttonSvgAttrs, !1), [n("path", {
      attrs: {
        d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
        fill: e.state.isListening ? "currentColor" : "none"
      }
    }), e._v(" "), n("path", {
      attrs: {
        d: "M19 10v2a7 7 0 0 1-14 0v-2"
      }
    }), e._v(" "), n("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
      }
    }), e._v(" "), n("line", {
      attrs: {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
      }
    })])], null, e.innerSlotProps)], 2), e._v(" "), n("div", {
      class: e.suit("status")
    }, [e._t("status", [n("p", [e._v(e._s(e.state.voiceListeningState.transcript))])], null, e.innerSlotProps)], 2)], null, e.rootSlotProps)], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisVoiceSearch",
  mixins: [createWidgetMixin({
    connector: connectors.connectVoiceSearch
  }), createSuitMixin({
    name: "VoiceSearch"
  })],
  props: {
    searchAsYouSpeak: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    buttonTitle: {
      type: String,
      required: !1,
      default: "Search by voice"
    },
    disabledButtonTitle: {
      type: String,
      required: !1,
      default: "Search by voice (not supported on this browser)"
    }
  },
  data: function () {
    return {
      buttonSvgAttrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    };
  },
  computed: {
    widgetParams: function () {
      return {
        searchAsYouSpeak: this.searchAsYouSpeak
      };
    },
    errorNotAllowed: function () {
      return "error" === this.state.voiceListeningState.status && "not-allowed" === this.state.voiceListeningState.errorCode;
    },
    rootSlotProps: function () {
      return {
        isBrowserSupported: this.state.isBrowserSupported,
        isListening: this.state.isListening,
        toggleListening: this.state.toggleListening,
        voiceListeningState: this.state.voiceListeningState
      };
    },
    innerSlotProps: function () {
      return {
        status: this.state.voiceListeningState.status,
        errorCode: this.state.voiceListeningState.errorCode,
        isListening: this.state.isListening,
        transcript: this.state.voiceListeningState.transcript,
        isSpeechFinal: this.state.voiceListeningState.isSpeechFinal,
        isBrowserSupported: this.state.isBrowserSupported
      };
    }
  },
  methods: {
    handleClick: function (e) {
      e.currentTarget.blur(), this.state.toggleListening();
    }
  }
},
    RelevantSort = {
  render: function () {
    var e = this,
        t = e.$createElement,
        n = e._self._c || t;
    return e.state && e.state.isVirtualReplica ? n("div", {
      class: e.suit()
    }, [e._t("default", [n("div", {
      class: e.suit("text")
    }, [e._t("text", null, {
      isRelevantSorted: e.state.isRelevantSorted
    })], 2), e._v(" "), n("button", {
      class: e.suit("button"),
      attrs: {
        type: "button"
      },
      on: {
        click: function (t) {
          e.refine();
        }
      }
    }, [e._t("button", [e._v(e._s(e.state.isRelevantSorted ? "See all results" : "See relevant results"))], {
      isRelevantSorted: e.state.isRelevantSorted
    })], 2)], {
      isRelevantSorted: e.state.isRelevantSorted,
      refine: e.state.refine
    })], 2) : e._e();
  },
  staticRenderFns: [],
  name: "AisRelevantSort",
  mixins: [createSuitMixin({
    name: "RelevantSort"
  }), createWidgetMixin({
    connector: connectors.connectRelevantSort
  })],
  methods: {
    refine: function () {
      this.state.isRelevantSorted ? this.state.refine(0) : this.state.refine(void 0);
    }
  }
};

function getWidgetAttribute(e) {
  var t = e.componentOptions && e.componentOptions.propsData;

  if (t) {
    if (t.attribute) return t.attribute;
    if (Array.isArray(t.attributes)) return t.attributes[0];
  }

  var n = e.componentOptions && e.componentOptions.children ? e.componentOptions.children : e.children;
  if (Array.isArray(n)) return n.reduce(function (e, t) {
    return e || getWidgetAttribute(t);
  }, void 0);
}

var DynamicWidgets = {
  name: "AisExperimentalDynamicWidgets",
  mixins: [createWidgetMixin({
    connector: connectors.EXPERIMENTAL_connectDynamicWidgets
  }), createSuitMixin({
    name: "DynamicWidgets"
  })],
  props: {
    transformItems: {
      type: Function,
      default: void 0
    }
  },
  render: function (e) {
    var t = this,
        n = new Map();

    if ((this.$slots.default || []).forEach(function (i) {
      var s = getWidgetAttribute(i);
      s && n.set(s, e("div", {
        key: s,
        class: [t.suit("widget")]
      }, [i]));
    }), !this.state) {
      var i = [];
      return n.forEach(function (e) {
        return i.push(e);
      }), e("div", {
        attrs: {
          hidden: !0
        },
        class: [this.suit()]
      }, i);
    }

    return e("div", {
      class: [this.suit()]
    }, this.state.attributesToRender.map(function (e) {
      return n.get(e);
    }));
  },
  computed: {
    widgetParams: function () {
      return {
        transformItems: this.transformItems,
        widgets: []
      };
    }
  }
},
    widgets = Object.freeze({
  __proto__: null,
  AisAutocomplete: Autocomplete,
  AisBreadcrumb: Breadcrumb,
  AisClearRefinements: ClearRefinements,
  AisConfigure: Configure,
  AisExperimentalConfigureRelatedItems: ConfigureRelatedItems,
  AisCurrentRefinements: CurrentRefinements,
  AisHierarchicalMenu: HierarchicalMenu,
  AisHighlight: AisHighlight,
  AisHits: Hits,
  AisHitsPerPage: HitsPerPage,
  AisIndex: Index,
  AisInstantSearch: InstantSearch,
  AisInstantSearchSsr: InstantSearchSsr,
  AisInfiniteHits: InfiniteHits,
  AisMenu: Menu,
  AisMenuSelect: MenuSelect,
  AisNumericMenu: NumericMenu,
  AisPagination: Pagination,
  AisPanel: Panel,
  AisPoweredBy: PoweredBy,
  AisQueryRuleContext: QueryRuleContext,
  AisQueryRuleCustomData: QueryRuleCustomData,
  AisRangeInput: RangeInput,
  AisRatingMenu: RatingMenu,
  AisRefinementList: RefinementList,
  AisStateResults: StateResults,
  AisSearchBox: SearchBox,
  AisSnippet: Snippet,
  AisSortBy: SortBy,
  AisStats: Stats,
  AisToggleRefinement: ToggleRefinement,
  AisVoiceSearch: VoiceSearch,
  AisRelevantSort: RelevantSort,
  AisDynamicWidgets: DynamicWidgets
}),
    plugin = {
  install: function (e) {
    Object.keys(widgets).forEach(function (t) {
      e.component(widgets[t].name, widgets[t]);
    });
  }
};

function walkIndex(e, t) {
  return t(e), e.getWidgets().forEach(function (e) {
    "ais.index" === e.$$type && (t(e), walkIndex(e, t));
  });
}

function renderToString(e, t) {
  return new Promise(function (n, i) {
    return t(e, function (e, t) {
      e && i(e), n(t);
    });
  });
}

function searchOnlyWithDerivedHelpers(e) {
  return new Promise(function (t, n) {
    e.searchOnlyWithDerivedHelpers(), e.derivedHelpers[0].on("result", function () {
      t();
    }), e.derivedHelpers.forEach(function (e) {
      return e.on("error", function (e) {
        n(e);
      });
    });
  });
}

function defaultCloneComponent(e) {
  var t = {
    serverPrefetch: void 0,
    fetch: void 0,
    _base: void 0,
    name: "ais-ssr-root-component",
    router: e.$router,
    store: e.$store
  },
      n = new (e.$vnode ? e.$vnode.componentOptions.Ctor.extend(t) : Vue.component(t.name, Object.assign({}, e.$options, t)))({
    propsData: e.$options.propsData
  });
  return n.$slots = e.$slots, n.$root = e.$root, n.$options.serverPrefetch = [], n;
}

function augmentInstantSearch(e, t) {
  var n,
      i = instantsearch(e);
  return i.findResultsState = function (e) {
    var s, a, r;

    try {
      s = __webpack_require__(239);
    } catch (e) {}

    if (!s) throw new Error("you need to install vue-server-renderer");
    return Promise.resolve().then(function () {
      a = t(e), (r = a.instantsearch).start(), r.started = !1;
    }).then(function () {
      return renderToString(a, s);
    }).then(function () {
      return searchOnlyWithDerivedHelpers(r.mainHelper);
    }).then(function () {
      return n = {}, walkIndex(r.mainIndex, function (e) {
        var t = e.getResults(),
            i = t._state,
            s = t._rawResults;
        n[e.getIndexId()] = {
          state: Object.keys(i).reduce(function (e, t) {
            return e[t] = i[t], e;
          }, {}),
          results: s
        };
      }), i.hydrate(n), i.getState();
    });
  }, i.getState = function () {
    if (!n) throw new Error("You need to wait for findResultsState to finish");
    return n;
  }, i.__forceRender = function (e, t) {
    var n = t.getResults();

    if (null !== n) {
      var s = n._state,
          a = t.getHelper();
      a.state = s, e.render({
        helper: a,
        results: n,
        scopedResults: t.getScopedResults(),
        parent: t,
        state: s,
        templatesConfig: {},
        createURL: t.createURL,
        instantSearchInstance: i,
        searchMetadata: {
          isSearchStalled: !1
        }
      });
    }
  }, i.hydrate = function (e) {
    e ? (i._initialResults = e, i.start(), i.started = !1) : warn("The result of `findResultsState()` needs to be passed to `hydrate()`.");
  }, i;
}

function createServerRootMixin(e) {
  void 0 === e && (e = {});
  var t = e.$cloneComponent;
  void 0 === t && (t = defaultCloneComponent);
  var n = augmentInstantSearch(e, t);
  return {
    provide: function () {
      return {
        $_ais_ssrInstantSearchInstance: this.instantsearch
      };
    },
    data: function () {
      return {
        instantsearch: n
      };
    }
  };
}

exports.AisAutocomplete = Autocomplete, exports.AisBreadcrumb = Breadcrumb, exports.AisClearRefinements = ClearRefinements, exports.AisConfigure = Configure, exports.AisCurrentRefinements = CurrentRefinements, exports.AisDynamicWidgets = DynamicWidgets, exports.AisExperimentalConfigureRelatedItems = ConfigureRelatedItems, exports.AisHierarchicalMenu = HierarchicalMenu, exports.AisHighlight = AisHighlight, exports.AisHits = Hits, exports.AisHitsPerPage = HitsPerPage, exports.AisIndex = Index, exports.AisInfiniteHits = InfiniteHits, exports.AisInstantSearch = InstantSearch, exports.AisInstantSearchSsr = InstantSearchSsr, exports.AisMenu = Menu, exports.AisMenuSelect = MenuSelect, exports.AisNumericMenu = NumericMenu, exports.AisPagination = Pagination, exports.AisPanel = Panel, exports.AisPoweredBy = PoweredBy, exports.AisQueryRuleContext = QueryRuleContext, exports.AisQueryRuleCustomData = QueryRuleCustomData, exports.AisRangeInput = RangeInput, exports.AisRatingMenu = RatingMenu, exports.AisRefinementList = RefinementList, exports.AisRelevantSort = RelevantSort, exports.AisSearchBox = SearchBox, exports.AisSnippet = Snippet, exports.AisSortBy = SortBy, exports.AisStateResults = StateResults, exports.AisStats = Stats, exports.AisToggleRefinement = ToggleRefinement, exports.AisVoiceSearch = VoiceSearch, exports.createServerRootMixin = createServerRootMixin, exports.createSuitMixin = createSuitMixin, exports.createWidgetMixin = createWidgetMixin, exports.default = plugin;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_InstantSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(348);
/* harmony import */ var _lib_version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(365);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(366);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(367);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(368);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(369);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(371);
/* harmony import */ var _lib_infiniteHitsCache_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(370);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(274);
/* harmony import */ var _types_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(322);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_index_js__WEBPACK_IMPORTED_MODULE_10__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types_index_js__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));





/**
 * InstantSearch is the main component of InstantSearch.js. This object
 * manages the widget and lets you add new ones.
 *
 * Two parameters are required to get you started with InstantSearch.js:
 *  - `indexName`: the main index that you will use for your new search UI
 *  - `searchClient`: the search client to plug to InstantSearch.js
 *
 * The [search client provided by Algolia](algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/)
 * needs an `appId` and an `apiKey`. Those parameters can be found in your
 * [Algolia dashboard](https://www.algolia.com/api-keys).
 *
 * If you want to get up and running quickly with InstantSearch.js, have a
 * look at the [getting started](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/).
 */

var instantsearch = function instantsearch(options) {
  return new _lib_InstantSearch_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](options);
};

instantsearch.version = _lib_version_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
instantsearch.createInfiniteHitsSessionStorageCache = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_9__[/* deprecate */ "a"])(_lib_infiniteHitsCache_index_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], "import { createInfiniteHitsSessionStorageCache } from 'instantsearch.js/es/lib/infiniteHitsCache'");
instantsearch.highlight = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_9__[/* deprecate */ "a"])(_helpers_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "import { highlight } from 'instantsearch.js/es/helpers'");
instantsearch.reverseHighlight = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_9__[/* deprecate */ "a"])(_helpers_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], "import { reverseHighlight } from 'instantsearch.js/es/helpers'");
instantsearch.snippet = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_9__[/* deprecate */ "a"])(_helpers_index_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], "import { snippet } from 'instantsearch.js/es/helpers'");
instantsearch.reverseSnippet = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_9__[/* deprecate */ "a"])(_helpers_index_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], "import { reverseSnippet } from 'instantsearch.js/es/helpers'");
instantsearch.insights = _helpers_index_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"];
instantsearch.getInsightsAnonymousUserToken = _helpers_index_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"];
Object.defineProperty(instantsearch, 'widgets', {
  get: function get() {
    throw new ReferenceError("\"instantsearch.widgets\" are not available from the ES build.\n\nTo import the widgets:\n\nimport { searchBox } from 'instantsearch.js/es/widgets'");
  }
});
Object.defineProperty(instantsearch, 'connectors', {
  get: function get() {
    throw new ReferenceError("\"instantsearch.connectors\" are not available from the ES build.\n\nTo import the connectors:\n\nimport { connectSearchBox } from 'instantsearch.js/es/connectors'");
  }
});
/* harmony default export */ __webpack_exports__["default"] = (instantsearch);


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "connectClearRefinements", function() { return /* reexport */ clear_refinements_connectClearRefinements; });
__webpack_require__.d(__webpack_exports__, "connectCurrentRefinements", function() { return /* reexport */ current_refinements_connectCurrentRefinements; });
__webpack_require__.d(__webpack_exports__, "connectHierarchicalMenu", function() { return /* reexport */ hierarchical_menu_connectHierarchicalMenu; });
__webpack_require__.d(__webpack_exports__, "connectHits", function() { return /* reexport */ hits_connectHits; });
__webpack_require__.d(__webpack_exports__, "connectHitsWithInsights", function() { return /* reexport */ hits_connectHitsWithInsights; });
__webpack_require__.d(__webpack_exports__, "connectHitsPerPage", function() { return /* reexport */ hits_per_page_connectHitsPerPage; });
__webpack_require__.d(__webpack_exports__, "connectInfiniteHits", function() { return /* reexport */ infinite_hits_connectInfiniteHits; });
__webpack_require__.d(__webpack_exports__, "connectInfiniteHitsWithInsights", function() { return /* reexport */ infinite_hits_connectInfiniteHitsWithInsights; });
__webpack_require__.d(__webpack_exports__, "connectMenu", function() { return /* reexport */ menu_connectMenu; });
__webpack_require__.d(__webpack_exports__, "connectNumericMenu", function() { return /* reexport */ numeric_menu_connectNumericMenu; });
__webpack_require__.d(__webpack_exports__, "connectPagination", function() { return /* reexport */ pagination_connectPagination; });
__webpack_require__.d(__webpack_exports__, "connectRange", function() { return /* reexport */ range_connectRange; });
__webpack_require__.d(__webpack_exports__, "connectRefinementList", function() { return /* reexport */ refinement_list_connectRefinementList; });
__webpack_require__.d(__webpack_exports__, "connectSearchBox", function() { return /* reexport */ search_box_connectSearchBox; });
__webpack_require__.d(__webpack_exports__, "connectSortBy", function() { return /* reexport */ sort_by_connectSortBy; });
__webpack_require__.d(__webpack_exports__, "connectRatingMenu", function() { return /* reexport */ rating_menu_connectRatingMenu; });
__webpack_require__.d(__webpack_exports__, "connectStats", function() { return /* reexport */ stats_connectStats; });
__webpack_require__.d(__webpack_exports__, "connectToggleRefinement", function() { return /* reexport */ toggle_refinement_connectToggleRefinement; });
__webpack_require__.d(__webpack_exports__, "connectBreadcrumb", function() { return /* reexport */ breadcrumb_connectBreadcrumb; });
__webpack_require__.d(__webpack_exports__, "connectGeoSearch", function() { return /* reexport */ geo_search_connectGeoSearch; });
__webpack_require__.d(__webpack_exports__, "connectPoweredBy", function() { return /* reexport */ powered_by_connectPoweredBy; });
__webpack_require__.d(__webpack_exports__, "connectConfigure", function() { return /* reexport */ configure_connectConfigure; });
__webpack_require__.d(__webpack_exports__, "EXPERIMENTAL_connectConfigureRelatedItems", function() { return /* reexport */ configure_related_items_connectConfigureRelatedItems; });
__webpack_require__.d(__webpack_exports__, "connectAutocomplete", function() { return /* reexport */ autocomplete_connectAutocomplete; });
__webpack_require__.d(__webpack_exports__, "connectQueryRules", function() { return /* reexport */ query_rules_connectQueryRules; });
__webpack_require__.d(__webpack_exports__, "connectVoiceSearch", function() { return /* reexport */ voice_search_connectVoiceSearch; });
__webpack_require__.d(__webpack_exports__, "EXPERIMENTAL_connectAnswers", function() { return /* reexport */ answers_connectAnswers; });
__webpack_require__.d(__webpack_exports__, "connectRelevantSort", function() { return /* reexport */ relevant_sort_connectRelevantSort; });
__webpack_require__.d(__webpack_exports__, "connectDynamicWidgets", function() { return /* reexport */ dynamic_widgets_connectDynamicWidgets; });
__webpack_require__.d(__webpack_exports__, "EXPERIMENTAL_connectDynamicWidgets", function() { return /* binding */ EXPERIMENTAL_connectDynamicWidgets; });

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(279);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(280);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/checkRendering.js
var checkRendering = __webpack_require__(298);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/clearRefinements.js
var clearRefinements = __webpack_require__(299);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js
var mergeSearchParameters = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/uniq.js
var uniq = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getRefinements.js
var getRefinements = __webpack_require__(301);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/clear-refinements/connectClearRefinements.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'clear-refinements',
  connector: true
});

var connectClearRefinements_connectClearRefinements = function connectClearRefinements(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        _ref$includedAttribut = _ref.includedAttributes,
        includedAttributes = _ref$includedAttribut === void 0 ? [] : _ref$includedAttribut,
        _ref$excludedAttribut = _ref.excludedAttributes,
        excludedAttributes = _ref$excludedAttribut === void 0 ? ['query'] : _ref$excludedAttribut,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? function (items) {
      return items;
    } : _ref$transformItems;

    if (widgetParams && widgetParams.includedAttributes && widgetParams.excludedAttributes) {
      throw new Error(withUsage('The options `includedAttributes` and `excludedAttributes` cannot be used together.'));
    }

    var connectorState = {
      refine: noop["a" /* default */],
      createURL: function createURL() {
        return '';
      },
      attributesToClear: []
    };

    var cachedRefine = function cachedRefine() {
      return connectorState.refine();
    };

    var cachedCreateURL = function cachedCreateURL() {
      return connectorState.createURL();
    };

    return {
      $$type: 'ais.clearRefinements',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose() {
        unmountFn();
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return _objectSpread(_objectSpread({}, renderState), {}, {
          clearRefinements: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref2) {
        var createURL = _ref2.createURL,
            scopedResults = _ref2.scopedResults,
            results = _ref2.results;
        connectorState.attributesToClear = scopedResults.reduce(function (attributesToClear, scopedResult) {
          return attributesToClear.concat(getAttributesToClear({
            scopedResult: scopedResult,
            includedAttributes: includedAttributes,
            excludedAttributes: excludedAttributes,
            transformItems: transformItems,
            results: results
          }));
        }, []);

        connectorState.refine = function () {
          connectorState.attributesToClear.forEach(function (_ref3) {
            var indexHelper = _ref3.helper,
                items = _ref3.items;
            indexHelper.setState(Object(clearRefinements["a" /* default */])({
              helper: indexHelper,
              attributesToClear: items
            })).search();
          });
        };

        connectorState.createURL = function () {
          return createURL(mergeSearchParameters["a" /* default */].apply(void 0, _toConsumableArray(connectorState.attributesToClear.map(function (_ref4) {
            var indexHelper = _ref4.helper,
                items = _ref4.items;
            return Object(clearRefinements["a" /* default */])({
              helper: indexHelper,
              attributesToClear: items
            });
          }))));
        };

        var canRefine = connectorState.attributesToClear.some(function (attributeToClear) {
          return attributeToClear.items.length > 0;
        });
        return {
          canRefine: canRefine,
          hasRefinements: canRefine,
          refine: cachedRefine,
          createURL: cachedCreateURL,
          widgetParams: widgetParams
        };
      }
    };
  };
};

function getAttributesToClear(_ref5) {
  var scopedResult = _ref5.scopedResult,
      includedAttributes = _ref5.includedAttributes,
      excludedAttributes = _ref5.excludedAttributes,
      transformItems = _ref5.transformItems,
      results = _ref5.results;
  var includesQuery = includedAttributes.indexOf('query') !== -1 || excludedAttributes.indexOf('query') === -1;
  return {
    helper: scopedResult.helper,
    items: transformItems(Object(uniq["a" /* default */])(Object(getRefinements["a" /* default */])(scopedResult.results, scopedResult.helper.state, includesQuery).map(function (refinement) {
      return refinement.attribute;
    }).filter(function (attribute) {
      return (// If the array is empty (default case), we keep all the attributes
        includedAttributes.length === 0 || // Otherwise, only add the specified attributes
        includedAttributes.indexOf(attribute) !== -1
      );
    }).filter(function (attribute) {
      return (// If the query is included, we ignore the default `excludedAttributes = ['query']`
        attribute === 'query' && includesQuery || // Otherwise, ignore the excluded attributes
        excludedAttributes.indexOf(attribute) === -1
      );
    })), {
      results: results
    })
  };
}

/* harmony default export */ var clear_refinements_connectClearRefinements = (connectClearRefinements_connectClearRefinements);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements.js
function connectCurrentRefinements_toConsumableArray(arr) {
  return connectCurrentRefinements_arrayWithoutHoles(arr) || connectCurrentRefinements_iterableToArray(arr) || connectCurrentRefinements_unsupportedIterableToArray(arr) || connectCurrentRefinements_nonIterableSpread();
}

function connectCurrentRefinements_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectCurrentRefinements_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectCurrentRefinements_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectCurrentRefinements_arrayLikeToArray(o, minLen);
}

function connectCurrentRefinements_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function connectCurrentRefinements_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return connectCurrentRefinements_arrayLikeToArray(arr);
}

function connectCurrentRefinements_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function connectCurrentRefinements_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectCurrentRefinements_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectCurrentRefinements_ownKeys(Object(source), true).forEach(function (key) {
        connectCurrentRefinements_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectCurrentRefinements_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectCurrentRefinements_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectCurrentRefinements_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'current-refinements',
  connector: true
});

var connectCurrentRefinements_connectCurrentRefinements = function connectCurrentRefinements(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectCurrentRefinements_withUsage());
  return function (widgetParams) {
    if ((widgetParams || {}).includedAttributes && (widgetParams || {}).excludedAttributes) {
      throw new Error(connectCurrentRefinements_withUsage('The options `includedAttributes` and `excludedAttributes` cannot be used together.'));
    }

    var _ref = widgetParams || {},
        includedAttributes = _ref.includedAttributes,
        _ref$excludedAttribut = _ref.excludedAttributes,
        excludedAttributes = _ref$excludedAttribut === void 0 ? ['query'] : _ref$excludedAttribut,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? function (items) {
      return items;
    } : _ref$transformItems;

    return {
      $$type: 'ais.currentRefinements',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectCurrentRefinements_objectSpread(connectCurrentRefinements_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectCurrentRefinements_objectSpread(connectCurrentRefinements_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose() {
        unmountFn();
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectCurrentRefinements_objectSpread(connectCurrentRefinements_objectSpread({}, renderState), {}, {
          currentRefinements: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref2) {
        var results = _ref2.results,
            scopedResults = _ref2.scopedResults,
            _createURL = _ref2.createURL,
            helper = _ref2.helper;

        function getItems() {
          if (!results) {
            return transformItems(getRefinementsItems({
              results: {},
              helper: helper,
              includedAttributes: includedAttributes,
              excludedAttributes: excludedAttributes
            }), {
              results: results
            });
          }

          return scopedResults.reduce(function (accResults, scopedResult) {
            return accResults.concat(transformItems(getRefinementsItems({
              results: scopedResult.results,
              helper: scopedResult.helper,
              includedAttributes: includedAttributes,
              excludedAttributes: excludedAttributes
            }), {
              results: results
            }));
          }, []);
        }

        var items = getItems();
        return {
          items: items,
          canRefine: items.length > 0,
          refine: function refine(refinement) {
            return clearRefinement(helper, refinement);
          },
          createURL: function createURL(refinement) {
            return _createURL(clearRefinementFromState(helper.state, refinement));
          },
          widgetParams: widgetParams
        };
      }
    };
  };
};

function getRefinementsItems(_ref3) {
  var results = _ref3.results,
      helper = _ref3.helper,
      includedAttributes = _ref3.includedAttributes,
      excludedAttributes = _ref3.excludedAttributes;
  var includesQuery = (includedAttributes || []).indexOf('query') !== -1 || (excludedAttributes || []).indexOf('query') === -1;
  var filterFunction = includedAttributes ? function (item) {
    return includedAttributes.indexOf(item.attribute) !== -1;
  } : function (item) {
    return excludedAttributes.indexOf(item.attribute) === -1;
  };
  var items = Object(getRefinements["a" /* default */])(results, helper.state, includesQuery).map(normalizeRefinement).filter(filterFunction);
  return items.reduce(function (allItems, currentItem) {
    return [].concat(connectCurrentRefinements_toConsumableArray(allItems.filter(function (item) {
      return item.attribute !== currentItem.attribute;
    })), [{
      indexName: helper.state.index,
      attribute: currentItem.attribute,
      label: currentItem.attribute,
      refinements: items.filter(function (result) {
        return result.attribute === currentItem.attribute;
      }) // We want to keep the order of refinements except the numeric ones.
      .sort(function (a, b) {
        return a.type === 'numeric' ? a.value - b.value : 0;
      }),
      refine: function refine(refinement) {
        return clearRefinement(helper, refinement);
      }
    }]);
  }, []);
}

function clearRefinementFromState(state, refinement) {
  switch (refinement.type) {
    case 'facet':
      return state.removeFacetRefinement(refinement.attribute, String(refinement.value));

    case 'disjunctive':
      return state.removeDisjunctiveFacetRefinement(refinement.attribute, String(refinement.value));

    case 'hierarchical':
      return state.removeHierarchicalFacetRefinement(refinement.attribute);

    case 'exclude':
      return state.removeExcludeRefinement(refinement.attribute, String(refinement.value));

    case 'numeric':
      return state.removeNumericRefinement(refinement.attribute, refinement.operator, String(refinement.value));

    case 'tag':
      return state.removeTagRefinement(String(refinement.value));

    case 'query':
      return state.setQueryParameter('query', '');

    default:
       false ? undefined : void 0;
      return state;
  }
}

function clearRefinement(helper, refinement) {
  helper.setState(clearRefinementFromState(helper.state, refinement)).search();
}

function getOperatorSymbol(operator) {
  switch (operator) {
    case '>=':
      return '≥';

    case '<=':
      return '≤';

    default:
      return operator;
  }
}

function normalizeRefinement(refinement) {
  var value = getValue(refinement);
  var label = refinement.operator ? "".concat(getOperatorSymbol(refinement.operator), " ").concat(refinement.name) : refinement.name;
  var normalizedRefinement = {
    attribute: refinement.attribute,
    type: refinement.type,
    value: value,
    label: label
  };

  if (refinement.operator !== undefined) {
    normalizedRefinement.operator = refinement.operator;
  }

  if (refinement.count !== undefined) {
    normalizedRefinement.count = refinement.count;
  }

  if (refinement.exhaustive !== undefined) {
    normalizedRefinement.exhaustive = refinement.exhaustive;
  }

  return normalizedRefinement;
}

function getValue(refinement) {
  if (refinement.type === 'numeric') {
    return Number(refinement.name);
  }

  if ('escapedValue' in refinement) {
    return refinement.escapedValue;
  }

  return refinement.name;
}

/* harmony default export */ var current_refinements_connectCurrentRefinements = (connectCurrentRefinements_connectCurrentRefinements);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/createSendEventForFacet.js
var createSendEventForFacet = __webpack_require__(302);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu.js
function connectHierarchicalMenu_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectHierarchicalMenu_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectHierarchicalMenu_ownKeys(Object(source), true).forEach(function (key) {
        connectHierarchicalMenu_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectHierarchicalMenu_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectHierarchicalMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || connectHierarchicalMenu_unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectHierarchicalMenu_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectHierarchicalMenu_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectHierarchicalMenu_arrayLikeToArray(o, minLen);
}

function connectHierarchicalMenu_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}


var connectHierarchicalMenu_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'hierarchical-menu',
  connector: true
});
var DEFAULT_SORT = ['name:asc'];
/**
 * **HierarchicalMenu** connector provides the logic to build a custom widget
 * that will give the user the ability to explore facets in a tree-like structure.
 *
 * This is commonly used for multi-level categorization of products on e-commerce
 * websites. From a UX point of view, we suggest not displaying more than two
 * levels deep.
 *
 * @type {Connector}
 * @param {function(HierarchicalMenuRenderingOptions, boolean)} renderFn Rendering function for the custom **HierarchicalMenu** widget.
 * @param {function} unmountFn Unmount function called when the widget is disposed.
 * @return {function(CustomHierarchicalMenuWidgetParams)} Re-usable widget factory for a custom **HierarchicalMenu** widget.
 */

var connectHierarchicalMenu_connectHierarchicalMenu = function connectHierarchicalMenu(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectHierarchicalMenu_withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        attributes = _ref.attributes,
        _ref$separator = _ref.separator,
        separator = _ref$separator === void 0 ? ' > ' : _ref$separator,
        _ref$rootPath = _ref.rootPath,
        rootPath = _ref$rootPath === void 0 ? null : _ref$rootPath,
        _ref$showParentLevel = _ref.showParentLevel,
        showParentLevel = _ref$showParentLevel === void 0 ? true : _ref$showParentLevel,
        _ref$limit = _ref.limit,
        limit = _ref$limit === void 0 ? 10 : _ref$limit,
        _ref$showMore = _ref.showMore,
        showMore = _ref$showMore === void 0 ? false : _ref$showMore,
        _ref$showMoreLimit = _ref.showMoreLimit,
        showMoreLimit = _ref$showMoreLimit === void 0 ? 20 : _ref$showMoreLimit,
        _ref$sortBy = _ref.sortBy,
        sortBy = _ref$sortBy === void 0 ? DEFAULT_SORT : _ref$sortBy,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? function (items) {
      return items;
    } : _ref$transformItems;

    if (!attributes || !Array.isArray(attributes) || attributes.length === 0) {
      throw new Error(connectHierarchicalMenu_withUsage('The `attributes` option expects an array of strings.'));
    }

    if (showMore === true && showMoreLimit <= limit) {
      throw new Error(connectHierarchicalMenu_withUsage('The `showMoreLimit` option must be greater than `limit`.'));
    } // we need to provide a hierarchicalFacet name for the search state
    // so that we can always map $hierarchicalFacetName => real attributes
    // we use the first attribute name


    var _attributes = _slicedToArray(attributes, 1),
        hierarchicalFacetName = _attributes[0];

    var sendEvent; // Provide the same function to the `renderFn` so that way the user
    // has to only bind it once when `isFirstRendering` for instance

    var toggleShowMore = function toggleShowMore() {};

    function cachedToggleShowMore() {
      toggleShowMore();
    }

    var _refine;

    var isShowingMore = false;

    function createToggleShowMore(renderOptions, widget) {
      return function () {
        isShowingMore = !isShowingMore;
        widget.render(renderOptions);
      };
    }

    function getLimit() {
      return isShowingMore ? showMoreLimit : limit;
    }

    function _prepareFacetValues(facetValues) {
      return facetValues.slice(0, getLimit()).map(function (_ref2) {
        var label = _ref2.name,
            value = _ref2.escapedValue,
            data = _ref2.data,
            path = _ref2.path,
            subValue = _objectWithoutProperties(_ref2, ["name", "escapedValue", "data", "path"]);

        var item = connectHierarchicalMenu_objectSpread(connectHierarchicalMenu_objectSpread({}, subValue), {}, {
          value: value,
          label: label,
          data: null
        });

        if (Array.isArray(data)) {
          item.data = _prepareFacetValues(data);
        }

        return item;
      });
    }

    return {
      $$type: 'ais.hierarchicalMenu',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectHierarchicalMenu_objectSpread(connectHierarchicalMenu_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        toggleShowMore = createToggleShowMore(renderOptions, this);
        renderFn(connectHierarchicalMenu_objectSpread(connectHierarchicalMenu_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref3) {
        var state = _ref3.state;
        unmountFn();
        return state.removeHierarchicalFacet(hierarchicalFacetName).setQueryParameter('maxValuesPerFacet', undefined);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectHierarchicalMenu_objectSpread(connectHierarchicalMenu_objectSpread({}, renderState), {}, {
          hierarchicalMenu: connectHierarchicalMenu_objectSpread(connectHierarchicalMenu_objectSpread({}, renderState.hierarchicalMenu), {}, connectHierarchicalMenu_defineProperty({}, hierarchicalFacetName, this.getWidgetRenderState(renderOptions)))
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref4) {
        var results = _ref4.results,
            state = _ref4.state,
            createURL = _ref4.createURL,
            instantSearchInstance = _ref4.instantSearchInstance,
            helper = _ref4.helper;
        var items = [];
        var canToggleShowMore = false; // Bind createURL to this specific attribute

        function _createURL(facetValue) {
          return createURL(state.resetPage().toggleFacetRefinement(hierarchicalFacetName, facetValue));
        }

        if (!sendEvent) {
          sendEvent = Object(createSendEventForFacet["a" /* createSendEventForFacet */])({
            instantSearchInstance: instantSearchInstance,
            helper: helper,
            attribute: hierarchicalFacetName,
            widgetType: this.$$type
          });
        }

        if (!_refine) {
          _refine = function _refine(facetValue) {
            sendEvent('click', facetValue);
            helper.toggleFacetRefinement(hierarchicalFacetName, facetValue).search();
          };
        }

        if (results) {
          var facetValues = results.getFacetValues(hierarchicalFacetName, {
            sortBy: sortBy,
            facetOrdering: sortBy === DEFAULT_SORT
          });
          var facetItems = facetValues && !Array.isArray(facetValues) && facetValues.data ? facetValues.data : []; // If the limit is the max number of facet retrieved it is impossible to know
          // if the facets are exhaustive. The only moment we are sure it is exhaustive
          // is when it is strictly under the number requested unless we know that another
          // widget has requested more values (maxValuesPerFacet > getLimit()).
          // Because this is used for making the search of facets unable or not, it is important
          // to be conservative here.

          var hasExhaustiveItems = (state.maxValuesPerFacet || 0) > getLimit() ? facetItems.length <= getLimit() : facetItems.length < getLimit();
          canToggleShowMore = showMore && (isShowingMore || !hasExhaustiveItems);
          items = transformItems(_prepareFacetValues(facetItems), {
            results: results
          });
        }

        return {
          items: items,
          refine: _refine,
          canRefine: items.length > 0,
          createURL: _createURL,
          sendEvent: sendEvent,
          widgetParams: widgetParams,
          isShowingMore: isShowingMore,
          toggleShowMore: cachedToggleShowMore,
          canToggleShowMore: canToggleShowMore
        };
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref5) {
        var searchParameters = _ref5.searchParameters;
        var path = searchParameters.getHierarchicalFacetBreadcrumb(hierarchicalFacetName);

        if (!path.length) {
          return uiState;
        }

        return connectHierarchicalMenu_objectSpread(connectHierarchicalMenu_objectSpread({}, uiState), {}, {
          hierarchicalMenu: connectHierarchicalMenu_objectSpread(connectHierarchicalMenu_objectSpread({}, uiState.hierarchicalMenu), {}, connectHierarchicalMenu_defineProperty({}, hierarchicalFacetName, path))
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
        var uiState = _ref6.uiState;
        var values = uiState.hierarchicalMenu && uiState.hierarchicalMenu[hierarchicalFacetName];

        if (searchParameters.isHierarchicalFacet(hierarchicalFacetName)) {
          var facet = searchParameters.getHierarchicalFacetByName(hierarchicalFacetName);
           false ? undefined : void 0;
        }

        var withFacetConfiguration = searchParameters.removeHierarchicalFacet(hierarchicalFacetName).addHierarchicalFacet({
          name: hierarchicalFacetName,
          attributes: attributes,
          separator: separator,
          rootPath: rootPath,
          showParentLevel: showParentLevel
        });
        var currentMaxValuesPerFacet = withFacetConfiguration.maxValuesPerFacet || 0;
        var nextMaxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
        var withMaxValuesPerFacet = withFacetConfiguration.setQueryParameter('maxValuesPerFacet', nextMaxValuesPerFacet);

        if (!values) {
          return withMaxValuesPerFacet.setQueryParameters({
            hierarchicalFacetsRefinements: connectHierarchicalMenu_objectSpread(connectHierarchicalMenu_objectSpread({}, withMaxValuesPerFacet.hierarchicalFacetsRefinements), {}, connectHierarchicalMenu_defineProperty({}, hierarchicalFacetName, []))
          });
        }

        return withMaxValuesPerFacet.addHierarchicalFacetRefinement(hierarchicalFacetName, values.join(separator));
      }
    };
  };
};

/* harmony default export */ var hierarchical_menu_connectHierarchicalMenu = (connectHierarchicalMenu_connectHierarchicalMenu);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/createSendEventForHits.js
var createSendEventForHits = __webpack_require__(303);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escape-highlight.js
var escape_highlight = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/hits-absolute-position.js
var hits_absolute_position = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/hits-query-id.js
var hits_query_id = __webpack_require__(305);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/hits/connectHits.js
function connectHits_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectHits_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectHits_ownKeys(Object(source), true).forEach(function (key) {
        connectHits_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectHits_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectHits_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectHits_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'hits',
  connector: true
});

var connectHits_connectHits = function connectHits(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectHits_withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        _ref$escapeHTML = _ref.escapeHTML,
        escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? function (items) {
      return items;
    } : _ref$transformItems;

    var sendEvent;
    var bindEvent;
    return {
      $$type: 'ais.hits',
      init: function init(initOptions) {
        renderFn(connectHits_objectSpread(connectHits_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: initOptions.instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var renderState = this.getWidgetRenderState(renderOptions);
        renderFn(connectHits_objectSpread(connectHits_objectSpread({}, renderState), {}, {
          instantSearchInstance: renderOptions.instantSearchInstance
        }), false);
        renderState.sendEvent('view', renderState.hits);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectHits_objectSpread(connectHits_objectSpread({}, renderState), {}, {
          hits: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref2) {
        var results = _ref2.results,
            helper = _ref2.helper,
            instantSearchInstance = _ref2.instantSearchInstance;

        if (!sendEvent) {
          sendEvent = Object(createSendEventForHits["b" /* createSendEventForHits */])({
            instantSearchInstance: instantSearchInstance,
            index: helper.getIndex(),
            widgetType: this.$$type
          });
        }

        if (!bindEvent) {
          bindEvent = Object(createSendEventForHits["a" /* createBindEventForHits */])({
            index: helper.getIndex(),
            widgetType: this.$$type
          });
        }

        if (!results) {
          return {
            hits: [],
            results: undefined,
            sendEvent: sendEvent,
            bindEvent: bindEvent,
            widgetParams: widgetParams
          };
        }

        if (escapeHTML && results.hits.length > 0) {
          results.hits = Object(escape_highlight["d" /* escapeHits */])(results.hits);
        }

        var hitsWithAbsolutePosition = Object(hits_absolute_position["a" /* addAbsolutePosition */])(results.hits, results.page, results.hitsPerPage);
        var hitsWithAbsolutePositionAndQueryID = Object(hits_query_id["a" /* addQueryID */])(hitsWithAbsolutePosition, results.queryID);
        var transformedHits = transformItems(hitsWithAbsolutePositionAndQueryID, {
          results: results
        });
        return {
          hits: transformedHits,
          results: results,
          sendEvent: sendEvent,
          bindEvent: bindEvent,
          widgetParams: widgetParams
        };
      },
      dispose: function dispose(_ref3) {
        var state = _ref3.state;
        unmountFn();

        if (!escapeHTML) {
          return state;
        }

        return state.setQueryParameters(Object.keys(escape_highlight["a" /* TAG_PLACEHOLDER */]).reduce(function (acc, key) {
          return connectHits_objectSpread(connectHits_objectSpread({}, acc), {}, connectHits_defineProperty({}, key, undefined));
        }, {}));
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(state) {
        if (!escapeHTML) {
          return state;
        }

        return state.setQueryParameters(escape_highlight["a" /* TAG_PLACEHOLDER */]);
      }
    };
  };
};

/* harmony default export */ var hits_connectHits = (connectHits_connectHits);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/find.js
var find = __webpack_require__(283);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/insights/client.js
function client_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function client_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      client_ownKeys(Object(source), true).forEach(function (key) {
        client_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      client_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function client_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}



var client_getSelectedHits = function getSelectedHits(hits, selectedObjectIDs) {
  return selectedObjectIDs.map(function (objectID) {
    var hit = Object(find["a" /* default */])(hits, function (h) {
      return h.objectID === objectID;
    });

    if (typeof hit === 'undefined') {
      throw new Error("Could not find objectID \"".concat(objectID, "\" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID."));
    }

    return hit;
  });
};

var client_getQueryID = function getQueryID(selectedHits) {
  var queryIDs = Object(uniq["a" /* default */])(selectedHits.map(function (hit) {
    return hit.__queryID;
  }));

  if (queryIDs.length > 1) {
    throw new Error('Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.');
  }

  var queryID = queryIDs[0];

  if (typeof queryID !== 'string') {
    throw new Error("Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7");
  }

  return queryID;
};

var getPositions = function getPositions(selectedHits) {
  return selectedHits.map(function (hit) {
    return hit.__position;
  });
};

var inferPayload = function inferPayload(_ref) {
  var method = _ref.method,
      results = _ref.results,
      hits = _ref.hits,
      objectIDs = _ref.objectIDs;
  var index = results.index;
  var selectedHits = client_getSelectedHits(hits, objectIDs);
  var queryID = client_getQueryID(selectedHits);

  switch (method) {
    case 'clickedObjectIDsAfterSearch':
      {
        var positions = getPositions(selectedHits);
        return {
          index: index,
          queryID: queryID,
          objectIDs: objectIDs,
          positions: positions
        };
      }

    case 'convertedObjectIDsAfterSearch':
      return {
        index: index,
        queryID: queryID,
        objectIDs: objectIDs
      };

    default:
      throw new Error("Unsupported method passed to insights: \"".concat(method, "\"."));
  }
};

var client_wrapInsightsClient = function wrapInsightsClient(aa, results, hits) {
  return function (method) {
    for (var _len = arguments.length, payloads = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      payloads[_key - 1] = arguments[_key];
    }

    var payload = payloads[0];
     false ? undefined : void 0;

    if (!aa) {
      var withInstantSearchUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
        name: 'instantsearch'
      });
      throw new Error(withInstantSearchUsage('The `insightsClient` option has not been provided to `instantsearch`.'));
    }

    if (!Array.isArray(payload.objectIDs)) {
      throw new TypeError('Expected `objectIDs` to be an array.');
    }

    var inferredPayload = inferPayload({
      method: method,
      results: results,
      hits: hits,
      objectIDs: payload.objectIDs
    });
    aa(method, client_objectSpread(client_objectSpread({}, inferredPayload), payload));
  };
};
/**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 * It passes `insights` to `HitsWithInsightsListener` and `InfiniteHitsWithInsightsListener`.
 */


function withInsights(connector) {
  return function (renderFn, unmountFn) {
    return connector(function (renderOptions, isFirstRender) {
      var results = renderOptions.results,
          hits = renderOptions.hits,
          instantSearchInstance = renderOptions.instantSearchInstance;

      if (results && hits && instantSearchInstance) {
        var insights = client_wrapInsightsClient(instantSearchInstance.insightsClient, results, hits);
        return renderFn(client_objectSpread(client_objectSpread({}, renderOptions), {}, {
          insights: insights
        }), isFirstRender);
      }

      return renderFn(renderOptions, isFirstRender);
    }, unmountFn);
  };
}
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/hits/connectHitsWithInsights.js


var connectHitsWithInsights = withInsights(hits_connectHits);
/* harmony default export */ var hits_connectHitsWithInsights = (connectHitsWithInsights);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage.js
function connectHitsPerPage_toConsumableArray(arr) {
  return connectHitsPerPage_arrayWithoutHoles(arr) || connectHitsPerPage_iterableToArray(arr) || connectHitsPerPage_unsupportedIterableToArray(arr) || connectHitsPerPage_nonIterableSpread();
}

function connectHitsPerPage_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectHitsPerPage_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectHitsPerPage_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectHitsPerPage_arrayLikeToArray(o, minLen);
}

function connectHitsPerPage_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function connectHitsPerPage_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return connectHitsPerPage_arrayLikeToArray(arr);
}

function connectHitsPerPage_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function connectHitsPerPage_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectHitsPerPage_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectHitsPerPage_ownKeys(Object(source), true).forEach(function (key) {
        connectHitsPerPage_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectHitsPerPage_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectHitsPerPage_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectHitsPerPage_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'hits-per-page',
  connector: true
});

var connectHitsPerPage_connectHitsPerPage = function connectHitsPerPage(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectHitsPerPage_withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        userItems = _ref.items,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? function (items) {
      return items;
    } : _ref$transformItems;

    if (!Array.isArray(userItems)) {
      throw new Error(connectHitsPerPage_withUsage('The `items` option expects an array of objects.'));
    }

    var items = userItems;
    var defaultItems = items.filter(function (item) {
      return item.default === true;
    });

    if (defaultItems.length === 0) {
      throw new Error(connectHitsPerPage_withUsage("A default value must be specified in `items`."));
    }

    if (defaultItems.length > 1) {
      throw new Error(connectHitsPerPage_withUsage('More than one default value is specified in `items`.'));
    }

    var defaultItem = defaultItems[0];

    var normalizeItems = function normalizeItems(_ref2) {
      var hitsPerPage = _ref2.hitsPerPage;
      return items.map(function (item) {
        return connectHitsPerPage_objectSpread(connectHitsPerPage_objectSpread({}, item), {}, {
          isRefined: Number(item.value) === Number(hitsPerPage)
        });
      });
    };

    var connectorState = {
      getRefine: function getRefine(helper) {
        return function (value) {
          return !value && value !== 0 ? helper.setQueryParameter('hitsPerPage', undefined).search() : helper.setQueryParameter('hitsPerPage', value).search();
        };
      },
      createURLFactory: function createURLFactory(_ref3) {
        var state = _ref3.state,
            createURL = _ref3.createURL;
        return function (value) {
          return createURL(state.resetPage().setQueryParameter('hitsPerPage', !value && value !== 0 ? undefined : value));
        };
      }
    };
    return {
      $$type: 'ais.hitsPerPage',
      init: function init(initOptions) {
        var state = initOptions.state,
            instantSearchInstance = initOptions.instantSearchInstance;
        var isCurrentInOptions = items.some(function (item) {
          return Number(state.hitsPerPage) === Number(item.value);
        });

        if (!isCurrentInOptions) {
           false ? undefined : void 0;
           false ? undefined : void 0;
          items = [// The helper will convert the empty string to `undefined`.
          {
            value: '',
            label: ''
          }].concat(connectHitsPerPage_toConsumableArray(items));
        }

        renderFn(connectHitsPerPage_objectSpread(connectHitsPerPage_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectHitsPerPage_objectSpread(connectHitsPerPage_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref4) {
        var state = _ref4.state;
        unmountFn();
        return state.setQueryParameter('hitsPerPage', undefined);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectHitsPerPage_objectSpread(connectHitsPerPage_objectSpread({}, renderState), {}, {
          hitsPerPage: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref5) {
        var state = _ref5.state,
            results = _ref5.results,
            createURL = _ref5.createURL,
            helper = _ref5.helper;
        var canRefine = results ? results.nbHits > 0 : false;
        return {
          items: transformItems(normalizeItems(state), {
            results: results
          }),
          refine: connectorState.getRefine(helper),
          createURL: connectorState.createURLFactory({
            state: state,
            createURL: createURL
          }),
          hasNoResults: !canRefine,
          canRefine: canRefine,
          widgetParams: widgetParams
        };
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref6) {
        var searchParameters = _ref6.searchParameters;
        var hitsPerPage = searchParameters.hitsPerPage;

        if (hitsPerPage === undefined || hitsPerPage === defaultItem.value) {
          return uiState;
        }

        return connectHitsPerPage_objectSpread(connectHitsPerPage_objectSpread({}, uiState), {}, {
          hitsPerPage: hitsPerPage
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref7) {
        var uiState = _ref7.uiState;
        return searchParameters.setQueryParameters({
          hitsPerPage: uiState.hitsPerPage || defaultItem.value
        });
      }
    };
  };
};

/* harmony default export */ var hits_per_page_connectHitsPerPage = (connectHitsPerPage_connectHitsPerPage);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/isEqual.js
var isEqual = __webpack_require__(306);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits.js
function connectInfiniteHits_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectInfiniteHits_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectInfiniteHits_ownKeys(Object(source), true).forEach(function (key) {
        connectInfiniteHits_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectInfiniteHits_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectInfiniteHits_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function connectInfiniteHits_toConsumableArray(arr) {
  return connectInfiniteHits_arrayWithoutHoles(arr) || connectInfiniteHits_iterableToArray(arr) || connectInfiniteHits_unsupportedIterableToArray(arr) || connectInfiniteHits_nonIterableSpread();
}

function connectInfiniteHits_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectInfiniteHits_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectInfiniteHits_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectInfiniteHits_arrayLikeToArray(o, minLen);
}

function connectInfiniteHits_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function connectInfiniteHits_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return connectInfiniteHits_arrayLikeToArray(arr);
}

function connectInfiniteHits_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function connectInfiniteHits_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = connectInfiniteHits_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function connectInfiniteHits_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}


var connectInfiniteHits_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'infinite-hits',
  connector: true
});

function getStateWithoutPage(state) {
  var _ref = state || {},
      page = _ref.page,
      rest = connectInfiniteHits_objectWithoutProperties(_ref, ["page"]);

  return rest;
}

function getInMemoryCache() {
  var cachedHits = null;
  var cachedState = null;
  return {
    read: function read(_ref2) {
      var state = _ref2.state;
      return Object(isEqual["a" /* default */])(cachedState, getStateWithoutPage(state)) ? cachedHits : null;
    },
    write: function write(_ref3) {
      var state = _ref3.state,
          hits = _ref3.hits;
      cachedState = getStateWithoutPage(state);
      cachedHits = hits;
    }
  };
}

function extractHitsFromCachedHits(cachedHits) {
  return Object.keys(cachedHits).map(Number).sort(function (a, b) {
    return a - b;
  }).reduce(function (acc, page) {
    return acc.concat(cachedHits[page]);
  }, []);
}

var connectInfiniteHits_connectInfiniteHits = function connectInfiniteHits(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectInfiniteHits_withUsage()); // @TODO: this should be a generic, but a Connector can not yet be generic itself

  return function (widgetParams) {
    var _ref4 = widgetParams || {},
        _ref4$escapeHTML = _ref4.escapeHTML,
        escapeHTML = _ref4$escapeHTML === void 0 ? true : _ref4$escapeHTML,
        _ref4$transformItems = _ref4.transformItems,
        transformItems = _ref4$transformItems === void 0 ? function (items) {
      return items;
    } : _ref4$transformItems,
        _ref4$cache = _ref4.cache,
        cache = _ref4$cache === void 0 ? getInMemoryCache() : _ref4$cache;

    var showPrevious;
    var showMore;
    var sendEvent;
    var bindEvent;

    var getFirstReceivedPage = function getFirstReceivedPage(state, cachedHits) {
      var _state$page = state.page,
          page = _state$page === void 0 ? 0 : _state$page;
      var pages = Object.keys(cachedHits).map(Number);

      if (pages.length === 0) {
        return page;
      } else {
        return Math.min.apply(Math, [page].concat(connectInfiniteHits_toConsumableArray(pages)));
      }
    };

    var getLastReceivedPage = function getLastReceivedPage(state, cachedHits) {
      var _state$page2 = state.page,
          page = _state$page2 === void 0 ? 0 : _state$page2;
      var pages = Object.keys(cachedHits).map(Number);

      if (pages.length === 0) {
        return page;
      } else {
        return Math.max.apply(Math, [page].concat(connectInfiniteHits_toConsumableArray(pages)));
      }
    };

    var getShowPrevious = function getShowPrevious(helper) {
      return function () {
        // Using the helper's `overrideStateWithoutTriggeringChangeEvent` method
        // avoid updating the browser URL when the user displays the previous page.
        helper.overrideStateWithoutTriggeringChangeEvent(connectInfiniteHits_objectSpread(connectInfiniteHits_objectSpread({}, helper.state), {}, {
          page: getFirstReceivedPage(helper.state, cache.read({
            state: helper.state
          }) || {}) - 1
        })).searchWithoutTriggeringOnStateChange();
      };
    };

    var getShowMore = function getShowMore(helper) {
      return function () {
        helper.setPage(getLastReceivedPage(helper.state, cache.read({
          state: helper.state
        }) || {}) + 1).search();
      };
    };

    return {
      $$type: 'ais.infiniteHits',
      init: function init(initOptions) {
        renderFn(connectInfiniteHits_objectSpread(connectInfiniteHits_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: initOptions.instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        var widgetRenderState = this.getWidgetRenderState(renderOptions);
        renderFn(connectInfiniteHits_objectSpread(connectInfiniteHits_objectSpread({}, widgetRenderState), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
        sendEvent('view', widgetRenderState.currentPageHits);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectInfiniteHits_objectSpread(connectInfiniteHits_objectSpread({}, renderState), {}, {
          infiniteHits: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref5) {
        var results = _ref5.results,
            helper = _ref5.helper,
            state = _ref5.state,
            instantSearchInstance = _ref5.instantSearchInstance;
        var isFirstPage;
        var currentPageHits = [];
        var cachedHits = cache.read({
          state: state
        }) || {};

        if (!results) {
          showPrevious = getShowPrevious(helper);
          showMore = getShowMore(helper);
          sendEvent = Object(createSendEventForHits["b" /* createSendEventForHits */])({
            instantSearchInstance: instantSearchInstance,
            index: helper.getIndex(),
            widgetType: this.$$type
          });
          bindEvent = Object(createSendEventForHits["a" /* createBindEventForHits */])({
            index: helper.getIndex(),
            widgetType: this.$$type
          });
          isFirstPage = state.page === undefined || getFirstReceivedPage(state, cachedHits) === 0;
        } else {
          var _state$page3 = state.page,
              _page = _state$page3 === void 0 ? 0 : _state$page3;

          if (escapeHTML && results.hits.length > 0) {
            results.hits = Object(escape_highlight["d" /* escapeHits */])(results.hits);
          }

          var hitsWithAbsolutePosition = Object(hits_absolute_position["a" /* addAbsolutePosition */])(results.hits, results.page, results.hitsPerPage);
          var hitsWithAbsolutePositionAndQueryID = Object(hits_query_id["a" /* addQueryID */])(hitsWithAbsolutePosition, results.queryID);
          var transformedHits = transformItems(hitsWithAbsolutePositionAndQueryID, {
            results: results
          });

          if (cachedHits[_page] === undefined && !results.__isArtificial) {
            cachedHits[_page] = transformedHits;
            cache.write({
              state: state,
              hits: cachedHits
            });
          }

          currentPageHits = transformedHits;
          isFirstPage = getFirstReceivedPage(state, cachedHits) === 0;
        }

        var hits = extractHitsFromCachedHits(cachedHits);
        var isLastPage = results ? results.nbPages <= getLastReceivedPage(state, cachedHits) + 1 : true;
        return {
          hits: hits,
          currentPageHits: currentPageHits,
          sendEvent: sendEvent,
          bindEvent: bindEvent,
          results: results,
          showPrevious: showPrevious,
          showMore: showMore,
          isFirstPage: isFirstPage,
          isLastPage: isLastPage,
          widgetParams: widgetParams
        };
      },
      dispose: function dispose(_ref6) {
        var state = _ref6.state;
        unmountFn();
        var stateWithoutPage = state.setQueryParameter('page', undefined);

        if (!escapeHTML) {
          return stateWithoutPage;
        }

        return stateWithoutPage.setQueryParameters(Object.keys(escape_highlight["a" /* TAG_PLACEHOLDER */]).reduce(function (acc, key) {
          return connectInfiniteHits_objectSpread(connectInfiniteHits_objectSpread({}, acc), {}, connectInfiniteHits_defineProperty({}, key, undefined));
        }, {}));
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref7) {
        var searchParameters = _ref7.searchParameters;
        var page = searchParameters.page || 0;

        if (!page) {
          // return without adding `page` to uiState
          // because we don't want `page=1` in the URL
          return uiState;
        }

        return connectInfiniteHits_objectSpread(connectInfiniteHits_objectSpread({}, uiState), {}, {
          // The page in the UI state is incremented by one
          // to expose the user value (not `0`).
          page: page + 1
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref8) {
        var uiState = _ref8.uiState;
        var widgetSearchParameters = searchParameters;

        if (escapeHTML) {
          widgetSearchParameters = searchParameters.setQueryParameters(escape_highlight["a" /* TAG_PLACEHOLDER */]);
        } // The page in the search parameters is decremented by one
        // to get to the actual parameter value from the UI state.


        var page = uiState.page ? uiState.page - 1 : 0;
        return widgetSearchParameters.setQueryParameter('page', page);
      }
    };
  };
};

/* harmony default export */ var infinite_hits_connectInfiniteHits = (connectInfiniteHits_connectInfiniteHits);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/infinite-hits/connectInfiniteHitsWithInsights.js


var connectInfiniteHitsWithInsights = withInsights(infinite_hits_connectInfiniteHits);
/* harmony default export */ var infinite_hits_connectInfiniteHitsWithInsights = (connectInfiniteHitsWithInsights);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/menu/connectMenu.js
function connectMenu_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = connectMenu_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function connectMenu_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function connectMenu_slicedToArray(arr, i) {
  return connectMenu_arrayWithHoles(arr) || connectMenu_iterableToArrayLimit(arr, i) || connectMenu_unsupportedIterableToArray(arr, i) || connectMenu_nonIterableRest();
}

function connectMenu_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectMenu_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectMenu_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectMenu_arrayLikeToArray(o, minLen);
}

function connectMenu_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function connectMenu_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function connectMenu_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function connectMenu_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectMenu_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectMenu_ownKeys(Object(source), true).forEach(function (key) {
        connectMenu_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectMenu_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectMenu_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'menu',
  connector: true
});
var connectMenu_DEFAULT_SORT = ['isRefined', 'name:asc'];
/**
 * **Menu** connector provides the logic to build a widget that will give the user the ability to choose a single value for a specific facet. The typical usage of menu is for navigation in categories.
 *
 * This connector provides a `toggleShowMore()` function to display more or less items and a `refine()`
 * function to select an item. While selecting a new element, the `refine` will also unselect the
 * one that is currently selected.
 *
 * **Requirement:** the attribute passed as `attribute` must be present in "attributes for faceting" on the Algolia dashboard or configured as attributesForFaceting via a set settings call to the Algolia API.
 */

var connectMenu_connectMenu = function connectMenu(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectMenu_withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        attribute = _ref.attribute,
        _ref$limit = _ref.limit,
        limit = _ref$limit === void 0 ? 10 : _ref$limit,
        _ref$showMore = _ref.showMore,
        showMore = _ref$showMore === void 0 ? false : _ref$showMore,
        _ref$showMoreLimit = _ref.showMoreLimit,
        showMoreLimit = _ref$showMoreLimit === void 0 ? 20 : _ref$showMoreLimit,
        _ref$sortBy = _ref.sortBy,
        sortBy = _ref$sortBy === void 0 ? connectMenu_DEFAULT_SORT : _ref$sortBy,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? function (items) {
      return items;
    } : _ref$transformItems;

    if (!attribute) {
      throw new Error(connectMenu_withUsage('The `attribute` option is required.'));
    }

    if (showMore === true && showMoreLimit <= limit) {
      throw new Error(connectMenu_withUsage('The `showMoreLimit` option must be greater than `limit`.'));
    }

    var sendEvent;

    var _createURL;

    var _refine; // Provide the same function to the `renderFn` so that way the user
    // has to only bind it once when `isFirstRendering` for instance


    var isShowingMore = false;

    var toggleShowMore = function toggleShowMore() {};

    function createToggleShowMore(renderOptions, widget) {
      return function () {
        isShowingMore = !isShowingMore;
        widget.render(renderOptions);
      };
    }

    function cachedToggleShowMore() {
      toggleShowMore();
    }

    function getLimit() {
      return isShowingMore ? showMoreLimit : limit;
    }

    return {
      $$type: 'ais.menu',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectMenu_objectSpread(connectMenu_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectMenu_objectSpread(connectMenu_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref2) {
        var state = _ref2.state;
        unmountFn();
        return state.removeHierarchicalFacet(attribute).setQueryParameter('maxValuesPerFacet', undefined);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectMenu_objectSpread(connectMenu_objectSpread({}, renderState), {}, {
          menu: connectMenu_objectSpread(connectMenu_objectSpread({}, renderState.menu), {}, connectMenu_defineProperty({}, attribute, this.getWidgetRenderState(renderOptions)))
        });
      },
      getWidgetRenderState: function getWidgetRenderState(renderOptions) {
        var results = renderOptions.results,
            createURL = renderOptions.createURL,
            instantSearchInstance = renderOptions.instantSearchInstance,
            helper = renderOptions.helper;
        var items = [];
        var canToggleShowMore = false;

        if (!sendEvent) {
          sendEvent = Object(createSendEventForFacet["a" /* createSendEventForFacet */])({
            instantSearchInstance: instantSearchInstance,
            helper: helper,
            attribute: attribute,
            widgetType: this.$$type
          });
        }

        if (!_createURL) {
          _createURL = function _createURL(facetValue) {
            return createURL(helper.state.resetPage().toggleFacetRefinement(attribute, facetValue));
          };
        }

        if (!_refine) {
          _refine = function _refine(facetValue) {
            var _helper$getHierarchic = helper.getHierarchicalFacetBreadcrumb(attribute),
                _helper$getHierarchic2 = connectMenu_slicedToArray(_helper$getHierarchic, 1),
                refinedItem = _helper$getHierarchic2[0];

            sendEvent('click', facetValue ? facetValue : refinedItem);
            helper.toggleFacetRefinement(attribute, facetValue ? facetValue : refinedItem).search();
          };
        }

        if (renderOptions.results) {
          toggleShowMore = createToggleShowMore(renderOptions, this);
        }

        if (results) {
          var facetValues = results.getFacetValues(attribute, {
            sortBy: sortBy,
            facetOrdering: sortBy === connectMenu_DEFAULT_SORT
          });
          var facetItems = facetValues && !Array.isArray(facetValues) && facetValues.data ? facetValues.data : [];
          canToggleShowMore = showMore && (isShowingMore || facetItems.length > getLimit());
          items = transformItems(facetItems.slice(0, getLimit()).map(function (_ref3) {
            var label = _ref3.name,
                value = _ref3.escapedValue,
                path = _ref3.path,
                item = connectMenu_objectWithoutProperties(_ref3, ["name", "escapedValue", "path"]);

            return connectMenu_objectSpread(connectMenu_objectSpread({}, item), {}, {
              label: label,
              value: value
            });
          }), {
            results: results
          });
        }

        return {
          items: items,
          createURL: _createURL,
          refine: _refine,
          sendEvent: sendEvent,
          canRefine: items.length > 0,
          widgetParams: widgetParams,
          isShowingMore: isShowingMore,
          toggleShowMore: cachedToggleShowMore,
          canToggleShowMore: canToggleShowMore
        };
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
        var searchParameters = _ref4.searchParameters;

        var _searchParameters$get = searchParameters.getHierarchicalFacetBreadcrumb(attribute),
            _searchParameters$get2 = connectMenu_slicedToArray(_searchParameters$get, 1),
            value = _searchParameters$get2[0];

        if (!value) {
          return uiState;
        }

        return connectMenu_objectSpread(connectMenu_objectSpread({}, uiState), {}, {
          menu: connectMenu_objectSpread(connectMenu_objectSpread({}, uiState.menu), {}, connectMenu_defineProperty({}, attribute, value))
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
        var uiState = _ref5.uiState;
        var value = uiState.menu && uiState.menu[attribute];
        var withFacetConfiguration = searchParameters.removeHierarchicalFacet(attribute).addHierarchicalFacet({
          name: attribute,
          attributes: [attribute]
        });
        var currentMaxValuesPerFacet = withFacetConfiguration.maxValuesPerFacet || 0;
        var nextMaxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
        var withMaxValuesPerFacet = withFacetConfiguration.setQueryParameter('maxValuesPerFacet', nextMaxValuesPerFacet);

        if (!value) {
          return withMaxValuesPerFacet.setQueryParameters({
            hierarchicalFacetsRefinements: connectMenu_objectSpread(connectMenu_objectSpread({}, withMaxValuesPerFacet.hierarchicalFacetsRefinements), {}, connectMenu_defineProperty({}, attribute, []))
          });
        }

        return withMaxValuesPerFacet.addHierarchicalFacetRefinement(attribute, value);
      }
    };
  };
};

/* harmony default export */ var menu_connectMenu = (connectMenu_connectMenu);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/isFiniteNumber.js
var isFiniteNumber = __webpack_require__(307);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/numeric-menu/connectNumericMenu.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = connectNumericMenu_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function connectNumericMenu_slicedToArray(arr, i) {
  return connectNumericMenu_arrayWithHoles(arr) || connectNumericMenu_iterableToArrayLimit(arr, i) || connectNumericMenu_unsupportedIterableToArray(arr, i) || connectNumericMenu_nonIterableRest();
}

function connectNumericMenu_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectNumericMenu_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectNumericMenu_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectNumericMenu_arrayLikeToArray(o, minLen);
}

function connectNumericMenu_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function connectNumericMenu_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function connectNumericMenu_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function connectNumericMenu_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectNumericMenu_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectNumericMenu_ownKeys(Object(source), true).forEach(function (key) {
        connectNumericMenu_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectNumericMenu_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectNumericMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectNumericMenu_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'numeric-menu',
  connector: true
});
var $$type = 'ais.numericMenu';

var connectNumericMenu_createSendEvent = function createSendEvent(_ref) {
  var instantSearchInstance = _ref.instantSearchInstance;
  return function () {
    if (arguments.length === 1) {
      instantSearchInstance.sendEventToInsights(arguments.length <= 0 ? undefined : arguments[0]);
      return;
    }
  };
};

var connectNumericMenu_connectNumericMenu = function connectNumericMenu(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectNumericMenu_withUsage());
  return function (widgetParams) {
    var _ref2 = widgetParams || {},
        _ref2$attribute = _ref2.attribute,
        attribute = _ref2$attribute === void 0 ? '' : _ref2$attribute,
        _ref2$items = _ref2.items,
        items = _ref2$items === void 0 ? [] : _ref2$items,
        _ref2$transformItems = _ref2.transformItems,
        transformItems = _ref2$transformItems === void 0 ? function (item) {
      return item;
    } : _ref2$transformItems;

    if (attribute === '') {
      throw new Error(connectNumericMenu_withUsage('The `attribute` option is required.'));
    }

    if (!items || items.length === 0) {
      throw new Error(connectNumericMenu_withUsage('The `items` option expects an array of objects.'));
    }

    var prepareItems = function prepareItems(state) {
      return items.map(function (_ref3) {
        var start = _ref3.start,
            end = _ref3.end,
            label = _ref3.label;
        return {
          label: label,
          value: encodeURI(JSON.stringify({
            start: start,
            end: end
          })),
          isRefined: connectNumericMenu_isRefined(state, attribute, {
            start: start,
            end: end,
            label: label
          })
        };
      });
    };

    var connectorState = {};
    return {
      $$type: $$type,
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectNumericMenu_objectSpread(connectNumericMenu_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectNumericMenu_objectSpread(connectNumericMenu_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref4) {
        var state = _ref4.state;
        unmountFn();
        return state.clearRefinements(attribute);
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref5) {
        var searchParameters = _ref5.searchParameters;
        var values = searchParameters.getNumericRefinements(attribute);
        var equal = values['='] && values['='][0];

        if (equal || equal === 0) {
          return connectNumericMenu_objectSpread(connectNumericMenu_objectSpread({}, uiState), {}, {
            numericMenu: connectNumericMenu_objectSpread(connectNumericMenu_objectSpread({}, uiState.numericMenu), {}, connectNumericMenu_defineProperty({}, attribute, "".concat(values['='])))
          });
        }

        var min = values['>='] && values['>='][0] || '';
        var max = values['<='] && values['<='][0] || '';

        if (min === '' && max === '') {
          return uiState;
        }

        return connectNumericMenu_objectSpread(connectNumericMenu_objectSpread({}, uiState), {}, {
          numericMenu: connectNumericMenu_objectSpread(connectNumericMenu_objectSpread({}, uiState.numericMenu), {}, connectNumericMenu_defineProperty({}, attribute, "".concat(min, ":").concat(max)))
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
        var uiState = _ref6.uiState;
        var value = uiState.numericMenu && uiState.numericMenu[attribute];
        var withoutRefinements = searchParameters.clearRefinements(attribute);

        if (!value) {
          return withoutRefinements.setQueryParameters({
            numericRefinements: connectNumericMenu_objectSpread(connectNumericMenu_objectSpread({}, withoutRefinements.numericRefinements), {}, connectNumericMenu_defineProperty({}, attribute, {}))
          });
        }

        var isExact = value.indexOf(':') === -1;

        if (isExact) {
          return withoutRefinements.addNumericRefinement(attribute, '=', Number(value));
        }

        var _value$split$map = value.split(':').map(parseFloat),
            _value$split$map2 = connectNumericMenu_slicedToArray(_value$split$map, 2),
            min = _value$split$map2[0],
            max = _value$split$map2[1];

        var withMinRefinement = Object(isFiniteNumber["a" /* default */])(min) ? withoutRefinements.addNumericRefinement(attribute, '>=', min) : withoutRefinements;
        var withMaxRefinement = Object(isFiniteNumber["a" /* default */])(max) ? withMinRefinement.addNumericRefinement(attribute, '<=', max) : withMinRefinement;
        return withMaxRefinement;
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectNumericMenu_objectSpread(connectNumericMenu_objectSpread({}, renderState), {}, {
          numericMenu: connectNumericMenu_objectSpread(connectNumericMenu_objectSpread({}, renderState.numericMenu), {}, connectNumericMenu_defineProperty({}, attribute, this.getWidgetRenderState(renderOptions)))
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref7) {
        var results = _ref7.results,
            state = _ref7.state,
            instantSearchInstance = _ref7.instantSearchInstance,
            helper = _ref7.helper,
            createURL = _ref7.createURL;

        if (!connectorState.refine) {
          connectorState.refine = function (facetValue) {
            var refinedState = connectNumericMenu_getRefinedState(helper.state, attribute, facetValue);
            connectorState.sendEvent('click', facetValue);
            helper.setState(refinedState).search();
          };
        }

        if (!connectorState.createURL) {
          connectorState.createURL = function (newState) {
            return function (facetValue) {
              return createURL(connectNumericMenu_getRefinedState(newState, attribute, facetValue));
            };
          };
        }

        if (!connectorState.sendEvent) {
          connectorState.sendEvent = connectNumericMenu_createSendEvent({
            instantSearchInstance: instantSearchInstance
          });
        }

        var hasNoResults = results ? results.nbHits === 0 : true;
        var preparedItems = prepareItems(state);
        var allIsSelected = true;

        var _iterator = _createForOfIteratorHelper(preparedItems),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (item.isRefined && decodeURI(item.value) !== '{}') {
              allIsSelected = false;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return {
          createURL: connectorState.createURL(state),
          items: transformItems(preparedItems, {
            results: results
          }),
          hasNoResults: hasNoResults,
          canRefine: !(hasNoResults && allIsSelected),
          refine: connectorState.refine,
          sendEvent: connectorState.sendEvent,
          widgetParams: widgetParams
        };
      }
    };
  };
};

function connectNumericMenu_isRefined(state, attribute, option) {
  // @TODO: same as another spot, why is this mixing arrays & elements?
  var currentRefinements = state.getNumericRefinements(attribute);

  if (option.start !== undefined && option.end !== undefined) {
    if (option.start === option.end) {
      return hasNumericRefinement(currentRefinements, '=', option.start);
    } else {
      return hasNumericRefinement(currentRefinements, '>=', option.start) && hasNumericRefinement(currentRefinements, '<=', option.end);
    }
  }

  if (option.start !== undefined) {
    return hasNumericRefinement(currentRefinements, '>=', option.start);
  }

  if (option.end !== undefined) {
    return hasNumericRefinement(currentRefinements, '<=', option.end);
  }

  if (option.start === undefined && option.end === undefined) {
    return Object.keys(currentRefinements).every(function (operator) {
      return (currentRefinements[operator] || []).length === 0;
    });
  }

  return false;
}

function connectNumericMenu_getRefinedState(state, attribute, facetValue) {
  var resolvedState = state;
  var refinedOption = JSON.parse(decodeURI(facetValue)); // @TODO: why is array / element mixed here & hasRefinements; seems wrong?

  var currentRefinements = resolvedState.getNumericRefinements(attribute);

  if (refinedOption.start === undefined && refinedOption.end === undefined) {
    return resolvedState.removeNumericRefinement(attribute);
  }

  if (!connectNumericMenu_isRefined(resolvedState, attribute, refinedOption)) {
    resolvedState = resolvedState.removeNumericRefinement(attribute);
  }

  if (refinedOption.start !== undefined && refinedOption.end !== undefined) {
    if (refinedOption.start > refinedOption.end) {
      throw new Error('option.start should be > to option.end');
    }

    if (refinedOption.start === refinedOption.end) {
      if (hasNumericRefinement(currentRefinements, '=', refinedOption.start)) {
        resolvedState = resolvedState.removeNumericRefinement(attribute, '=', refinedOption.start);
      } else {
        resolvedState = resolvedState.addNumericRefinement(attribute, '=', refinedOption.start);
      }

      return resolvedState;
    }
  }

  if (refinedOption.start !== undefined) {
    if (hasNumericRefinement(currentRefinements, '>=', refinedOption.start)) {
      resolvedState = resolvedState.removeNumericRefinement(attribute, '>=', refinedOption.start);
    }

    resolvedState = resolvedState.addNumericRefinement(attribute, '>=', refinedOption.start);
  }

  if (refinedOption.end !== undefined) {
    if (hasNumericRefinement(currentRefinements, '<=', refinedOption.end)) {
      resolvedState = resolvedState.removeNumericRefinement(attribute, '<=', refinedOption.end);
    }

    resolvedState = resolvedState.addNumericRefinement(attribute, '<=', refinedOption.end);
  }

  if (typeof resolvedState.page === 'number') {
    resolvedState.page = 0;
  }

  return resolvedState;
}

function hasNumericRefinement(currentRefinements, operator, value) {
  return currentRefinements[operator] !== undefined && currentRefinements[operator].includes(value);
}

/* harmony default export */ var numeric_menu_connectNumericMenu = (connectNumericMenu_connectNumericMenu);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/range.js
var range = __webpack_require__(308);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/pagination/Paginator.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function Paginator_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}



var Paginator_Paginator = /*#__PURE__*/function () {
  function Paginator(params) {
    _classCallCheck(this, Paginator);

    Paginator_defineProperty(this, "currentPage", void 0);

    Paginator_defineProperty(this, "total", void 0);

    Paginator_defineProperty(this, "padding", void 0);

    this.currentPage = params.currentPage;
    this.total = params.total;
    this.padding = params.padding;
  }

  _createClass(Paginator, [{
    key: "pages",
    value: function pages() {
      var total = this.total,
          currentPage = this.currentPage,
          padding = this.padding;
      if (total === 0) return [0];
      var totalDisplayedPages = this.nbPagesDisplayed(padding, total);

      if (totalDisplayedPages === total) {
        return Object(range["a" /* default */])({
          end: total
        });
      }

      var paddingLeft = this.calculatePaddingLeft(currentPage, padding, total, totalDisplayedPages);
      var paddingRight = totalDisplayedPages - paddingLeft;
      var first = currentPage - paddingLeft;
      var last = currentPage + paddingRight;
      return Object(range["a" /* default */])({
        start: first,
        end: last
      });
    }
  }, {
    key: "nbPagesDisplayed",
    value: function nbPagesDisplayed(padding, total) {
      return Math.min(2 * padding + 1, total);
    }
  }, {
    key: "calculatePaddingLeft",
    value: function calculatePaddingLeft(current, padding, total, totalDisplayedPages) {
      if (current <= padding) {
        return current;
      }

      if (current >= total - padding) {
        return totalDisplayedPages - (total - current);
      }

      return padding;
    }
  }, {
    key: "isLastPage",
    value: function isLastPage() {
      return this.currentPage === this.total - 1 || this.total === 0;
    }
  }, {
    key: "isFirstPage",
    value: function isFirstPage() {
      return this.currentPage === 0;
    }
  }]);

  return Paginator;
}();

/* harmony default export */ var pagination_Paginator = (Paginator_Paginator);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/pagination/connectPagination.js
function connectPagination_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectPagination_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectPagination_ownKeys(Object(source), true).forEach(function (key) {
        connectPagination_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectPagination_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectPagination_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}



var connectPagination_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'pagination',
  connector: true
});
/**
 * **Pagination** connector provides the logic to build a widget that will let the user
 * choose the current page of the results.
 *
 * When using the pagination with Algolia, you should be aware that the engine won't provide you pages
 * beyond the 1000th hits by default. You can find more information on the [Algolia documentation](https://www.algolia.com/doc/guides/searching/pagination/#pagination-limitations).
 */

var connectPagination_connectPagination = function connectPagination(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectPagination_withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        totalPages = _ref.totalPages,
        _ref$padding = _ref.padding,
        padding = _ref$padding === void 0 ? 3 : _ref$padding;

    var pager = new pagination_Paginator({
      currentPage: 0,
      total: 0,
      padding: padding
    });
    var connectorState = {};

    function getMaxPage(_ref2) {
      var nbPages = _ref2.nbPages;
      return totalPages !== undefined ? Math.min(totalPages, nbPages) : nbPages;
    }

    return {
      $$type: 'ais.pagination',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectPagination_objectSpread(connectPagination_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectPagination_objectSpread(connectPagination_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref3) {
        var state = _ref3.state;
        unmountFn();
        return state.setQueryParameter('page', undefined);
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
        var searchParameters = _ref4.searchParameters;
        var page = searchParameters.page || 0;

        if (!page) {
          return uiState;
        }

        return connectPagination_objectSpread(connectPagination_objectSpread({}, uiState), {}, {
          page: page + 1
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
        var uiState = _ref5.uiState;
        var page = uiState.page ? uiState.page - 1 : 0;
        return searchParameters.setQueryParameter('page', page);
      },
      getWidgetRenderState: function getWidgetRenderState(_ref6) {
        var results = _ref6.results,
            helper = _ref6.helper,
            state = _ref6.state,
            createURL = _ref6.createURL;

        if (!connectorState.refine) {
          connectorState.refine = function (page) {
            helper.setPage(page);
            helper.search();
          };
        }

        if (!connectorState.createURL) {
          connectorState.createURL = function (helperState) {
            return function (page) {
              return createURL(helperState.setPage(page));
            };
          };
        }

        var page = state.page || 0;
        var nbPages = getMaxPage(results || {
          nbPages: 0
        });
        pager.currentPage = page;
        pager.total = nbPages;
        return {
          createURL: connectorState.createURL(state),
          refine: connectorState.refine,
          canRefine: nbPages > 1,
          currentRefinement: page,
          nbHits: (results === null || results === void 0 ? void 0 : results.nbHits) || 0,
          nbPages: nbPages,
          pages: results ? pager.pages() : [],
          isFirstPage: pager.isFirstPage(),
          isLastPage: pager.isLastPage(),
          widgetParams: widgetParams
        };
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectPagination_objectSpread(connectPagination_objectSpread({}, renderState), {}, {
          pagination: this.getWidgetRenderState(renderOptions)
        });
      }
    };
  };
};

/* harmony default export */ var pagination_connectPagination = (connectPagination_connectPagination);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/range/connectRange.js
function connectRange_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectRange_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectRange_ownKeys(Object(source), true).forEach(function (key) {
        connectRange_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectRange_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectRange_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function connectRange_slicedToArray(arr, i) {
  return connectRange_arrayWithHoles(arr) || connectRange_iterableToArrayLimit(arr, i) || connectRange_unsupportedIterableToArray(arr, i) || connectRange_nonIterableRest();
}

function connectRange_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectRange_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectRange_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectRange_arrayLikeToArray(o, minLen);
}

function connectRange_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function connectRange_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function connectRange_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}


var connectRange_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'range-input',
  connector: true
}, {
  name: 'range-slider',
  connector: true
});
var connectRange_$$type = 'ais.range';

function toPrecision(_ref) {
  var min = _ref.min,
      max = _ref.max,
      precision = _ref.precision;
  var pow = Math.pow(10, precision);
  return {
    min: min ? Math.floor(min * pow) / pow : min,
    max: max ? Math.ceil(max * pow) / pow : max
  };
}
/**
 * **Range** connector provides the logic to create custom widget that will let
 * the user refine results using a numeric range.
 *
 * This connectors provides a `refine()` function that accepts bounds. It will also provide
 * information about the min and max bounds for the current result set.
 */


var connectRange_connectRange = function connectRange(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectRange_withUsage());
  return function (widgetParams) {
    var _ref2 = widgetParams || {},
        _ref2$attribute = _ref2.attribute,
        attribute = _ref2$attribute === void 0 ? '' : _ref2$attribute,
        minBound = _ref2.min,
        maxBound = _ref2.max,
        _ref2$precision = _ref2.precision,
        precision = _ref2$precision === void 0 ? 0 : _ref2$precision;

    if (!attribute) {
      throw new Error(connectRange_withUsage('The `attribute` option is required.'));
    }

    if (Object(isFiniteNumber["a" /* default */])(minBound) && Object(isFiniteNumber["a" /* default */])(maxBound) && minBound > maxBound) {
      throw new Error(connectRange_withUsage("The `max` option can't be lower than `min`."));
    }

    var formatToNumber = function formatToNumber(v) {
      return Number(Number(v).toFixed(precision));
    };

    var rangeFormatter = {
      from: function from(v) {
        return v.toLocaleString();
      },
      to: function to(v) {
        return formatToNumber(v).toLocaleString();
      }
    }; // eslint-disable-next-line complexity

    var getRefinedState = function getRefinedState(helper, currentRange, nextMin, nextMax) {
      var resolvedState = helper.state;
      var currentRangeMin = currentRange.min,
          currentRangeMax = currentRange.max;

      var _ref3 = resolvedState.getNumericRefinement(attribute, '>=') || [],
          _ref4 = connectRange_slicedToArray(_ref3, 1),
          min = _ref4[0];

      var _ref5 = resolvedState.getNumericRefinement(attribute, '<=') || [],
          _ref6 = connectRange_slicedToArray(_ref5, 1),
          max = _ref6[0];

      var isResetMin = nextMin === undefined || nextMin === '';
      var isResetMax = nextMax === undefined || nextMax === '';

      var _toPrecision = toPrecision({
        min: !isResetMin ? parseFloat(nextMin) : undefined,
        max: !isResetMax ? parseFloat(nextMax) : undefined,
        precision: precision
      }),
          nextMinAsNumber = _toPrecision.min,
          nextMaxAsNumber = _toPrecision.max;

      var newNextMin;

      if (!Object(isFiniteNumber["a" /* default */])(minBound) && currentRangeMin === nextMinAsNumber) {
        newNextMin = undefined;
      } else if (Object(isFiniteNumber["a" /* default */])(minBound) && isResetMin) {
        newNextMin = minBound;
      } else {
        newNextMin = nextMinAsNumber;
      }

      var newNextMax;

      if (!Object(isFiniteNumber["a" /* default */])(maxBound) && currentRangeMax === nextMaxAsNumber) {
        newNextMax = undefined;
      } else if (Object(isFiniteNumber["a" /* default */])(maxBound) && isResetMax) {
        newNextMax = maxBound;
      } else {
        newNextMax = nextMaxAsNumber;
      }

      var isResetNewNextMin = newNextMin === undefined;
      var isGreaterThanCurrentRange = Object(isFiniteNumber["a" /* default */])(currentRangeMin) && currentRangeMin <= newNextMin;
      var isMinValid = isResetNewNextMin || Object(isFiniteNumber["a" /* default */])(newNextMin) && (!Object(isFiniteNumber["a" /* default */])(currentRangeMin) || isGreaterThanCurrentRange);
      var isResetNewNextMax = newNextMax === undefined;
      var isLowerThanRange = Object(isFiniteNumber["a" /* default */])(newNextMax) && currentRangeMax >= newNextMax;
      var isMaxValid = isResetNewNextMax || Object(isFiniteNumber["a" /* default */])(newNextMax) && (!Object(isFiniteNumber["a" /* default */])(currentRangeMax) || isLowerThanRange);
      var hasMinChange = min !== newNextMin;
      var hasMaxChange = max !== newNextMax;

      if ((hasMinChange || hasMaxChange) && isMinValid && isMaxValid) {
        resolvedState = resolvedState.removeNumericRefinement(attribute);

        if (Object(isFiniteNumber["a" /* default */])(newNextMin)) {
          resolvedState = resolvedState.addNumericRefinement(attribute, '>=', newNextMin);
        }

        if (Object(isFiniteNumber["a" /* default */])(newNextMax)) {
          resolvedState = resolvedState.addNumericRefinement(attribute, '<=', newNextMax);
        }

        return resolvedState.resetPage();
      }

      return null;
    };

    var createSendEvent = function createSendEvent(instantSearchInstance) {
      return function () {
        if (arguments.length === 1) {
          instantSearchInstance.sendEventToInsights(arguments.length <= 0 ? undefined : arguments[0]);
          return;
        }
      };
    };

    function _getCurrentRange(stats) {
      var min;

      if (Object(isFiniteNumber["a" /* default */])(minBound)) {
        min = minBound;
      } else if (Object(isFiniteNumber["a" /* default */])(stats.min)) {
        min = stats.min;
      } else {
        min = 0;
      }

      var max;

      if (Object(isFiniteNumber["a" /* default */])(maxBound)) {
        max = maxBound;
      } else if (Object(isFiniteNumber["a" /* default */])(stats.max)) {
        max = stats.max;
      } else {
        max = 0;
      }

      return toPrecision({
        min: min,
        max: max,
        precision: precision
      });
    }

    function _getCurrentRefinement(helper) {
      var _ref7 = helper.getNumericRefinement(attribute, '>=') || [],
          _ref8 = connectRange_slicedToArray(_ref7, 1),
          minValue = _ref8[0];

      var _ref9 = helper.getNumericRefinement(attribute, '<=') || [],
          _ref10 = connectRange_slicedToArray(_ref9, 1),
          maxValue = _ref10[0];

      var min = Object(isFiniteNumber["a" /* default */])(minValue) ? minValue : -Infinity;
      var max = Object(isFiniteNumber["a" /* default */])(maxValue) ? maxValue : Infinity;
      return [min, max];
    }

    function _refine(helper, currentRange) {
      return function () {
        var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [undefined, undefined],
            _ref12 = connectRange_slicedToArray(_ref11, 2),
            nextMin = _ref12[0],
            nextMax = _ref12[1];

        var refinedState = getRefinedState(helper, currentRange, nextMin, nextMax);

        if (refinedState) {
          helper.setState(refinedState).search();
        }
      };
    }

    return {
      $$type: connectRange_$$type,
      init: function init(initOptions) {
        renderFn(connectRange_objectSpread(connectRange_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: initOptions.instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        renderFn(connectRange_objectSpread(connectRange_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: renderOptions.instantSearchInstance
        }), false);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectRange_objectSpread(connectRange_objectSpread({}, renderState), {}, {
          range: connectRange_objectSpread(connectRange_objectSpread({}, renderState.range), {}, connectRange_defineProperty({}, attribute, this.getWidgetRenderState(renderOptions)))
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref13) {
        var results = _ref13.results,
            helper = _ref13.helper,
            instantSearchInstance = _ref13.instantSearchInstance;
        var facetsFromResults = results && results.disjunctiveFacets || [];
        var facet = Object(find["a" /* default */])(facetsFromResults, function (facetResult) {
          return facetResult.name === attribute;
        });
        var stats = facet && facet.stats || {
          min: undefined,
          max: undefined
        };

        var currentRange = _getCurrentRange(stats);

        var start = _getCurrentRefinement(helper);

        var refine;

        if (!results) {
          // On first render pass an empty range
          // to be able to bypass the validation
          // related to it
          refine = _refine(helper, {
            min: undefined,
            max: undefined
          });
        } else {
          refine = _refine(helper, currentRange);
        }

        return {
          refine: refine,
          canRefine: currentRange.min !== currentRange.max,
          format: rangeFormatter,
          range: currentRange,
          sendEvent: createSendEvent(instantSearchInstance),
          widgetParams: connectRange_objectSpread(connectRange_objectSpread({}, widgetParams), {}, {
            precision: precision
          }),
          start: start
        };
      },
      dispose: function dispose(_ref14) {
        var state = _ref14.state;
        unmountFn();
        return state.removeDisjunctiveFacet(attribute).removeNumericRefinement(attribute);
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref15) {
        var searchParameters = _ref15.searchParameters;

        var _searchParameters$get = searchParameters.getNumericRefinements(attribute),
            _searchParameters$get2 = _searchParameters$get['>='],
            min = _searchParameters$get2 === void 0 ? [] : _searchParameters$get2,
            _searchParameters$get3 = _searchParameters$get['<='],
            max = _searchParameters$get3 === void 0 ? [] : _searchParameters$get3;

        if (min.length === 0 && max.length === 0) {
          return uiState;
        }

        return connectRange_objectSpread(connectRange_objectSpread({}, uiState), {}, {
          range: connectRange_objectSpread(connectRange_objectSpread({}, uiState.range), {}, connectRange_defineProperty({}, attribute, "".concat(min, ":").concat(max)))
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref16) {
        var uiState = _ref16.uiState;
        var widgetSearchParameters = searchParameters.addDisjunctiveFacet(attribute).setQueryParameters({
          numericRefinements: connectRange_objectSpread(connectRange_objectSpread({}, searchParameters.numericRefinements), {}, connectRange_defineProperty({}, attribute, {}))
        });

        if (Object(isFiniteNumber["a" /* default */])(minBound)) {
          widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '>=', minBound);
        }

        if (Object(isFiniteNumber["a" /* default */])(maxBound)) {
          widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '<=', maxBound);
        }

        var value = uiState.range && uiState.range[attribute];

        if (!value || value.indexOf(':') === -1) {
          return widgetSearchParameters;
        }

        var _value$split$map = value.split(':').map(parseFloat),
            _value$split$map2 = connectRange_slicedToArray(_value$split$map, 2),
            lowerBound = _value$split$map2[0],
            upperBound = _value$split$map2[1];

        if (Object(isFiniteNumber["a" /* default */])(lowerBound) && (!Object(isFiniteNumber["a" /* default */])(minBound) || minBound < lowerBound)) {
          widgetSearchParameters = widgetSearchParameters.removeNumericRefinement(attribute, '>=');
          widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '>=', lowerBound);
        }

        if (Object(isFiniteNumber["a" /* default */])(upperBound) && (!Object(isFiniteNumber["a" /* default */])(maxBound) || upperBound < maxBound)) {
          widgetSearchParameters = widgetSearchParameters.removeNumericRefinement(attribute, '<=');
          widgetSearchParameters = widgetSearchParameters.addNumericRefinement(attribute, '<=', upperBound);
        }

        return widgetSearchParameters;
      }
    };
  };
};

/* harmony default export */ var range_connectRange = (connectRange_connectRange);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/refinement-list/connectRefinementList.js
function connectRefinementList_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectRefinementList_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectRefinementList_ownKeys(Object(source), true).forEach(function (key) {
        connectRefinementList_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectRefinementList_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectRefinementList_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function connectRefinementList_objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = connectRefinementList_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function connectRefinementList_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}


var connectRefinementList_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'refinement-list',
  connector: true
});
var connectRefinementList_DEFAULT_SORT = ['isRefined', 'count:desc', 'name:asc'];
/**
 * **RefinementList** connector provides the logic to build a custom widget that
 * will let the user filter the results based on the values of a specific facet.
 *
 * **Requirement:** the attribute passed as `attribute` must be present in
 * attributesForFaceting of the searched index.
 *
 * This connector provides:
 * - a `refine()` function to select an item.
 * - a `toggleShowMore()` function to display more or less items
 * - a `searchForItems()` function to search within the items.
 */

var connectRefinementList_connectRefinementList = function connectRefinementList(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectRefinementList_withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        attribute = _ref.attribute,
        _ref$operator = _ref.operator,
        operator = _ref$operator === void 0 ? 'or' : _ref$operator,
        _ref$limit = _ref.limit,
        limit = _ref$limit === void 0 ? 10 : _ref$limit,
        _ref$showMore = _ref.showMore,
        showMore = _ref$showMore === void 0 ? false : _ref$showMore,
        _ref$showMoreLimit = _ref.showMoreLimit,
        showMoreLimit = _ref$showMoreLimit === void 0 ? 20 : _ref$showMoreLimit,
        _ref$sortBy = _ref.sortBy,
        sortBy = _ref$sortBy === void 0 ? connectRefinementList_DEFAULT_SORT : _ref$sortBy,
        _ref$escapeFacetValue = _ref.escapeFacetValues,
        escapeFacetValues = _ref$escapeFacetValue === void 0 ? true : _ref$escapeFacetValue,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? function (items) {
      return items;
    } : _ref$transformItems;

    if (!attribute) {
      throw new Error(connectRefinementList_withUsage('The `attribute` option is required.'));
    }

    if (!/^(and|or)$/.test(operator)) {
      throw new Error(connectRefinementList_withUsage("The `operator` must one of: `\"and\"`, `\"or\"` (got \"".concat(operator, "\").")));
    }

    if (showMore === true && showMoreLimit <= limit) {
      throw new Error(connectRefinementList_withUsage('`showMoreLimit` should be greater than `limit`.'));
    }

    var formatItems = function formatItems(_ref2) {
      var label = _ref2.name,
          value = _ref2.escapedValue,
          item = connectRefinementList_objectWithoutProperties(_ref2, ["name", "escapedValue"]);

      return connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, item), {}, {
        value: value,
        label: label,
        highlighted: label
      });
    };

    var lastResultsFromMainSearch;
    var lastItemsFromMainSearch = [];
    var hasExhaustiveItems = true;
    var triggerRefine;
    var sendEvent;
    var isShowingMore = false; // Provide the same function to the `renderFn` so that way the user
    // has to only bind it once when `isFirstRendering` for instance

    var toggleShowMore = function toggleShowMore() {};

    function cachedToggleShowMore() {
      toggleShowMore();
    }

    function createToggleShowMore(renderOptions, widget) {
      return function () {
        isShowingMore = !isShowingMore;
        widget.render(renderOptions);
      };
    }

    function getLimit() {
      return isShowingMore ? showMoreLimit : limit;
    }

    var searchForFacetValues = function searchForFacetValues() {
      return function () {};
    };

    var createSearchForFacetValues = function createSearchForFacetValues(helper, widget) {
      return function (renderOptions) {
        return function (query) {
          var instantSearchInstance = renderOptions.instantSearchInstance,
              searchResults = renderOptions.results;

          if (query === '' && lastItemsFromMainSearch) {
            // render with previous data from the helper.
            renderFn(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, widget.getWidgetRenderState(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, renderOptions), {}, {
              results: lastResultsFromMainSearch
            }))), {}, {
              instantSearchInstance: instantSearchInstance
            }), false);
          } else {
            var tags = {
              highlightPreTag: escapeFacetValues ? escape_highlight["a" /* TAG_PLACEHOLDER */].highlightPreTag : escape_highlight["b" /* TAG_REPLACEMENT */].highlightPreTag,
              highlightPostTag: escapeFacetValues ? escape_highlight["a" /* TAG_PLACEHOLDER */].highlightPostTag : escape_highlight["b" /* TAG_REPLACEMENT */].highlightPostTag
            };
            helper.searchForFacetValues(attribute, query, // We cap the `maxFacetHits` value to 100 because the Algolia API
            // doesn't support a greater number.
            // See https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits/
            Math.min(getLimit(), 100), tags).then(function (results) {
              var facetValues = escapeFacetValues ? Object(escape_highlight["c" /* escapeFacets */])(results.facetHits) : results.facetHits;
              var normalizedFacetValues = transformItems(facetValues.map(function (_ref3) {
                var escapedValue = _ref3.escapedValue,
                    value = _ref3.value,
                    item = connectRefinementList_objectWithoutProperties(_ref3, ["escapedValue", "value"]);

                return connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, item), {}, {
                  value: escapedValue,
                  label: value
                });
              }), {
                results: searchResults
              });
              renderFn(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, widget.getWidgetRenderState(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, renderOptions), {}, {
                results: lastResultsFromMainSearch
              }))), {}, {
                items: normalizedFacetValues,
                canToggleShowMore: false,
                canRefine: true,
                isFromSearch: true,
                instantSearchInstance: instantSearchInstance
              }), false);
            });
          }
        };
      };
    };

    return {
      $$type: 'ais.refinementList',
      init: function init(initOptions) {
        renderFn(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: initOptions.instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        renderFn(connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: renderOptions.instantSearchInstance
        }), false);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, renderState), {}, {
          refinementList: connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, renderState.refinementList), {}, connectRefinementList_defineProperty({}, attribute, this.getWidgetRenderState(renderOptions)))
        });
      },
      getWidgetRenderState: function getWidgetRenderState(renderOptions) {
        var results = renderOptions.results,
            state = renderOptions.state,
            _createURL = renderOptions.createURL,
            instantSearchInstance = renderOptions.instantSearchInstance,
            helper = renderOptions.helper;
        var items = [];
        var facetValues = [];

        if (!sendEvent || !triggerRefine || !searchForFacetValues) {
          sendEvent = Object(createSendEventForFacet["a" /* createSendEventForFacet */])({
            instantSearchInstance: instantSearchInstance,
            helper: helper,
            attribute: attribute,
            widgetType: this.$$type
          });

          triggerRefine = function triggerRefine(facetValue) {
            sendEvent('click', facetValue);
            helper.toggleFacetRefinement(attribute, facetValue).search();
          };

          searchForFacetValues = createSearchForFacetValues(helper, this);
        }

        if (results) {
          var values = results.getFacetValues(attribute, {
            sortBy: sortBy,
            facetOrdering: sortBy === connectRefinementList_DEFAULT_SORT
          });
          facetValues = values && Array.isArray(values) ? values : [];
          items = transformItems(facetValues.slice(0, getLimit()).map(formatItems), {
            results: results
          });
          var maxValuesPerFacetConfig = state.maxValuesPerFacet;
          var currentLimit = getLimit(); // If the limit is the max number of facet retrieved it is impossible to know
          // if the facets are exhaustive. The only moment we are sure it is exhaustive
          // is when it is strictly under the number requested unless we know that another
          // widget has requested more values (maxValuesPerFacet > getLimit()).
          // Because this is used for making the search of facets unable or not, it is important
          // to be conservative here.

          hasExhaustiveItems = maxValuesPerFacetConfig > currentLimit ? facetValues.length <= currentLimit : facetValues.length < currentLimit;
          lastResultsFromMainSearch = results;
          lastItemsFromMainSearch = items;

          if (renderOptions.results) {
            toggleShowMore = createToggleShowMore(renderOptions, this);
          }
        } // Do not mistake searchForFacetValues and searchFacetValues which is the actual search
        // function


        var searchFacetValues = searchForFacetValues && searchForFacetValues(renderOptions);
        var canShowLess = isShowingMore && lastItemsFromMainSearch.length > limit;
        var canShowMore = showMore && !hasExhaustiveItems;
        var canToggleShowMore = canShowLess || canShowMore;
        return {
          createURL: function createURL(facetValue) {
            return _createURL(state.resetPage().toggleFacetRefinement(attribute, facetValue));
          },
          items: items,
          refine: triggerRefine,
          searchForItems: searchFacetValues,
          isFromSearch: false,
          canRefine: items.length > 0,
          widgetParams: widgetParams,
          isShowingMore: isShowingMore,
          canToggleShowMore: canToggleShowMore,
          toggleShowMore: cachedToggleShowMore,
          sendEvent: sendEvent,
          hasExhaustiveItems: hasExhaustiveItems
        };
      },
      dispose: function dispose(_ref4) {
        var state = _ref4.state;
        unmountFn();
        var withoutMaxValuesPerFacet = state.setQueryParameter('maxValuesPerFacet', undefined);

        if (operator === 'and') {
          return withoutMaxValuesPerFacet.removeFacet(attribute);
        }

        return withoutMaxValuesPerFacet.removeDisjunctiveFacet(attribute);
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref5) {
        var searchParameters = _ref5.searchParameters;
        var values = operator === 'or' ? searchParameters.getDisjunctiveRefinements(attribute) : searchParameters.getConjunctiveRefinements(attribute);

        if (!values.length) {
          return uiState;
        }

        return connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, uiState), {}, {
          refinementList: connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, uiState.refinementList), {}, connectRefinementList_defineProperty({}, attribute, values))
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
        var uiState = _ref6.uiState;
        var isDisjunctive = operator === 'or';
        var values = uiState.refinementList && uiState.refinementList[attribute];
        var withoutRefinements = searchParameters.clearRefinements(attribute);
        var withFacetConfiguration = isDisjunctive ? withoutRefinements.addDisjunctiveFacet(attribute) : withoutRefinements.addFacet(attribute);
        var currentMaxValuesPerFacet = withFacetConfiguration.maxValuesPerFacet || 0;
        var nextMaxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
        var withMaxValuesPerFacet = withFacetConfiguration.setQueryParameter('maxValuesPerFacet', nextMaxValuesPerFacet);

        if (!values) {
          var key = isDisjunctive ? 'disjunctiveFacetsRefinements' : 'facetsRefinements';
          return withMaxValuesPerFacet.setQueryParameters(connectRefinementList_defineProperty({}, key, connectRefinementList_objectSpread(connectRefinementList_objectSpread({}, withMaxValuesPerFacet[key]), {}, connectRefinementList_defineProperty({}, attribute, []))));
        }

        return values.reduce(function (parameters, value) {
          return isDisjunctive ? parameters.addDisjunctiveFacetRefinement(attribute, value) : parameters.addFacetRefinement(attribute, value);
        }, withMaxValuesPerFacet);
      }
    };
  };
};

/* harmony default export */ var refinement_list_connectRefinementList = (connectRefinementList_connectRefinementList);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/search-box/connectSearchBox.js
function connectSearchBox_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectSearchBox_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectSearchBox_ownKeys(Object(source), true).forEach(function (key) {
        connectSearchBox_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectSearchBox_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectSearchBox_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectSearchBox_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'search-box',
  connector: true
});

var defaultQueryHook = function defaultQueryHook(query, hook) {
  return hook(query);
};
/**
 * **SearchBox** connector provides the logic to build a widget that will let the user search for a query.
 *
 * The connector provides to the rendering: `refine()` to set the query. The behaviour of this function
 * may be impacted by the `queryHook` widget parameter.
 */


var connectSearchBox_connectSearchBox = function connectSearchBox(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectSearchBox_withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        _ref$queryHook = _ref.queryHook,
        queryHook = _ref$queryHook === void 0 ? defaultQueryHook : _ref$queryHook;

    var _refine;

    var _clear;

    return {
      $$type: 'ais.searchBox',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectSearchBox_objectSpread(connectSearchBox_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectSearchBox_objectSpread(connectSearchBox_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref2) {
        var state = _ref2.state;
        unmountFn();
        return state.setQueryParameter('query', undefined);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectSearchBox_objectSpread(connectSearchBox_objectSpread({}, renderState), {}, {
          searchBox: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref3) {
        var helper = _ref3.helper,
            searchMetadata = _ref3.searchMetadata,
            state = _ref3.state;

        if (!_refine) {
          _refine = function _refine(query) {
            queryHook(query, function (q) {
              return helper.setQuery(q).search();
            });
          };

          _clear = function _clear() {
            helper.setQuery('').search();
          };
        }

        return {
          query: state.query || '',
          refine: _refine,
          clear: _clear,
          widgetParams: widgetParams,
          isSearchStalled: searchMetadata.isSearchStalled
        };
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
        var searchParameters = _ref4.searchParameters;
        var query = searchParameters.query || '';

        if (query === '' || uiState && uiState.query === query) {
          return uiState;
        }

        return connectSearchBox_objectSpread(connectSearchBox_objectSpread({}, uiState), {}, {
          query: query
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
        var uiState = _ref5.uiState;
        return searchParameters.setQueryParameter('query', uiState.query || '');
      }
    };
  };
};

/* harmony default export */ var search_box_connectSearchBox = (connectSearchBox_connectSearchBox);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/sort-by/connectSortBy.js
function connectSortBy_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectSortBy_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectSortBy_ownKeys(Object(source), true).forEach(function (key) {
        connectSortBy_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectSortBy_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectSortBy_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectSortBy_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'sort-by',
  connector: true
});
/**
 * The **SortBy** connector provides the logic to build a custom widget that will display a
 * list of indices. With Algolia, this is most commonly used for changing ranking strategy. This allows
 * a user to change how the hits are being sorted.
 */

var connectSortBy_connectSortBy = function connectSortBy(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectSortBy_withUsage());
  var connectorState = {};
  return function (widgetParams) {
    var _ref = widgetParams || {},
        items = _ref.items,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? function (x) {
      return x;
    } : _ref$transformItems;

    if (!Array.isArray(items)) {
      throw new Error(connectSortBy_withUsage('The `items` option expects an array of objects.'));
    }

    return {
      $$type: 'ais.sortBy',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        var widgetRenderState = this.getWidgetRenderState(initOptions);
        var currentIndex = widgetRenderState.currentRefinement;
        var isCurrentIndexInItems = Object(find["a" /* default */])(items, function (item) {
          return item.value === currentIndex;
        });
         false ? undefined : void 0;
        renderFn(connectSortBy_objectSpread(connectSortBy_objectSpread({}, widgetRenderState), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectSortBy_objectSpread(connectSortBy_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref2) {
        var state = _ref2.state;
        unmountFn();
        return connectorState.initialIndex ? state.setIndex(connectorState.initialIndex) : state;
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectSortBy_objectSpread(connectSortBy_objectSpread({}, renderState), {}, {
          sortBy: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref3) {
        var results = _ref3.results,
            helper = _ref3.helper,
            state = _ref3.state,
            parent = _ref3.parent;

        if (!connectorState.initialIndex && parent) {
          connectorState.initialIndex = parent.getIndexName();
        }

        if (!connectorState.setIndex) {
          connectorState.setIndex = function (indexName) {
            helper.setIndex(indexName).search();
          };
        }

        var hasNoResults = results ? results.nbHits === 0 : true;
        return {
          currentRefinement: state.index,
          options: transformItems(items, {
            results: results
          }),
          refine: connectorState.setIndex,
          hasNoResults: hasNoResults,
          canRefine: !hasNoResults && items.length > 0,
          widgetParams: widgetParams
        };
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
        var searchParameters = _ref4.searchParameters;
        var currentIndex = searchParameters.index;
        return connectSortBy_objectSpread(connectSortBy_objectSpread({}, uiState), {}, {
          sortBy: currentIndex !== connectorState.initialIndex ? currentIndex : undefined
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
        var uiState = _ref5.uiState;
        return searchParameters.setQueryParameter('index', uiState.sortBy || connectorState.initialIndex || searchParameters.index);
      }
    };
  };
};

/* harmony default export */ var sort_by_connectSortBy = (connectSortBy_connectSortBy);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/rating-menu/connectRatingMenu.js
function connectRatingMenu_toConsumableArray(arr) {
  return connectRatingMenu_arrayWithoutHoles(arr) || connectRatingMenu_iterableToArray(arr) || connectRatingMenu_unsupportedIterableToArray(arr) || connectRatingMenu_nonIterableSpread();
}

function connectRatingMenu_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectRatingMenu_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function connectRatingMenu_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return connectRatingMenu_arrayLikeToArray(arr);
}

function connectRatingMenu_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectRatingMenu_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectRatingMenu_ownKeys(Object(source), true).forEach(function (key) {
        connectRatingMenu_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectRatingMenu_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectRatingMenu_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function connectRatingMenu_slicedToArray(arr, i) {
  return connectRatingMenu_arrayWithHoles(arr) || connectRatingMenu_iterableToArrayLimit(arr, i) || connectRatingMenu_unsupportedIterableToArray(arr, i) || connectRatingMenu_nonIterableRest();
}

function connectRatingMenu_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectRatingMenu_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectRatingMenu_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectRatingMenu_arrayLikeToArray(o, minLen);
}

function connectRatingMenu_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function connectRatingMenu_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function connectRatingMenu_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}


var connectRatingMenu_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'rating-menu',
  connector: true
});
var connectRatingMenu_$$type = 'ais.ratingMenu';
var MAX_VALUES_PER_FACET_API_LIMIT = 1000;
var STEP = 1;

var connectRatingMenu_createSendEvent = function createSendEvent(_ref) {
  var instantSearchInstance = _ref.instantSearchInstance,
      helper = _ref.helper,
      getRefinedStar = _ref.getRefinedStar,
      attribute = _ref.attribute;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1) {
      instantSearchInstance.sendEventToInsights(args[0]);
      return;
    }

    var eventType = args[0],
        facetValue = args[1],
        _args$ = args[2],
        eventName = _args$ === void 0 ? 'Filter Applied' : _args$;

    if (eventType !== 'click') {
      return;
    }

    var isRefined = getRefinedStar() === Number(facetValue);

    if (!isRefined) {
      instantSearchInstance.sendEventToInsights({
        insightsMethod: 'clickedFilters',
        widgetType: connectRatingMenu_$$type,
        eventType: eventType,
        payload: {
          eventName: eventName,
          index: helper.getIndex(),
          filters: ["".concat(attribute, ">=").concat(facetValue)]
        },
        attribute: attribute
      });
    }
  };
};
/**
 * **StarRating** connector provides the logic to build a custom widget that will let
 * the user refine search results based on ratings.
 *
 * The connector provides to the rendering: `refine()` to select a value and
 * `items` that are the values that can be selected. `refine` should be used
 * with `items.value`.
 */


var connectRatingMenu_connectRatingMenu = function connectRatingMenu(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectRatingMenu_withUsage());
  return function (widgetParams) {
    var _ref2 = widgetParams || {},
        attribute = _ref2.attribute,
        _ref2$max = _ref2.max,
        max = _ref2$max === void 0 ? 5 : _ref2$max;

    var sendEvent;

    if (!attribute) {
      throw new Error(connectRatingMenu_withUsage('The `attribute` option is required.'));
    }

    var _getRefinedStar = function getRefinedStar(state) {
      var _values$;

      var values = state.getNumericRefinements(attribute);

      if (!((_values$ = values['>=']) !== null && _values$ !== void 0 && _values$.length)) {
        return undefined;
      }

      return values['>='][0];
    };

    var getFacetsMaxDecimalPlaces = function getFacetsMaxDecimalPlaces(facetResults) {
      var maxDecimalPlaces = 0;
      facetResults.forEach(function (facetResult) {
        var _facetResult$name$spl = facetResult.name.split('.'),
            _facetResult$name$spl2 = connectRatingMenu_slicedToArray(_facetResult$name$spl, 2),
            _facetResult$name$spl3 = _facetResult$name$spl2[1],
            decimal = _facetResult$name$spl3 === void 0 ? '' : _facetResult$name$spl3;

        maxDecimalPlaces = Math.max(maxDecimalPlaces, decimal.length);
      });
      return maxDecimalPlaces;
    };

    var getFacetValuesWarningMessage = function getFacetValuesWarningMessage(_ref3) {
      var maxDecimalPlaces = _ref3.maxDecimalPlaces,
          maxFacets = _ref3.maxFacets,
          maxValuesPerFacet = _ref3.maxValuesPerFacet;
      var maxDecimalPlacesInRange = Math.max(0, Math.floor(Math.log10(MAX_VALUES_PER_FACET_API_LIMIT / max)));
      var maxFacetsInRange = Math.min(MAX_VALUES_PER_FACET_API_LIMIT, Math.pow(10, maxDecimalPlacesInRange) * max);
      var solutions = [];

      if (maxFacets > MAX_VALUES_PER_FACET_API_LIMIT) {
        solutions.push("- Update your records to lower the precision of the values in the \"".concat(attribute, "\" attribute (for example: ").concat(5.123456789.toPrecision(maxDecimalPlaces + 1), " to ").concat(5.123456789.toPrecision(maxDecimalPlacesInRange + 1), ")"));
      }

      if (maxValuesPerFacet < maxFacetsInRange) {
        solutions.push("- Increase the maximum number of facet values to ".concat(maxFacetsInRange, " using the \"configure\" widget ").concat(Object(documentation["a" /* createDocumentationLink */])({
          name: 'configure'
        }), " and the \"maxValuesPerFacet\" parameter https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/"));
      }

      return "The ".concat(attribute, " attribute can have ").concat(maxFacets, " different values (0 to ").concat(max, " with a maximum of ").concat(maxDecimalPlaces, " decimals = ").concat(maxFacets, ") but you retrieved only ").concat(maxValuesPerFacet, " facet values. Therefore the number of results that match the refinements can be incorrect.\n    ").concat(solutions.length ? "To resolve this problem you can:\n".concat(solutions.join('\n')) : "");
    };

    function getRefinedState(state, facetValue) {
      var isRefined = _getRefinedStar(state) === Number(facetValue);
      var emptyState = state.resetPage().removeNumericRefinement(attribute);

      if (!isRefined) {
        return emptyState.addNumericRefinement(attribute, '<=', max).addNumericRefinement(attribute, '>=', Number(facetValue));
      }

      return emptyState;
    }

    var toggleRefinement = function toggleRefinement(helper, facetValue) {
      sendEvent('click', facetValue);
      helper.setState(getRefinedState(helper.state, facetValue)).search();
    };

    var connectorState = {
      toggleRefinementFactory: function toggleRefinementFactory(helper) {
        return toggleRefinement.bind(null, helper);
      },
      createURLFactory: function createURLFactory(_ref4) {
        var state = _ref4.state,
            createURL = _ref4.createURL;
        return function (value) {
          return createURL(getRefinedState(state, value));
        };
      }
    };
    return {
      $$type: connectRatingMenu_$$type,
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectRatingMenu_objectSpread(connectRatingMenu_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectRatingMenu_objectSpread(connectRatingMenu_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectRatingMenu_objectSpread(connectRatingMenu_objectSpread({}, renderState), {}, {
          ratingMenu: connectRatingMenu_objectSpread(connectRatingMenu_objectSpread({}, renderState.ratingMenu), {}, connectRatingMenu_defineProperty({}, attribute, this.getWidgetRenderState(renderOptions)))
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref5) {
        var helper = _ref5.helper,
            results = _ref5.results,
            state = _ref5.state,
            instantSearchInstance = _ref5.instantSearchInstance,
            createURL = _ref5.createURL;
        var facetValues = [];

        if (!sendEvent) {
          sendEvent = connectRatingMenu_createSendEvent({
            instantSearchInstance: instantSearchInstance,
            helper: helper,
            getRefinedStar: function getRefinedStar() {
              return _getRefinedStar(helper.state);
            },
            attribute: attribute
          });
        }

        var refinementIsApplied = false;
        var totalCount = 0;

        if (results) {
          var facetResults = results.getFacetValues(attribute, {});
          var maxValuesPerFacet = facetResults.length;
          var maxDecimalPlaces = getFacetsMaxDecimalPlaces(facetResults);
          var maxFacets = Math.pow(10, maxDecimalPlaces) * max;
           false ? undefined : void 0;

          var refinedStar = _getRefinedStar(state);

          var _loop = function _loop(star) {
            var isRefined = refinedStar === star;
            refinementIsApplied = refinementIsApplied || isRefined;
            var count = facetResults.filter(function (f) {
              return Number(f.name) >= star && Number(f.name) <= max;
            }).map(function (f) {
              return f.count;
            }).reduce(function (sum, current) {
              return sum + current;
            }, 0);
            totalCount += count;

            if (refinedStar && !isRefined && count === 0) {
              // skip count==0 when at least 1 refinement is enabled
              // eslint-disable-next-line no-continue
              return "continue";
            }

            var stars = connectRatingMenu_toConsumableArray(new Array(Math.floor(max / STEP))).map(function (_v, i) {
              return i * STEP < star;
            });

            facetValues.push({
              stars: stars,
              name: String(star),
              label: String(star),
              value: String(star),
              count: count,
              isRefined: isRefined
            });
          };

          for (var star = STEP; star < max; star += STEP) {
            var _ret = _loop(star);

            if (_ret === "continue") continue;
          }
        }

        facetValues = facetValues.reverse();
        var hasNoResults = results ? results.nbHits === 0 : true;
        return {
          items: facetValues,
          hasNoResults: hasNoResults,
          canRefine: (!hasNoResults || refinementIsApplied) && totalCount > 0,
          refine: connectorState.toggleRefinementFactory(helper),
          sendEvent: sendEvent,
          createURL: connectorState.createURLFactory({
            state: state,
            createURL: createURL
          }),
          widgetParams: widgetParams
        };
      },
      dispose: function dispose(_ref6) {
        var state = _ref6.state;
        unmountFn();
        return state.removeNumericRefinement(attribute);
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref7) {
        var searchParameters = _ref7.searchParameters;

        var value = _getRefinedStar(searchParameters);

        if (typeof value !== 'number') {
          return uiState;
        }

        return connectRatingMenu_objectSpread(connectRatingMenu_objectSpread({}, uiState), {}, {
          ratingMenu: connectRatingMenu_objectSpread(connectRatingMenu_objectSpread({}, uiState.ratingMenu), {}, connectRatingMenu_defineProperty({}, attribute, value))
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref8) {
        var uiState = _ref8.uiState;
        var value = uiState.ratingMenu && uiState.ratingMenu[attribute];
        var withoutRefinements = searchParameters.clearRefinements(attribute);
        var withDisjunctiveFacet = withoutRefinements.addDisjunctiveFacet(attribute);

        if (!value) {
          return withDisjunctiveFacet.setQueryParameters({
            numericRefinements: connectRatingMenu_objectSpread(connectRatingMenu_objectSpread({}, withDisjunctiveFacet.numericRefinements), {}, connectRatingMenu_defineProperty({}, attribute, {}))
          });
        }

        return withDisjunctiveFacet.addNumericRefinement(attribute, '<=', max).addNumericRefinement(attribute, '>=', value);
      }
    };
  };
};

/* harmony default export */ var rating_menu_connectRatingMenu = (connectRatingMenu_connectRatingMenu);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/stats/connectStats.js
function connectStats_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectStats_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectStats_ownKeys(Object(source), true).forEach(function (key) {
        connectStats_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectStats_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectStats_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectStats_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'stats',
  connector: true
});
/**
 * **Stats** connector provides the logic to build a custom widget that will displays
 * search statistics (hits number and processing time).
 */

var connectStats_connectStats = function connectStats(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectStats_withUsage());
  return function (widgetParams) {
    return {
      $$type: 'ais.stats',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectStats_objectSpread(connectStats_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectStats_objectSpread(connectStats_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose() {
        unmountFn();
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectStats_objectSpread(connectStats_objectSpread({}, renderState), {}, {
          stats: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref) {
        var results = _ref.results,
            state = _ref.state;

        if (!results) {
          return {
            hitsPerPage: state.hitsPerPage,
            nbHits: 0,
            nbSortedHits: undefined,
            areHitsSorted: false,
            nbPages: 0,
            page: state.page || 0,
            processingTimeMS: -1,
            query: state.query || '',
            widgetParams: widgetParams
          };
        }

        return {
          hitsPerPage: results.hitsPerPage,
          nbHits: results.nbHits,
          nbSortedHits: results.nbSortedHits,
          areHitsSorted: typeof results.appliedRelevancyStrictness !== 'undefined' && results.appliedRelevancyStrictness > 0 && results.nbSortedHits !== results.nbHits,
          nbPages: results.nbPages,
          page: results.page,
          processingTimeMS: results.processingTimeMS,
          query: results.query,
          widgetParams: widgetParams
        };
      }
    };
  };
};

/* harmony default export */ var stats_connectStats = (connectStats_connectStats);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/toArray.js
var toArray = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/escapeFacetValue.js
var escapeFacetValue = __webpack_require__(272);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement.js
function connectToggleRefinement_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectToggleRefinement_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectToggleRefinement_ownKeys(Object(source), true).forEach(function (key) {
        connectToggleRefinement_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectToggleRefinement_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectToggleRefinement_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectToggleRefinement_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'toggle-refinement',
  connector: true
});
var connectToggleRefinement_$$type = 'ais.toggleRefinement';

var connectToggleRefinement_createSendEvent = function createSendEvent(_ref) {
  var instantSearchInstance = _ref.instantSearchInstance,
      helper = _ref.helper,
      attribute = _ref.attribute,
      on = _ref.on;

  var sendEventForToggle = function sendEventForToggle() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1) {
      instantSearchInstance.sendEventToInsights(args[0]);
      return;
    }

    var eventType = args[0],
        isRefined = args[1],
        _args$ = args[2],
        eventName = _args$ === void 0 ? 'Filter Applied' : _args$;

    if (eventType !== 'click' || on === undefined) {
      return;
    } // only send an event when the refinement gets applied,
    // not when it gets removed


    if (!isRefined) {
      instantSearchInstance.sendEventToInsights({
        insightsMethod: 'clickedFilters',
        widgetType: connectToggleRefinement_$$type,
        eventType: eventType,
        payload: {
          eventName: eventName,
          index: helper.getIndex(),
          filters: on.map(function (value) {
            return "".concat(attribute, ":").concat(value);
          })
        },
        attribute: attribute
      });
    }
  };

  return sendEventForToggle;
};
/**
 * **Toggle** connector provides the logic to build a custom widget that will provide
 * an on/off filtering feature based on an attribute value or values.
 *
 * Two modes are implemented in the custom widget:
 *  - with or without the value filtered
 *  - switch between two values.
 */


var connectToggleRefinement_connectToggleRefinement = function connectToggleRefinement(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectToggleRefinement_withUsage());
  return function (widgetParams) {
    var _ref2 = widgetParams || {},
        attribute = _ref2.attribute,
        _ref2$on = _ref2.on,
        userOn = _ref2$on === void 0 ? true : _ref2$on,
        userOff = _ref2.off;

    if (!attribute) {
      throw new Error(connectToggleRefinement_withUsage('The `attribute` option is required.'));
    }

    var hasAnOffValue = userOff !== undefined;
    var on = Object(toArray["a" /* default */])(userOn).map(escapeFacetValue["a" /* escapeFacetValue */]);
    var off = hasAnOffValue ? Object(toArray["a" /* default */])(userOff).map(escapeFacetValue["a" /* escapeFacetValue */]) : undefined;
    var sendEvent;

    var toggleRefinementFactory = function toggleRefinementFactory(helper) {
      return function () {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          isRefined: false
        },
            isRefined = _ref3.isRefined;

        if (!isRefined) {
          sendEvent('click', isRefined);

          if (hasAnOffValue) {
            off.forEach(function (v) {
              return helper.removeDisjunctiveFacetRefinement(attribute, v);
            });
          }

          on.forEach(function (v) {
            return helper.addDisjunctiveFacetRefinement(attribute, v);
          });
        } else {
          on.forEach(function (v) {
            return helper.removeDisjunctiveFacetRefinement(attribute, v);
          });

          if (hasAnOffValue) {
            off.forEach(function (v) {
              return helper.addDisjunctiveFacetRefinement(attribute, v);
            });
          }
        }

        helper.search();
      };
    };

    var connectorState = {
      createURLFactory: function createURLFactory(isRefined, _ref4) {
        var state = _ref4.state,
            createURL = _ref4.createURL;
        return function () {
          state = state.resetPage();
          var valuesToRemove = isRefined ? on : off;

          if (valuesToRemove) {
            valuesToRemove.forEach(function (v) {
              state = state.removeDisjunctiveFacetRefinement(attribute, v);
            });
          }

          var valuesToAdd = isRefined ? off : on;

          if (valuesToAdd) {
            valuesToAdd.forEach(function (v) {
              state = state.addDisjunctiveFacetRefinement(attribute, v);
            });
          }

          return createURL(state);
        };
      }
    };
    return {
      $$type: connectToggleRefinement_$$type,
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectToggleRefinement_objectSpread(connectToggleRefinement_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectToggleRefinement_objectSpread(connectToggleRefinement_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref5) {
        var state = _ref5.state;
        unmountFn();
        return state.removeDisjunctiveFacet(attribute);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectToggleRefinement_objectSpread(connectToggleRefinement_objectSpread({}, renderState), {}, {
          toggleRefinement: connectToggleRefinement_objectSpread(connectToggleRefinement_objectSpread({}, renderState.toggleRefinement), {}, connectToggleRefinement_defineProperty({}, attribute, this.getWidgetRenderState(renderOptions)))
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref6) {
        var state = _ref6.state,
            helper = _ref6.helper,
            results = _ref6.results,
            createURL = _ref6.createURL,
            instantSearchInstance = _ref6.instantSearchInstance;
        var isRefined = results ? on.every(function (v) {
          return state.isDisjunctiveFacetRefined(attribute, v);
        }) : on.every(function (v) {
          return state.isDisjunctiveFacetRefined(attribute, v);
        });
        var onFacetValue = {
          isRefined: isRefined,
          count: 0
        };
        var offFacetValue = {
          isRefined: hasAnOffValue && !isRefined,
          count: 0
        };

        if (results) {
          var offValue = Object(toArray["a" /* default */])(off || false);
          var allFacetValues = results.getFacetValues(attribute, {}) || [];
          var onData = on.map(function (v) {
            return Object(find["a" /* default */])(allFacetValues, function (_ref7) {
              var escapedValue = _ref7.escapedValue;
              return escapedValue === Object(escapeFacetValue["a" /* escapeFacetValue */])(String(v));
            });
          }).filter(function (v) {
            return v !== undefined;
          });
          var offData = hasAnOffValue ? offValue.map(function (v) {
            return Object(find["a" /* default */])(allFacetValues, function (_ref8) {
              var escapedValue = _ref8.escapedValue;
              return escapedValue === Object(escapeFacetValue["a" /* escapeFacetValue */])(String(v));
            });
          }).filter(function (v) {
            return v !== undefined;
          }) : [];
          onFacetValue = {
            isRefined: onData.length ? onData.every(function (v) {
              return v.isRefined;
            }) : false,
            count: onData.reduce(function (acc, v) {
              return acc + v.count;
            }, 0) || null
          };
          offFacetValue = {
            isRefined: offData.length ? offData.every(function (v) {
              return v.isRefined;
            }) : false,
            count: offData.reduce(function (acc, v) {
              return acc + v.count;
            }, 0) || allFacetValues.reduce(function (total, _ref9) {
              var count = _ref9.count;
              return total + count;
            }, 0)
          };
        }

        if (!sendEvent) {
          sendEvent = connectToggleRefinement_createSendEvent({
            instantSearchInstance: instantSearchInstance,
            attribute: attribute,
            on: on,
            helper: helper
          });
        }

        var nextRefinement = isRefined ? offFacetValue : onFacetValue;
        return {
          value: {
            name: attribute,
            isRefined: isRefined,
            count: results ? nextRefinement.count : null,
            onFacetValue: onFacetValue,
            offFacetValue: offFacetValue
          },
          createURL: connectorState.createURLFactory(isRefined, {
            state: state,
            createURL: createURL
          }),
          sendEvent: sendEvent,
          canRefine: Boolean(results ? nextRefinement.count : null),
          refine: toggleRefinementFactory(helper),
          widgetParams: widgetParams
        };
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref10) {
        var searchParameters = _ref10.searchParameters;
        var isRefined = on && on.every(function (v) {
          return searchParameters.isDisjunctiveFacetRefined(attribute, v);
        });

        if (!isRefined) {
          return uiState;
        }

        return connectToggleRefinement_objectSpread(connectToggleRefinement_objectSpread({}, uiState), {}, {
          toggle: connectToggleRefinement_objectSpread(connectToggleRefinement_objectSpread({}, uiState.toggle), {}, connectToggleRefinement_defineProperty({}, attribute, isRefined))
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref11) {
        var uiState = _ref11.uiState;
        var withFacetConfiguration = searchParameters.clearRefinements(attribute).addDisjunctiveFacet(attribute);
        var isRefined = Boolean(uiState.toggle && uiState.toggle[attribute]);

        if (isRefined) {
          if (on) {
            on.forEach(function (v) {
              withFacetConfiguration = withFacetConfiguration.addDisjunctiveFacetRefinement(attribute, v);
            });
          }

          return withFacetConfiguration;
        } // It's not refined with an `off` value


        if (hasAnOffValue) {
          if (off) {
            off.forEach(function (v) {
              withFacetConfiguration = withFacetConfiguration.addDisjunctiveFacetRefinement(attribute, v);
            });
          }

          return withFacetConfiguration;
        } // It's not refined without an `off` value


        return withFacetConfiguration.setQueryParameters({
          disjunctiveFacetsRefinements: connectToggleRefinement_objectSpread(connectToggleRefinement_objectSpread({}, searchParameters.disjunctiveFacetsRefinements), {}, connectToggleRefinement_defineProperty({}, attribute, []))
        });
      }
    };
  };
};

/* harmony default export */ var toggle_refinement_connectToggleRefinement = (connectToggleRefinement_connectToggleRefinement);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb.js
function connectBreadcrumb_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectBreadcrumb_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectBreadcrumb_ownKeys(Object(source), true).forEach(function (key) {
        connectBreadcrumb_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectBreadcrumb_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectBreadcrumb_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function connectBreadcrumb_slicedToArray(arr, i) {
  return connectBreadcrumb_arrayWithHoles(arr) || connectBreadcrumb_iterableToArrayLimit(arr, i) || connectBreadcrumb_unsupportedIterableToArray(arr, i) || connectBreadcrumb_nonIterableRest();
}

function connectBreadcrumb_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectBreadcrumb_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectBreadcrumb_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectBreadcrumb_arrayLikeToArray(o, minLen);
}

function connectBreadcrumb_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function connectBreadcrumb_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function connectBreadcrumb_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}


var connectBreadcrumb_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'breadcrumb',
  connector: true
});

var connectBreadcrumb_connectBreadcrumb = function connectBreadcrumb(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectBreadcrumb_withUsage());
  var connectorState = {};
  return function (widgetParams) {
    var _ref = widgetParams || {},
        attributes = _ref.attributes,
        _ref$separator = _ref.separator,
        separator = _ref$separator === void 0 ? ' > ' : _ref$separator,
        _ref$rootPath = _ref.rootPath,
        rootPath = _ref$rootPath === void 0 ? null : _ref$rootPath,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? function (items) {
      return items;
    } : _ref$transformItems;

    if (!attributes || !Array.isArray(attributes) || attributes.length === 0) {
      throw new Error(connectBreadcrumb_withUsage('The `attributes` option expects an array of strings.'));
    }

    var _attributes = connectBreadcrumb_slicedToArray(attributes, 1),
        hierarchicalFacetName = _attributes[0];

    function getRefinedState(state, facetValue) {
      if (!facetValue) {
        var breadcrumb = state.getHierarchicalFacetBreadcrumb(hierarchicalFacetName);

        if (breadcrumb.length === 0) {
          return state;
        } else {
          return state.resetPage().toggleFacetRefinement(hierarchicalFacetName, breadcrumb[0]);
        }
      }

      return state.resetPage().toggleFacetRefinement(hierarchicalFacetName, facetValue);
    }

    return {
      $$type: 'ais.breadcrumb',
      init: function init(initOptions) {
        renderFn(connectBreadcrumb_objectSpread(connectBreadcrumb_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: initOptions.instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        renderFn(connectBreadcrumb_objectSpread(connectBreadcrumb_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: renderOptions.instantSearchInstance
        }), false);
      },
      dispose: function dispose() {
        unmountFn();
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectBreadcrumb_objectSpread(connectBreadcrumb_objectSpread({}, renderState), {}, {
          breadcrumb: connectBreadcrumb_objectSpread(connectBreadcrumb_objectSpread({}, renderState.breadcrumb), {}, connectBreadcrumb_defineProperty({}, hierarchicalFacetName, this.getWidgetRenderState(renderOptions)))
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref2) {
        var helper = _ref2.helper,
            createURL = _ref2.createURL,
            results = _ref2.results,
            state = _ref2.state;

        function getItems() {
          // The hierarchicalFacets condition is required for flavors
          // that render immediately with empty results, without relying
          // on init() (like React InstantSearch Hooks).
          if (!results || state.hierarchicalFacets.length === 0) {
            return [];
          }

          var _state$hierarchicalFa = connectBreadcrumb_slicedToArray(state.hierarchicalFacets, 1),
              facetName = _state$hierarchicalFa[0].name;

          var facetValues = results.getFacetValues(facetName, {});
          var data = Array.isArray(facetValues.data) ? facetValues.data : [];
          var items = transformItems(shiftItemsValues(connectBreadcrumb_prepareItems(data)), {
            results: results
          });
          return items;
        }

        var items = getItems();

        if (!connectorState.createURL) {
          connectorState.createURL = function (facetValue) {
            return createURL(getRefinedState(helper.state, facetValue));
          };
        }

        if (!connectorState.refine) {
          connectorState.refine = function (facetValue) {
            helper.setState(getRefinedState(helper.state, facetValue)).search();
          };
        }

        return {
          canRefine: items.length > 0,
          createURL: connectorState.createURL,
          items: items,
          refine: connectorState.refine,
          widgetParams: widgetParams
        };
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters) {
        if (searchParameters.isHierarchicalFacet(hierarchicalFacetName)) {
          var facet = searchParameters.getHierarchicalFacetByName(hierarchicalFacetName);
           false ? undefined : void 0;
          return searchParameters;
        }

        return searchParameters.addHierarchicalFacet({
          name: hierarchicalFacetName,
          attributes: attributes,
          separator: separator,
          rootPath: rootPath
        });
      }
    };
  };
};

function connectBreadcrumb_prepareItems(data) {
  return data.reduce(function (result, currentItem) {
    if (currentItem.isRefined) {
      result.push({
        label: currentItem.name,
        value: currentItem.escapedValue
      });

      if (Array.isArray(currentItem.data)) {
        result = result.concat(connectBreadcrumb_prepareItems(currentItem.data));
      }
    }

    return result;
  }, []);
}

function shiftItemsValues(array) {
  return array.map(function (x, idx) {
    return {
      label: x.label,
      value: idx + 1 === array.length ? null : array[idx + 1].value
    };
  });
}

/* harmony default export */ var breadcrumb_connectBreadcrumb = (connectBreadcrumb_connectBreadcrumb);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/geo-search.js
var geo_search = __webpack_require__(287);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/geo-search/connectGeoSearch.js
function connectGeoSearch_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectGeoSearch_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectGeoSearch_ownKeys(Object(source), true).forEach(function (key) {
        connectGeoSearch_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectGeoSearch_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectGeoSearch_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectGeoSearch_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'geo-search',
  connector: true
}); // in this connector, we assume insideBoundingBox is only a string,
// even though in the helper it's defined as number[][] alone.
// This can be done, since the connector assumes "control" of the parameter

function getBoundingBoxAsString(state) {
  return state.insideBoundingBox || '';
}

function setBoundingBoxAsString(state, value) {
  return state.setQueryParameter('insideBoundingBox', value);
}

var connectGeoSearch_$$type = 'ais.geoSearch';
/**
 * The **GeoSearch** connector provides the logic to build a widget that will display the results on a map. It also provides a way to search for results based on their position. The connector provides functions to manage the search experience (search on map interaction or control the interaction for example).
 *
 * @requirements
 *
 * Note that the GeoSearch connector uses the [geosearch](https://www.algolia.com/doc/guides/searching/geo-search) capabilities of Algolia. Your hits **must** have a `_geoloc` attribute in order to be passed to the rendering function.
 *
 * Currently, the feature is not compatible with multiple values in the _geoloc attribute.
 */

var connectGeoSearch_connectGeoSearch = function connectGeoSearch(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectGeoSearch_withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        _ref$enableRefineOnMa = _ref.enableRefineOnMapMove,
        enableRefineOnMapMove = _ref$enableRefineOnMa === void 0 ? true : _ref$enableRefineOnMa,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? function (items) {
      return items;
    } : _ref$transformItems;

    var widgetState = {
      isRefineOnMapMove: enableRefineOnMapMove,
      // @MAJOR hasMapMoveSinceLastRefine -> hasMapMovedSinceLastRefine
      hasMapMoveSinceLastRefine: false,
      lastRefinePosition: '',
      lastRefineBoundingBox: '',
      internalToggleRefineOnMapMove: noop["a" /* default */],
      internalSetMapMoveSinceLastRefine: noop["a" /* default */]
    };

    var getPositionFromState = function getPositionFromState(state) {
      return state.aroundLatLng ? Object(geo_search["a" /* aroundLatLngToPosition */])(state.aroundLatLng) : undefined;
    };

    var getCurrentRefinementFromState = function getCurrentRefinementFromState(state) {
      return state.insideBoundingBox && Object(geo_search["b" /* insideBoundingBoxToBoundingBox */])(state.insideBoundingBox);
    };

    var refine = function refine(helper) {
      return function (_ref2) {
        var ne = _ref2.northEast,
            sw = _ref2.southWest;
        var boundingBox = [ne.lat, ne.lng, sw.lat, sw.lng].join();
        helper.setState(setBoundingBoxAsString(helper.state, boundingBox).resetPage()).search();
        widgetState.hasMapMoveSinceLastRefine = false;
        widgetState.lastRefineBoundingBox = boundingBox;
      };
    };

    var clearMapRefinement = function clearMapRefinement(helper) {
      return function () {
        helper.setQueryParameter('insideBoundingBox', undefined).search();
      };
    };

    var isRefinedWithMap = function isRefinedWithMap(state) {
      return function () {
        return Boolean(state.insideBoundingBox);
      };
    };

    var toggleRefineOnMapMove = function toggleRefineOnMapMove() {
      return widgetState.internalToggleRefineOnMapMove();
    };

    var createInternalToggleRefinementOnMapMove = function createInternalToggleRefinementOnMapMove(renderOptions, render) {
      return function () {
        widgetState.isRefineOnMapMove = !widgetState.isRefineOnMapMove;
        render(renderOptions);
      };
    };

    var isRefineOnMapMove = function isRefineOnMapMove() {
      return widgetState.isRefineOnMapMove;
    };

    var setMapMoveSinceLastRefine = function setMapMoveSinceLastRefine() {
      return widgetState.internalSetMapMoveSinceLastRefine();
    };

    var createInternalSetMapMoveSinceLastRefine = function createInternalSetMapMoveSinceLastRefine(renderOptions, render) {
      return function () {
        var shouldTriggerRender = widgetState.hasMapMoveSinceLastRefine !== true;
        widgetState.hasMapMoveSinceLastRefine = true;

        if (shouldTriggerRender) {
          render(renderOptions);
        }
      };
    };

    var hasMapMoveSinceLastRefine = function hasMapMoveSinceLastRefine() {
      return widgetState.hasMapMoveSinceLastRefine;
    };

    var sendEvent;
    return {
      $$type: connectGeoSearch_$$type,
      init: function init(initArgs) {
        var instantSearchInstance = initArgs.instantSearchInstance;
        var isFirstRendering = true;
        widgetState.internalToggleRefineOnMapMove = createInternalToggleRefinementOnMapMove(initArgs, noop["a" /* default */]);
        widgetState.internalSetMapMoveSinceLastRefine = createInternalSetMapMoveSinceLastRefine(initArgs, noop["a" /* default */]);
        renderFn(connectGeoSearch_objectSpread(connectGeoSearch_objectSpread({}, this.getWidgetRenderState(initArgs)), {}, {
          instantSearchInstance: instantSearchInstance
        }), isFirstRendering);
      },
      render: function render(renderArgs) {
        var helper = renderArgs.helper,
            instantSearchInstance = renderArgs.instantSearchInstance;
        var isFirstRendering = false; // We don't use the state provided by the render function because we need
        // to be sure that the state is the latest one for the following condition

        var state = helper.state;
        var positionChangedSinceLastRefine = Boolean(state.aroundLatLng) && Boolean(widgetState.lastRefinePosition) && state.aroundLatLng !== widgetState.lastRefinePosition;
        var boundingBoxChangedSinceLastRefine = !state.insideBoundingBox && Boolean(widgetState.lastRefineBoundingBox) && state.insideBoundingBox !== widgetState.lastRefineBoundingBox;

        if (positionChangedSinceLastRefine || boundingBoxChangedSinceLastRefine) {
          widgetState.hasMapMoveSinceLastRefine = false;
        }

        widgetState.lastRefinePosition = state.aroundLatLng || '';
        widgetState.lastRefineBoundingBox = getBoundingBoxAsString(state);
        widgetState.internalToggleRefineOnMapMove = createInternalToggleRefinementOnMapMove(renderArgs, this.render.bind(this));
        widgetState.internalSetMapMoveSinceLastRefine = createInternalSetMapMoveSinceLastRefine(renderArgs, this.render.bind(this));
        var widgetRenderState = this.getWidgetRenderState(renderArgs);
        sendEvent('view', widgetRenderState.items);
        renderFn(connectGeoSearch_objectSpread(connectGeoSearch_objectSpread({}, widgetRenderState), {}, {
          instantSearchInstance: instantSearchInstance
        }), isFirstRendering);
      },
      getWidgetRenderState: function getWidgetRenderState(renderOptions) {
        var helper = renderOptions.helper,
            results = renderOptions.results,
            instantSearchInstance = renderOptions.instantSearchInstance;
        var state = helper.state;
        var items = results ? transformItems(results.hits.filter(function (hit) {
          return hit._geoloc;
        }), {
          results: results
        }) : [];

        if (!sendEvent) {
          sendEvent = Object(createSendEventForHits["b" /* createSendEventForHits */])({
            instantSearchInstance: instantSearchInstance,
            index: helper.getIndex(),
            widgetType: connectGeoSearch_$$type
          });
        }

        return {
          items: items,
          position: getPositionFromState(state),
          currentRefinement: getCurrentRefinementFromState(state),
          refine: refine(helper),
          sendEvent: sendEvent,
          clearMapRefinement: clearMapRefinement(helper),
          isRefinedWithMap: isRefinedWithMap(state),
          toggleRefineOnMapMove: toggleRefineOnMapMove,
          isRefineOnMapMove: isRefineOnMapMove,
          setMapMoveSinceLastRefine: setMapMoveSinceLastRefine,
          hasMapMoveSinceLastRefine: hasMapMoveSinceLastRefine,
          widgetParams: widgetParams
        };
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectGeoSearch_objectSpread(connectGeoSearch_objectSpread({}, renderState), {}, {
          geoSearch: this.getWidgetRenderState(renderOptions)
        });
      },
      dispose: function dispose(_ref3) {
        var state = _ref3.state;
        unmountFn();
        return state.setQueryParameter('insideBoundingBox', undefined);
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
        var searchParameters = _ref4.searchParameters;
        var boundingBox = getBoundingBoxAsString(searchParameters);

        if (!boundingBox || uiState && uiState.geoSearch && uiState.geoSearch.boundingBox === boundingBox) {
          return uiState;
        }

        return connectGeoSearch_objectSpread(connectGeoSearch_objectSpread({}, uiState), {}, {
          geoSearch: {
            boundingBox: boundingBox
          }
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
        var uiState = _ref5.uiState;

        if (!uiState || !uiState.geoSearch) {
          return searchParameters.setQueryParameter('insideBoundingBox', undefined);
        }

        return setBoundingBoxAsString(searchParameters, uiState.geoSearch.boundingBox);
      }
    };
  };
};

/* harmony default export */ var geo_search_connectGeoSearch = (connectGeoSearch_connectGeoSearch);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/safelyRunOnBrowser.js
var safelyRunOnBrowser = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/powered-by/connectPoweredBy.js
function connectPoweredBy_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectPoweredBy_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectPoweredBy_ownKeys(Object(source), true).forEach(function (key) {
        connectPoweredBy_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectPoweredBy_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectPoweredBy_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectPoweredBy_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'powered-by',
  connector: true
});
/**
 * **PoweredBy** connector provides the logic to build a custom widget that will displays
 * the logo to redirect to Algolia.
 */

var connectPoweredBy_connectPoweredBy = function connectPoweredBy(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectPoweredBy_withUsage());
  var defaultUrl = 'https://www.algolia.com/?' + 'utm_source=instantsearch.js&' + 'utm_medium=website&' + "utm_content=".concat(Object(safelyRunOnBrowser["a" /* safelyRunOnBrowser */])(function (_ref) {
    var _window$location;

    var window = _ref.window;
    return ((_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location.hostname) || '';
  }, {
    fallback: function fallback() {
      return '';
    }
  }), "&") + 'utm_campaign=poweredby';
  return function (widgetParams) {
    var _ref2 = widgetParams || {},
        _ref2$url = _ref2.url,
        url = _ref2$url === void 0 ? defaultUrl : _ref2$url;

    return {
      $$type: 'ais.poweredBy',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectPoweredBy_objectSpread(connectPoweredBy_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectPoweredBy_objectSpread(connectPoweredBy_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectPoweredBy_objectSpread(connectPoweredBy_objectSpread({}, renderState), {}, {
          poweredBy: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState() {
        return {
          url: url,
          widgetParams: widgetParams
        };
      },
      dispose: function dispose() {
        unmountFn();
      }
    };
  };
};

/* harmony default export */ var powered_by_connectPoweredBy = (connectPoweredBy_connectPoweredBy);
// EXTERNAL MODULE: external "algoliasearch-helper"
var external_algoliasearch_helper_ = __webpack_require__(209);
var external_algoliasearch_helper_default = /*#__PURE__*/__webpack_require__.n(external_algoliasearch_helper_);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/isPlainObject.js
var isPlainObject = __webpack_require__(286);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/configure/connectConfigure.js
function connectConfigure_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectConfigure_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectConfigure_ownKeys(Object(source), true).forEach(function (key) {
        connectConfigure_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectConfigure_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectConfigure_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}



/**
 * Refine the given search parameters.
 */

var connectConfigure_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'configure',
  connector: true
});

function getInitialSearchParameters(state, widgetParams) {
  // We leverage the helper internals to remove the `widgetParams` from
  // the state. The function `setQueryParameters` omits the values that
  // are `undefined` on the next state.
  return state.setQueryParameters(Object.keys(widgetParams.searchParameters).reduce(function (acc, key) {
    return connectConfigure_objectSpread(connectConfigure_objectSpread({}, acc), {}, connectConfigure_defineProperty({}, key, undefined));
  }, {}));
}

var connectConfigure_connectConfigure = function connectConfigure() {
  var renderFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop["a" /* default */];
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  return function (widgetParams) {
    if (!widgetParams || !Object(isPlainObject["a" /* default */])(widgetParams.searchParameters)) {
      throw new Error(connectConfigure_withUsage('The `searchParameters` option expects an object.'));
    }

    var connectorState = {};

    function refine(helper) {
      return function (searchParameters) {
        // Merge new `searchParameters` with the ones set from other widgets
        var actualState = getInitialSearchParameters(helper.state, widgetParams);
        var nextSearchParameters = Object(mergeSearchParameters["a" /* default */])(actualState, new external_algoliasearch_helper_default.a.SearchParameters(searchParameters)); // Update original `widgetParams.searchParameters` to the new refined one

        widgetParams.searchParameters = searchParameters; // Trigger a search with the resolved search parameters

        helper.setState(nextSearchParameters).search();
      };
    }

    return {
      $$type: 'ais.configure',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectConfigure_objectSpread(connectConfigure_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectConfigure_objectSpread(connectConfigure_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref) {
        var state = _ref.state;
        unmountFn();
        return getInitialSearchParameters(state, widgetParams);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        var _renderState$configur;

        var widgetRenderState = this.getWidgetRenderState(renderOptions);
        return connectConfigure_objectSpread(connectConfigure_objectSpread({}, renderState), {}, {
          configure: connectConfigure_objectSpread(connectConfigure_objectSpread({}, widgetRenderState), {}, {
            widgetParams: connectConfigure_objectSpread(connectConfigure_objectSpread({}, widgetRenderState.widgetParams), {}, {
              searchParameters: Object(mergeSearchParameters["a" /* default */])(new external_algoliasearch_helper_default.a.SearchParameters((_renderState$configur = renderState.configure) === null || _renderState$configur === void 0 ? void 0 : _renderState$configur.widgetParams.searchParameters), new external_algoliasearch_helper_default.a.SearchParameters(widgetRenderState.widgetParams.searchParameters)).getQueryParams()
            })
          })
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref2) {
        var helper = _ref2.helper;

        if (!connectorState.refine) {
          connectorState.refine = refine(helper);
        }

        return {
          refine: connectorState.refine,
          widgetParams: widgetParams
        };
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(state, _ref3) {
        var uiState = _ref3.uiState;
        return Object(mergeSearchParameters["a" /* default */])(state, new external_algoliasearch_helper_default.a.SearchParameters(connectConfigure_objectSpread(connectConfigure_objectSpread({}, uiState.configure), widgetParams.searchParameters)));
      },
      getWidgetUiState: function getWidgetUiState(uiState) {
        return connectConfigure_objectSpread(connectConfigure_objectSpread({}, uiState), {}, {
          configure: connectConfigure_objectSpread(connectConfigure_objectSpread({}, uiState.configure), widgetParams.searchParameters)
        });
      }
    };
  };
};

/* harmony default export */ var configure_connectConfigure = (connectConfigure_connectConfigure);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getPropertyByPath.js
var getPropertyByPath = __webpack_require__(311);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/configure-related-items/connectConfigureRelatedItems.js
function connectConfigureRelatedItems_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectConfigureRelatedItems_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectConfigureRelatedItems_ownKeys(Object(source), true).forEach(function (key) {
        connectConfigureRelatedItems_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectConfigureRelatedItems_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectConfigureRelatedItems_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function connectConfigureRelatedItems_toConsumableArray(arr) {
  return connectConfigureRelatedItems_arrayWithoutHoles(arr) || connectConfigureRelatedItems_iterableToArray(arr) || connectConfigureRelatedItems_unsupportedIterableToArray(arr) || connectConfigureRelatedItems_nonIterableSpread();
}

function connectConfigureRelatedItems_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectConfigureRelatedItems_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectConfigureRelatedItems_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectConfigureRelatedItems_arrayLikeToArray(o, minLen);
}

function connectConfigureRelatedItems_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function connectConfigureRelatedItems_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return connectConfigureRelatedItems_arrayLikeToArray(arr);
}

function connectConfigureRelatedItems_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}




var connectConfigureRelatedItems_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'configure-related-items',
  connector: true
});

function createOptionalFilter(_ref) {
  var attributeName = _ref.attributeName,
      attributeValue = _ref.attributeValue,
      attributeScore = _ref.attributeScore;
  return "".concat(attributeName, ":").concat(attributeValue, "<score=").concat(attributeScore || 1, ">");
}

var connectConfigureRelatedItems_connectConfigureRelatedItems = function connectConfigureRelatedItems(renderFn, unmountFn) {
  return function (widgetParams) {
    var _ref2 = widgetParams || {},
        hit = _ref2.hit,
        matchingPatterns = _ref2.matchingPatterns,
        _ref2$transformSearch = _ref2.transformSearchParameters,
        transformSearchParameters = _ref2$transformSearch === void 0 ? function (x) {
      return x;
    } : _ref2$transformSearch;

    if (!hit) {
      throw new Error(connectConfigureRelatedItems_withUsage('The `hit` option is required.'));
    }

    if (!matchingPatterns) {
      throw new Error(connectConfigureRelatedItems_withUsage('The `matchingPatterns` option is required.'));
    }

    var optionalFilters = Object.keys(matchingPatterns).reduce(function (acc, attributeName) {
      var attribute = matchingPatterns[attributeName];
      var attributeValue = Object(getPropertyByPath["a" /* default */])(hit, attributeName);
      var attributeScore = attribute.score;

      if (Array.isArray(attributeValue)) {
        return [].concat(connectConfigureRelatedItems_toConsumableArray(acc), [attributeValue.map(function (attributeSubValue) {
          return createOptionalFilter({
            attributeName: attributeName,
            attributeValue: attributeSubValue,
            attributeScore: attributeScore
          });
        })]);
      }

      if (typeof attributeValue === 'string') {
        return [].concat(connectConfigureRelatedItems_toConsumableArray(acc), [createOptionalFilter({
          attributeName: attributeName,
          attributeValue: attributeValue,
          attributeScore: attributeScore
        })]);
      }

       false ? undefined : void 0;
      return acc;
    }, []);

    var searchParameters = connectConfigureRelatedItems_objectSpread({}, transformSearchParameters(new external_algoliasearch_helper_default.a.SearchParameters({
      sumOrFiltersScores: true,
      facetFilters: ["objectID:-".concat(hit.objectID)],
      optionalFilters: optionalFilters
    })));

    var makeWidget = configure_connectConfigure(renderFn, unmountFn);
    return connectConfigureRelatedItems_objectSpread(connectConfigureRelatedItems_objectSpread({}, makeWidget({
      searchParameters: searchParameters
    })), {}, {
      $$type: 'ais.configureRelatedItems'
    });
  };
};

/* harmony default export */ var configure_related_items_connectConfigureRelatedItems = (connectConfigureRelatedItems_connectConfigureRelatedItems);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/autocomplete/connectAutocomplete.js
function connectAutocomplete_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectAutocomplete_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectAutocomplete_ownKeys(Object(source), true).forEach(function (key) {
        connectAutocomplete_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectAutocomplete_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectAutocomplete_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


var connectAutocomplete_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'autocomplete',
  connector: true
});

var connectAutocomplete_connectAutocomplete = function connectAutocomplete(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectAutocomplete_withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        _ref$escapeHTML = _ref.escapeHTML,
        escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML;

     false ? undefined : void 0;
    var connectorState = {};
    return {
      $$type: 'ais.autocomplete',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectAutocomplete_objectSpread(connectAutocomplete_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        var renderState = this.getWidgetRenderState(renderOptions);
        renderState.indices.forEach(function (_ref3) {
          var sendEvent = _ref3.sendEvent,
              hits = _ref3.hits;
          sendEvent('view', hits);
        });
        renderFn(connectAutocomplete_objectSpread(connectAutocomplete_objectSpread({}, renderState), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectAutocomplete_objectSpread(connectAutocomplete_objectSpread({}, renderState), {}, {
          autocomplete: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref4) {
        var _this = this;

        var helper = _ref4.helper,
            state = _ref4.state,
            scopedResults = _ref4.scopedResults,
            instantSearchInstance = _ref4.instantSearchInstance;

        if (!connectorState.refine) {
          connectorState.refine = function (query) {
            helper.setQuery(query).search();
          };
        }

        var indices = scopedResults.map(function (scopedResult) {
          // We need to escape the hits because highlighting
          // exposes HTML tags to the end-user.
          scopedResult.results.hits = escapeHTML ? Object(escape_highlight["d" /* escapeHits */])(scopedResult.results.hits) : scopedResult.results.hits;
          var sendEvent = Object(createSendEventForHits["b" /* createSendEventForHits */])({
            instantSearchInstance: instantSearchInstance,
            index: scopedResult.results.index,
            widgetType: _this.$$type
          });
          return {
            indexId: scopedResult.indexId,
            indexName: scopedResult.results.index,
            hits: scopedResult.results.hits,
            results: scopedResult.results,
            sendEvent: sendEvent
          };
        });
        return {
          currentRefinement: state.query || '',
          indices: indices,
          refine: connectorState.refine,
          widgetParams: widgetParams
        };
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref5) {
        var searchParameters = _ref5.searchParameters;
        var query = searchParameters.query || '';

        if (query === '' || uiState && uiState.query === query) {
          return uiState;
        }

        return connectAutocomplete_objectSpread(connectAutocomplete_objectSpread({}, uiState), {}, {
          query: query
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
        var uiState = _ref6.uiState;
        var parameters = {
          query: uiState.query || ''
        };

        if (!escapeHTML) {
          return searchParameters.setQueryParameters(parameters);
        }

        return searchParameters.setQueryParameters(connectAutocomplete_objectSpread(connectAutocomplete_objectSpread({}, parameters), escape_highlight["a" /* TAG_PLACEHOLDER */]));
      },
      dispose: function dispose(_ref7) {
        var state = _ref7.state;
        unmountFn();
        var stateWithoutQuery = state.setQueryParameter('query', undefined);

        if (!escapeHTML) {
          return stateWithoutQuery;
        }

        return stateWithoutQuery.setQueryParameters(Object.keys(escape_highlight["a" /* TAG_PLACEHOLDER */]).reduce(function (acc, key) {
          return connectAutocomplete_objectSpread(connectAutocomplete_objectSpread({}, acc), {}, connectAutocomplete_defineProperty({}, key, undefined));
        }, {}));
      }
    };
  };
};

/* harmony default export */ var autocomplete_connectAutocomplete = (connectAutocomplete_connectAutocomplete);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/query-rules/connectQueryRules.js
function connectQueryRules_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectQueryRules_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectQueryRules_ownKeys(Object(source), true).forEach(function (key) {
        connectQueryRules_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectQueryRules_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectQueryRules_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function connectQueryRules_toConsumableArray(arr) {
  return connectQueryRules_arrayWithoutHoles(arr) || connectQueryRules_iterableToArray(arr) || connectQueryRules_unsupportedIterableToArray(arr) || connectQueryRules_nonIterableSpread();
}

function connectQueryRules_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function connectQueryRules_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return connectQueryRules_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return connectQueryRules_arrayLikeToArray(o, minLen);
}

function connectQueryRules_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function connectQueryRules_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return connectQueryRules_arrayLikeToArray(arr);
}

function connectQueryRules_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}


var connectQueryRules_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'query-rules',
  connector: true
});

function hasStateRefinements(state) {
  return [state.disjunctiveFacetsRefinements, state.facetsRefinements, state.hierarchicalFacetsRefinements, state.numericRefinements].some(function (refinement) {
    return Boolean(refinement && Object.keys(refinement).length > 0);
  });
} // A context rule must consist only of alphanumeric characters, hyphens, and underscores.
// See https://www.algolia.com/doc/guides/managing-results/refine-results/merchandising-and-promoting/in-depth/implementing-query-rules/#context


function escapeRuleContext(ruleName) {
  return ruleName.replace(/[^a-z0-9-_]+/gi, '_');
}

function getRuleContextsFromTrackedFilters(_ref) {
  var helper = _ref.helper,
      sharedHelperState = _ref.sharedHelperState,
      trackedFilters = _ref.trackedFilters;
  var ruleContexts = Object.keys(trackedFilters).reduce(function (facets, facetName) {
    var facetRefinements = Object(getRefinements["a" /* default */])(helper.lastResults || {}, sharedHelperState, true).filter(function (refinement) {
      return refinement.attribute === facetName;
    }).map(function (refinement) {
      return refinement.numericValue || refinement.name;
    });
    var getTrackedFacetValues = trackedFilters[facetName];
    var trackedFacetValues = getTrackedFacetValues(facetRefinements);
    return [].concat(connectQueryRules_toConsumableArray(facets), connectQueryRules_toConsumableArray(facetRefinements.filter(function (facetRefinement) {
      return trackedFacetValues.includes(facetRefinement);
    }).map(function (facetValue) {
      return escapeRuleContext("ais-".concat(facetName, "-").concat(facetValue));
    })));
  }, []);
  return ruleContexts;
}

function applyRuleContexts(event) {
  var helper = this.helper,
      initialRuleContexts = this.initialRuleContexts,
      trackedFilters = this.trackedFilters,
      transformRuleContexts = this.transformRuleContexts;
  var sharedHelperState = event.state;
  var previousRuleContexts = sharedHelperState.ruleContexts || [];
  var newRuleContexts = getRuleContextsFromTrackedFilters({
    helper: helper,
    sharedHelperState: sharedHelperState,
    trackedFilters: trackedFilters
  });
  var nextRuleContexts = [].concat(connectQueryRules_toConsumableArray(initialRuleContexts), connectQueryRules_toConsumableArray(newRuleContexts));
   false ? undefined : void 0;
  var ruleContexts = transformRuleContexts(nextRuleContexts).slice(0, 10);

  if (!Object(isEqual["a" /* default */])(previousRuleContexts, ruleContexts)) {
    helper.overrideStateWithoutTriggeringChangeEvent(connectQueryRules_objectSpread(connectQueryRules_objectSpread({}, sharedHelperState), {}, {
      ruleContexts: ruleContexts
    }));
  }
}

var connectQueryRules_connectQueryRules = function connectQueryRules(_render) {
  var unmount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(_render, connectQueryRules_withUsage());
  return function (widgetParams) {
    var _ref2 = widgetParams || {},
        _ref2$trackedFilters = _ref2.trackedFilters,
        trackedFilters = _ref2$trackedFilters === void 0 ? {} : _ref2$trackedFilters,
        _ref2$transformRuleCo = _ref2.transformRuleContexts,
        transformRuleContexts = _ref2$transformRuleCo === void 0 ? function (rules) {
      return rules;
    } : _ref2$transformRuleCo,
        _ref2$transformItems = _ref2.transformItems,
        transformItems = _ref2$transformItems === void 0 ? function (items) {
      return items;
    } : _ref2$transformItems;

    Object.keys(trackedFilters).forEach(function (facetName) {
      if (typeof trackedFilters[facetName] !== 'function') {
        throw new Error(connectQueryRules_withUsage("'The \"".concat(facetName, "\" filter value in the `trackedFilters` option expects a function.")));
      }
    });
    var hasTrackedFilters = Object.keys(trackedFilters).length > 0; // We store the initial rule contexts applied before creating the widget
    // so that we do not override them with the rules created from `trackedFilters`.

    var initialRuleContexts = [];
    var onHelperChange;
    return {
      $$type: 'ais.queryRules',
      init: function init(initOptions) {
        var helper = initOptions.helper,
            state = initOptions.state,
            instantSearchInstance = initOptions.instantSearchInstance;
        initialRuleContexts = state.ruleContexts || [];
        onHelperChange = applyRuleContexts.bind({
          helper: helper,
          initialRuleContexts: initialRuleContexts,
          trackedFilters: trackedFilters,
          transformRuleContexts: transformRuleContexts
        });

        if (hasTrackedFilters) {
          // We need to apply the `ruleContexts` based on the `trackedFilters`
          // before the helper changes state in some cases:
          //   - Some filters are applied on the first load (e.g. using `configure`)
          //   - The `transformRuleContexts` option sets initial `ruleContexts`.
          if (hasStateRefinements(state) || Boolean(widgetParams.transformRuleContexts)) {
            onHelperChange({
              state: state
            });
          } // We track every change in the helper to override its state and add
          // any `ruleContexts` needed based on the `trackedFilters`.


          helper.on('change', onHelperChange);
        }

        _render(connectQueryRules_objectSpread(connectQueryRules_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;

        _render(connectQueryRules_objectSpread(connectQueryRules_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      getWidgetRenderState: function getWidgetRenderState(_ref3) {
        var results = _ref3.results;

        var _ref4 = results || {},
            _ref4$userData = _ref4.userData,
            userData = _ref4$userData === void 0 ? [] : _ref4$userData;

        var items = transformItems(userData, {
          results: results
        });
        return {
          items: items,
          widgetParams: widgetParams
        };
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectQueryRules_objectSpread(connectQueryRules_objectSpread({}, renderState), {}, {
          queryRules: this.getWidgetRenderState(renderOptions)
        });
      },
      dispose: function dispose(_ref5) {
        var helper = _ref5.helper,
            state = _ref5.state;
        unmount();

        if (hasTrackedFilters) {
          helper.removeListener('change', onHelperChange);
          return state.setQueryParameter('ruleContexts', initialRuleContexts);
        }

        return state;
      }
    };
  };
};

/* harmony default export */ var query_rules_connectQueryRules = (connectQueryRules_connectQueryRules);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/voiceSearchHelper/index.js
function voiceSearchHelper_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function voiceSearchHelper_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      voiceSearchHelper_ownKeys(Object(source), true).forEach(function (key) {
        voiceSearchHelper_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      voiceSearchHelper_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function voiceSearchHelper_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // `SpeechRecognition` is an API used on the browser so we can safely disable
// the `window` check.

/* eslint-disable no-restricted-globals */

/* global SpeechRecognition SpeechRecognitionEvent */


var voiceSearchHelper_createVoiceSearchHelper = function createVoiceSearchHelper(_ref) {
  var searchAsYouSpeak = _ref.searchAsYouSpeak,
      language = _ref.language,
      onQueryChange = _ref.onQueryChange,
      onStateChange = _ref.onStateChange;
  var SpeechRecognitionAPI = window.webkitSpeechRecognition || window.SpeechRecognition;

  var getDefaultState = function getDefaultState(status) {
    return {
      status: status,
      transcript: '',
      isSpeechFinal: false,
      errorCode: undefined
    };
  };

  var state = getDefaultState('initial');
  var recognition;

  var isBrowserSupported = function isBrowserSupported() {
    return Boolean(SpeechRecognitionAPI);
  };

  var isListening = function isListening() {
    return state.status === 'askingPermission' || state.status === 'waiting' || state.status === 'recognizing';
  };

  var setState = function setState() {
    var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    state = voiceSearchHelper_objectSpread(voiceSearchHelper_objectSpread({}, state), newState);
    onStateChange();
  };

  var getState = function getState() {
    return state;
  };

  var resetState = function resetState() {
    var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
    setState(getDefaultState(status));
  };

  var onStart = function onStart() {
    setState({
      status: 'waiting'
    });
  };

  var onError = function onError(event) {
    setState({
      status: 'error',
      errorCode: event.error
    });
  };

  var onResult = function onResult(event) {
    setState({
      status: 'recognizing',
      transcript: event.results[0] && event.results[0][0] && event.results[0][0].transcript || '',
      isSpeechFinal: event.results[0] && event.results[0].isFinal
    });

    if (searchAsYouSpeak && state.transcript) {
      onQueryChange(state.transcript);
    }
  };

  var onEnd = function onEnd() {
    if (!state.errorCode && state.transcript && !searchAsYouSpeak) {
      onQueryChange(state.transcript);
    }

    if (state.status !== 'error') {
      setState({
        status: 'finished'
      });
    }
  };

  var startListening = function startListening() {
    recognition = new SpeechRecognitionAPI();

    if (!recognition) {
      return;
    }

    resetState('askingPermission');
    recognition.interimResults = true;

    if (language) {
      recognition.lang = language;
    }

    recognition.addEventListener('start', onStart);
    recognition.addEventListener('error', onError);
    recognition.addEventListener('result', onResult);
    recognition.addEventListener('end', onEnd);
    recognition.start();
  };

  var dispose = function dispose() {
    if (!recognition) {
      return;
    }

    recognition.stop();
    recognition.removeEventListener('start', onStart);
    recognition.removeEventListener('error', onError);
    recognition.removeEventListener('result', onResult);
    recognition.removeEventListener('end', onEnd);
    recognition = undefined;
  };

  var stopListening = function stopListening() {
    dispose(); // Because `dispose` removes event listeners, `end` listener is not called.
    // So we're setting the `status` as `finished` here.
    // If we don't do it, it will be still `waiting` or `recognizing`.

    resetState('finished');
  };

  return {
    getState: getState,
    isBrowserSupported: isBrowserSupported,
    isListening: isListening,
    startListening: startListening,
    stopListening: stopListening,
    dispose: dispose
  };
};

/* harmony default export */ var voiceSearchHelper = (voiceSearchHelper_createVoiceSearchHelper);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/voice-search/connectVoiceSearch.js
function connectVoiceSearch_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectVoiceSearch_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectVoiceSearch_ownKeys(Object(source), true).forEach(function (key) {
        connectVoiceSearch_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectVoiceSearch_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectVoiceSearch_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}



var connectVoiceSearch_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'voice-search',
  connector: true
});

var connectVoiceSearch_connectVoiceSearch = function connectVoiceSearch(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectVoiceSearch_withUsage());
  return function (widgetParams) {
    var _widgetParams$searchA = widgetParams.searchAsYouSpeak,
        searchAsYouSpeak = _widgetParams$searchA === void 0 ? false : _widgetParams$searchA,
        language = widgetParams.language,
        additionalQueryParameters = widgetParams.additionalQueryParameters,
        _widgetParams$createV = widgetParams.createVoiceSearchHelper,
        createVoiceSearchHelper = _widgetParams$createV === void 0 ? voiceSearchHelper : _widgetParams$createV;
    return {
      $$type: 'ais.voiceSearch',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectVoiceSearch_objectSpread(connectVoiceSearch_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectVoiceSearch_objectSpread(connectVoiceSearch_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectVoiceSearch_objectSpread(connectVoiceSearch_objectSpread({}, renderState), {}, {
          voiceSearch: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(renderOptions) {
        var _this = this;

        var helper = renderOptions.helper,
            instantSearchInstance = renderOptions.instantSearchInstance;

        if (!this._refine) {
          this._refine = function (query) {
            if (query !== helper.state.query) {
              var queryLanguages = language ? [language.split('-')[0]] : undefined;
              helper.setQueryParameter('queryLanguages', queryLanguages);

              if (typeof additionalQueryParameters === 'function') {
                helper.setState(helper.state.setQueryParameters(connectVoiceSearch_objectSpread({
                  ignorePlurals: true,
                  removeStopWords: true,
                  // @ts-ignore (optionalWords only allows array in v3, while string is also valid)
                  optionalWords: query
                }, additionalQueryParameters({
                  query: query
                }))));
              }

              helper.setQuery(query).search();
            }
          };
        }

        if (!this._voiceSearchHelper) {
          this._voiceSearchHelper = createVoiceSearchHelper({
            searchAsYouSpeak: searchAsYouSpeak,
            language: language,
            onQueryChange: function onQueryChange(query) {
              return _this._refine(query);
            },
            onStateChange: function onStateChange() {
              renderFn(connectVoiceSearch_objectSpread(connectVoiceSearch_objectSpread({}, _this.getWidgetRenderState(renderOptions)), {}, {
                instantSearchInstance: instantSearchInstance
              }), false);
            }
          });
        }

        var _voiceSearchHelper = this._voiceSearchHelper,
            isBrowserSupported = _voiceSearchHelper.isBrowserSupported,
            isListening = _voiceSearchHelper.isListening,
            startListening = _voiceSearchHelper.startListening,
            stopListening = _voiceSearchHelper.stopListening,
            getState = _voiceSearchHelper.getState;
        return {
          isBrowserSupported: isBrowserSupported(),
          isListening: isListening(),
          toggleListening: function toggleListening() {
            if (!isBrowserSupported()) {
              return;
            }

            if (isListening()) {
              stopListening();
            } else {
              startListening();
            }
          },
          voiceListeningState: getState(),
          widgetParams: widgetParams
        };
      },
      dispose: function dispose(_ref) {
        var state = _ref.state;

        this._voiceSearchHelper.dispose();

        unmountFn();
        var newState = state;

        if (typeof additionalQueryParameters === 'function') {
          var additional = additionalQueryParameters({
            query: ''
          });
          var toReset = additional ? Object.keys(additional).reduce(function (acc, current) {
            // @ts-ignore search parameters is typed as readonly in v4
            acc[current] = undefined;
            return acc;
          }, {}) : {};
          newState = state.setQueryParameters(connectVoiceSearch_objectSpread({
            // @ts-ignore (queryLanguages is not added to algoliasearch v3)
            queryLanguages: undefined,
            ignorePlurals: undefined,
            removeStopWords: undefined,
            optionalWords: undefined
          }, toReset));
        }

        return newState.setQueryParameter('query', undefined);
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref2) {
        var searchParameters = _ref2.searchParameters;
        var query = searchParameters.query || '';

        if (!query) {
          return uiState;
        }

        return connectVoiceSearch_objectSpread(connectVoiceSearch_objectSpread({}, uiState), {}, {
          query: query
        });
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref3) {
        var uiState = _ref3.uiState;
        return searchParameters.setQueryParameter('query', uiState.query || '');
      }
    };
  };
};

/* harmony default export */ var voice_search_connectVoiceSearch = (connectVoiceSearch_connectVoiceSearch);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/createConcurrentSafePromise.js
var createConcurrentSafePromise = __webpack_require__(312);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/debounce.js
var debounce = __webpack_require__(313);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/answers/connectAnswers.js
function connectAnswers_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectAnswers_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectAnswers_ownKeys(Object(source), true).forEach(function (key) {
        connectAnswers_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectAnswers_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectAnswers_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}



function hasFindAnswersMethod(answersIndex) {
  return typeof answersIndex.findAnswers === 'function';
}

var connectAnswers_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'answers',
  connector: true
});

var connectAnswers_connectAnswers = function connectAnswers(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectAnswers_withUsage());
  return function (widgetParams) {
    var _ref = widgetParams || {},
        queryLanguages = _ref.queryLanguages,
        attributesForPrediction = _ref.attributesForPrediction,
        _ref$nbHits = _ref.nbHits,
        nbHits = _ref$nbHits === void 0 ? 1 : _ref$nbHits,
        _ref$renderDebounceTi = _ref.renderDebounceTime,
        renderDebounceTime = _ref$renderDebounceTi === void 0 ? 100 : _ref$renderDebounceTi,
        _ref$searchDebounceTi = _ref.searchDebounceTime,
        searchDebounceTime = _ref$searchDebounceTi === void 0 ? 100 : _ref$searchDebounceTi,
        _ref$escapeHTML = _ref.escapeHTML,
        escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML,
        _ref$extraParameters = _ref.extraParameters,
        extraParameters = _ref$extraParameters === void 0 ? {} : _ref$extraParameters; // @ts-expect-error checking for the wrong value


    if (!queryLanguages || queryLanguages.length === 0) {
      throw new Error(connectAnswers_withUsage('The `queryLanguages` expects an array of strings.'));
    }

    var runConcurrentSafePromise = Object(createConcurrentSafePromise["a" /* createConcurrentSafePromise */])();
    var lastHits = [];
    var isLoading = false;
    var debouncedRender = Object(debounce["a" /* debounce */])(renderFn, renderDebounceTime); // this does not directly use DebouncedFunction<findAnswers>, since then the generic will disappear

    var debouncedRefine;
    return {
      $$type: 'ais.answers',
      init: function init(initOptions) {
        var state = initOptions.state,
            instantSearchInstance = initOptions.instantSearchInstance;
        var answersIndex = instantSearchInstance.client.initIndex(state.index);

        if (!hasFindAnswersMethod(answersIndex)) {
          throw new Error(connectAnswers_withUsage('`algoliasearch` >= 4.8.0 required.'));
        }

        debouncedRefine = Object(debounce["a" /* debounce */])(answersIndex.findAnswers, searchDebounceTime);
        renderFn(connectAnswers_objectSpread(connectAnswers_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: initOptions.instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var _this = this;

        var query = renderOptions.state.query;

        if (!query) {
          // renders nothing with empty query
          lastHits = [];
          isLoading = false;
          renderFn(connectAnswers_objectSpread(connectAnswers_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
            instantSearchInstance: renderOptions.instantSearchInstance
          }), false);
          return;
        } // render the loader


        lastHits = [];
        isLoading = true;
        renderFn(connectAnswers_objectSpread(connectAnswers_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: renderOptions.instantSearchInstance
        }), false); // call /answers API

        runConcurrentSafePromise(debouncedRefine(query, queryLanguages, connectAnswers_objectSpread(connectAnswers_objectSpread({}, extraParameters), {}, {
          nbHits: nbHits,
          attributesForPrediction: attributesForPrediction
        }))).then(function (result) {
          if (!result) {
            // It's undefined when it's debounced.
            return;
          }

          if (escapeHTML && result.hits.length > 0) {
            result.hits = Object(escape_highlight["d" /* escapeHits */])(result.hits);
          }

          var hitsWithAbsolutePosition = Object(hits_absolute_position["a" /* addAbsolutePosition */])(result.hits, 0, nbHits);
          var hitsWithAbsolutePositionAndQueryID = Object(hits_query_id["a" /* addQueryID */])(hitsWithAbsolutePosition, result.queryID);
          lastHits = hitsWithAbsolutePositionAndQueryID;
          isLoading = false;
          debouncedRender(connectAnswers_objectSpread(connectAnswers_objectSpread({}, _this.getWidgetRenderState(renderOptions)), {}, {
            instantSearchInstance: renderOptions.instantSearchInstance
          }), false);
        });
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectAnswers_objectSpread(connectAnswers_objectSpread({}, renderState), {}, {
          answers: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState() {
        return {
          hits: lastHits,
          isLoading: isLoading,
          widgetParams: widgetParams
        };
      },
      dispose: function dispose(_ref2) {
        var state = _ref2.state;
        unmountFn();
        return state;
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(state) {
        return state;
      }
    };
  };
};

/* harmony default export */ var answers_connectAnswers = (connectAnswers_connectAnswers);
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/relevant-sort/connectRelevantSort.js
function connectRelevantSort_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectRelevantSort_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectRelevantSort_ownKeys(Object(source), true).forEach(function (key) {
        connectRelevantSort_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectRelevantSort_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectRelevantSort_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}



var connectRelevantSort_connectRelevantSort = function connectRelevantSort() {
  var renderFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop["a" /* default */];
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  return function (widgetParams) {
    var connectorState = {};
    return {
      $$type: 'ais.relevantSort',
      init: function init(initOptions) {
        var instantSearchInstance = initOptions.instantSearchInstance;
        renderFn(connectRelevantSort_objectSpread(connectRelevantSort_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var instantSearchInstance = renderOptions.instantSearchInstance;
        renderFn(connectRelevantSort_objectSpread(connectRelevantSort_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
          instantSearchInstance: instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref) {
        var state = _ref.state;
        unmountFn();
        return state.setQueryParameter('relevancyStrictness', undefined);
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectRelevantSort_objectSpread(connectRelevantSort_objectSpread({}, renderState), {}, {
          relevantSort: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref2) {
        var results = _ref2.results,
            helper = _ref2.helper;

        if (!connectorState.refine) {
          connectorState.refine = function (relevancyStrictness) {
            helper.setQueryParameter('relevancyStrictness', relevancyStrictness).search();
          };
        }

        var _ref3 = results || {},
            appliedRelevancyStrictness = _ref3.appliedRelevancyStrictness;

        var isVirtualReplica = appliedRelevancyStrictness !== undefined;
        return {
          isRelevantSorted: typeof appliedRelevancyStrictness !== 'undefined' && appliedRelevancyStrictness > 0,
          isVirtualReplica: isVirtualReplica,
          canRefine: isVirtualReplica,
          refine: connectorState.refine,
          widgetParams: widgetParams
        };
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(state, _ref4) {
        var _uiState$relevantSort;

        var uiState = _ref4.uiState;
        return state.setQueryParameter('relevancyStrictness', (_uiState$relevantSort = uiState.relevantSort) !== null && _uiState$relevantSort !== void 0 ? _uiState$relevantSort : state.relevancyStrictness);
      },
      getWidgetUiState: function getWidgetUiState(uiState, _ref5) {
        var searchParameters = _ref5.searchParameters;
        return connectRelevantSort_objectSpread(connectRelevantSort_objectSpread({}, uiState), {}, {
          relevantSort: searchParameters.relevancyStrictness || uiState.relevantSort
        });
      }
    };
  };
};

/* harmony default export */ var relevant_sort_connectRelevantSort = (connectRelevantSort_connectRelevantSort);
// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
var esnext_map_delete_all_js_ = __webpack_require__(196);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
var esnext_map_every_js_ = __webpack_require__(197);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
var esnext_map_filter_js_ = __webpack_require__(198);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
var esnext_map_find_js_ = __webpack_require__(199);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
var esnext_map_find_key_js_ = __webpack_require__(200);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
var esnext_map_includes_js_ = __webpack_require__(201);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
var esnext_map_key_of_js_ = __webpack_require__(202);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
var esnext_map_map_keys_js_ = __webpack_require__(203);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
var esnext_map_map_values_js_ = __webpack_require__(204);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
var esnext_map_merge_js_ = __webpack_require__(205);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
var esnext_map_reduce_js_ = __webpack_require__(206);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
var esnext_map_some_js_ = __webpack_require__(207);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
var esnext_map_update_js_ = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/getWidgetAttribute.js
var getWidgetAttribute = __webpack_require__(314);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/dynamic-widgets/connectDynamicWidgets.js














function connectDynamicWidgets_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function connectDynamicWidgets_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      connectDynamicWidgets_ownKeys(Object(source), true).forEach(function (key) {
        connectDynamicWidgets_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      connectDynamicWidgets_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function connectDynamicWidgets_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}


var connectDynamicWidgets_withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'dynamic-widgets',
  connector: true
});
var MAX_WILDCARD_FACETS = 20;

var connectDynamicWidgets_connectDynamicWidgets = function connectDynamicWidgets(renderFn) {
  var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop["a" /* default */];
  Object(checkRendering["a" /* default */])(renderFn, connectDynamicWidgets_withUsage());
  return function (widgetParams) {
    var widgets = widgetParams.widgets,
        _widgetParams$maxValu = widgetParams.maxValuesPerFacet,
        maxValuesPerFacet = _widgetParams$maxValu === void 0 ? 20 : _widgetParams$maxValu,
        _widgetParams$facets = widgetParams.facets,
        facets = _widgetParams$facets === void 0 ? ['*'] : _widgetParams$facets,
        _widgetParams$transfo = widgetParams.transformItems,
        transformItems = _widgetParams$transfo === void 0 ? function (items) {
      return items;
    } : _widgetParams$transfo,
        fallbackWidget = widgetParams.fallbackWidget;

    if (!(widgets && Array.isArray(widgets) && widgets.every(function (widget) {
      return _typeof(widget) === 'object';
    }))) {
      throw new Error(connectDynamicWidgets_withUsage('The `widgets` option expects an array of widgets.'));
    }

    if (!(Array.isArray(facets) && facets.length <= 1 && (facets[0] === '*' || facets[0] === undefined))) {
      throw new Error(connectDynamicWidgets_withUsage("The `facets` option only accepts [] or [\"*\"], you passed ".concat(JSON.stringify(facets))));
    }

    var localWidgets = new Map();
    return {
      $$type: 'ais.dynamicWidgets',
      init: function init(initOptions) {
        widgets.forEach(function (widget) {
          var attribute = Object(getWidgetAttribute["a" /* getWidgetAttribute */])(widget, initOptions);
          localWidgets.set(attribute, {
            widget: widget,
            isMounted: false
          });
        });
        renderFn(connectDynamicWidgets_objectSpread(connectDynamicWidgets_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
          instantSearchInstance: initOptions.instantSearchInstance
        }), true);
      },
      render: function render(renderOptions) {
        var parent = renderOptions.parent;
        var renderState = this.getWidgetRenderState(renderOptions);
        var widgetsToUnmount = [];
        var widgetsToMount = [];

        if (fallbackWidget) {
          renderState.attributesToRender.forEach(function (attribute) {
            if (!localWidgets.has(attribute)) {
              var widget = fallbackWidget({
                attribute: attribute
              });
              localWidgets.set(attribute, {
                widget: widget,
                isMounted: false
              });
            }
          });
        }

        localWidgets.forEach(function (_ref, attribute) {
          var widget = _ref.widget,
              isMounted = _ref.isMounted;
          var shouldMount = renderState.attributesToRender.indexOf(attribute) > -1;

          if (!isMounted && shouldMount) {
            widgetsToMount.push(widget);
            localWidgets.set(attribute, {
              widget: widget,
              isMounted: true
            });
          } else if (isMounted && !shouldMount) {
            widgetsToUnmount.push(widget);
            localWidgets.set(attribute, {
              widget: widget,
              isMounted: false
            });
          }
        });
        parent.addWidgets(widgetsToMount); // make sure this only happens after the regular render, otherwise it
        // happens too quick, since render is "deferred" for the next microtask,
        // so this needs to be a whole task later

        setTimeout(function () {
          return parent.removeWidgets(widgetsToUnmount);
        }, 0);
        renderFn(connectDynamicWidgets_objectSpread(connectDynamicWidgets_objectSpread({}, renderState), {}, {
          instantSearchInstance: renderOptions.instantSearchInstance
        }), false);
      },
      dispose: function dispose(_ref2) {
        var parent = _ref2.parent;
        var toRemove = [];
        localWidgets.forEach(function (_ref3) {
          var widget = _ref3.widget,
              isMounted = _ref3.isMounted;

          if (isMounted) {
            toRemove.push(widget);
          }
        });
        parent.removeWidgets(toRemove);
        unmountFn();
      },
      getWidgetSearchParameters: function getWidgetSearchParameters(state) {
        // broadening the scope of facets to avoid conflict between never and *
        return facets.reduce(function (acc, curr) {
          return acc.addFacet(curr);
        }, state.setQueryParameters({
          maxValuesPerFacet: Math.max(maxValuesPerFacet || 0, state.maxValuesPerFacet || 0)
        }));
      },
      getRenderState: function getRenderState(renderState, renderOptions) {
        return connectDynamicWidgets_objectSpread(connectDynamicWidgets_objectSpread({}, renderState), {}, {
          dynamicWidgets: this.getWidgetRenderState(renderOptions)
        });
      },
      getWidgetRenderState: function getWidgetRenderState(_ref4) {
        var _results$renderingCon, _results$renderingCon2, _results$renderingCon3, _results$renderingCon4;

        var results = _ref4.results,
            state = _ref4.state;

        if (!results) {
          return {
            attributesToRender: [],
            widgetParams: widgetParams
          };
        }

        var attributesToRender = transformItems((_results$renderingCon = (_results$renderingCon2 = results.renderingContent) === null || _results$renderingCon2 === void 0 ? void 0 : (_results$renderingCon3 = _results$renderingCon2.facetOrdering) === null || _results$renderingCon3 === void 0 ? void 0 : (_results$renderingCon4 = _results$renderingCon3.facets) === null || _results$renderingCon4 === void 0 ? void 0 : _results$renderingCon4.order) !== null && _results$renderingCon !== void 0 ? _results$renderingCon : [], {
          results: results
        });

        if (!Array.isArray(attributesToRender)) {
          throw new Error(connectDynamicWidgets_withUsage('The `transformItems` option expects a function that returns an Array.'));
        }

         false ? undefined : void 0;
         false ? undefined : void 0;
        return {
          attributesToRender: attributesToRender,
          widgetParams: widgetParams
        };
      }
    };
  };
};

/* harmony default export */ var dynamic_widgets_connectDynamicWidgets = (connectDynamicWidgets_connectDynamicWidgets);
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/logger.js
var logger = __webpack_require__(274);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/connectors/index.js































/** @deprecated use connectDynamicWidgets */

var EXPERIMENTAL_connectDynamicWidgets = Object(logger["a" /* deprecate */])(dynamic_widgets_connectDynamicWidgets, 'use connectDynamicWidgets');

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "algoliasearch-helper"
var external_algoliasearch_helper_ = __webpack_require__(209);
var external_algoliasearch_helper_default = /*#__PURE__*/__webpack_require__.n(external_algoliasearch_helper_);

// EXTERNAL MODULE: external "@algolia/events"
var events_ = __webpack_require__(237);
var events_default = /*#__PURE__*/__webpack_require__.n(events_);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/widgets/index/index.js
var index = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/version.js
var version = __webpack_require__(321);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/helpers/highlight.js
var helpers_highlight = __webpack_require__(365);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/helpers/reverseHighlight.js
var helpers_reverseHighlight = __webpack_require__(366);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/helpers/snippet.js
var helpers_snippet = __webpack_require__(367);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/helpers/reverseSnippet.js
var helpers_reverseSnippet = __webpack_require__(368);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/helpers/insights.js
var helpers_insights = __webpack_require__(369);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/createHelpers.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


function hoganHelpers(_ref) {
  var numberLocale = _ref.numberLocale;
  return {
    formatNumber: function formatNumber(value, render) {
      return Number(render(value)).toLocaleString(numberLocale);
    },
    highlight: function highlight(options, render) {
      try {
        var highlightOptions = JSON.parse(options);
        return render(Object(helpers_highlight["a" /* default */])(_objectSpread(_objectSpread({}, highlightOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error("\nThe highlight helper expects a JSON object of the format:\n{ \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
      }
    },
    reverseHighlight: function reverseHighlight(options, render) {
      try {
        var reverseHighlightOptions = JSON.parse(options);
        return render(Object(helpers_reverseHighlight["a" /* default */])(_objectSpread(_objectSpread({}, reverseHighlightOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error("\n  The reverseHighlight helper expects a JSON object of the format:\n  { \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
      }
    },
    snippet: function snippet(options, render) {
      try {
        var snippetOptions = JSON.parse(options);
        return render(Object(helpers_snippet["a" /* default */])(_objectSpread(_objectSpread({}, snippetOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error("\nThe snippet helper expects a JSON object of the format:\n{ \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
      }
    },
    reverseSnippet: function reverseSnippet(options, render) {
      try {
        var reverseSnippetOptions = JSON.parse(options);
        return render(Object(helpers_reverseSnippet["a" /* default */])(_objectSpread(_objectSpread({}, reverseSnippetOptions), {}, {
          hit: this
        })));
      } catch (error) {
        throw new Error("\n  The reverseSnippet helper expects a JSON object of the format:\n  { \"attribute\": \"name\", \"highlightedTagName\": \"mark\" }");
      }
    },
    insights: function insights(options, render) {
      try {
        var _JSON$parse = JSON.parse(options),
            method = _JSON$parse.method,
            payload = _JSON$parse.payload;

        return render(Object(helpers_insights["a" /* default */])(method, _objectSpread({
          objectIDs: [this.objectID]
        }, payload)));
      } catch (error) {
        throw new Error("\nThe insights helper expects a JSON object of the format:\n{ \"method\": \"method-name\", \"payload\": { \"eventName\": \"name of the event\" } }");
      }
    }
  };
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/documentation.js
var documentation = __webpack_require__(279);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/defer.js
var defer = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/noop.js
var noop = __webpack_require__(280);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/stateMappings/simple.js
function simple_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function simple_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      simple_ownKeys(Object(source), true).forEach(function (key) {
        simple_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      simple_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function simple_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function getIndexStateWithoutConfigure(uiState) {
  var configure = uiState.configure,
      trackedUiState = _objectWithoutProperties(uiState, ["configure"]);

  return trackedUiState;
} // technically a URL could contain any key, since users provide it,
// which is why the input to this function is UiState, not something
// which excludes "configure" as this function does.


function simpleStateMapping() {
  return {
    stateToRoute: function stateToRoute(uiState) {
      return Object.keys(uiState).reduce(function (state, indexId) {
        return simple_objectSpread(simple_objectSpread({}, state), {}, simple_defineProperty({}, indexId, getIndexStateWithoutConfigure(uiState[indexId])));
      }, {});
    },
    routeToState: function routeToState() {
      var routeState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.keys(routeState).reduce(function (state, indexId) {
        return simple_objectSpread(simple_objectSpread({}, state), {}, simple_defineProperty({}, indexId, getIndexStateWithoutConfigure(routeState[indexId])));
      }, {});
    }
  };
}
// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(238);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);

// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/safelyRunOnBrowser.js
var safelyRunOnBrowser = __webpack_require__(310);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/routers/history.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function history_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




var setWindowTitle = function setWindowTitle(title) {
  if (title) {
    // This function is only executed on browsers so we can disable this check.
    // eslint-disable-next-line no-restricted-globals
    window.document.title = title;
  }
};

var history_BrowserHistory = /*#__PURE__*/function () {
  /**
   * Initializes a new storage provider that syncs the search state to the URL
   * using web APIs (`window.location.pushState` and `onpopstate` event).
   */
  function BrowserHistory(_ref) {
    var _this = this;

    var windowTitle = _ref.windowTitle,
        _ref$writeDelay = _ref.writeDelay,
        writeDelay = _ref$writeDelay === void 0 ? 400 : _ref$writeDelay,
        createURL = _ref.createURL,
        parseURL = _ref.parseURL,
        getLocation = _ref.getLocation;

    _classCallCheck(this, BrowserHistory);

    history_defineProperty(this, "windowTitle", void 0);

    history_defineProperty(this, "writeDelay", void 0);

    history_defineProperty(this, "_createURL", void 0);

    history_defineProperty(this, "parseURL", void 0);

    history_defineProperty(this, "getLocation", void 0);

    history_defineProperty(this, "writeTimer", void 0);

    history_defineProperty(this, "inPopState", false);

    history_defineProperty(this, "isDisposed", false);

    history_defineProperty(this, "latestAcknowledgedHistory", 0);

    this.windowTitle = windowTitle;
    this.writeTimer = undefined;
    this.writeDelay = writeDelay;
    this._createURL = createURL;
    this.parseURL = parseURL;
    this.getLocation = getLocation;
    Object(safelyRunOnBrowser["a" /* safelyRunOnBrowser */])(function (_ref2) {
      var window = _ref2.window;

      var title = _this.windowTitle && _this.windowTitle(_this.read());

      setWindowTitle(title);
      _this.latestAcknowledgedHistory = window.history.length;
    });
  }
  /**
   * Reads the URL and returns a syncable UI search state.
   */


  _createClass(BrowserHistory, [{
    key: "read",
    value: function read() {
      return this.parseURL({
        qsModule: external_qs_default.a,
        location: this.getLocation()
      });
    }
    /**
     * Pushes a search state into the URL.
     */

  }, {
    key: "write",
    value: function write(routeState) {
      var _this2 = this;

      Object(safelyRunOnBrowser["a" /* safelyRunOnBrowser */])(function (_ref3) {
        var window = _ref3.window;

        var url = _this2.createURL(routeState);

        var title = _this2.windowTitle && _this2.windowTitle(routeState);

        if (_this2.writeTimer) {
          clearTimeout(_this2.writeTimer);
        }

        _this2.writeTimer = setTimeout(function () {
          setWindowTitle(title);

          if (_this2.shouldWrite(url)) {
            window.history.pushState(routeState, title || '', url);
            _this2.latestAcknowledgedHistory = window.history.length;
          }

          _this2.inPopState = false;
          _this2.writeTimer = undefined;
        }, _this2.writeDelay);
      });
    }
    /**
     * Sets a callback on the `onpopstate` event of the history API of the current page.
     * It enables the URL sync to keep track of the changes.
     */

  }, {
    key: "onUpdate",
    value: function onUpdate(callback) {
      var _this3 = this;

      this._onPopState = function (event) {
        if (_this3.writeTimer) {
          clearTimeout(_this3.writeTimer);
          _this3.writeTimer = undefined;
        }

        _this3.inPopState = true;
        var routeState = event.state; // At initial load, the state is read from the URL without update.
        // Therefore the state object is not available.
        // In this case, we fallback and read the URL.

        if (!routeState) {
          callback(_this3.read());
        } else {
          callback(routeState);
        }
      };

      Object(safelyRunOnBrowser["a" /* safelyRunOnBrowser */])(function (_ref4) {
        var window = _ref4.window;
        window.addEventListener('popstate', _this3._onPopState);
      });
    }
    /**
     * Creates a complete URL from a given syncable UI state.
     *
     * It always generates the full URL, not a relative one.
     * This allows to handle cases like using a <base href>.
     * See: https://github.com/algolia/instantsearch.js/issues/790
     */

  }, {
    key: "createURL",
    value: function createURL(routeState) {
      return this._createURL({
        qsModule: external_qs_default.a,
        routeState: routeState,
        location: this.getLocation()
      });
    }
    /**
     * Removes the event listener and cleans up the URL.
     */

  }, {
    key: "dispose",
    value: function dispose() {
      var _this4 = this;

      this.isDisposed = true;
      Object(safelyRunOnBrowser["a" /* safelyRunOnBrowser */])(function (_ref5) {
        var window = _ref5.window;

        if (_this4._onPopState) {
          window.removeEventListener('popstate', _this4._onPopState);
        }
      });

      if (this.writeTimer) {
        clearTimeout(this.writeTimer);
      }

      this.write({});
    }
  }, {
    key: "shouldWrite",
    value: function shouldWrite(url) {
      var _this5 = this;

      return Object(safelyRunOnBrowser["a" /* safelyRunOnBrowser */])(function (_ref6) {
        var window = _ref6.window; // We do want to `pushState` if:
        // - the router is not disposed, IS.js needs to update the URL
        // OR
        // - the last write was from InstantSearch.js
        // (unlike a SPA, where it would have last written)

        var lastPushWasByISAfterDispose = !(_this5.isDisposed && _this5.latestAcknowledgedHistory !== window.history.length);
        return (// When the last state change was through popstate, the IS.js state changes,
          // but that should not write the URL.
          !_this5.inPopState && // When the previous pushState after dispose was by IS.js, we want to write the URL.
          lastPushWasByISAfterDispose && // When the URL is the same as the current one, we do not want to write it.
          url !== window.location.href
        );
      });
    }
  }]);

  return BrowserHistory;
}();

function historyRouter() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref7$createURL = _ref7.createURL,
      createURL = _ref7$createURL === void 0 ? function (_ref8) {
    var qsModule = _ref8.qsModule,
        routeState = _ref8.routeState,
        location = _ref8.location;
    var protocol = location.protocol,
        hostname = location.hostname,
        _location$port = location.port,
        port = _location$port === void 0 ? '' : _location$port,
        pathname = location.pathname,
        hash = location.hash;
    var queryString = qsModule.stringify(routeState);
    var portWithPrefix = port === '' ? '' : ":".concat(port); // IE <= 11 has no proper `location.origin` so we cannot rely on it.
    // IE <= 11 has no proper `location.origin` so we cannot rely on it.

    if (!queryString) {
      return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
    }

    return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
  } : _ref7$createURL,
      _ref7$parseURL = _ref7.parseURL,
      parseURL = _ref7$parseURL === void 0 ? function (_ref9) {
    var qsModule = _ref9.qsModule,
        location = _ref9.location; // `qs` by default converts arrays with more than 20 items to an object.
    // We want to avoid this because the data structure manipulated can therefore vary.
    // Setting the limit to `100` seems a good number because the engine's default is 100
    // (it can go up to 1000 but it is very unlikely to select more than 100 items in the UI).
    //
    // Using an `arrayLimit` of `n` allows `n + 1` items.
    //
    // See:
    //   - https://github.com/ljharb/qs#parsing-arrays
    //   - https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/

    return qsModule.parse(location.search.slice(1), {
      arrayLimit: 99
    });
  } : _ref7$parseURL,
      _ref7$writeDelay = _ref7.writeDelay,
      writeDelay = _ref7$writeDelay === void 0 ? 400 : _ref7$writeDelay,
      windowTitle = _ref7.windowTitle,
      _ref7$getLocation = _ref7.getLocation,
      getLocation = _ref7$getLocation === void 0 ? function () {
    return Object(safelyRunOnBrowser["a" /* safelyRunOnBrowser */])(function (_ref10) {
      var window = _ref10.window;
      return window.location;
    }, {
      fallback: function fallback() {
        throw new Error('You need to provide `getLocation` to the `history` router in environments where `window` does not exist.');
      }
    });
  } : _ref7$getLocation;

  return new history_BrowserHistory({
    createURL: createURL,
    parseURL: parseURL,
    writeDelay: writeDelay,
    windowTitle: windowTitle,
    getLocation: getLocation
  });
}
// EXTERNAL MODULE: ./node_modules/instantsearch.js/es/lib/utils/isEqual.js
var isEqual = __webpack_require__(306);

// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/middlewares/createRouterMiddleware.js
function createRouterMiddleware_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function createRouterMiddleware_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      createRouterMiddleware_ownKeys(Object(source), true).forEach(function (key) {
        createRouterMiddleware_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      createRouterMiddleware_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function createRouterMiddleware_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




var createRouterMiddleware_createRouterMiddleware = function createRouterMiddleware() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$router = props.router,
      router = _props$router === void 0 ? historyRouter() : _props$router,
      _props$stateMapping = props.stateMapping,
      stateMapping = _props$stateMapping === void 0 ? simpleStateMapping() : _props$stateMapping;
  return function (_ref) {
    var instantSearchInstance = _ref.instantSearchInstance;

    function topLevelCreateURL(nextState) {
      var uiState = Object.keys(nextState).reduce(function (acc, indexId) {
        return createRouterMiddleware_objectSpread(createRouterMiddleware_objectSpread({}, acc), {}, createRouterMiddleware_defineProperty({}, indexId, nextState[indexId]));
      }, instantSearchInstance.mainIndex.getWidgetUiState({}));
      var route = stateMapping.stateToRoute(uiState);
      return router.createURL(route);
    } // casting to UiState here to keep createURL unaware of custom UiState
    // (as long as it's an object, it's ok)


    instantSearchInstance._createURL = topLevelCreateURL;
    var lastRouteState = undefined;
    var initialUiState = instantSearchInstance._initialUiState;
    return {
      onStateChange: function onStateChange(_ref2) {
        var uiState = _ref2.uiState;
        var routeState = stateMapping.stateToRoute(uiState);

        if (lastRouteState === undefined || !Object(isEqual["a" /* default */])(lastRouteState, routeState)) {
          router.write(routeState);
          lastRouteState = routeState;
        }
      },
      subscribe: function subscribe() {
        instantSearchInstance._initialUiState = createRouterMiddleware_objectSpread(createRouterMiddleware_objectSpread({}, initialUiState), stateMapping.routeToState(router.read()));
        router.onUpdate(function (route) {
          instantSearchInstance.setUiState(stateMapping.routeToState(route));
        });
      },
      unsubscribe: function unsubscribe() {
        router.dispose();
      }
    };
  };
};
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/middlewares/createMetadataMiddleware.js


function extractPayload(widgets, instantSearchInstance, payload) {
  var parent = instantSearchInstance.mainIndex;
  var initOptions = {
    instantSearchInstance: instantSearchInstance,
    parent: parent,
    scopedResults: [],
    state: parent.getHelper().state,
    helper: parent.getHelper(),
    createURL: parent.createURL,
    uiState: instantSearchInstance._initialUiState,
    renderState: instantSearchInstance.renderState,
    templatesConfig: instantSearchInstance.templatesConfig,
    searchMetadata: {
      isSearchStalled: instantSearchInstance._isSearchStalled
    }
  };
  widgets.forEach(function (widget) {
    var widgetParams = {};

    if (widget.getWidgetRenderState) {
      var renderState = widget.getWidgetRenderState(initOptions);

      if (renderState && renderState.widgetParams) {
        // casting, as we just earlier checked widgetParams exists, and thus an object
        widgetParams = renderState.widgetParams;
      }
    } // since we destructure in all widgets, the parameters with defaults are set to "undefined"


    var params = Object.keys(widgetParams).filter(function (key) {
      return widgetParams[key] !== undefined;
    });
    payload.widgets.push({
      type: widget.$$type,
      widgetType: widget.$$widgetType,
      params: params
    });

    if (widget.$$type === 'ais.index') {
      extractPayload(widget.getWidgets(), instantSearchInstance, payload);
    }
  });
}

function isMetadataEnabled() {
  return Object(safelyRunOnBrowser["a" /* safelyRunOnBrowser */])(function (_ref) {
    var _window$navigator, _window$navigator$use;

    var window = _ref.window;
    return ((_window$navigator = window.navigator) === null || _window$navigator === void 0 ? void 0 : (_window$navigator$use = _window$navigator.userAgent) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.indexOf('Algolia Crawler')) > -1;
  }, {
    fallback: function fallback() {
      return false;
    }
  });
}
/**
 * Exposes the metadata of mounted widgets in a custom
 * `<meta name="instantsearch:widgets" />` tag. The metadata per widget is:
 * - applied parameters
 * - widget name
 * - connector name
 */

function createMetadataMiddleware() {
  return function (_ref2) {
    var instantSearchInstance = _ref2.instantSearchInstance;
    var payload = {
      widgets: []
    };
    var payloadContainer = document.createElement('meta');
    var refNode = document.querySelector('head');
    payloadContainer.name = 'instantsearch:widgets';
    return {
      onStateChange: function onStateChange() {},
      subscribe: function subscribe() {
        // using setTimeout here to delay extraction until widgets have been added in a tick (e.g. Vue)
        setTimeout(function () {
          var client = instantSearchInstance.client;
          payload.ua = client.transporter && client.transporter.userAgent ? client.transporter.userAgent.value : client._ua;
          extractPayload(instantSearchInstance.mainIndex.getWidgets(), instantSearchInstance, payload);
          payloadContainer.content = JSON.stringify(payload);
          refNode.appendChild(payloadContainer);
        }, 0);
      },
      unsubscribe: function unsubscribe() {
        payloadContainer.remove();
      }
    };
  };
}
// CONCATENATED MODULE: ./node_modules/instantsearch.js/es/lib/InstantSearch.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function InstantSearch_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function InstantSearch_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      InstantSearch_ownKeys(Object(source), true).forEach(function (key) {
        InstantSearch_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      InstantSearch_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function InstantSearch_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function InstantSearch_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function InstantSearch_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) InstantSearch_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) InstantSearch_defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function InstantSearch_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}









var withUsage = Object(documentation["b" /* createDocumentationMessageGenerator */])({
  name: 'instantsearch'
});

function defaultCreateURL() {
  return '#';
} // this purposely breaks typescript's type inference to ensure it's not used
// as it's used for a default parameter for example
// source: https://github.com/Microsoft/TypeScript/issues/14829#issuecomment-504042546

/**
 * The actual implementation of the InstantSearch. This is
 * created using the `instantsearch` factory function.
 * It emits the 'render' event every time a search is done
 */


var InstantSearch_InstantSearch = /*#__PURE__*/function (_EventEmitter) {
  _inherits(InstantSearch, _EventEmitter);

  var _super = _createSuper(InstantSearch);

  function InstantSearch(options) {
    var _this;

    InstantSearch_classCallCheck(this, InstantSearch);

    _this = _super.call(this);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "client", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "indexName", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "insightsClient", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "onStateChange", null);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "helper", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "mainHelper", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "mainIndex", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "started", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "templatesConfig", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "renderState", {});

    InstantSearch_defineProperty(_assertThisInitialized(_this), "_stalledSearchDelay", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "_searchStalledTimer", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "_isSearchStalled", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "_initialUiState", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "_initialResults", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "_createURL", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "_searchFunction", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "_mainHelperSearch", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "middleware", []);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "sendEventToInsights", void 0);

    InstantSearch_defineProperty(_assertThisInitialized(_this), "scheduleSearch", Object(defer["a" /* default */])(function () {
      if (_this.started) {
        _this.mainHelper.search();
      }
    }));

    InstantSearch_defineProperty(_assertThisInitialized(_this), "scheduleRender", Object(defer["a" /* default */])(function () {
      if (!_this.mainHelper.hasPendingRequests()) {
        clearTimeout(_this._searchStalledTimer);
        _this._searchStalledTimer = null;
        _this._isSearchStalled = false;
      }

      _this.mainIndex.render({
        instantSearchInstance: _assertThisInitialized(_this)
      });

      _this.emit('render');
    }));

    InstantSearch_defineProperty(_assertThisInitialized(_this), "onInternalStateChange", Object(defer["a" /* default */])(function () {
      var nextUiState = _this.mainIndex.getWidgetUiState({});

      _this.middleware.forEach(function (_ref) {
        var instance = _ref.instance;
        instance.onStateChange({
          uiState: nextUiState
        });
      });
    }));

    var _options$indexName = options.indexName,
        indexName = _options$indexName === void 0 ? null : _options$indexName,
        numberLocale = options.numberLocale,
        _options$initialUiSta = options.initialUiState,
        initialUiState = _options$initialUiSta === void 0 ? {} : _options$initialUiSta,
        _options$routing = options.routing,
        routing = _options$routing === void 0 ? null : _options$routing,
        searchFunction = options.searchFunction,
        _options$stalledSearc = options.stalledSearchDelay,
        stalledSearchDelay = _options$stalledSearc === void 0 ? 200 : _options$stalledSearc,
        _options$searchClient = options.searchClient,
        searchClient = _options$searchClient === void 0 ? null : _options$searchClient,
        _options$insightsClie = options.insightsClient,
        insightsClient = _options$insightsClie === void 0 ? null : _options$insightsClie,
        _options$onStateChang = options.onStateChange,
        onStateChange = _options$onStateChang === void 0 ? null : _options$onStateChang;

    if (indexName === null) {
      throw new Error(withUsage('The `indexName` option is required.'));
    }

    if (searchClient === null) {
      throw new Error(withUsage('The `searchClient` option is required.'));
    }

    if (typeof searchClient.search !== 'function') {
      throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
    }

    if (typeof searchClient.addAlgoliaAgent === 'function') {
      searchClient.addAlgoliaAgent("instantsearch.js (".concat(version["a" /* default */], ")"));
    }

     false ? undefined : void 0;

    if (insightsClient && typeof insightsClient !== 'function') {
      throw new Error(withUsage('The `insightsClient` option should be a function.'));
    }

     false ? undefined : void 0;
    _this.client = searchClient;
    _this.insightsClient = insightsClient;
    _this.indexName = indexName;
    _this.helper = null;
    _this.mainHelper = null;
    _this.mainIndex = Object(index["default"])({
      indexName: indexName
    });
    _this.onStateChange = onStateChange;
    _this.started = false;
    _this.templatesConfig = {
      helpers: hoganHelpers({
        numberLocale: numberLocale
      }),
      compileOptions: {}
    };
    _this._stalledSearchDelay = stalledSearchDelay;
    _this._searchStalledTimer = null;
    _this._isSearchStalled = false;
    _this._createURL = defaultCreateURL;
    _this._initialUiState = initialUiState;
    _this._initialResults = null;

    if (searchFunction) {
      _this._searchFunction = searchFunction;
    }

    _this.sendEventToInsights = noop["a" /* default */];

    if (routing) {
      var routerOptions = typeof routing === 'boolean' ? undefined : routing;

      _this.use(createRouterMiddleware_createRouterMiddleware(routerOptions));
    }

    if (isMetadataEnabled()) {
      _this.use(createMetadataMiddleware());
    }

    return _this;
  }
  /**
   * Hooks a middleware into the InstantSearch lifecycle.
   */


  InstantSearch_createClass(InstantSearch, [{
    key: "use",
    value: function use() {
      var _this2 = this;

      for (var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++) {
        middleware[_key] = arguments[_key];
      }

      var newMiddlewareList = middleware.map(function (fn) {
        var newMiddleware = InstantSearch_objectSpread({
          subscribe: noop["a" /* default */],
          unsubscribe: noop["a" /* default */],
          onStateChange: noop["a" /* default */]
        }, fn({
          instantSearchInstance: _this2
        }));

        _this2.middleware.push({
          creator: fn,
          instance: newMiddleware
        });

        return newMiddleware;
      }); // If the instance has already started, we directly subscribe the
      // middleware so they're notified of changes.

      if (this.started) {
        newMiddlewareList.forEach(function (m) {
          m.subscribe();
        });
      }

      return this;
    }
    /**
     * Removes a middleware from the InstantSearch lifecycle.
     */

  }, {
    key: "unuse",
    value: function unuse() {
      for (var _len2 = arguments.length, middlewareToUnuse = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        middlewareToUnuse[_key2] = arguments[_key2];
      }

      this.middleware.filter(function (m) {
        return middlewareToUnuse.includes(m.creator);
      }).forEach(function (m) {
        return m.instance.unsubscribe();
      });
      this.middleware = this.middleware.filter(function (m) {
        return !middlewareToUnuse.includes(m.creator);
      });
      return this;
    } // @major we shipped with EXPERIMENTAL_use, but have changed that to just `use` now

  }, {
    key: "EXPERIMENTAL_use",
    value: function EXPERIMENTAL_use() {
       false ? undefined : void 0;
      return this.use.apply(this, arguments);
    }
    /**
     * Adds a widget to the search instance.
     * A widget can be added either before or after InstantSearch has started.
     * @param widget The widget to add to InstantSearch.
     *
     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`.
     */

  }, {
    key: "addWidget",
    value: function addWidget(widget) {
       false ? undefined : void 0;
      return this.addWidgets([widget]);
    }
    /**
     * Adds multiple widgets to the search instance.
     * Widgets can be added either before or after InstantSearch has started.
     * @param widgets The array of widgets to add to InstantSearch.
     */

  }, {
    key: "addWidgets",
    value: function addWidgets(widgets) {
      if (!Array.isArray(widgets)) {
        throw new Error(withUsage('The `addWidgets` method expects an array of widgets. Please use `addWidget`.'));
      }

      if (widgets.some(function (widget) {
        return typeof widget.init !== 'function' && typeof widget.render !== 'function';
      })) {
        throw new Error(withUsage('The widget definition expects a `render` and/or an `init` method.'));
      }

      this.mainIndex.addWidgets(widgets);
      return this;
    }
    /**
     * Removes a widget from the search instance.
     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`
     * @param widget The widget instance to remove from InstantSearch.
     *
     * The widget must implement a `dispose()` method to clear its state.
     */

  }, {
    key: "removeWidget",
    value: function removeWidget(widget) {
       false ? undefined : void 0;
      return this.removeWidgets([widget]);
    }
    /**
     * Removes multiple widgets from the search instance.
     * @param widgets Array of widgets instances to remove from InstantSearch.
     *
     * The widgets must implement a `dispose()` method to clear their states.
     */

  }, {
    key: "removeWidgets",
    value: function removeWidgets(widgets) {
      if (!Array.isArray(widgets)) {
        throw new Error(withUsage('The `removeWidgets` method expects an array of widgets. Please use `removeWidget`.'));
      }

      if (widgets.some(function (widget) {
        return typeof widget.dispose !== 'function';
      })) {
        throw new Error(withUsage('The widget definition expects a `dispose` method.'));
      }

      this.mainIndex.removeWidgets(widgets);
      return this;
    }
    /**
     * Ends the initialization of InstantSearch.js and triggers the
     * first search. This method should be called after all widgets have been added
     * to the instance of InstantSearch.js. InstantSearch.js also supports adding and removing
     * widgets after the start as an **EXPERIMENTAL** feature.
     */

  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      if (this.started) {
        throw new Error(withUsage('The `start` method has already been called once.'));
      } // This Helper is used for the queries, we don't care about its state. The
      // states are managed at the `index` level. We use this Helper to create
      // DerivedHelper scoped into the `index` widgets.
      // In Vue InstantSearch' hydrate, a main helper gets set before start, so
      // we need to respect this helper as a way to keep all listeners correct.


      var mainHelper = this.mainHelper || external_algoliasearch_helper_default()(this.client, this.indexName);

      mainHelper.search = function () {
        // This solution allows us to keep the exact same API for the users but
        // under the hood, we have a different implementation. It should be
        // completely transparent for the rest of the codebase. Only this module
        // is impacted.
        return mainHelper.searchOnlyWithDerivedHelpers();
      };

      if (this._searchFunction) {
        // this client isn't used to actually search, but required for the helper
        // to not throw errors
        var fakeClient = {
          search: function search() {
            return new Promise(noop["a" /* default */]);
          }
        };
        this._mainHelperSearch = mainHelper.search.bind(mainHelper);

        mainHelper.search = function () {
          var mainIndexHelper = _this3.mainIndex.getHelper();

          var searchFunctionHelper = external_algoliasearch_helper_default()(fakeClient, mainIndexHelper.state.index, mainIndexHelper.state);
          searchFunctionHelper.once('search', function (_ref2) {
            var state = _ref2.state;
            mainIndexHelper.overrideStateWithoutTriggeringChangeEvent(state);

            _this3._mainHelperSearch();
          }); // Forward state changes from `searchFunctionHelper` to `mainIndexHelper`

          searchFunctionHelper.on('change', function (_ref3) {
            var state = _ref3.state;
            mainIndexHelper.setState(state);
          });

          _this3._searchFunction(searchFunctionHelper);

          return mainHelper;
        };
      } // Only the "main" Helper emits the `error` event vs the one for `search`
      // and `results` that are also emitted on the derived one.


      mainHelper.on('error', function (_ref4) {
        var error = _ref4.error;

        if (!(error instanceof Error)) {
          // typescript lies here, error is in some cases { name: string, message: string }
          var err = error;
          error = Object.keys(err).reduce(function (acc, key) {
            acc[key] = err[key];
            return acc;
          }, new Error(err.message));
        } // If an error is emitted, it is re-thrown by events. In previous versions
        // we emitted {error}, which is thrown as:
        // "Uncaught, unspecified \"error\" event. ([object Object])"
        // To avoid breaking changes, we make the error available in both
        // `error` and `error.error`
        // @MAJOR emit only error


        error.error = error;

        _this3.emit('error', error);
      });
      this.mainHelper = mainHelper;
      this.middleware.forEach(function (_ref5) {
        var instance = _ref5.instance;
        instance.subscribe();
      });
      this.mainIndex.init({
        instantSearchInstance: this,
        parent: null,
        uiState: this._initialUiState
      });

      if (this._initialResults) {
        var originalScheduleSearch = this.scheduleSearch; // We don't schedule a first search when initial results are provided
        // because we already have the results to render. This skips the initial
        // network request on the browser on `start`.

        this.scheduleSearch = Object(defer["a" /* default */])(noop["a" /* default */]); // We also skip the initial network request when widgets are dynamically
        // added in the first tick (that's the case in all the framework-based flavors).
        // When we add a widget to `index`, it calls `scheduleSearch`. We can rely
        // on our `defer` util to restore the original `scheduleSearch` value once
        // widgets are added to hook back to the regular lifecycle.

        Object(defer["a" /* default */])(function () {
          _this3.scheduleSearch = originalScheduleSearch;
        })();
      } // We only schedule a search when widgets have been added before `start()`
      // because there are listeners that can use these results.
      // This is especially useful in framework-based flavors that wait for
      // dynamically-added widgets to trigger a network request. It avoids
      // having to batch this initial network request with the one coming from
      // `addWidgets()`.
      // Later, we could also skip `index()` widgets and widgets that don't read
      // the results, but this is an optimization that has a very low impact for now.
      else if (this.mainIndex.getWidgets().length > 0) {
        this.scheduleSearch();
      } // Keep the previous reference for legacy purpose, some pattern use
      // the direct Helper access `search.helper` (e.g multi-index).


      this.helper = this.mainIndex.getHelper(); // track we started the search if we add more widgets,
      // to init them directly after add

      this.started = true;
    }
    /**
     * Removes all widgets without triggering a search afterwards. This is an **EXPERIMENTAL** feature,
     * if you find an issue with it, please
     * [open an issue](https://github.com/algolia/instantsearch.js/issues/new?title=Problem%20with%20dispose).
     * @return {undefined} This method does not return anything
     */

  }, {
    key: "dispose",
    value: function dispose() {
      this.scheduleSearch.cancel();
      this.scheduleRender.cancel();
      clearTimeout(this._searchStalledTimer);
      this.removeWidgets(this.mainIndex.getWidgets());
      this.mainIndex.dispose(); // You can not start an instance two times, therefore a disposed instance
      // needs to set started as false otherwise this can not be restarted at a
      // later point.

      this.started = false; // The helper needs to be reset to perform the next search from a fresh state.
      // If not reset, it would use the state stored before calling `dispose()`.

      this.removeAllListeners();
      this.mainHelper.removeAllListeners();
      this.mainHelper = null;
      this.helper = null;
      this.middleware.forEach(function (_ref6) {
        var instance = _ref6.instance;
        instance.unsubscribe();
      });
    }
  }, {
    key: "scheduleStalledRender",
    value: function scheduleStalledRender() {
      var _this4 = this;

      if (!this._searchStalledTimer) {
        this._searchStalledTimer = setTimeout(function () {
          _this4._isSearchStalled = true;

          _this4.scheduleRender();
        }, this._stalledSearchDelay);
      }
    }
  }, {
    key: "setUiState",
    value: function setUiState(uiState) {
      if (!this.mainHelper) {
        throw new Error(withUsage('The `start` method needs to be called before `setUiState`.'));
      } // We refresh the index UI state to update the local UI state that the
      // main index passes to the function form of `setUiState`.


      this.mainIndex.refreshUiState();
      var nextUiState = typeof uiState === 'function' ? uiState(this.mainIndex.getWidgetUiState({})) : uiState;

      var setIndexHelperState = function setIndexHelperState(indexWidget) {
        var nextIndexUiState = nextUiState[indexWidget.getIndexId()] || {};

        if (false) {}

        indexWidget.getHelper().setState(indexWidget.getWidgetSearchParameters(indexWidget.getHelper().state, {
          uiState: nextIndexUiState
        }));
        indexWidget.getWidgets().filter(index["isIndexWidget"]).forEach(setIndexHelperState);
      };

      setIndexHelperState(this.mainIndex);
      this.scheduleSearch();
      this.onInternalStateChange();
    }
  }, {
    key: "getUiState",
    value: function getUiState() {
      if (this.started) {
        // We refresh the index UI state to make sure changes from `refine` are taken in account
        this.mainIndex.refreshUiState();
      }

      return this.mainIndex.getWidgetUiState({});
    }
  }, {
    key: "createURL",
    value: function createURL() {
      var nextState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.started) {
        throw new Error(withUsage('The `start` method needs to be called before `createURL`.'));
      }

      return this._createURL(nextState);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (!this.mainHelper) {
        throw new Error(withUsage('The `start` method needs to be called before `refresh`.'));
      }

      this.mainHelper.clearCache().search();
    }
  }]);

  return InstantSearch;
}(events_default.a);

/* harmony default export */ var lib_InstantSearch = __webpack_exports__["a"] = (InstantSearch_InstantSearch);

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VBreadcrumbs_VBreadcrumbs_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _src_components_VBreadcrumbs_VBreadcrumbs_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VBreadcrumbs_VBreadcrumbs_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VBreadcrumbsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296);
/* harmony import */ var _VBreadcrumbsDivider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(295);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
// Styles
 // Components


 // Mixins

 // Utils


/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
/* @vue/component */
).extend({
  name: 'v-breadcrumbs',
  props: {
    divider: {
      type: String,
      default: '/'
    },
    items: {
      type: Array,
      default: () => []
    },
    large: Boolean
  },
  computed: {
    classes() {
      return {
        'v-breadcrumbs--large': this.large,
        ...this.themeClasses
      };
    }

  },
  methods: {
    genDivider() {
      return this.$createElement(_VBreadcrumbsDivider__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.$slots.divider ? this.$slots.divider : this.divider);
    },

    genItems() {
      const items = [];
      const hasSlot = !!this.$scopedSlots.item;
      const keys = [];

      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        keys.push(item.text);
        if (hasSlot) items.push(this.$scopedSlots.item({
          item
        }));else items.push(this.$createElement(_VBreadcrumbsItem__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
          key: keys.join('.'),
          props: item
        }, [item.text]));
        if (i < this.items.length - 1) items.push(this.genDivider());
      }

      return items;
    }

  },

  render(h) {
    const children = this.$slots.default || this.genItems();
    return h('ul', {
      staticClass: 'v-breadcrumbs',
      class: this.classes
    }, children);
  }

}));

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var _src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCheckbox_VCheckbox_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(291);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(292);
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },

  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },

  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },

    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },

    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }

  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },

    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },

    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }

  },
  methods: {
    genCheckbox() {
      const {
        title,
        ...checkboxAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', { ...checkboxAttrs,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },

    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }

  }
}));

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return highlight; });
/* harmony import */ var _lib_suit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(275);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(311);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(270);


var suit = Object(_lib_suit_js__WEBPACK_IMPORTED_MODULE_0__[/* component */ "a"])('Highlight');
function highlight(_ref) {
  var attribute = _ref.attribute,
      _ref$highlightedTagNa = _ref.highlightedTagName,
      highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,
      hit = _ref.hit,
      _ref$cssClasses = _ref.cssClasses,
      cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
  var highlightAttributeResult = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(hit._highlightResult, attribute); // @MAJOR fallback to attribute value if highlight is not found

   false ? undefined : void 0;

  var _ref2 = highlightAttributeResult || {},
      _ref2$value = _ref2.value,
      attributeValue = _ref2$value === void 0 ? '' : _ref2$value; // cx is not used, since it would be bundled as a dependency for Vue & Angular


  var className = suit({
    descendantName: 'highlighted'
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
  return attributeValue.replace(new RegExp(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__[/* TAG_REPLACEMENT */ "b"].highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__[/* TAG_REPLACEMENT */ "b"].highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reverseHighlight; });
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(316);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(318);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(317);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(270);
/* harmony import */ var _lib_suit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(275);


var suit = Object(_lib_suit_js__WEBPACK_IMPORTED_MODULE_5__[/* component */ "a"])('ReverseHighlight');
function reverseHighlight(_ref) {
  var attribute = _ref.attribute,
      _ref$highlightedTagNa = _ref.highlightedTagName,
      highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,
      hit = _ref.hit,
      _ref$cssClasses = _ref.cssClasses,
      cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
  var highlightAttributeResult = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(hit._highlightResult, attribute); // @MAJOR fallback to attribute value if highlight is not found

   false ? undefined : void 0;

  var _ref2 = highlightAttributeResult || {},
      _ref2$value = _ref2.value,
      attributeValue = _ref2$value === void 0 ? '' : _ref2$value; // cx is not used, since it would be bundled as a dependency for Vue & Angular


  var className = suit({
    descendantName: 'highlighted'
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
  var reverseHighlightedValue = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(attributeValue)));
  return reverseHighlightedValue.replace(new RegExp(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_4__[/* TAG_REPLACEMENT */ "b"].highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_4__[/* TAG_REPLACEMENT */ "b"].highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return snippet; });
/* harmony import */ var _lib_suit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(275);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(311);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(270);


var suit = Object(_lib_suit_js__WEBPACK_IMPORTED_MODULE_0__[/* component */ "a"])('Snippet');
function snippet(_ref) {
  var attribute = _ref.attribute,
      _ref$highlightedTagNa = _ref.highlightedTagName,
      highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,
      hit = _ref.hit,
      _ref$cssClasses = _ref.cssClasses,
      cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
  var snippetAttributeResult = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(hit._snippetResult, attribute); // @MAJOR fallback to attribute value if snippet is not found

   false ? undefined : void 0;

  var _ref2 = snippetAttributeResult || {},
      _ref2$value = _ref2.value,
      attributeValue = _ref2$value === void 0 ? '' : _ref2$value; // cx is not used, since it would be bundled as a dependency for Vue & Angular


  var className = suit({
    descendantName: 'highlighted'
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
  return attributeValue.replace(new RegExp(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__[/* TAG_REPLACEMENT */ "b"].highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__[/* TAG_REPLACEMENT */ "b"].highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reverseSnippet; });
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(316);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(318);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(317);
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(270);
/* harmony import */ var _lib_suit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(275);


var suit = Object(_lib_suit_js__WEBPACK_IMPORTED_MODULE_5__[/* component */ "a"])('ReverseSnippet');
function reverseSnippet(_ref) {
  var attribute = _ref.attribute,
      _ref$highlightedTagNa = _ref.highlightedTagName,
      highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,
      hit = _ref.hit,
      _ref$cssClasses = _ref.cssClasses,
      cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
  var snippetAttributeResult = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(hit._snippetResult, attribute); // @MAJOR fallback to attribute value if snippet is not found

   false ? undefined : void 0;

  var _ref2 = snippetAttributeResult || {},
      _ref2$value = _ref2.value,
      attributeValue = _ref2$value === void 0 ? '' : _ref2$value; // cx is not used, since it would be bundled as a dependency for Vue & Angular


  var className = suit({
    descendantName: 'highlighted'
  }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : '');
  var reverseHighlightedValue = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(attributeValue)));
  return reverseHighlightedValue.replace(new RegExp(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_4__[/* TAG_REPLACEMENT */ "b"].highlightPreTag, 'g'), "<".concat(highlightedTagName, " class=\"").concat(className, "\">")).replace(new RegExp(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_4__[/* TAG_REPLACEMENT */ "b"].highlightPostTag, 'g'), "</".concat(highlightedTagName, ">"));
}

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export readDataAttributes */
/* unused harmony export hasDataAttributes */
/* unused harmony export writeDataAttributes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return insights; });
/* harmony import */ var _lib_utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}


function readDataAttributes(domElement) {
  var method = domElement.getAttribute('data-insights-method');
  var serializedPayload = domElement.getAttribute('data-insights-payload');

  if (typeof serializedPayload !== 'string') {
    throw new Error('The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.');
  }

  try {
    var payload = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_0__[/* deserializePayload */ "a"])(serializedPayload);
    return {
      method: method,
      payload: payload
    };
  } catch (error) {
    throw new Error('The insights helper was unable to parse `data-insights-payload`.');
  }
}
function hasDataAttributes(domElement) {
  return domElement.hasAttribute('data-insights-method');
}
function writeDataAttributes(_ref) {
  var method = _ref.method,
      payload = _ref.payload;

  if (_typeof(payload) !== 'object') {
    throw new Error("The insights helper expects the payload to be an object.");
  }

  var serializedPayload;

  try {
    serializedPayload = Object(_lib_utils_index_js__WEBPACK_IMPORTED_MODULE_0__[/* serializePayload */ "b"])(payload);
  } catch (error) {
    throw new Error("Could not JSON serialize the payload object.");
  }

  return "data-insights-method=\"".concat(method, "\" data-insights-payload=\"").concat(serializedPayload, "\"");
}
/**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 */

function insights(method, payload) {
   false ? undefined : void 0;
  return writeDataAttributes({
    method: method,
    payload: payload
  });
}

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createInfiniteHitsSessionStorageCache; });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(306);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



function getStateWithoutPage(state) {
  var _ref = state || {},
      page = _ref.page,
      rest = _objectWithoutProperties(_ref, ["page"]);

  return rest;
}

var KEY = 'ais.infiniteHits';
function createInfiniteHitsSessionStorageCache() {
  return {
    read: function read(_ref2) {
      var state = _ref2.state;
      var sessionStorage = Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__[/* safelyRunOnBrowser */ "a"])(function (_ref3) {
        var window = _ref3.window;
        return window.sessionStorage;
      });

      if (!sessionStorage) {
        return null;
      }

      try {
        var cache = JSON.parse( // @ts-expect-error JSON.parse() requires a string, but it actually accepts null, too.
        sessionStorage.getItem(KEY));
        return cache && Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(cache.state, getStateWithoutPage(state)) ? cache.hits : null;
      } catch (error) {
        if (error instanceof SyntaxError) {
          try {
            sessionStorage.removeItem(KEY);
          } catch (err) {// do nothing
          }
        }

        return null;
      }
    },
    write: function write(_ref4) {
      var state = _ref4.state,
          hits = _ref4.hits;
      var sessionStorage = Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__[/* safelyRunOnBrowser */ "a"])(function (_ref5) {
        var window = _ref5.window;
        return window.sessionStorage;
      });

      if (!sessionStorage) {
        return;
      }

      try {
        sessionStorage.setItem(KEY, JSON.stringify({
          state: getStateWithoutPage(state),
          hits: hits
        }));
      } catch (error) {// do nothing
      }
    }
  };
}

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ANONYMOUS_TOKEN_COOKIE_KEY */
/* unused harmony export getInsightsAnonymousUserTokenInternal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getInsightsAnonymousUserToken; });

var ANONYMOUS_TOKEN_COOKIE_KEY = '_ALGOLIA';

function getCookie(name) {
  var prefix = "".concat(name, "=");
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];

    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(prefix) === 0) {
      return cookie.substring(prefix.length, cookie.length);
    }
  }

  return undefined;
}

function getInsightsAnonymousUserTokenInternal() {
  return getCookie(ANONYMOUS_TOKEN_COOKIE_KEY);
}
/**
 * @deprecated This function will be still supported in 4.x releases, but not further. It is replaced by the `insights` middleware. For more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/
 */

function getInsightsAnonymousUserToken() {
   false ? undefined : void 0;
  return getInsightsAnonymousUserTokenInternal();
}

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "C-a43yUtdllvXG+ost4+ww==",
	"blog-card": "lTAsx6-TZjGAUhm+g5a8kw==",
	"card-link": "E1oPeH4V1ZabK8JG9H3GbA==",
	"post-title": "YNQzWu4OF8ICCD3jL+aiLA==",
	"post-image": "uD2Asb6scCUat+3LbtT-DA==",
	"article-details": "oBiF8CQAtnLBHtPon39K9A==",
	"post-category": "b+nNuB7E+cS49ArOMhuggA==",
	"post-author": "YPtyss1EA7wXpi8EbXz0gw=="
};


/***/ }),

/***/ 426:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"v-input--selection-controls": "+SC-BYCOqKE84RltrB+mhQ==",
	"drawerFilter": "Q8TvV0onMou6kjc3k6ynmw==",
	"left-panel": "PUrSGWOVL6s2gCDdZ0yt0Q==",
	"narrow-font": "+3A+dEt9XdEYcdwzFaCp4g==",
	"set-width": "ZrqaP3JG5Ua0DhRw1bSS9Q=="
};


/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuscadorBlog_vue_vue_type_style_index_0_id_18468a47_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(425);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuscadorBlog_vue_vue_type_style_index_0_id_18468a47_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuscadorBlog_vue_vue_type_style_index_0_id_18468a47_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuscadorBlog_vue_vue_type_style_index_0_id_18468a47_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuscadorBlog_vue_vue_type_style_index_0_id_18468a47_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuscadorBlog_vue_vue_type_style_index_1_id_18468a47_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(426);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuscadorBlog_vue_vue_type_style_index_1_id_18468a47_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuscadorBlog_vue_vue_type_style_index_1_id_18468a47_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuscadorBlog_vue_vue_type_style_index_1_id_18468a47_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuscadorBlog_vue_vue_type_style_index_1_id_18468a47_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
var VCheckbox = __webpack_require__(352);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(278);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js
var VNavigationDrawer = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(277);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(213);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogs/BuscadorBlog.vue?vue&type=template&id=18468a47&scoped=true&









var BuscadorBlogvue_type_template_id_18468a47_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('ais-instant-search', {
    attrs: {
      "search-client": _vm.searchClient,
      "index-name": _vm.indexName
    }
  }, [_c('ais-configure', {
    attrs: {
      "filters": _vm.filtros,
      "hitsPerPage": 5
    }
  }), _vm._v(" "), _c(VRow["a" /* default */], {
    attrs: {
      "no-gutters": ""
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "left-panel"
  }, [_c('div', {
    staticClass: "mt-5"
  }, [_c('h2', [_vm._v("Secciones")]), _vm._v(" "), _c('div', {
    staticClass: "mt-3"
  }, [_c('ais-refinement-list', {
    attrs: {
      "attribute": "seccion",
      "searchable": "",
      "limit": 2,
      "show-more": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        items,
        isShowingMore,
        isFromSearch,
        canToggleShowMore,
        refine,
        createURL,
        toggleShowMore,
        searchForItems,
        sendEvent
      }) {
        return [_c(VTextField["a" /* default */], {
          staticClass: "mb-3 narrow-font set-width",
          attrs: {
            "label": "Secciones"
          },
          on: {
            "input": function ($event) {
              return searchForItems($event);
            }
          }
        }), _vm._v(" "), isFromSearch && !items.length ? _c('div', [_vm._v("\n                              No hay resultados.\n                            ")]) : _vm._e(), _vm._v(" "), _vm._l(items, function (item) {
          return _c('div', {
            key: item.value
          }, [_c(VCheckbox["a" /* default */], {
            attrs: {
              "color": "#683bce",
              "label": `${item.value}`
            },
            on: {
              "click": function ($event) {
                $event.preventDefault();
                return _vm.refineSeccion(refine, item.value);
              }
            },
            scopedSlots: _vm._u([{
              key: "label",
              fn: function () {
                return [_vm._v("\n                                  " + _vm._s(_vm.getNombreSeccion(item.label)) + "\n                                  "), _c(VChip["a" /* default */], {
                  staticClass: "ml-3 white--text",
                  attrs: {
                    "small": "",
                    "color": "#683bce"
                  }
                }, [_vm._v("\n                                    " + _vm._s(item.count.toLocaleString()) + "\n                                  ")])];
              },
              proxy: true
            }], null, true),
            model: {
              value: item.isRefined,
              callback: function ($$v) {
                _vm.$set(item, "isRefined", $$v);
              },
              expression: "item.isRefined"
            }
          })], 1);
        }), _vm._v(" "), canToggleShowMore ? _c(VBtn["a" /* default */], {
          attrs: {
            "outlined": "",
            "color": "#683bce"
          },
          on: {
            "click": toggleShowMore
          }
        }, [_vm._v("\n                              " + _vm._s(!isShowingMore ? 'Mostrar más' : 'Mostrar menos') + "\n                            ")]) : _vm._e()];
      }
    }])
  })], 1)]), _vm._v(" "), _c(VDivider["a" /* default */], {
    attrs: {
      "width": "200px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-5"
  }, [_c('h2', [_vm._v(" Categoría ")]), _vm._v(" "), _c('div', {
    staticClass: "mt-3"
  }, [_c('ais-refinement-list', {
    attrs: {
      "attribute": "categorias",
      "limit": 2,
      "show-more": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        items,
        isShowingMore,
        isFromSearch,
        canToggleShowMore,
        refine,
        createURL,
        toggleShowMore,
        searchForItems,
        sendEvent
      }) {
        return [_c(VTextField["a" /* default */], {
          staticClass: "mb-3 narrow-font set-width",
          attrs: {
            "label": "Categorías"
          },
          on: {
            "input": function ($event) {
              return searchForItems($event);
            }
          }
        }), _vm._v(" "), isFromSearch && !items.length ? _c('div', [_vm._v("\n                              No hay resultados.\n                            ")]) : _vm._e(), _vm._v(" "), _vm._l(items, function (item) {
          return _c('div', {
            key: item.value
          }, [_c(VCheckbox["a" /* default */], {
            attrs: {
              "label": `${item.value}`,
              "color": "#683bce"
            },
            on: {
              "click": function ($event) {
                $event.preventDefault();
                return _vm.refineCategorias(refine, item.value);
              }
            },
            scopedSlots: _vm._u([{
              key: "label",
              fn: function () {
                return [_vm._v("\n                                  " + _vm._s(_vm.getNombreCategoria(item.label)) + "\n                                  "), _c(VChip["a" /* default */], {
                  staticClass: "ml-3 white--text",
                  attrs: {
                    "small": "",
                    "color": "#683bce"
                  }
                }, [_vm._v("\n                                    " + _vm._s(item.count.toLocaleString()) + "\n                                  ")])];
              },
              proxy: true
            }], null, true),
            model: {
              value: item.isRefined,
              callback: function ($$v) {
                _vm.$set(item, "isRefined", $$v);
              },
              expression: "item.isRefined"
            }
          })], 1);
        }), _vm._v(" "), canToggleShowMore ? _c(VBtn["a" /* default */], {
          attrs: {
            "outlined": "",
            "small": "",
            "color": !isShowingMore ? '#683bce' : '#ff1d89'
          },
          on: {
            "click": toggleShowMore
          }
        }, [_vm._v("\n                              " + _vm._s(!isShowingMore ? 'Mostrar más' : 'Mostrar menos') + "\n                            ")]) : _vm._e()];
      }
    }])
  })], 1)])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12",
      "md": "9"
    }
  }, [_c('div', {
    staticClass: "right-panel mt-4"
  }, [_c(VBtn["a" /* default */], {
    staticClass: "drawerFilter mb-3",
    attrs: {
      "outlined": "",
      "small": "",
      "color": !_vm.drawerFilter ? '#683bce' : '#ff1d89'
    },
    on: {
      "click": function ($event) {
        _vm.drawerFilter = !_vm.drawerFilter;
      }
    }
  }, [_vm._v("\n                    Mostrar filtro\n                  ")]), _vm._v(" "), _c('ais-search-box', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        currentRefinement,
        isSearchStalled,
        refine
      }) {
        return [_c(VTextField["a" /* default */], {
          attrs: {
            "outlined": "",
            "type": "search",
            "color": "#683bce",
            "value": currentRefinement,
            "label": "Busca un blog aquí",
            "append-icon": "search"
          },
          on: {
            "input": function ($event) {
              return refine($event);
            }
          }
        }), _vm._v(" "), _c('span', {
          attrs: {
            "hidden": !isSearchStalled
          }
        }, [_vm._v("Loading...")])];
      }
    }])
  }), _vm._v(" "), _c('ais-hits', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        items
      }) {
        return _c('div', {}, _vm._l(items, function (item) {
          return _c('div', {
            key: item.objectID,
            staticClass: "card-link mb-5"
          }, [_c('article', {
            staticClass: "blog-card"
          }, [_c('nuxt-link', {
            attrs: {
              "to": `/blog/${item.referencia}`
            }
          }, [_c('img', {
            staticClass: "post-image",
            attrs: {
              "src": __webpack_require__(338)(`./${item.seccion ? item.seccion : 'sin-seccion'}.webp`)
            }
          })]), _vm._v(" "), _c('div', {
            staticClass: "article-details"
          }, [_c('h4', {
            staticClass: "post-category"
          }, [_vm._v(_vm._s(item.seccion ? item.seccion : 'Blog normal'))]), _vm._v(" "), _c('nuxt-link', {
            attrs: {
              "to": `/blog/${item.referencia}`
            }
          }, [_c('h3', {
            staticClass: "post-title"
          }, [_vm._v(_vm._s(item.titulo))])]), _vm._v(" "), _c('p', {
            staticClass: "post-description"
          }, [_vm._v(_vm._s(item.descripcion))]), _vm._v(" "), _c('p', {
            staticClass: "post-author"
          }, [_vm._v("\n                              Fecha actualización: " + _vm._s(_vm.fechaActual(item.fechaActualizacion)) + "\n                            ")])], 1)], 1)]);
        }), 0);
      }
    }])
  }), _vm._v(" "), _c('ais-pagination', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        currentRefinement,
        nbPages,
        pages,
        isFirstPage,
        isLastPage,
        refine,
        createURL
      }) {
        return [_c('ul', [!isFirstPage ? _c('li', [_c(VBtn["a" /* default */], {
          staticClass: "white--text",
          attrs: {
            "href": createURL(0),
            "small": "",
            "color": "#683bce"
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return refine(0);
            }
          }
        }, [_c('span', {
          staticClass: "material-icons"
        }, [_vm._v("\n                                  keyboard_double_arrow_left\n                                ")])])], 1) : _vm._e(), _vm._v(" "), !isFirstPage ? _c('li', [_c(VBtn["a" /* default */], {
          staticClass: "white--text",
          attrs: {
            "href": createURL(currentRefinement - 1),
            "small": "",
            "color": "#683bce"
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return refine(currentRefinement - 1);
            }
          }
        }, [_c('span', {
          staticClass: "material-icons"
        }, [_vm._v("\n                                keyboard_arrow_left\n                              ")])])], 1) : _vm._e(), _vm._v(" "), _vm._l(pages, function (page) {
          return _c('li', {
            key: page
          }, [_c(VBtn["a" /* default */], {
            staticClass: "white--text",
            style: {
              fontWeight: page === currentRefinement ? 'bold' : ''
            },
            attrs: {
              "href": createURL(page),
              "small": "",
              "color": "#683bce"
            },
            on: {
              "click": function ($event) {
                $event.preventDefault();
                return refine(page);
              }
            }
          }, [_vm._v("\n                              " + _vm._s(page + 1) + "\n                            ")])], 1);
        }), _vm._v(" "), !isLastPage ? _c('li', [_c(VBtn["a" /* default */], {
          staticClass: "white--text",
          attrs: {
            "href": createURL(currentRefinement + 1),
            "small": "",
            "color": "#683bce"
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return refine(currentRefinement + 1);
            }
          }
        }, [_c('span', {
          staticClass: "material-icons"
        }, [_vm._v("\n                                keyboard_arrow_right\n                              ")])])], 1) : _vm._e(), _vm._v(" "), !isLastPage ? _c('li', [_c(VBtn["a" /* default */], {
          staticClass: "white--text",
          attrs: {
            "href": createURL(nbPages),
            "small": "",
            "color": "#683bce"
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return refine(nbPages);
            }
          }
        }, [_c('span', {
          staticClass: "material-icons"
        }, [_vm._v("\n                                keyboard_double_arrow_right\n                              ")])])], 1) : _vm._e()], 2)];
      }
    }])
  })], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "drawerFilter"
  }, [_c(VNavigationDrawer["a" /* default */], {
    attrs: {
      "app": "",
      "temporary": "",
      "right": ""
    },
    model: {
      value: _vm.drawerFilter,
      callback: function ($$v) {
        _vm.drawerFilter = $$v;
      },
      expression: "drawerFilter"
    }
  }, [_c('div', {
    staticClass: "ml-3"
  }, [_c('div', {
    staticClass: "mt-5"
  }, [_c('h2', [_vm._v("Secciones")]), _vm._v(" "), _c('div', {
    staticClass: "mt-3"
  }, [_c('ais-refinement-list', {
    attrs: {
      "attribute": "seccion",
      "limit": 2,
      "show-more": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        items,
        isShowingMore,
        isFromSearch,
        canToggleShowMore,
        refine,
        createURL,
        toggleShowMore,
        searchForItems,
        sendEvent
      }) {
        return [_c(VTextField["a" /* default */], {
          staticClass: "mb-3 narrow-font set-width",
          attrs: {
            "label": "Secciones"
          },
          on: {
            "input": function ($event) {
              return searchForItems($event);
            }
          }
        }), _vm._v(" "), isFromSearch && !items.length ? _c('div', [_vm._v("\n                          No hay resultados.\n                        ")]) : _vm._e(), _vm._v(" "), _vm._l(items, function (item) {
          return _c('div', {
            key: item.value
          }, [_c(VCheckbox["a" /* default */], {
            attrs: {
              "color": "#683bce",
              "label": `${item.value}`
            },
            on: {
              "click": function ($event) {
                $event.preventDefault();
                return _vm.refineSeccion(refine, item.value);
              }
            },
            scopedSlots: _vm._u([{
              key: "label",
              fn: function () {
                return [_vm._v("\n                              " + _vm._s(_vm.getNombreSeccion(item.label)) + "\n                              "), _c(VChip["a" /* default */], {
                  staticClass: "ml-1 white--text",
                  attrs: {
                    "small": "",
                    "color": "#683bce"
                  }
                }, [_vm._v("\n                                " + _vm._s(item.count.toLocaleString()) + "\n                              ")])];
              },
              proxy: true
            }], null, true),
            model: {
              value: item.isRefined,
              callback: function ($$v) {
                _vm.$set(item, "isRefined", $$v);
              },
              expression: "item.isRefined"
            }
          })], 1);
        }), _vm._v(" "), canToggleShowMore ? _c(VBtn["a" /* default */], {
          attrs: {
            "outlined": "",
            "color": "#683bce"
          },
          on: {
            "click": toggleShowMore
          }
        }, [_vm._v("\n                          " + _vm._s(!isShowingMore ? 'Mostrar más' : 'Mostrar menos') + "\n                        ")]) : _vm._e()];
      }
    }])
  })], 1)]), _vm._v(" "), _c(VDivider["a" /* default */], {
    attrs: {
      "width": "200px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-5"
  }, [_c('h2', [_vm._v(" Categoría ")]), _vm._v(" "), _c('div', {
    staticClass: "mt-3"
  }, [_c('ais-refinement-list', {
    attrs: {
      "attribute": "categorias",
      "limit": 2,
      "show-more": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        items,
        isShowingMore,
        isFromSearch,
        canToggleShowMore,
        refine,
        createURL,
        toggleShowMore,
        searchForItems,
        sendEvent
      }) {
        return [_c(VTextField["a" /* default */], {
          staticClass: "mb-3 narrow-font set-width",
          attrs: {
            "label": "Categorías"
          },
          on: {
            "input": function ($event) {
              return searchForItems($event);
            }
          }
        }), _vm._v(" "), isFromSearch && !items.length ? _c('div', [_vm._v("\n                          No hay resultados.\n                        ")]) : _vm._e(), _vm._v(" "), _vm._l(items, function (item) {
          return _c('div', {
            key: item.value
          }, [_c(VCheckbox["a" /* default */], {
            attrs: {
              "label": `${item.value}`,
              "color": "#683bce"
            },
            on: {
              "click": function ($event) {
                $event.preventDefault();
                return _vm.refineCategorias(refine, item.value);
              }
            },
            scopedSlots: _vm._u([{
              key: "label",
              fn: function () {
                return [_vm._v("\n                              " + _vm._s(_vm.getNombreCategoria(item.label)) + "\n                              "), _c(VChip["a" /* default */], {
                  staticClass: "ml-1 white--text",
                  attrs: {
                    "small": "",
                    "color": "#683bce"
                  }
                }, [_vm._v("\n                                " + _vm._s(item.count.toLocaleString()) + "\n                              ")])];
              },
              proxy: true
            }], null, true),
            model: {
              value: item.isRefined,
              callback: function ($$v) {
                _vm.$set(item, "isRefined", $$v);
              },
              expression: "item.isRefined"
            }
          })], 1);
        }), _vm._v(" "), canToggleShowMore ? _c(VBtn["a" /* default */], {
          attrs: {
            "outlined": "",
            "small": "",
            "color": !isShowingMore ? '#683bce' : '#ff1d89'
          },
          on: {
            "click": toggleShowMore
          }
        }, [_vm._v("\n                          " + _vm._s(!isShowingMore ? 'Mostrar más' : 'Mostrar menos') + "\n                        ")]) : _vm._e()];
      }
    }])
  })], 1)])], 1)])], 1)], 1)], 1);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/blogs/BuscadorBlog.vue?vue&type=template&id=18468a47&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-instantsearch/dist/vue-instantsearch.common.js
var vue_instantsearch_common = __webpack_require__(345);

// EXTERNAL MODULE: external "algoliasearch/lite"
var lite_ = __webpack_require__(219);
var lite_default = /*#__PURE__*/__webpack_require__.n(lite_);

// EXTERNAL MODULE: ./helpers/informacionSecciones.js
var informacionSecciones = __webpack_require__(290);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogs/BuscadorBlog.vue?vue&type=script&lang=js&



/* harmony default export */ var BuscadorBlogvue_type_script_lang_js_ = ({
  data() {
    return {
      searchClient: lite_default()('RNRNTDZS3N', 'af4d4e9d36a7ceb75e258007c3ceccf2'),
      indexName:  true ? 'prod_blogs' : undefined,
      filtros: '',
      drawerFilter: false,
      informacionSecciones: informacionSecciones["a" /* default */]
    };
  },

  methods: {
    getNombreSeccion(uid) {
      return this.informacionSecciones[uid].nombre;
    },

    getNombreCategoria(uid) {
      const seccionesId = Object.keys(this.informacionSecciones);

      for (const seccionId of seccionesId) {
        if (this.informacionSecciones[seccionId].categorias[uid]) return this.informacionSecciones[seccionId].categorias[uid].nombre;
      }
    },

    refineSeccion(refine, value) {
      refine(value);
    },

    refineCategorias(refine, value) {
      refine(value);
    },

    fechaActual(segundos) {
      return new Date(segundos * 1000 - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
    }

  },
  props: {},
  components: {
    'ais-instant-search': vue_instantsearch_common["AisInstantSearch"],
    'ais-search-box': vue_instantsearch_common["AisSearchBox"],
    'ais-hits': vue_instantsearch_common["AisHits"],
    'ais-configure': vue_instantsearch_common["AisConfigure"],
    'ais-pagination': vue_instantsearch_common["AisPagination"],
    'ais-clear-refinements': vue_instantsearch_common["AisClearRefinements"],
    'ais-refinement-list': vue_instantsearch_common["AisRefinementList"]
  },

  created() {
    this.filtros = `publicado:${true} AND habilitado:${true}`;
  }

});
// CONCATENATED MODULE: ./components/blogs/BuscadorBlog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blogs_BuscadorBlogvue_type_script_lang_js_ = (BuscadorBlogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/blogs/BuscadorBlog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(469)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(470)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blogs_BuscadorBlogvue_type_script_lang_js_,
  BuscadorBlogvue_type_template_id_18468a47_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "18468a47",
  "dee63c40"
  
)

/* harmony default export */ var BuscadorBlog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbs.js
var VBreadcrumbs = __webpack_require__(350);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsDivider.js
var VBreadcrumbsDivider = __webpack_require__(295);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBreadcrumbs/VBreadcrumbsItem.js
var VBreadcrumbsItem = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/_seccion/_categoria.vue?vue&type=template&id=31af9cfe&scoped=true&





var _categoriavue_type_template_id_31af9cfe_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"mt-0\" data-v-31af9cfe>", "</div>", [_c(VBreadcrumbs["a" /* default */], _vm._l(_vm.breadcrumbs, function (breadcrumb, index) {
    return _c('div', {
      key: index
    }, [_c(VBreadcrumbsItem["a" /* default */], {
      attrs: {
        "href": breadcrumb.href,
        "disabled": breadcrumb.disabled,
        "nuxt": true
      }
    }, [_vm._v("\n                    " + _vm._s(breadcrumb.text.toUpperCase()) + "\n                ")]), _vm._v(" "), index !== _vm.breadcrumbs.length - 1 ? _c(VBreadcrumbsDivider["a" /* default */], [_c(VIcon["a" /* default */], [_vm._v("mdi-chevron-right")])], 1) : _vm._e()], 1);
  }), 0)], 1), _vm._ssrNode(" "), _c('ClientOnly', [_c('BuscadorBlog')], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blogs/_seccion/_categoria.vue?vue&type=template&id=31af9cfe&scoped=true&

// EXTERNAL MODULE: ./components/blogs/BuscadorBlog.vue + 4 modules
var BuscadorBlog = __webpack_require__(541);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blogs/_seccion/_categoria.vue?vue&type=script&lang=js&

/* harmony default export */ var _categoriavue_type_script_lang_js_ = ({
  data() {
    return {
      breadcrumbs: [{
        text: 'Inicio',
        disabled: false,
        href: '/'
      }, {
        text: 'Blogs',
        disabled: true,
        href: '/blogs'
      }]
    };
  },

  components: {
    BuscadorBlog: BuscadorBlog["default"]
  }
});
// CONCATENATED MODULE: ./pages/blogs/_seccion/_categoria.vue?vue&type=script&lang=js&
 /* harmony default export */ var _seccion_categoriavue_type_script_lang_js_ = (_categoriavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/blogs/_seccion/_categoria.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _seccion_categoriavue_type_script_lang_js_,
  _categoriavue_type_template_id_31af9cfe_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "31af9cfe",
  "2b98915a"
  
)

/* harmony default export */ var _categoria = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_categoria.js.map