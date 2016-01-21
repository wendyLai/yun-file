define('borrowers/tests/components/data-by-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/data-by-list.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/data-by-list.js should pass jshint.\ncomponents/data-by-list.js: line 53, col 38, Expected \'===\' and instead saw \'==\'.\n\n1 error');
  });
});