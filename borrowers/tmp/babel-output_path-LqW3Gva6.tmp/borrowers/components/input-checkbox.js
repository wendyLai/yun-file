define('borrowers/components/input-checkbox', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			isCheck: function isCheck() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );
				var this_checked = $("#" + this_id).find("input").attr("checked");
				//console.log( this_checked );
				if (!this_checked) {
					$("#" + this_id).find("input").attr("checked", true);
					$("#" + this_id).find("span").addClass("active");
				} else {
					$("#" + this_id).find("input").attr("checked", false);
					$("#" + this_id).find("span").removeClass("active");
				}
			},
			overCss: function overCss() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );
				$("#" + this_id).find("input").css("border-color", "#666");
			},
			outCss: function outCss() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );
				$("#" + this_id).find("input").css("border-color", "#ccc");
			}
		}
	});
});