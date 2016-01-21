define("borrowers/routes/application", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		afterModel: function afterModel() {
			this.transitionTo("home");
		}
	});
});