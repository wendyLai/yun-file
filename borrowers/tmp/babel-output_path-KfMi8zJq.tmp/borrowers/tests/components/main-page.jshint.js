define('borrowers/tests/components/main-page.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/main-page.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/main-page.js should pass jshint.\ncomponents/main-page.js: line 8, col 35, Expected \'===\' and instead saw \'==\'.\ncomponents/main-page.js: line 17, col 35, Expected \'===\' and instead saw \'==\'.\n\n2 errors');
  });
});