define("borrowers/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
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
        var el1 = dom.createComment("\n<p>***********************input-text********************************</p>\n\n{{input-text icon=\"icon-user inset\" placeholder=\"input-text\"}}\n\n<p>***********************input-password**************************</p>\n\n{{input-password icon=true}}\n\n<p>***********************input-checkbox**************************</p>\n\n<div class=\"input-checkbox-box\">\n	{{input-checkbox label=\"apple\" name=\"fruit\"}}\n	{{input-checkbox label=\"orange\" name=\"fruit\"}}\n	{{input-checkbox label=\"banana\" name=\"fruit\"}}\n	{{input-checkbox label=\"pear\" name=\"fruit\"}}\n</div>\n\n<p>***********************input-toggle*****************************</p>\n\n{{input-toggle label-left=\"off\" label-right=\"on\"}}\n\n<p>***********************span-dropdown******************************</p>\n\n{{span-dropdown label=\"个人资料,修改密码,退出登录\" link=\"http://baidu.com,http://pan.baidu.com,http://bing.com\" name=\"用户名\" item-icon=\"\"}}\n\n<p>***********************input-radio******************************</p>\n\n<div class=\"input-radio-box\">\n	{{input-radio label=\"女\" name=\"gender\"}}\n	{{input-radio label=\"男\" name=\"gender\"}}\n</div>\n\n<p>***********************input-dropdown******************************</p>\n\n{{input-dropdown label=\"女,男\" name=\"gender\"}}\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [39, 0], [39, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});