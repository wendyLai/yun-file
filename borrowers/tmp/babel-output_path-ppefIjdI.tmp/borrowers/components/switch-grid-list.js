define('borrowers/components/switch-grid-list', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			selectList: function selectList() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				$("#" + this_id).find(".list-btn").removeClass("hovered").addClass("active").siblings("button").removeClass("active");
			},
			selectGrid: function selectGrid() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				$("#" + this_id).find(".grid-btn").removeClass("hovered").addClass("active").siblings("button").removeClass("active");
			},
			listBtnHover: function listBtnHover() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_has_active = $("#" + this_id).find(".list-btn").hasClass("active");

				if (!this_has_active) {
					$("#" + this_id).find(".list-btn").addClass("hovered").siblings("button").removeClass("hovered");
				}
			},
			listBtnUnHover: function listBtnUnHover() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				$("#" + this_id).find(".list-btn").removeClass("hovered");
			},
			gridBtnHover: function gridBtnHover() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_has_active = $("#" + this_id).find(".grid-btn").hasClass("active");

				if (!this_has_active) {
					$("#" + this_id).find(".grid-btn").addClass("hovered").siblings("button").removeClass("hovered");
				}
			},
			gridBtnUnHover: function gridBtnUnHover() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				$("#" + this_id).find(".grid-btn").removeClass("hovered");
			}

		}
	});
});