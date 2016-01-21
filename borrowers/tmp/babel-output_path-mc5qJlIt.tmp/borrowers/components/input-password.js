define('borrowers/components/input-password', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			showKey: function showKey() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				$("#" + this_id).find(".hide").removeClass("hide").siblings("i").addClass("hide");
				$("#" + this_id).find("input").attr("type", "text");
			},
			hideKey: function hideKey() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				$("#" + this_id).find(".hide").removeClass("hide").siblings("i").addClass("hide");
				$("#" + this_id).find("input").attr("type", "password");
			}
		}
	});
});