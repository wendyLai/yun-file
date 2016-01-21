define("borrowers/templates/components/page-grid", ["exports"], function (exports) {
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
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "borrowers/templates/components/page-grid.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" \n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "row-count", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [1, 17], [1, 21]]]]], [], []], "total-number", ["subexpr", "@mut", [["get", "model.length", ["loc", [null, [1, 35], [1, 47]]]]], [], []]], ["loc", [null, [1, 0], [1, 49]]]], ["inline", "data-by-grid", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 21], [3, 26]]]]], [], []]], ["loc", [null, [3, 0], [3, 28]]]]],
      locals: [],
      templates: []
    };
  })());
});