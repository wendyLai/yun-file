define('borrowers/tests/routes/home/all.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/home');
  QUnit.test('routes/home/all.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home/all.js should pass jshint.');
  });
});