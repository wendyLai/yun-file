export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
        ]
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
      dom.setAttribute(el1,"class","input-checkbox-box");
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
      dom.setAttribute(el1,"class","input-radio-box");
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
      dom.setAttribute(el1,"class","span-dropdown-box");
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
      morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,7,7,contextualElement);
      morphs[2] = dom.createMorphAt(element0,1,1);
      morphs[3] = dom.createMorphAt(element0,3,3);
      morphs[4] = dom.createMorphAt(element0,5,5);
      morphs[5] = dom.createMorphAt(element0,7,7);
      morphs[6] = dom.createMorphAt(fragment,15,15,contextualElement);
      morphs[7] = dom.createMorphAt(element1,1,1);
      morphs[8] = dom.createMorphAt(element1,3,3);
      morphs[9] = dom.createMorphAt(fragment,23,23,contextualElement);
      morphs[10] = dom.createMorphAt(dom.childAt(fragment, [27]),1,1);
      morphs[11] = dom.createMorphAt(fragment,29,29,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","input-text",[],["icon","icon-user inset","placeholder","input-text"],["loc",[null,[4,0],[4,62]]]],
      ["inline","input-password",[],["icon",true],["loc",[null,[8,0],[8,28]]]],
      ["inline","input-checkbox",[],["label","apple","name","fruit"],["loc",[null,[13,1],[13,46]]]],
      ["inline","input-checkbox",[],["label","orange","name","fruit"],["loc",[null,[14,1],[14,47]]]],
      ["inline","input-checkbox",[],["label","banana","name","fruit"],["loc",[null,[15,1],[15,47]]]],
      ["inline","input-checkbox",[],["label","pear","name","fruit"],["loc",[null,[16,1],[16,45]]]],
      ["inline","input-toggle",[],["label-left","off","label-right","on"],["loc",[null,[21,0],[21,50]]]],
      ["inline","input-radio",[],["label","女","name","gender"],["loc",[null,[26,1],[26,40]]]],
      ["inline","input-radio",[],["label","男","name","gender"],["loc",[null,[27,1],[27,40]]]],
      ["inline","input-dropdown",[],["label","女,男","name","gender"],["loc",[null,[32,0],[32,44]]]],
      ["inline","span-dropdown",[],["label","个人资料,修改密码,退出登录","link","http://baidu.com,http://pan.baidu.com,http://bing.com","default","用户名"],["loc",[null,[37,1],[37,116]]]],
      ["content","outlet",["loc",[null,[39,0],[39,10]]]]
    ],
    locals: [],
    templates: []
  };
}()));