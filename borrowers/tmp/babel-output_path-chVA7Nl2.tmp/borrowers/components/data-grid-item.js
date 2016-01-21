define('borrowers/components/data-grid-item', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			selectItem: function selectItem() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_checked = $("#" + this_id).find(".grid-check-box").hasClass("checked");
				//console.log( this_checked );

				if (!this_checked) {
					$("#" + this_id).find(".grid-check-box").addClass("checked");
				} else {
					$("#" + this_id).find(".grid-check-box").removeClass("checked");
				}
			},
			itemHover: function itemHover() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				$("#" + this_id).find(".grid-check-box").addClass("hovered");
			},
			itemUnHover: function itemUnHover() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				$("#" + this_id).find(".grid-check-box").removeClass("hovered");
			}
		}
	});
});