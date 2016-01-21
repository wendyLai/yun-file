QUnit.module('JSHint - components');
QUnit.test('components/data-by-grid.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'components/data-by-grid.js should pass jshint.\ncomponents/data-by-grid.js: line 53, col 38, Expected \'===\' and instead saw \'==\'.\ncomponents/data-by-grid.js: line 59, col 17, \'$\' is defined but never used.\ncomponents/data-by-grid.js: line 60, col 17, \'this_id\' is defined but never used.\n\n3 errors'); 
});
