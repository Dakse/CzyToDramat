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
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__);
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
    if (status !== "loading") {
      setStatus("loading");
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://wolnelektury.pl/api/books").then(function (response) {
        var data = new fuse_js__WEBPACK_IMPORTED_MODULE_3__["default"](response.data, options).search(input)[0];

        if (data && data.item && data.item.kind === "Dramat") {
          setStatus("true");
          document.getElementById("dramat").play();
        } else if (data && data.item && data.item.kind !== "Dramat") {
          setStatus("false");
          document.getElementById("porazka").play();
        } else {
          setStatus("noMatch");
          document.getElementById("nieporozumienie").play();
        }
      })["catch"](function (error) {
        document.getElementById("zepsulo").play();
        setStatus("error");
      });
    }
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
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Czy to dramat?"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })), __jsx("audio", {
    id: "dramat",
    src: "/dramat.mp3",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx("audio", {
    id: "zepsulo",
    src: "/error.mp3",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx("audio", {
    id: "porazka",
    src: "/porazka.mp3",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx("audio", {
    id: "nieporozumienie",
    src: "/nieporozumienie.mp3",
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
    size: 90,
    style: {
      marginTop: "0.5em",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), status === "true" && __jsx("div", {
    style: {
      textAlign: "center",
      color: "#4caf50"
    },
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      marginTop: "0.5em",
      textAlign: "center",
      fontSize: 100,
      color: "#4caf50"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, value + " jest dramatem.")), status === "false" && __jsx("div", {
    style: {
      textAlign: "center",
      color: "#f44336"
    },
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      marginTop: "0.5em",
      textAlign: "center",
      fontSize: 100,
      color: "#f44336"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, value + " nie jest dramatem.")), status === "error" && __jsx("div", {
    style: {
      textAlign: "center",
      color: "#f44336"
    },
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      marginTop: "0.5em",
      textAlign: "center",
      fontSize: 100,
      color: "#f44336"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Błąd ładowania, spróbuj ponownie")), status === "noMatch" && __jsx("div", {
    style: {
      textAlign: "center",
      color: "gray"
    },
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      marginTop: "0.5em",
      textAlign: "center",
      fontSize: 100,
      color: "gray"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }), __jsx("br", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, "Nie znalazłem utworu o takiej nazwie w bazie")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    align: "center",
    style: {
      paddingTop: "3em",
      textAlign: "center",
      fontWeight: 700
    },
    placeholder: "Wpisz \u017Ceby sprawdzi\u0107",
    onChange: function onChange() {
      setValue(event.target.value), setStatus("ready");
    },
    onKeyPress: function onKeyPress() {
      if (event.keyCode === 13) {
        getResponseFromApi(value);
      }
    },
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    disabled: status === "loading",
    onClick: function onClick() {
      return getResponseFromApi(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, " ", "Sprawd\u017A")), __jsx("footer", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/Dakse",
    target: "_blank",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
      lineNumber: 169,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "https://nextjs.org/",
    target: "_blank",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, "Powered by NextJS"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3345803726",
    __self: this
  }, ".container.jsx-1799183244{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-1799183244{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1799183244{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1799183244 img.jsx-1799183244{margin-left:0.5rem;}footer.jsx-1799183244 a.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-1799183244{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1799183244 a.jsx-1799183244{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1799183244 a.jsx-1799183244:hover,.title.jsx-1799183244 a.jsx-1799183244:focus,.title.jsx-1799183244 a.jsx-1799183244:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1799183244{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1799183244,.description.jsx-1799183244{text-align:center;}.description.jsx-1799183244{line-height:1.5;font-size:1.5rem;}code.jsx-1799183244{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-1799183244{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1799183244:hover,.card.jsx-1799183244:focus,.card.jsx-1799183244:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1799183244 h3.jsx-1799183244{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1799183244 p.jsx-1799183244{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1799183244{height:1em;}@media (max-width:600px){.grid.jsx-1799183244{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccm9iZXJcXERvY3VtZW50c1xcR2l0SHViXFxjenl0b2RyYW1hdFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFMa0IsQUFHNEIsQUFTRixBQVNKLEFBU1EsQUFJTixBQU1DLEFBS0EsQUFPWSxBQUlqQixBQU9TLEFBSUYsQUFLRyxBQVNOLEFBVUQsQUFjRSxBQUtJLEFBS1QsQUFNRSxBQUtFLFNBckVJLEFBMkRDLEVBOUZMLEFBb0dmLEFBSzBCLENBbkNULEVBbkRNLEFBS0EsQUE0REEsQ0E3RmQsQ0F1RFUsQ0FoRUEsQ0E0RG5CLEFBK0NtQixDQWhGbkIsQUEwQ29CLEtBbERXLEVBbUNkLENBMkRDLE1BaERsQixDQWhFZSxDQXNHZixBQUtBLEVBdENrQixJQWZsQixFQTJEQSxLQXhHZSxLQVVBLEFBbURJLE9BdEJuQixJQVhBLEFBS0EsTUE4QnNFLElBMUM3QyxBQStDSixJQVdKLFdBbUNmLElBbENnQixlQXhGTSxDQXlGUixhQWhGUSxDQWlGRCxJQXZFRSx3Q0EwREEsTUEvQ0osQUE2RE0sYUExRkYsS0F1RXpCLE9Bb0JxQixFQWxGSSxpQkFtRjhCLFNBekVsQyx3Q0FXckIsQUErQ2lCLG1CQTVFSSxjQVNBLG9CQVVyQixJQTJEa0IsTUFjbEIsVUFia0IsZ0JBQ2xCLHVCQS9FQSxjQVNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccm9iZXJcXERvY3VtZW50c1xcR2l0SHViXFxjenl0b2RyYW1hdFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgRnVzZSBmcm9tIFwiZnVzZS5qc1wiO1xuaW1wb3J0IHtcbiAgVHlwb2dyYXBoeSxcbiAgVGV4dEZpZWxkLFxuICBCdXR0b24sXG4gIENpcmN1bGFyUHJvZ3Jlc3Ncbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgRG9uZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Eb25lXCI7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JcIjtcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcInJlYWR5XCIpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIC8vIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgLy8gaW5jbHVkZVNjb3JlOiBmYWxzZSxcbiAgICAvLyBzaG91bGRTb3J0OiB0cnVlLFxuICAgIC8vIGluY2x1ZGVNYXRjaGVzOiBmYWxzZSxcbiAgICAvLyBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gICAgLy8gbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICAgIC8vIGxvY2F0aW9uOiAwLFxuICAgIC8vIHRocmVzaG9sZDogMC42LFxuICAgIC8vIGRpc3RhbmNlOiAxMDAsXG4gICAgLy8gdXNlRXh0ZW5kZWRTZWFyY2g6IGZhbHNlLFxuICAgIGtleXM6IFtcInRpdGxlXCJdXG4gIH07XG4gIGNvbnN0IGdldFJlc3BvbnNlRnJvbUFwaSA9IGlucHV0ID0+IHtcbiAgICBpZiAoc3RhdHVzICE9PSBcImxvYWRpbmdcIikge1xuICAgICAgc2V0U3RhdHVzKFwibG9hZGluZ1wiKTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCJodHRwczovL3dvbG5lbGVrdHVyeS5wbC9hcGkvYm9va3NcIilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gbmV3IEZ1c2UocmVzcG9uc2UuZGF0YSwgb3B0aW9ucykuc2VhcmNoKGlucHV0KVswXTtcbiAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLml0ZW0gJiYgZGF0YS5pdGVtLmtpbmQgPT09IFwiRHJhbWF0XCIpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcInRydWVcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyYW1hdFwiKS5wbGF5KCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhICYmIGRhdGEuaXRlbSAmJiBkYXRhLml0ZW0ua2luZCAhPT0gXCJEcmFtYXRcIikge1xuICAgICAgICAgICAgc2V0U3RhdHVzKFwiZmFsc2VcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcmF6a2FcIikucGxheSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoXCJub01hdGNoXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuaWVwb3JvenVtaWVuaWVcIikucGxheSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInplcHN1bG9cIikucGxheSgpO1xuICAgICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJy9iYWNrZ3JvdW5kLmpwZycpXCIsXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DenkgdG8gZHJhbWF0PzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxhdWRpbyBpZD1cImRyYW1hdFwiIHNyYz1cIi9kcmFtYXQubXAzXCI+PC9hdWRpbz5cbiAgICAgIDxhdWRpbyBpZD1cInplcHN1bG9cIiBzcmM9XCIvZXJyb3IubXAzXCI+PC9hdWRpbz5cbiAgICAgIDxhdWRpbyBpZD1cInBvcmF6a2FcIiBzcmM9XCIvcG9yYXprYS5tcDNcIj48L2F1ZGlvPlxuICAgICAgPGF1ZGlvIGlkPVwibmllcG9yb3p1bWllbmllXCIgc3JjPVwiL25pZXBvcm96dW1pZW5pZS5tcDNcIj48L2F1ZGlvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkN6eSB0byBkcmFtYXQ/PC9UeXBvZ3JhcGh5PlxuICAgICAgICB7c3RhdHVzID09PSBcImxvYWRpbmdcIiAmJiAoXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NcbiAgICAgICAgICAgIHNpemU9ezkwfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjAuNWVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzdGF0dXMgPT09IFwidHJ1ZVwiICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiIzRjYWY1MFwiIH19PlxuICAgICAgICAgICAgPERvbmVJY29uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNWVtXCIsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMDAsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzRjYWY1MFwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57dmFsdWUgKyBcIiBqZXN0IGRyYW1hdGVtLlwifTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3N0YXR1cyA9PT0gXCJmYWxzZVwiICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiI2Y0NDMzNlwiIH19PlxuICAgICAgICAgICAgPENsb3NlSWNvblxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVlbVwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAwLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmNDQzMzZcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgIHt2YWx1ZSArIFwiIG5pZSBqZXN0IGRyYW1hdGVtLlwifVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7c3RhdHVzID09PSBcImVycm9yXCIgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCIjZjQ0MzM2XCIgfX0+XG4gICAgICAgICAgICA8RXJyb3JJY29uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNWVtXCIsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMDAsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2Y0NDMzNlwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAge1wiQsWCxIVkIMWCYWRvd2FuaWEsIHNwcsOzYnVqIHBvbm93bmllXCJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtzdGF0dXMgPT09IFwibm9NYXRjaFwiICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiZ3JheVwiIH19PlxuICAgICAgICAgICAgPFNlYXJjaEljb25cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMC41ZW1cIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEwMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJncmF5XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICB7XCJOaWUgem5hbGF6xYJlbSB1dHdvcnUgbyB0YWtpZWogbmF6d2llIHcgYmF6aWVcIn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjNlbVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRXZWlnaHQ6IDcwMCB9fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3Bpc3ogxbxlYnkgc3ByYXdkemnEh1wiXG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSksIHNldFN0YXR1cyhcInJlYWR5XCIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25LZXlQcmVzcz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgIGdldFJlc3BvbnNlRnJvbUFwaSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtzdGF0dXMgPT09IFwibG9hZGluZ1wifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldFJlc3BvbnNlRnJvbUFwaSh2YWx1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgU3ByYXdkxbpcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGFrc2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIE1hZGUgYnkgRGFrc1xuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS80MjE2NzYwNT9zPTQ2MCZ1PTQ5ZGIwOTUzMGZlMGRjNGFmZjlhZjllMDExYjdhNTFmYzc2NmY5OGUmdj00XCJcbiAgICAgICAgICAgICAgYWx0PVwiVmVyY2VsIExvZ29cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICBQb3dlcmVkIGJ5IE5leHRKU1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgICAuY2FyZDpmb2N1cyxcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\rober\\\\Documents\\\\GitHub\\\\czytodramat\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccm9iZXJcXERvY3VtZW50c1xcR2l0SHViXFxjenl0b2RyYW1hdFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdUeUIsQUFJcUIsQUFRWSxVQVBiLFNBR0csR0FLZCxtSUFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXHJvYmVyXFxEb2N1bWVudHNcXEdpdEh1YlxcY3p5dG9kcmFtYXRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEZ1c2UgZnJvbSBcImZ1c2UuanNcIjtcbmltcG9ydCB7XG4gIFR5cG9ncmFwaHksXG4gIFRleHRGaWVsZCxcbiAgQnV0dG9uLFxuICBDaXJjdWxhclByb2dyZXNzXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IERvbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZVwiO1xuaW1wb3J0IEVycm9ySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yXCI7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJyZWFkeVwiKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAvLyBpc0Nhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgIC8vIGluY2x1ZGVTY29yZTogZmFsc2UsXG4gICAgLy8gc2hvdWxkU29ydDogdHJ1ZSxcbiAgICAvLyBpbmNsdWRlTWF0Y2hlczogZmFsc2UsXG4gICAgLy8gZmluZEFsbE1hdGNoZXM6IGZhbHNlLFxuICAgIC8vIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgICAvLyBsb2NhdGlvbjogMCxcbiAgICAvLyB0aHJlc2hvbGQ6IDAuNixcbiAgICAvLyBkaXN0YW5jZTogMTAwLFxuICAgIC8vIHVzZUV4dGVuZGVkU2VhcmNoOiBmYWxzZSxcbiAgICBrZXlzOiBbXCJ0aXRsZVwiXVxuICB9O1xuICBjb25zdCBnZXRSZXNwb25zZUZyb21BcGkgPSBpbnB1dCA9PiB7XG4gICAgaWYgKHN0YXR1cyAhPT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgIHNldFN0YXR1cyhcImxvYWRpbmdcIik7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiaHR0cHM6Ly93b2xuZWxla3R1cnkucGwvYXBpL2Jvb2tzXCIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGdXNlKHJlc3BvbnNlLmRhdGEsIG9wdGlvbnMpLnNlYXJjaChpbnB1dClbMF07XG4gICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pdGVtICYmIGRhdGEuaXRlbS5raW5kID09PSBcIkRyYW1hdFwiKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoXCJ0cnVlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcmFtYXRcIikucGxheSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSAmJiBkYXRhLml0ZW0gJiYgZGF0YS5pdGVtLmtpbmQgIT09IFwiRHJhbWF0XCIpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcImZhbHNlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3JhemthXCIpLnBsYXkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U3RhdHVzKFwibm9NYXRjaFwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmllcG9yb3p1bWllbmllXCIpLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6ZXBzdWxvXCIpLnBsYXkoKTtcbiAgICAgICAgICBzZXRTdGF0dXMoXCJlcnJvclwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvYmFja2dyb3VuZC5qcGcnKVwiLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3p5IHRvIGRyYW1hdD88L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YXVkaW8gaWQ9XCJkcmFtYXRcIiBzcmM9XCIvZHJhbWF0Lm1wM1wiPjwvYXVkaW8+XG4gICAgICA8YXVkaW8gaWQ9XCJ6ZXBzdWxvXCIgc3JjPVwiL2Vycm9yLm1wM1wiPjwvYXVkaW8+XG4gICAgICA8YXVkaW8gaWQ9XCJwb3JhemthXCIgc3JjPVwiL3BvcmF6a2EubXAzXCI+PC9hdWRpbz5cbiAgICAgIDxhdWRpbyBpZD1cIm5pZXBvcm96dW1pZW5pZVwiIHNyYz1cIi9uaWVwb3JvenVtaWVuaWUubXAzXCI+PC9hdWRpbz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj5DenkgdG8gZHJhbWF0PzwvVHlwb2dyYXBoeT5cbiAgICAgICAge3N0YXR1cyA9PT0gXCJsb2FkaW5nXCIgJiYgKFxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzXG4gICAgICAgICAgICBzaXplPXs5MH1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwLjVlbVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7c3RhdHVzID09PSBcInRydWVcIiAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcIiM0Y2FmNTBcIiB9fT5cbiAgICAgICAgICAgIDxEb25lSWNvblxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVlbVwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAwLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM0Y2FmNTBcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3ZhbHVlICsgXCIgamVzdCBkcmFtYXRlbS5cIn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtzdGF0dXMgPT09IFwiZmFsc2VcIiAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcIiNmNDQzMzZcIiB9fT5cbiAgICAgICAgICAgIDxDbG9zZUljb25cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMC41ZW1cIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEwMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZjQ0MzM2XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICB7dmFsdWUgKyBcIiBuaWUgamVzdCBkcmFtYXRlbS5cIn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3N0YXR1cyA9PT0gXCJlcnJvclwiICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiI2Y0NDMzNlwiIH19PlxuICAgICAgICAgICAgPEVycm9ySWNvblxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVlbVwiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTAwLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmNDQzMzZcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgIHtcIkLFgsSFZCDFgmFkb3dhbmlhLCBzcHLDs2J1aiBwb25vd25pZVwifVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7c3RhdHVzID09PSBcIm5vTWF0Y2hcIiAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcImdyYXlcIiB9fT5cbiAgICAgICAgICAgIDxTZWFyY2hJY29uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNWVtXCIsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMDAsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JheVwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAge1wiTmllIHpuYWxhesWCZW0gdXR3b3J1IG8gdGFraWVqIG5hendpZSB3IGJhemllXCJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIzZW1cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250V2VpZ2h0OiA3MDAgfX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldwaXN6IMW8ZWJ5IHNwcmF3ZHppxIdcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpLCBzZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uS2V5UHJlc3M9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICBnZXRSZXNwb25zZUZyb21BcGkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17c3RhdHVzID09PSBcImxvYWRpbmdcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRSZXNwb25zZUZyb21BcGkodmFsdWUpfVxuICAgICAgICA+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIFNwcmF3ZMW6XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0Rha3NlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICBNYWRlIGJ5IERha3NcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19XG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNDIxNjc2MDU/cz00NjAmdT00OWRiMDk1MzBmZTBkYzRhZmY5YWY5ZTAxMWI3YTUxZmM3NjZmOThlJnY9NFwiXG4gICAgICAgICAgICAgIGFsdD1cIlZlcmNlbCBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgUG93ZXJlZCBieSBOZXh0SlNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlcixcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\rober\\\\Documents\\\\GitHub\\\\czytodramat\\\\pages\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c3bb4c0c60f9badd43cc.hot-update.js.map