"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('borrowers/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'borrowers/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _borrowersConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _borrowersConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _borrowersConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _borrowersConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('borrowers/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'borrowers/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _borrowersConfigEnvironment) {

  var name = _borrowersConfigEnvironment['default'].APP.name;
  var version = _borrowersConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('borrowers/components/input-checkbox', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			isCheck: function isCheck() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );
				var this_checked = $("#" + this_id).find("input").attr("checked");
				//console.log( this_checked );
				if (!this_checked) {
					$("#" + this_id).find("input").attr("checked", true);
					$("#" + this_id).find("span").css("background", "#999");
				} else {
					$("#" + this_id).find("input").attr("checked", false);
					$("#" + this_id).find("span").css("background", "transparent");
				}
			},
			overCss: function overCss() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );
				$("#" + this_id).find("input").css("border-color", "#666");
			},
			outCss: function outCss() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );
				$("#" + this_id).find("input").css("border-color", "#ccc");
			}
		}
	});
});
define("borrowers/components/input-dropdown", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Component.extend({
		items: _ember["default"].computed("this.get('label')", function () {
			return this.get("label").split(",");
		}),
		actions: {
			doDropdown: function doDropdown() {
				var $ = _ember["default"].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_display = $("#" + this_id).find("i").hasClass("icon-up-dir");
				//console.log( this_display );

				if (!this_display) {
					$("#" + this_id).find("ul").slideDown(200);
					$("#" + this_id).find("i").addClass("icon-up-dir").removeClass("icon-down-dir");
				} else {
					$("#" + this_id).find("ul").slideUp(200);
					$("#" + this_id).find("i").addClass("icon-down-dir").removeClass("icon-up-dir");
				}
			},
			selectOne: function selectOne() {
				var $ = _ember["default"].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_li = $("#" + this_id).find("li[class='checked']");
				//console.log( this_li.length );	

				var this_value = this_li.html();
				//console.log( this_value );

				$("#" + this_id).find("input").attr("value", this_value);
				$("#" + this_id).find("ul").slideUp(200);
				$("#" + this_id).find("i").addClass("icon-down-dir").removeClass("icon-up-dir");
			}
		}
	});
});
define('borrowers/components/input-password', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			showKey: function showKey() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				$("#" + this_id).find(".hide").removeClass("hide").siblings("i").addClass("hide");
				$("#" + this_id).find("input").attr("type", "text");
			},
			hideKey: function hideKey() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				$("#" + this_id).find(".hide").removeClass("hide").siblings("i").addClass("hide");
				$("#" + this_id).find("input").attr("type", "password");
			}
		}
	});
});
define('borrowers/components/input-radio', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			isCheck: function isCheck() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );
				var this_checked = $("#" + this_id).find("input").attr("checked");
				//console.log( this_checked )
				var this_box = $("#" + this_id).parents(".input-radio-box");
				//console.log( this_radio_length );
				var this_radio_length = $("#" + this_id).parents(".input-radio-box").find("input[type='radio']").length;
				//console.log( this_radio_length );
				var this_arr_checked = this_box.find("input[type='radio']").eq(i).attr("checked");
				//console.log( this_arr_checked );

				if (!this_checked) {
					//每次点击清空checked以及样式
					for (var i = 0; i < this_radio_length; i++) {
						this_box.find("input[type='radio']").eq(i).attr("checked", false).siblings("span").css("background", "transparent");
					};
					//当前添加checked以及样式
					$("#" + this_id).find("input[type='radio']").attr("checked", true).siblings("span").css("background", "#999");
				}
			},
			overCss: function overCss() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );
				$("#" + this_id).find("input").css("border-color", "#666");
			},
			outCss: function outCss() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );
				$("#" + this_id).find("input").css("border-color", "#ccc");
			}
		}
	});
});
define('borrowers/components/input-text', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('borrowers/components/input-toggle', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			doToggle: function doToggle() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );
				var this_checked = $("#" + this_id).find("input").attr("checked");
				//console.log( this_checked );
				if (!this_checked) {
					$("#" + this_id).find("input").attr("checked", true);
					$("#" + this_id).find("label:first").hide().fadeIn(150);
					$("#" + this_id).find("label:last").show().fadeOut(150);
				} else {
					$("#" + this_id).find("input").attr("checked", false);
					$("#" + this_id).find("label:last").hide().fadeIn(150);
					$("#" + this_id).find("label:first").show().fadeOut(150);
				}
			}
		}
	});
});
define("borrowers/components/span-dropdown", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Component.extend({
		contents: _ember["default"].computed("this.get('label')", function () {
			console.log(this.get("label").split(","));
			return this.get("label").split(",");
		}),
		urls: _ember["default"].computed("this.get('link')", function () {
			console.log(this.get("link").split(","));
			return this.get("link").split(",");
		}),
		items: _ember["default"].computed("this.get('contents')", "this.get('urls')", function () {
			var items = [];
			/*var items.content="";
   var items.url="";*/
			for (var i = 0; i < this.get('contents').length; i++) {
				//items[0].content=this.get('contents')[0];
				items[0].url = this.get('urls')[0];
			}
			console.log(items);
			return items;
		}),
		actions: {
			doDropdown: function doDropdown() {
				var $ = _ember["default"].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_display = $("#" + this_id).find("i").hasClass("icon-up-dir");
				//console.log( this_display );

				if (!this_display) {
					$("#" + this_id).find("ul").slideDown(200);
					$("#" + this_id).find("i").addClass("icon-up-dir").removeClass("icon-down-dir");
				} else {
					$("#" + this_id).find("ul").slideUp(200);
					$("#" + this_id).find("i").addClass("icon-down-dir").removeClass("icon-up-dir");
				}
			},
			selectOne: function selectOne() {
				var $ = _ember["default"].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_li = $("#" + this_id).find("li[class='checked']");
				//console.log( this_li.length );	

				var this_value = this_li.html();
				//console.log( this_value );

				$("#" + this_id).find("input").attr("value", this_value);
				$("#" + this_id).find("ul").slideUp(200);
				$("#" + this_id).find("i").addClass("icon-down-dir").removeClass("icon-up-dir");
			}
		}
	});
});
define('borrowers/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('borrowers/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('borrowers/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'borrowers/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _borrowersConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_borrowersConfigEnvironment['default'].APP.name, _borrowersConfigEnvironment['default'].APP.version)
  };
});
define('borrowers/initializers/export-application-global', ['exports', 'ember', 'borrowers/config/environment'], function (exports, _ember, _borrowersConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_borrowersConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _borrowersConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_borrowersConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('borrowers/router', ['exports', 'ember', 'borrowers/config/environment'], function (exports, _ember, _borrowersConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _borrowersConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('home');
    this.route('login');
  });

  exports['default'] = Router;
});
define("borrowers/routes/application", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		afterModel: function afterModel() {
			this.transitionTo("home");
		}
	});
});
define('borrowers/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('borrowers/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("borrowers/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 39,
            "column": 10
          }
        },
        "moduleName": "borrowers/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("***********************input-text********************************");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("***********************input-password**************************");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("***********************input-checkbox**************************");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "input-checkbox-box");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("***********************input-toggle*****************************");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("***********************input-radio******************************");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "input-radio-box");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("***********************input-dropdown******************************");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("***********************span-dropdown******************************");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "span-dropdown-box");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [11]);
        var element1 = dom.childAt(fragment, [19]);
        var morphs = new Array(12);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        morphs[4] = dom.createMorphAt(element0, 5, 5);
        morphs[5] = dom.createMorphAt(element0, 7, 7);
        morphs[6] = dom.createMorphAt(fragment, 15, 15, contextualElement);
        morphs[7] = dom.createMorphAt(element1, 1, 1);
        morphs[8] = dom.createMorphAt(element1, 3, 3);
        morphs[9] = dom.createMorphAt(fragment, 23, 23, contextualElement);
        morphs[10] = dom.createMorphAt(dom.childAt(fragment, [27]), 1, 1);
        morphs[11] = dom.createMorphAt(fragment, 29, 29, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input-text", [], ["icon", "icon-user inset", "placeholder", "input-text"], ["loc", [null, [4, 0], [4, 62]]]], ["inline", "input-password", [], ["icon", true], ["loc", [null, [8, 0], [8, 28]]]], ["inline", "input-checkbox", [], ["label", "apple", "name", "fruit"], ["loc", [null, [13, 1], [13, 46]]]], ["inline", "input-checkbox", [], ["label", "orange", "name", "fruit"], ["loc", [null, [14, 1], [14, 47]]]], ["inline", "input-checkbox", [], ["label", "banana", "name", "fruit"], ["loc", [null, [15, 1], [15, 47]]]], ["inline", "input-checkbox", [], ["label", "pear", "name", "fruit"], ["loc", [null, [16, 1], [16, 45]]]], ["inline", "input-toggle", [], ["label-left", "off", "label-right", "on"], ["loc", [null, [21, 0], [21, 50]]]], ["inline", "input-radio", [], ["label", "女", "name", "gender"], ["loc", [null, [26, 1], [26, 40]]]], ["inline", "input-radio", [], ["label", "男", "name", "gender"], ["loc", [null, [27, 1], [27, 40]]]], ["inline", "input-dropdown", [], ["label", "女,男", "name", "gender"], ["loc", [null, [32, 0], [32, 44]]]], ["inline", "span-dropdown", [], ["label", "个人资料,修改密码,退出登录", "link", "http://baidu.com,http://pan.baidu.com,http://bing.com", "default", "用户名"], ["loc", [null, [37, 1], [37, 116]]]], ["content", "outlet", ["loc", [null, [39, 0], [39, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/input-checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "borrowers/templates/components/input-checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "input-checkbox");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "checkbox");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'onclick');
        morphs[1] = dom.createAttrMorph(element0, 'onmouseover');
        morphs[2] = dom.createAttrMorph(element0, 'onmouseout');
        morphs[3] = dom.createAttrMorph(element1, 'name');
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "onclick", ["subexpr", "action", ["isCheck"], [], ["loc", [null, [1, 36], [1, 56]]]]], ["attribute", "onmouseover", ["subexpr", "action", ["overCss"], [], ["loc", [null, [1, 69], [1, 89]]]]], ["attribute", "onmouseout", ["subexpr", "action", ["outCss"], [], ["loc", [null, [1, 101], [1, 120]]]]], ["attribute", "name", ["get", "name", ["loc", [null, [2, 31], [2, 35]]]]], ["content", "label", ["loc", [null, [4, 8], [4, 17]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/input-dropdown", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "borrowers/templates/components/input-dropdown.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["element", "action", ["selectOne"], [], ["loc", [null, [6, 7], [6, 29]]]], ["content", "item", ["loc", [null, [6, 30], [6, 38]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/components/input-dropdown.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "input-dropdown");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "placeholder", "请选择...");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "icon-down-dir inset");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("script");
        var el2 = dom.createTextNode("\n	$(function(){\n		$(\".input-dropdown li\").mouseover(function(){\n			$(this).addClass(\"checked\").siblings().removeClass(\"checked\");\n		}).mouseout(function(){\n			$(this).removeClass(\"checked\");\n		})\n	})\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [3]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
        return morphs;
      },
      statements: [["element", "action", ["doDropdown"], [], ["loc", [null, [3, 32], [3, 55]]]], ["block", "each", [["get", "items", ["loc", [null, [5, 10], [5, 15]]]]], [], 0, null, ["loc", [null, [5, 2], [7, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/components/input-password", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 6,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/components/input-password.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon-eye inset");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "icon-eye-off inset hide");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(fragment, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["element", "action", ["showKey"], [], ["loc", [null, [4, 28], [4, 48]]]], ["element", "action", ["hideKey"], [], ["loc", [null, [5, 37], [5, 57]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 6
          }
        },
        "moduleName": "borrowers/templates/components/input-password.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "input-password");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "password");
        dom.setAttribute(el2, "placeholder", "input-password");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 3, 3);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [3, 7], [3, 11]]]]], [], 0, null, ["loc", [null, [3, 1], [6, 8]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/components/input-radio", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/input-radio.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "input-radio");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "radio");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'onclick');
        morphs[1] = dom.createAttrMorph(element0, 'onmouseover');
        morphs[2] = dom.createAttrMorph(element0, 'onmouseout');
        morphs[3] = dom.createAttrMorph(element1, 'name');
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "onclick", ["subexpr", "action", ["isCheck"], [], ["loc", [null, [1, 33], [1, 53]]]]], ["attribute", "onmouseover", ["subexpr", "action", ["overCss"], [], ["loc", [null, [1, 66], [1, 86]]]]], ["attribute", "onmouseout", ["subexpr", "action", ["outCss"], [], ["loc", [null, [1, 98], [1, 117]]]]], ["attribute", "name", ["get", "name", ["loc", [null, [2, 28], [2, 32]]]]], ["content", "label", ["loc", [null, [4, 8], [4, 17]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/input-text", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 5,
              "column": 1
            }
          },
          "moduleName": "borrowers/templates/components/input-text.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["get", "icon", ["loc", [null, [4, 13], [4, 17]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 6
          }
        },
        "moduleName": "borrowers/templates/components/input-text.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "input-text");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element2, 'placeholder');
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["attribute", "placeholder", ["get", "placeholder", ["loc", [null, [2, 34], [2, 45]]]]], ["block", "if", [["get", "icon", ["loc", [null, [3, 7], [3, 11]]]]], [], 0, null, ["loc", [null, [3, 1], [5, 8]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/components/input-toggle", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "modifiers",
          "modifiers": ["action"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "borrowers/templates/components/input-toggle.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "input-toggle");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "checkbox");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[2] = dom.createAttrMorph(element1, 'name');
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
        return morphs;
      },
      statements: [["element", "action", ["doToggle"], [], ["loc", [null, [1, 26], [1, 47]]]], ["content", "label-right", ["loc", [null, [2, 8], [2, 23]]]], ["attribute", "name", ["get", "name", ["loc", [null, [3, 31], [3, 35]]]]], ["content", "label-left", ["loc", [null, [4, 8], [4, 22]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/components/span-dropdown", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.2.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "borrowers/templates/components/span-dropdown.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createElement("a");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 0]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'href');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "href", ["get", "item.url", ["loc", [null, [6, 17], [6, 25]]]]], ["content", "item.content", ["loc", [null, [6, 28], [6, 44]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 6
          }
        },
        "moduleName": "borrowers/templates/components/span-dropdown.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "span-dropdown");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2, "class", "icon-down-dir");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
        return morphs;
      },
      statements: [["content", "default", ["loc", [null, [2, 7], [2, 18]]]], ["element", "action", ["doDropdown"], [], ["loc", [null, [3, 26], [3, 49]]]], ["block", "each", [["get", "items", ["loc", [null, [5, 10], [5, 15]]]]], [], 0, null, ["loc", [null, [5, 2], [7, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("borrowers/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 9
          }
        },
        "moduleName": "borrowers/templates/home.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2, "class", "fl");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "javascript:void(0)");
        var el4 = dom.createTextNode("LOGO");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "fr");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "horizontal");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        var el6 = dom.createTextNode("icon");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        var el6 = dom.createTextNode("用户名");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        var el6 = dom.createTextNode("icon");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "class", "bgred");
        var el6 = dom.createTextNode("会员中心");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "http://pan.baidu.com/download");
        var el6 = dom.createTextNode("客户端下载");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "http://yun.baidu.com/pcloud/msg#notice/type=all");
        var el6 = dom.createTextNode("通知");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n				");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        var el6 = dom.createTextNode("更多");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n			");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("borrowers/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('borrowers/config/environment', ['ember'], function(Ember) {
  var prefix = 'borrowers';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("borrowers/app")["default"].create({"name":"borrowers","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=borrowers.map