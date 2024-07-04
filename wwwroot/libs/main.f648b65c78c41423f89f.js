/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/Collapser.tsx":
/*!**********************************!*\
  !*** ./Components/Collapser.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collapser": () => (/* binding */ Collapser)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Link/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const Collapser = (props) => {
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const handleClickOnLink = () => {
        setVisible(!visible);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_2__.Link, { onClick: handleClickOnLink, underline: true }, props.label),
        visible && props.children));
};


/***/ }),

/***/ "./Components/DataConnector/BaseApiConnector.ts":
/*!******************************************************!*\
  !*** ./Components/DataConnector/BaseApiConnector.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseApiConnector": () => (/* binding */ BaseApiConnector)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function Serialize(parameters) {
    return Object.keys(parameters).map(k => k + '=' + parameters[k]).join('&');
}
class BaseApiConnector {
    apiUrl = "";
    constructor() {
        this.apiUrl = window.location.hostname;
    }
    static async Retrieve(controller, method, parameters) {
        try {
            const query = parameters ? "?" + Serialize(parameters) : "";
            const url = encodeURI(`/api/${controller}/${method}${query}`);
            const val = await fetch(url);
            return await val.json();
            //return (await axios.get<T>(url)).data;
        }
        catch (ex) {
            const error = ex.response.status === 404
                ? "Resource not found"
                : "An unexpected error has occurred";
            console.error(error);
            throw ex;
        }
    }
    static async Post(controller, method, data) {
        try {
            const url = encodeURI(`/api/${controller}/${method}`);
            const resp = await fetch(url, {
                method: "POST",
                mode: 'cors',
                redirect: 'follow',
                body: data ? JSON.stringify(data) : undefined
            });
            return await resp.json();
            //return (await axios.post<T>(url, data)).data;
        }
        catch (ex) {
            const error = ex.response.status === 404
                ? "Resource not found"
                : "An unexpected error has occurred";
            console.error(error);
            throw ex;
        }
    }
    static async Upload(controller, method, data, additionalUrl) {
        try {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };
            const url = encodeURI(`/${controller}/${method}${additionalUrl}`);
            return (await axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, data, config)).data;
        }
        catch (ex) {
            const error = ex.response.status === 404
                ? "Resource not found"
                : "An unexpected error has occurred";
            console.error(error);
            throw ex;
        }
    }
}
//const PromptDownload = (response: AxiosResponse) => {
//    const fileNameHeader = "content-disposition";
//    const suggestedFileName = response.headers[fileNameHeader];
//    const effectiveFileName = suggestedFileName ? headerToFileName(suggestedFileName) : "nofilename";
//    console.log("Received header [" + fileNameHeader + "]: " + suggestedFileName
//        + ", effective fileName: " + effectiveFileName);
//    const urlObj = window.URL.createObjectURL(new Blob([response.data]));
//    const link = document.createElement('a');
//    link.href = urlObj;
//    link.setAttribute('download', effectiveFileName);
//    document.body.appendChild(link);
//    link.click();
//}
//const headerToFileName = (header: string) => {
//    if (Helpers.StringIsNotNullOrEmpty(header)) {
//        header = header.replace(/"/gi, '');
//        const match = "filename=";
//        const temp = header.substr(header.indexOf(match) + match.length);
//        return temp
//    }
//    return header;
//}


/***/ }),

/***/ "./Components/DataConnector/ConnectionStringConnector.ts":
/*!***************************************************************!*\
  !*** ./Components/DataConnector/ConnectionStringConnector.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionStringConnector": () => (/* binding */ ConnectionStringConnector)
/* harmony export */ });
/* harmony import */ var _BaseApiConnector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseApiConnector */ "./Components/DataConnector/BaseApiConnector.ts");

class ConnectionStringConnector {
    async GetAll() {
        try {
            const result = await _BaseApiConnector__WEBPACK_IMPORTED_MODULE_0__.BaseApiConnector.Retrieve("Connection", "Get");
            if (result) {
                return result;
            }
        }
        catch (error) {
            console.error(error);
        }
        return [];
    }
    async Get(model) {
        try {
            const result = await _BaseApiConnector__WEBPACK_IMPORTED_MODULE_0__.BaseApiConnector.Retrieve("Connection", "Get", model);
            if (result) {
                return result;
            }
        }
        catch (error) {
            console.error(error);
        }
        return undefined;
    }
}


/***/ }),

/***/ "./Pages/SolutionViewer/SolutionViewer.classNames.ts":
/*!***********************************************************!*\
  !*** ./Pages/SolutionViewer/SolutionViewer.classNames.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClassNames": () => (/* binding */ getClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/merge-styles */ "./node_modules/@fluentui/merge-styles/lib/mergeStyleSets.js");
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/style-utilities */ "./node_modules/@fluentui/style-utilities/lib/index.js");


