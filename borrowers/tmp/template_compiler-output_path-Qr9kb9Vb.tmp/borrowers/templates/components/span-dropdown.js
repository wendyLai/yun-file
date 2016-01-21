export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
        "moduleName": "borrowers/templates/components/span-dropdown.hbs"
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
        dom.setAttribute(el1,"class","icon-down-dir");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.2.0",
        "loc": {
          "source": null,
          "start": {
            "line": 8,
            "column": 2
          },
          "end": {
            "line": 13,
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
        var el2 = dom.createTextNode("\n				");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n				");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'class');
        morphs[1] = dom.createAttrMorph(element2, 'href');
        morphs[2] = dom.createMorphAt(element2,0,0);
        return morphs;
      },
      statements: [
        ["attribute","class",["get","item.icon",["loc",[null,[10,15],[10,24]]]]],
        ["attribute","href",["get","item.url",["loc",[null,[11,14],[11,22]]]]],
        ["content","item.content",["loc",[null,[11,25],[11,41]]]]
      ],
      locals: ["item"],
      templates: []
    };
  }());
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
          "line": 15,
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
      dom.setAttribute(el1,"class","span-dropdown");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("ul");
      var el3 = dom.createTextNode("		\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.appendChild(el2, el3);
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
      var element3 = dom.childAt(fragment, [0]);
      var element4 = dom.childAt(element3, [5]);
      var morphs = new Array(6);
      morphs[0] = dom.createAttrMorph(element3, 'onmouseover');
      morphs[1] = dom.createAttrMorph(element3, 'onmouseout');
      morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
      morphs[3] = dom.createMorphAt(element3,3,3);
      morphs[4] = dom.createAttrMorph(element4, 'class');
      morphs[5] = dom.createMorphAt(element4,3,3);
      return morphs;
    },
    statements: [
      ["attribute","onmouseover",["subexpr","action",["overDropdown"],[],["loc",[null,[1,39],[1,64]]]]],
      ["attribute","onmouseout",["subexpr","action",["outDropdown"],[],["loc",[null,[1,76],[1,100]]]]],
      ["content","name",["loc",[null,[2,7],[2,15]]]],
      ["block","unless",[["get","no-icon",["loc",[null,[3,11],[3,18]]]]],[],0,null,["loc",[null,[3,1],[5,12]]]],
      ["attribute","class",["get","ul-class",["loc",[null,[6,13],[6,21]]]]],
      ["block","each",[["get","items",["loc",[null,[8,10],[8,15]]]]],[],1,null,["loc",[null,[8,2],[13,11]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));