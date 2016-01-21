define('borrowers/components/data-by-grid', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			selectAll: function selectAll() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_checked = $("#" + this_id).find("#list-header input").attr("checked");
				//console.log( this_checked );

				var this_input_length = $("#" + this_id).find("#list-main input").length;
				//console.log( this_input_length );

				if (!this_checked) {
					$("#" + this_id).find("#list-main .input-checkbox span").removeClass("active").siblings("input").attr("checked", false);
					$("#" + this_id).find("#list-header .input-checkbox label").html("文件名");
					$("#" + this_id).find("#cell-btns").addClass("hide");
				} else {
					$("#" + this_id).find("#list-main .input-checkbox span").addClass("active").siblings("input").attr("checked", true);
					$("#" + this_id).find("#list-header .input-checkbox label").html("已选中" + this_input_length + "个文件/文件夹");
					$("#" + this_id).find("#cell-btns").removeClass("hide");
				}
			},
			selectItem: function selectItem() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_has_checked = false;

				var this_checked_length = $("#" + this_id).find("#list-main input[checked='checked']").length;
				//console.log( this_checked_length );

				var this_input_length = $("#" + this_id).find("#list-main input").length;
				//console.log( this_input_length );

				for (var i = 0; i < this_input_length; i++) {
					this_has_checked = this_has_checked || $("#" + this_id).find("#list-main input").eq(i).attr("checked");
					//console.log( this_has_checked );
				}
				//console.log( "*-*-*-*"+this_has_checked );

				if (!this_has_checked) {
					$("#" + this_id).find("#cell-btns").addClass("hide");
					$("#" + this_id).find("#list-header .input-checkbox label").html("文件名");
				} else {
					$("#" + this_id).find("#cell-btns").removeClass("hide");
					$("#" + this_id).find("#list-header .input-checkbox label").html("已选中" + this_checked_length + "个文件/文件夹");
				}

				if (this_checked_length == this_input_length) {
					$("#" + this_id).find("#list-header .input-checkbox span").addClass("active").siblings("input").attr("checked", true);
				}
			},
			itemhover: function itemhover() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				//$("#"+this_id).find(".grid-check-box").addClass("hovered");
			}
		}
	});
});