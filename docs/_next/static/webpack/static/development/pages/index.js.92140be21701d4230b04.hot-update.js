webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ "./node_modules/@material-ui/icons/ImportContacts.js");
/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\rober\\Documents\\GitHub\\czytodramat\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("ready"),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      value = _useState2[0],
      setValue = _useState2[1];

  var audio = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  var options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    keys: ["title"]
  };

  var getResponseFromApi = function getResponseFromApi(input) {
    setStatus("loading");
    axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://wolnelektury.pl/api/books").then(function (response) {
      var data = new fuse_js__WEBPACK_IMPORTED_MODULE_3__["default"](response.data, options).search(input);
      console.debug(data); //  let data = response.data.find(item => item.title === input);

      if (data && data.item && data.item.kind === "Dramat") {
        document.getElementById("audio").play();
        setStatus("true");
      } else if (data && data.item && data.item.kind !== "Dramat") {
        alert("Otóż nie tym razem");
        setStatus("false");
        console.debug(data);
      } else if (!data || !data.item) {
        alert("Zesrałem się");
        setStatus("noMatch");
        console.debug(data);
      }
    })["catch"](function (error) {
      console.debug("error", error);
      setStatus("error");
    });
  };

  return __jsx("div", {
    style: {
      backgroundImage: "url('/background.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },
    className: "jsx-1799183244" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "Czy to dramat?"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })), __jsx("audio", {
    id: "audio",
    ref: audio,
    src: "/dramat.mp3",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "Czy to dramat?"), status === "loading" && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CircularProgress"], {
    style: {
      marginTop: "2em",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), status === "true" && __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginTop: "2em",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }), status === "false" && __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      marginTop: "2em",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), status === "error" && __jsx(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      marginTop: "2em",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), status === "noMatch" && __jsx(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      marginTop: "2em",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    align: "center",
    style: {
      paddingTop: "3em",
      textAlign: "center",
      fontWeight: 700
    },
    placeholder: "Wpisz \u017Ceby sprawdzi\u0107",
    onChange: function onChange() {
      return setValue(event.target.value);
    },
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick() {
      return getResponseFromApi(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, " ", "Sprawd\u017A \"", value, "\"")), __jsx("footer", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/Dakse",
    target: "_blank",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, "Made by Daks", __jsx("img", {
    style: {
      borderRadius: "50%"
    },
    src: "https://avatars3.githubusercontent.com/u/42167605?s=460&u=49db09530fe0dc4aff9af9e011b7a51fc766f98e&v=4",
    alt: "Vercel Logo",
    className: "jsx-1799183244" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://nextjs.org/",
    target: "_blank",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "Powered by NextJS"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3345803726",
    __self: this
  }, ".container.jsx-1799183244{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-1799183244{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1799183244{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1799183244 img.jsx-1799183244{margin-left:0.5rem;}footer.jsx-1799183244 a.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-1799183244{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1799183244 a.jsx-1799183244{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1799183244 a.jsx-1799183244:hover,.title.jsx-1799183244 a.jsx-1799183244:focus,.title.jsx-1799183244 a.jsx-1799183244:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1799183244{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1799183244,.description.jsx-1799183244{text-align:center;}.description.jsx-1799183244{line-height:1.5;font-size:1.5rem;}code.jsx-1799183244{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-1799183244{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1799183244:hover,.card.jsx-1799183244:focus,.card.jsx-1799183244:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1799183244 h3.jsx-1799183244{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1799183244 p.jsx-1799183244{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1799183244{height:1em;}@media (max-width:600px){.grid.jsx-1799183244{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccm9iZXJcXERvY3VtZW50c1xcR2l0SHViXFxjenl0b2RyYW1hdFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIa0IsQUFHNEIsQUFTRixBQVNKLEFBU1EsQUFJTixBQU1DLEFBS0EsQUFPWSxBQUlqQixBQU9TLEFBSUYsQUFLRyxBQVNOLEFBVUQsQUFjRSxBQUtJLEFBS1QsQUFNRSxBQUtFLFNBckVJLEFBMkRDLEVBOUZMLEFBb0dmLEFBSzBCLENBbkNULEVBbkRNLEFBS0EsQUE0REEsQ0E3RmQsQ0F1RFUsQ0FoRUEsQ0E0RG5CLEFBK0NtQixDQWhGbkIsQUEwQ29CLEtBbERXLEVBbUNkLENBMkRDLE1BaERsQixDQWhFZSxDQXNHZixBQUtBLEVBdENrQixJQWZsQixFQTJEQSxLQXhHZSxLQVVBLEFBbURJLE9BdEJuQixJQVhBLEFBS0EsTUE4QnNFLElBMUM3QyxBQStDSixJQVdKLFdBbUNmLElBbENnQixlQXhGTSxDQXlGUixhQWhGUSxDQWlGRCxJQXZFRSx3Q0EwREEsTUEvQ0osQUE2RE0sYUExRkYsS0F1RXpCLE9Bb0JxQixFQWxGSSxpQkFtRjhCLFNBekVsQyx3Q0FXckIsQUErQ2lCLG1CQTVFSSxjQVNBLG9CQVVyQixJQTJEa0IsTUFjbEIsVUFia0IsZ0JBQ2xCLHVCQS9FQSxjQVNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccm9iZXJcXERvY3VtZW50c1xcR2l0SHViXFxjenl0b2RyYW1hdFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgRnVzZSBmcm9tIFwiZnVzZS5qc1wiO1xuaW1wb3J0IHtcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxuICBCdXR0b24sXG4gIENpcmN1bGFyUHJvZ3Jlc3Ncbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgRG9uZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Eb25lXCI7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JcIjtcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xuaW1wb3J0IEltcG9ydENvbnRhY3RzSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ltcG9ydENvbnRhY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJyZWFkeVwiKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdmFyIGF1ZGlvID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLy8gaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAvLyBpbmNsdWRlU2NvcmU6IGZhbHNlLFxuICAgIC8vIHNob3VsZFNvcnQ6IHRydWUsXG4gICAgLy8gaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICAgIC8vIGZpbmRBbGxNYXRjaGVzOiBmYWxzZSxcbiAgICAvLyBtaW5NYXRjaENoYXJMZW5ndGg6IDEsXG4gICAgLy8gbG9jYXRpb246IDAsXG4gICAgLy8gdGhyZXNob2xkOiAwLjYsXG4gICAgLy8gZGlzdGFuY2U6IDEwMCxcbiAgICAvLyB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gICAga2V5czogW1widGl0bGVcIl1cbiAgfTtcbiAgY29uc3QgZ2V0UmVzcG9uc2VGcm9tQXBpID0gaW5wdXQgPT4ge1xuICAgIHNldFN0YXR1cyhcImxvYWRpbmdcIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwczovL3dvbG5lbGVrdHVyeS5wbC9hcGkvYm9va3NcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSBuZXcgRnVzZShyZXNwb25zZS5kYXRhLCBvcHRpb25zKS5zZWFyY2goaW5wdXQpO1xuICAgICAgICBjb25zb2xlLmRlYnVnKGRhdGEpO1xuICAgICAgICAvLyAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhLmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlID09PSBpbnB1dCk7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuaXRlbSAmJiBkYXRhLml0ZW0ua2luZCA9PT0gXCJEcmFtYXRcIikge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIikucGxheSgpO1xuICAgICAgICAgIHNldFN0YXR1cyhcInRydWVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSAmJiBkYXRhLml0ZW0gJiYgZGF0YS5pdGVtLmtpbmQgIT09IFwiRHJhbWF0XCIpIHtcbiAgICAgICAgICBhbGVydChcIk90w7PFvCBuaWUgdHltIHJhemVtXCIpO1xuICAgICAgICAgIHNldFN0YXR1cyhcImZhbHNlXCIpO1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWRhdGEgfHwgIWRhdGEuaXRlbSkge1xuICAgICAgICAgIGFsZXJ0KFwiWmVzcmHFgmVtIHNpxJlcIik7XG4gICAgICAgICAgc2V0U3RhdHVzKFwibm9NYXRjaFwiKTtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgc2V0U3RhdHVzKFwiZXJyb3JcIik7XG4gICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnL2JhY2tncm91bmQuanBnJylcIixcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkN6eSB0byBkcmFtYXQ/PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGF1ZGlvIGlkPVwiYXVkaW9cIiByZWY9e2F1ZGlvfSBzcmM9XCIvZHJhbWF0Lm1wM1wiPjwvYXVkaW8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+Q3p5IHRvIGRyYW1hdD88L1R5cG9ncmFwaHk+XG4gICAgICAgIHtzdGF0dXMgPT09IFwibG9hZGluZ1wiICYmIChcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMmVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fSAvPlxuICAgICAgICApfVxuICAgICAgICB7c3RhdHVzID09PSBcInRydWVcIiAmJiAoXG4gICAgICAgICAgPERvbmVJY29uIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyZW1cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzdGF0dXMgPT09IFwiZmFsc2VcIiAmJiAoXG4gICAgICAgICAgPENsb3NlSWNvbiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMmVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fSAvPlxuICAgICAgICApfVxuICAgICAgICB7c3RhdHVzID09PSBcImVycm9yXCIgJiYgKFxuICAgICAgICAgIDxFcnJvckljb24gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjJlbVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge3N0YXR1cyA9PT0gXCJub01hdGNoXCIgJiYgKFxuICAgICAgICAgIDxJbXBvcnRDb250YWN0c0ljb25cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyZW1cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjNlbVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRXZWlnaHQ6IDcwMCB9fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3Bpc3ogxbxlYnkgc3ByYXdkemnEh1wiXG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZ2V0UmVzcG9uc2VGcm9tQXBpKHZhbHVlKX0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIFNwcmF3ZMW6IFwie3ZhbHVlfVwiXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Rha3NlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICBNYWRlIGJ5IERha3NcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19XG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNDIxNjc2MDU/cz00NjAmdT00OWRiMDk1MzBmZTBkYzRhZmY5YWY5ZTAxMWI3YTUxZmM3NjZmOThlJnY9NFwiXG4gICAgICAgICAgICAgIGFsdD1cIlZlcmNlbCBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgUG93ZXJlZCBieSBOZXh0SlNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlcixcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\rober\\\\Documents\\\\GitHub\\\\czytodramat\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccm9iZXJcXERvY3VtZW50c1xcR2l0SHViXFxjenl0b2RyYW1hdFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJQeUIsQUFJcUIsQUFRWSxVQVBiLFNBR0csR0FLZCxtSUFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXHJvYmVyXFxEb2N1bWVudHNcXEdpdEh1YlxcY3p5dG9kcmFtYXRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEZ1c2UgZnJvbSBcImZ1c2UuanNcIjtcbmltcG9ydCB7XG4gIFR5cG9ncmFwaHksXG4gIFRleHRGaWVsZCxcbiAgQnV0dG9uLFxuICBDaXJjdWxhclByb2dyZXNzXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IERvbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZVwiO1xuaW1wb3J0IEVycm9ySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yXCI7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcbmltcG9ydCBJbXBvcnRDb250YWN0c0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9JbXBvcnRDb250YWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwicmVhZHlcIik7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIHZhciBhdWRpbyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIC8vIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgLy8gaW5jbHVkZVNjb3JlOiBmYWxzZSxcbiAgICAvLyBzaG91bGRTb3J0OiB0cnVlLFxuICAgIC8vIGluY2x1ZGVNYXRjaGVzOiBmYWxzZSxcbiAgICAvLyBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gICAgLy8gbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICAgIC8vIGxvY2F0aW9uOiAwLFxuICAgIC8vIHRocmVzaG9sZDogMC42LFxuICAgIC8vIGRpc3RhbmNlOiAxMDAsXG4gICAgLy8gdXNlRXh0ZW5kZWRTZWFyY2g6IGZhbHNlLFxuICAgIGtleXM6IFtcInRpdGxlXCJdXG4gIH07XG4gIGNvbnN0IGdldFJlc3BvbnNlRnJvbUFwaSA9IGlucHV0ID0+IHtcbiAgICBzZXRTdGF0dXMoXCJsb2FkaW5nXCIpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly93b2xuZWxla3R1cnkucGwvYXBpL2Jvb2tzXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0gbmV3IEZ1c2UocmVzcG9uc2UuZGF0YSwgb3B0aW9ucykuc2VhcmNoKGlucHV0KTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhkYXRhKTtcbiAgICAgICAgLy8gIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YS5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gaW5wdXQpO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLml0ZW0gJiYgZGF0YS5pdGVtLmtpbmQgPT09IFwiRHJhbWF0XCIpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpLnBsYXkoKTtcbiAgICAgICAgICBzZXRTdGF0dXMoXCJ0cnVlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgJiYgZGF0YS5pdGVtICYmIGRhdGEuaXRlbS5raW5kICE9PSBcIkRyYW1hdFwiKSB7XG4gICAgICAgICAgYWxlcnQoXCJPdMOzxbwgbmllIHR5bSByYXplbVwiKTtcbiAgICAgICAgICBzZXRTdGF0dXMoXCJmYWxzZVwiKTtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKCFkYXRhIHx8ICFkYXRhLml0ZW0pIHtcbiAgICAgICAgICBhbGVydChcIlplc3JhxYJlbSBzacSZXCIpO1xuICAgICAgICAgIHNldFN0YXR1cyhcIm5vTWF0Y2hcIik7XG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIpO1xuICAgICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJy9iYWNrZ3JvdW5kLmpwZycpXCIsXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DenkgdG8gZHJhbWF0PzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvXCIgcmVmPXthdWRpb30gc3JjPVwiL2RyYW1hdC5tcDNcIj48L2F1ZGlvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkN6eSB0byBkcmFtYXQ/PC9UeXBvZ3JhcGh5PlxuICAgICAgICB7c3RhdHVzID09PSBcImxvYWRpbmdcIiAmJiAoXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjJlbVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge3N0YXR1cyA9PT0gXCJ0cnVlXCIgJiYgKFxuICAgICAgICAgIDxEb25lSWNvbiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMmVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fSAvPlxuICAgICAgICApfVxuICAgICAgICB7c3RhdHVzID09PSBcImZhbHNlXCIgJiYgKFxuICAgICAgICAgIDxDbG9zZUljb24gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjJlbVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge3N0YXR1cyA9PT0gXCJlcnJvclwiICYmIChcbiAgICAgICAgICA8RXJyb3JJY29uIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyZW1cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzdGF0dXMgPT09IFwibm9NYXRjaFwiICYmIChcbiAgICAgICAgICA8SW1wb3J0Q29udGFjdHNJY29uXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMmVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIzZW1cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250V2VpZ2h0OiA3MDAgfX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldwaXN6IMW8ZWJ5IHNwcmF3ZHppxIdcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldFJlc3BvbnNlRnJvbUFwaSh2YWx1ZSl9PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBTcHJhd2TFuiBcInt2YWx1ZX1cIlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EYWtzZVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgTWFkZSBieSBEYWtzXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1MCVcIiB9fVxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2F2YXRhcnMzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzQyMTY3NjA1P3M9NDYwJnU9NDlkYjA5NTMwZmUwZGM0YWZmOWFmOWUwMTFiN2E1MWZjNzY2Zjk4ZSZ2PTRcIlxuICAgICAgICAgICAgICBhbHQ9XCJWZXJjZWwgTG9nb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIFBvd2VyZWQgYnkgTmV4dEpTXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQ6aG92ZXIsXG4gICAgICAgIC5jYXJkOmZvY3VzLFxuICAgICAgICAuY2FyZDphY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\rober\\\\Documents\\\\GitHub\\\\czytodramat\\\\pages\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.92140be21701d4230b04.hot-update.js.map