define('borrowers/components/page-picture-timer', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			selectAll: function selectAll() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_checked = $("#" + this_id).find("#picture-header input").attr("checked");
				//console.log( this_checked );

				var this_input_length = $("#" + this_id).find("#picture-main .grid-check-box").length;
				//console.log( this_input_length );

				if (!this_checked) {
					$("#" + this_id).find("#picture-header").stop().slideUp(500);
					$("#" + this_id).find("#picture-main .grid-check-box").removeClass("checked");
					$("#" + this_id).find(".picture-title .input-checkbox input").attr("checked", false).siblings("span").removeClass("active");
					$("#" + this_id).find("#picture-header .input-checkbox label").html("");
				} else {
					$("#" + this_id).find("#picture-header").stop().slideDown(500);
					$("#" + this_id).find("#picture-main .grid-check-box").addClass("checked");
					$("#" + this_id).find(".picture-title .input-checkbox input").attr("checked", true).siblings("span").addClass("active");
					$("#" + this_id).find("#picture-header .input-checkbox label").html("已选中" + this_input_length + "个文件/文件夹");
				}
			}
		}
	});
});