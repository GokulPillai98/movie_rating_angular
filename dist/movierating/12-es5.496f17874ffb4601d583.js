function _createForOfIteratorHelper(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=_unsupportedIterableToArray(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,i=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){i=!0,l=t},f:function(){try{a||null==e.return||e.return()}finally{if(i)throw l}}}}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t})(t,n)}function _createSuper(t){var n=_isNativeReflectConstruct();return function(){var e,o=_getPrototypeOf(t);if(n){var r=_getPrototypeOf(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var n=_toPrimitive(t,"string");return"symbol"==typeof n?n:String(n)}function _toPrimitive(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}/*! For license information please see 12-es2015.496f17874ffb4601d583.js.LICENSE.txt */(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Fwaw:function(t,n,e){"use strict";e.d(n,"c",(function(){return u})),e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return i}));var o=e("Xd0L"),r=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],l=_createClass((function t(n){_classCallCheck(this,t),this._elementRef=n})),a=function(t){_inherits(e,t);var n=_createSuper(e);function e(t,o,l){var a;_classCallCheck(this,e),(a=n.call(this,t))._focusMonitor=o,a._animationMode=l,a.isRoundButton=a._hasHostAttributes("mat-fab","mat-mini-fab"),a.isIconButton=a._hasHostAttributes("mat-icon-button");var i,u=_createForOfIteratorHelper(r);try{for(u.s();!(i=u.n()).done;){var s=i.value;a._hasHostAttributes(s)&&a._getHostElement().classList.add(s)}}catch(c){u.e(c)}finally{u.f()}return t.nativeElement.classList.add("mat-button-base"),a._focusMonitor.monitor(a._elementRef,!0),a.isRoundButton&&(a.color="accent"),a}return _createClass(e,[{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"focus",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"program",n=arguments.length>1?arguments[1]:void 0;this._focusMonitor.focusVia(this._getHostElement(),t,n)}},{key:"_getHostElement",value:function(){return this._elementRef.nativeElement}},{key:"_isRippleDisabled",value:function(){return this.disableRipple||this.disabled}},{key:"_hasHostAttributes",value:function(){for(var t=this,n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];return e.some((function(n){return t._getHostElement().hasAttribute(n)}))}}]),e}(Object(o.A)(Object(o.C)(Object(o.B)(l)))),i=function(t){_inherits(e,t);var n=_createSuper(e);function e(t,o,r){return _classCallCheck(this,e),n.call(this,o,t,r)}return _createClass(e,[{key:"_haltDisabledEvents",value:function(t){this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}}]),e}(a),u=_createClass((function t(){_classCallCheck(this,t)}))},bujt:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return u}));var o=e("8Y7J"),r=(e("Fwaw"),e("SVse"),e("IP0z"),e("Xd0L")),l=(e("cUpR"),e("/HVE")),a=e("omvX"),i=(e("5GAg"),o.ub({encapsulation:2,styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],data:{}}));function u(t){return o.Sb(2,[o.Ob(671088640,1,{ripple:0}),(t()(),o.wb(1,0,null,null,1,"span",[["class","mat-button-wrapper"]],null,null,null,null,null)),o.Hb(null,0),(t()(),o.wb(3,0,null,null,1,"div",[["class","mat-button-ripple mat-ripple"],["matRipple",""]],[[2,"mat-button-ripple-round",null],[2,"mat-ripple-unbounded",null]],null,null,null,null)),o.vb(4,212992,[[1,4]],0,r.t,[o.m,o.C,l.a,[2,r.k],[2,a.a]],{centered:[0,"centered"],disabled:[1,"disabled"],trigger:[2,"trigger"]},null),(t()(),o.wb(5,0,null,null,0,"div",[["class","mat-button-focus-overlay"]],null,null,null,null,null))],(function(t,n){var e=n.component;t(n,4,0,e.isIconButton,e._isRippleDisabled(),e._getHostElement())}),(function(t,n){var e=n.component;t(n,3,0,e.isRoundButton||e.isIconButton,o.Ib(n,4).unbounded)}))}},qz43:function(t,n,e){"use strict";e.r(n);var o=e("8Y7J"),r=_createClass((function t(){_classCallCheck(this,t)})),l=e("pMnS"),a=e("tp9R"),i=e("c6or"),u=e("iInd"),s=e("SVse"),c=e("bujt"),b=e("Fwaw"),m=e("5GAg"),f=e("omvX"),d=e("U2p0"),p=function(){function t(n){_classCallCheck(this,t),this._movie=n,this.loader=!0}return _createClass(t,[{key:"ngOnInit",value:function(){this.MovieGenre()}},{key:"MovieGenre",value:function(){var t=this;this._movie.getGenres().pipe(Object(d.delay)(2e3)).subscribe((function(n){t.genreslist=n.genres,t.loader=!1}))}}]),t}(),h=e("Di5K"),v=o.ub({encapsulation:0,styles:[[".genre-card[_ngcontent-%COMP%]{display:inline-block;margin:14px 10px;padding:12px 0;vertical-align:top;color:#fff!important;font-size:2rem}.mt_[_ngcontent-%COMP%]{margin:10rem 5rem}@media (min-width:1200px){.genre-card[_ngcontent-%COMP%]{width:20%}}.blue-theme[_ngcontent-%COMP%]{background-color:#dc4666;border-radius:1px}"]],data:{}});function y(t){return o.Sb(0,[(t()(),o.wb(0,0,null,null,1,"app-skeleton",[],null,null,null,a.b,a.a)),o.vb(1,114688,null,0,i.a,[],null,null)],(function(t,n){t(n,1,0)}),null)}function g(t){return o.Sb(0,[(t()(),o.wb(0,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(t,n,e){var r=!0;return"click"===n&&(r=!1!==o.Ib(t,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),o.vb(1,671744,null,0,u.p,[u.m,u.a,s.i],{routerLink:[0,"routerLink"]},null),(t()(),o.wb(2,0,null,null,2,"button",[["aria-label","Genres"],["class","genre-card blue-theme"],["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,c.b,c.a)),o.vb(3,180224,null,0,b.b,[o.m,m.f,[2,f.a]],{color:[0,"color"]},null),(t()(),o.Qb(4,0,[" "," "]))],(function(t,n){t(n,1,0,o.Ab(2,"/genres/",n.context.$implicit.id,"/",n.context.$implicit.name,"")),t(n,3,0,"primary")}),(function(t,n){t(n,0,0,o.Ib(n,1).target,o.Ib(n,1).href),t(n,2,0,o.Ib(n,3).disabled||null,"NoopAnimations"===o.Ib(n,3)._animationMode),t(n,4,0,n.context.$implicit.name)}))}function k(t){return o.Sb(0,[(t()(),o.wb(0,0,null,null,4,"div",[["class","col-md-12 text-center"]],null,null,null,null,null)),(t()(),o.wb(1,0,null,null,1,"h2",[["class","mb-5 mt-5"]],null,null,null,null,null)),(t()(),o.Qb(-1,null,["Movies Genres"])),(t()(),o.lb(16777216,null,null,1,null,g)),o.vb(4,278528,null,0,s.k,[o.S,o.P,o.u],{ngForOf:[0,"ngForOf"]},null)],(function(t,n){t(n,4,0,n.component.genreslist)}),null)}function w(t){return o.Sb(0,[(t()(),o.wb(0,0,null,null,1,"app-skeleton",[],null,null,null,a.b,a.a)),o.vb(1,114688,null,0,i.a,[],null,null)],(function(t,n){t(n,1,0)}),null)}function _(t){return o.Sb(0,[(t()(),o.wb(0,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(t,n,e){var r=!0;return"click"===n&&(r=!1!==o.Ib(t,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),o.vb(1,671744,null,0,u.p,[u.m,u.a,s.i],{routerLink:[0,"routerLink"]},null),(t()(),o.wb(2,0,null,null,2,"button",[["aria-label","Genres"],["class","genre-card blue-theme"],["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,c.b,c.a)),o.vb(3,180224,null,0,b.b,[o.m,m.f,[2,f.a]],{color:[0,"color"]},null),(t()(),o.Qb(4,0,[" "," "]))],(function(t,n){t(n,1,0,o.Ab(2,"/genres-tv/",n.context.$implicit.id,"/",n.context.$implicit.name,"")),t(n,3,0,"primary")}),(function(t,n){t(n,0,0,o.Ib(n,1).target,o.Ib(n,1).href),t(n,2,0,o.Ib(n,3).disabled||null,"NoopAnimations"===o.Ib(n,3)._animationMode),t(n,4,0,n.context.$implicit.name)}))}function x(t){return o.Sb(0,[(t()(),o.wb(0,0,null,null,4,"div",[["class","col-md-12 text-center"]],null,null,null,null,null)),(t()(),o.wb(1,0,null,null,1,"h2",[["class","mt-5 mb-5"]],null,null,null,null,null)),(t()(),o.Qb(-1,null,["TV GENRES"])),(t()(),o.lb(16777216,null,null,1,null,_)),o.vb(4,278528,null,0,s.k,[o.S,o.P,o.u],{ngForOf:[0,"ngForOf"]},null)],(function(t,n){t(n,4,0,n.component.genreslist)}),null)}function O(t){return o.Sb(0,[(t()(),o.wb(0,0,null,null,5,"div",[["class","container-fluid mt-20 mb-20"]],null,null,null,null,null)),(t()(),o.lb(16777216,null,null,1,null,y)),o.vb(2,16384,null,0,s.l,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(t()(),o.wb(3,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(t()(),o.lb(16777216,null,null,1,null,k)),o.vb(5,16384,null,0,s.l,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(t()(),o.wb(6,0,null,null,5,"div",[["class","container-fluid mt-20 mb-20"]],null,null,null,null,null)),(t()(),o.lb(16777216,null,null,1,null,w)),o.vb(8,16384,null,0,s.l,[o.S,o.P],{ngIf:[0,"ngIf"]},null),(t()(),o.wb(9,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(t()(),o.lb(16777216,null,null,1,null,x)),o.vb(11,16384,null,0,s.l,[o.S,o.P],{ngIf:[0,"ngIf"]},null)],(function(t,n){var e=n.component;t(n,2,0,e.loader),t(n,5,0,!e.loader),t(n,8,0,e.loader),t(n,11,0,!e.loader)}),null)}var z=o.sb("app-genre-list",p,(function(t){return o.Sb(0,[(t()(),o.wb(0,0,null,null,1,"app-genre-list",[],null,null,null,O,v)),o.vb(1,114688,null,0,p,[h.a],null,null)],(function(t,n){t(n,1,0)}),null)}),{},{},[]),C=_createClass((function t(){_classCallCheck(this,t)})),P=e("IP0z"),I=e("Xd0L"),S=e("cUpR"),A=e("/HVE"),R=e("WzhS"),G=e("iEmA");e.d(n,"GenreListModuleNgFactory",(function(){return j}));var j=o.tb(r,[],(function(t){return o.Fb([o.Gb(512,o.k,o.eb,[[8,[l.a,z]],[3,o.k],o.A]),o.Gb(4608,s.n,s.m,[o.w,[2,s.E]]),o.Gb(1073742336,s.c,s.c,[]),o.Gb(1073742336,u.q,u.q,[[2,u.v],[2,u.m]]),o.Gb(1073742336,C,C,[]),o.Gb(1073742336,P.a,P.a,[]),o.Gb(1073742336,I.l,I.l,[[2,I.d],[2,S.f]]),o.Gb(1073742336,A.b,A.b,[]),o.Gb(1073742336,I.u,I.u,[]),o.Gb(1073742336,b.c,b.c,[]),o.Gb(1073742336,R.c,R.c,[]),o.Gb(1073742336,G.a,G.a,[]),o.Gb(1073742336,r,r,[]),o.Gb(1024,u.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);