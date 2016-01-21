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
      dom.setAttribute(el1,"class","input-checkbox");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("input");
      dom.setAttribute(el2,"type","checkbox");
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
      morphs[4] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
      return morphs;
    },
    statements: [
      ["attribute","onclick",["subexpr","action",["isCheck"],[],["loc",[null,[1,36],[1,56]]]]],
      ["attribute","onmouseover",["subexpr","action",["overCss"],[],["loc",[null,[1,69],[1,89]]]]],
      ["attribute","onmouseout",["subexpr","action",["outCss"],[],["loc",[null,[1,101],[1,120]]]]],
      ["attribute","name",["get","name",["loc",[null,[2,31],[2,35]]]]],
      ["content","label",["loc",[null,[4,8],[4,17]]]]
    ],
    locals: [],
    templates: []
  };
}()));