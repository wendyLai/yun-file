define('borrowers/components/row-count', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		isLoading: false /*无需isLoading定义，在DS.Model 类中已经定义好，这边用来演示*/
	});
});