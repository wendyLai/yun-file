define('borrowers/components/data-by-picture', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			doToggle: function doToggle() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_closed = $("#" + this_id).find(".toggle-icon").hasClass("icon-down-open");
				//
				//console.log( this_closed );

				if (this_closed) {
					$("#" + this_id).find(".picture-show").stop().slideUp(300);
					$("#" + this_id).find(".toggle-icon").removeClass("icon-down-open").addClass("icon-up-open");
				} else {
					$("#" + this_id).find(".picture-show").stop().slideDown(300);
					$("#" + this_id).find(".toggle-icon").removeClass("icon-up-open").addClass("icon-down-open");
				}
			},
			selectAll: function selectAll() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_checked = $("#" + this_id).find(".picture-title input").attr("checked");
				//console.log( this_checked );

				if (!this_checked) {
					$("#" + this_id).find(".picture-show .grid-check-box").removeClass("checked");
				} else {
					$("#" + this_id).find(".picture-show .grid-check-box").addClass("checked");
				}

				var this_has_checked = false;

				var this_checked_length = $(".picture-show .grid-check-box[class*='checked']").length;
				console.log(this_checked_length);

				var this_input_length = $(".picture-show .grid-check-box").length;
				console.log(this_input_length);

				for (var i = 0; i < this_input_length; i++) {
					this_has_checked = this_has_checked || $(".picture-show .grid-check-box").eq(i).hasClass("checked");
					//console.log( this_has_checked );
				}
				//console.log( "*-*-*-*"+this_has_checked );

				if (!this_has_checked) {
					$("#picture-header").stop().slideUp(500);
					$("#picture-header .input-checkbox label").html("");
				} else {
					$("#picture-header").stop().slideDown(500);
					$("#picture-header .input-checkbox label").html("已选中" + this_checked_length + "个文件/文件夹");
				}

				//是否整个页面的checkbox都全选上
				if (this_checked_length == this_input_length) {
					$("#picture-header").find(".input-checkbox input").attr("checked", true).siblings("span").addClass("active");
				} else {
					$("#picture-header").find(".input-checkbox input").attr("checked", false).siblings("span").removeClass("active");
				}
			}
		}
	});
});