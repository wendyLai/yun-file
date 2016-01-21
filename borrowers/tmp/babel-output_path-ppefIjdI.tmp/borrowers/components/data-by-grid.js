define('borrowers/components/data-by-grid', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			selectAll: function selectAll() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_checked = $("#" + this_id).find("#grid-header input").attr("checked");
				//console.log( this_checked );

				var this_input_length = $("#" + this_id).find("#grid-main .grid-check-box").length;
				//console.log( this_input_length );

				if (!this_checked) {
					$("#" + this_id).find("#grid-main .grid-check-box").removeClass("checked");
					$("#" + this_id).find("#grid-header .input-checkbox label").html("");
					$("#" + this_id).find("#cell-btns").addClass("hide");
				} else {
					$("#" + this_id).find("#grid-main .grid-check-box").addClass("checked");
					$("#" + this_id).find("#grid-header .input-checkbox label").html("已选中" + this_input_length + "个文件/文件夹");
					$("#" + this_id).find("#cell-btns").removeClass("hide");
				}
			}
		}
	});
});