define("borrowers/routes/home", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		afterModel: function afterModel() {
			this.transitionTo("home.all");
		}
	});
});