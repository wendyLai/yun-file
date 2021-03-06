define("borrowers/components/input-dropdown", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Component.extend({
		items: _ember["default"].computed("this.get('label')", function () {
			return this.get("label").split(",");
		}),
		actions: {
			doDropdown: function doDropdown() {
				var $ = _ember["default"].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_display = $("#" + this_id).find("i").hasClass("icon-up-dir");
				//console.log( this_display );

				if (!this_display) {
					$("#" + this_id).find("ul").slideDown(200);
					$("#" + this_id).find("i").addClass("icon-up-dir").removeClass("icon-down-dir");
				} else {
					$("#" + this_id).find("ul").slideUp(200);
					$("#" + this_id).find("i").addClass("icon-down-dir").removeClass("icon-up-dir");
				}
			},
			selectOne: function selectOne() {
				var $ = _ember["default"].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_li = $("#" + this_id).find("li[class='checked']");
				//console.log( this_li.length );	

				var this_value = this_li.html();
				//console.log( this_value );

				$("#" + this_id).find("input").attr("value", this_value);
				$("#" + this_id).find("ul").slideUp(200);
				$("#" + this_id).find("i").addClass("icon-down-dir").removeClass("icon-up-dir");
			}
		}
	});
});