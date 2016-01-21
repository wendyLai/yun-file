define("borrowers/components/main-page", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Component.extend({
		showType: "",
		ifList: _ember["default"].computed("showType", function () {
			//console.log( this.get('showType') );

			if (this.get('showType') == "list") {
				return false;
			} else {
				return true;
			}
		}),
		ifGrid: _ember["default"].computed("showType", function () {
			//console.log( this.get('showType') );

			if (this.get('showType') == "grid") {
				return false;
			} else {
				return true;
			}
		}),
		actions: {
			selectType: function selectType() {
				var $ = _ember["default"].$;

				var this_class = $(".switch-grid-list button[class*='active']").attr("class");
				//console.log(this_class);

				var this_type = "list";

				if (this_class.indexOf("list")) {
					this_type = "list";
				} else {
					this_type = "grid";
				}
				this.set('showType', this_type);

				//console.log(this.get("showType"));
				//console.log(this.get("ifList"));
				//console.log(this.get("ifGrid"));
			}
		}
	});
});