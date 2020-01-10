(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Teacher.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Teacher.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      courses: [],
      classroom: {
        data: ""
      },
      ci: "",
      teacherCourses: [],
      nameForo: "",
      exist: false,
      foros: []
    };
  },
  methods: {
    add: function add() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/forum/create", {
        name: this.nameForo,
        classrooms_courses_idcourse: this.classroom.data
      }).then(function (data) {
        _this.ci = "";
        _this.teacherCourses = [];
        _this.nameForo = "";
        alert("Foro agregado");
      })["catch"](function (err) {
        console.log(err);
      });
    },
    searchTeacher: function searchTeacher() {
      var _this2 = this;

      this.teacherCourses = this.courses.filter(function (c) {
        return c.teacher.ci == _this2.ci;
      });
    },
    selected: function selected(e) {
      this.nameForo = "";
      this.exist = true;
    },
    getCourses: function getCourses() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/courses").then(function (_ref) {
        var data = _ref.data;
        _this3.courses = data;
      })["catch"](function () {
        console.log("courses not found!");
      });
    },
    getall: function getall() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/forum").then(function (_ref2) {
        var data = _ref2.data;
        _this4.foros = data;
        console.log(data);
        console.log("Foror", _this4.foros);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.getCourses();
    this.getall();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Teacher.vue?vue&type=template&id=3a6a3447&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Teacher.vue?vue&type=template&id=3a6a3447& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "docente" } }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("h3", [_vm._v("Publica un foro")]),
          _vm._v(" "),
          _c("div", { staticClass: "card p-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.ci,
                    expression: "ci"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "number", name: "name", id: "name" },
                domProps: { value: _vm.ci },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.ci = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "" } }, [_vm._v("Ingresa tu ci")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn waves-effect waves-light",
                  on: { click: _vm.searchTeacher }
                },
                [
                  _vm._v(
                    "\n                            Buscar\n                        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.classroom.data,
                    expression: "classroom.data"
                  }
                ],
                staticClass: "form-control form-control-lg",
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.classroom,
                        "data",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                    _vm.selected
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "0", disabled: "" } }, [
                  _vm._v("Selecciona el curso")
                ]),
                _vm._v(" "),
                _vm._l(_vm.teacherCourses, function(c) {
                  return _c(
                    "option",
                    { key: c.id, domProps: { value: c.id } },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(c.name) +
                          "\n                        "
                      )
                    ]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _vm.exist
              ? _c("div", { staticClass: "form-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.nameForo,
                        expression: "nameForo"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "name", id: "name" },
                    domProps: { value: _vm.nameForo },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.nameForo = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Nombre del foro")
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn waves-effect waves-light",
                  on: { click: _vm.add }
                },
                [
                  _vm._v(
                    "\n                            Agregar foro\n                        "
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("h3", [_vm._v("Foros abiertos")]),
          _vm._v(" "),
          _c("table", [
            _c(
              "tbody",
              _vm._l(_vm.foros, function(f) {
                return _c("tr", { key: f.idforum }, [
                  _c("td", [_vm._v(_vm._s(f.forum.name))])
                ])
              }),
              0
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Teacher.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Teacher.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Teacher_vue_vue_type_template_id_3a6a3447___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Teacher.vue?vue&type=template&id=3a6a3447& */ "./resources/js/components/Teacher.vue?vue&type=template&id=3a6a3447&");
/* harmony import */ var _Teacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Teacher.vue?vue&type=script&lang=js& */ "./resources/js/components/Teacher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Teacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Teacher_vue_vue_type_template_id_3a6a3447___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Teacher_vue_vue_type_template_id_3a6a3447___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Teacher.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Teacher.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Teacher.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Teacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Teacher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Teacher.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Teacher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Teacher.vue?vue&type=template&id=3a6a3447&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Teacher.vue?vue&type=template&id=3a6a3447& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Teacher_vue_vue_type_template_id_3a6a3447___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Teacher.vue?vue&type=template&id=3a6a3447& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Teacher.vue?vue&type=template&id=3a6a3447&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Teacher_vue_vue_type_template_id_3a6a3447___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Teacher_vue_vue_type_template_id_3a6a3447___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);