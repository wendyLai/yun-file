define("borrowers/controllers/home/picture", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		showType: "timer",
		ifTimer: _ember["default"].computed("showType", function () {
			//console.log( this.get('showType') );

			if (this.get('showType') == "timer") {
				return true;
			} else {
				return false;
			}
		}),
		ifLately: _ember["default"].computed("showType", function () {
			//console.log( this.get('showType') );

			if (this.get('showType') == "lately") {
				return true;
			} else {
				return false;
			}
		}),
		actions: {
			isTimer: function isTimer() {
				var $ = _ember["default"].$;
				$(".underline-title.timer").addClass("active").siblings().removeClass("active");
				this.set('showType', "timer");
			},
			isLately: function isLately() {
				var $ = _ember["default"].$;
				$(".underline-title.lately").addClass("active").siblings().removeClass("active");
				this.set('showType', "lately");
			}
		}
	});
});