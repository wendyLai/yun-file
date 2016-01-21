export default Ember.HTMLBars.template((function() {
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
          "column": 0
        }
      },
      "moduleName": "borrowers/templates/components/switch-grid-list.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","switch-grid-list");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","list-btn active");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","icon-menu");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","grid-btn");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("i");
      dom.setAttribute(el3,"class","icon-th");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
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
      var element2 = dom.childAt(element0, [3]);
      var morphs = new Array(6);
      morphs[0] = dom.createAttrMorph(element1, 'onmouseover');
      morphs[1] = dom.createAttrMorph(element1, 'onmouseout');
      morphs[2] = dom.createElementMorph(element1);
      morphs[3] = dom.createAttrMorph(element2, 'onmouseover');
      morphs[4] = dom.createAttrMorph(element2, 'onmouseout');
      morphs[5] = dom.createElementMorph(element2);
      return morphs;
    },
    statements: [
      ["attribute","onmouseover",["subexpr","action",["listBtnHover"],[],["loc",[null,[2,69],[2,94]]]]],
      ["attribute","onmouseout",["subexpr","action",["listBtnUnHover"],[],["loc",[null,[2,106],[2,133]]]]],
      ["element","action",["selectList"],[],["loc",[null,[2,33],[2,56]]]],
      ["attribute","onmouseover",["subexpr","action",["gridBtnHover"],[],["loc",[null,[5,62],[5,87]]]]],
      ["attribute","onmouseout",["subexpr","action",["gridBtnUnHover"],[],["loc",[null,[5,99],[5,126]]]]],
      ["element","action",["selectGrid"],[],["loc",[null,[5,26],[5,49]]]]
    ],
    locals: [],
    templates: []
  };
}()));