const getClassNames = () => (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.mergeStyleSets)({
    sectionHeader: {
        borderBottom: '1px solid rgb(161, 159, 157)',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative'
    },
    card: {
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "3px",
        //width:"48%"
    },
    container: {
        padding: "2px 16px"
    },
    cardtoPick: {
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "3px",
        ':hover': {
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
        }
    },
    badge: {
        position: 'absolute',
        background: 'blue',
        color: 'white',
        borderRadius: '10px',
        width: '20px',
        height: '20px'
    },
    wrapper: {
        height: '70vh',
        position: 'relative',
        backgroundColor: 'white',
    },
    bold: {
        fontWeight: _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.FontWeights.bold
    },
    control: {
        margin: '0 0 15px 0',
        maxWidth: '400px',
    },
});


/***/ }),

/***/ "./Pages/SolutionViewer/SolutionViewer.tsx":
/*!*************************************************!*\
  !*** ./Pages/SolutionViewer/SolutionViewer.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolutionViewer": () => (/* binding */ SolutionViewer)
/* harmony export */ });
/* unused harmony export ConnectionStringCard */
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Stack/Stack.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Button/IconButton/IconButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Components_DataConnector_ConnectionStringConnector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/DataConnector/ConnectionStringConnector */ "./Components/DataConnector/ConnectionStringConnector.ts");
/* harmony import */ var _SolutionViewer_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SolutionViewer.classNames */ "./Pages/SolutionViewer/SolutionViewer.classNames.ts");




const verticalGapStackTokens = {
    childrenGap: 20,
    padding: 10,
};
class SolutionViewer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    connector = new _Components_DataConnector_ConnectionStringConnector__WEBPACK_IMPORTED_MODULE_1__.ConnectionStringConnector();
    constructor({}) {
        super({});
        this.state = {
            AllConnections: []
        };
    }
    async componentDidMount() {
        const connections = await this.connector.GetAll();
        this.setState({ AllConnections: connections });
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, { horizontal: true, verticalFill: true, wrap: true, horizontalAlign: "start", verticalAlign: "start", tokens: verticalGapStackTokens },
            this.state.AllConnections.map(e => react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConnectionStringCard, { ...e })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, { iconProps: { iconName: "Add" }, title: "Add", ariaLabel: "Add", onClick: () => this.AddNewConnectionClick() }));
    }
    AddNewConnectionClick() {
    }
}
const ConnectionStringCard = (props) => {
    const style = (0,_SolutionViewer_classNames__WEBPACK_IMPORTED_MODULE_2__.getClassNames)();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: style.cardtoPick },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: style.container },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, { horizontal: true, horizontalAlign: "space-between" },
                props.Name,
                " - ",
                props.OrganizationUrl))));
};


/***/ }),

/***/ "./app.tsx":
/*!*****************!*\
  !*** ./app.tsx ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export modalStyles */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/font-icons-mdl2/lib/index.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/style-utilities/lib/index.js");
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react */ "./node_modules/@fluentui/react/lib/components/Modal/Modal.js");
/* harmony import */ var _Components_Collapser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Collapser */ "./Components/Collapser.tsx");
/* harmony import */ var _Pages_SolutionViewer_SolutionViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/SolutionViewer/SolutionViewer */ "./Pages/SolutionViewer/SolutionViewer.tsx");





(0,_fluentui_react__WEBPACK_IMPORTED_MODULE_4__.initializeIcons)();
const theme = (0,_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.getTheme)();
const modalStyles = (0,_fluentui_react__WEBPACK_IMPORTED_MODULE_5__.mergeStyleSets)({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
        width: '70%'
    },
    header: [
        theme.fonts.xLargePlus,
        {
            flex: '1 1 auto',
            borderTop: `4px solid ${theme.palette.themePrimary}`,
            color: theme.palette.neutralPrimary,
            display: 'flex',
            alignItems: 'center',
            fontWeight: _fluentui_react__WEBPACK_IMPORTED_MODULE_5__.FontWeights.semibold,
            padding: '12px 12px 14px 24px',
        },
    ],
    body: {
        flex: '4 4 auto',
        padding: '0 24px 24px 24px',
        overflowY: 'hidden',
        selectors: {
            p: { margin: '14px 0' },
            'p:first-child': { marginTop: 0 },
            'p:last-child': { marginBottom: 0 },
        },
    },
});
class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
        super(props);
        this.state = {
            InError: false
        };
    }
    render() {
        if (!this.state.InError) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages_SolutionViewer_SolutionViewer__WEBPACK_IMPORTED_MODULE_3__.SolutionViewer, null);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_6__.Modal, { isOpen: this.state.InError, isBlocking: true, containerClassName: modalStyles.container },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: modalStyles.header },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Errore")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: modalStyles.body },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Collapser__WEBPACK_IMPORTED_MODULE_2__.Collapser, { label: "dettagli errore", children: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.state.Error?.message),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, this.state.ErrorInfo?.componentStack)) })))));
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            InError: true,
            Error: error,
            ErrorInfo: errorInfo
        });
    }
}
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('root'));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdiff_front_end"] = self["webpackChunkdiff_front_end"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fluentui_font-icons-mdl2_lib_index_js-node_modules_fluentui_react_lib_co-b5ca18"], () => (__webpack_require__("./app.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.f648b65c78c41423f89f.js.map