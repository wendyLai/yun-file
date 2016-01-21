define('borrowers/tests/components/data-by-picture.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/data-by-picture.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/data-by-picture.js should pass jshint.\ncomponents/data-by-picture.js: line 62, col 38, Expected \'===\' and instead saw \'==\'.\n\n1 error');
  });
});