define('borrowers/components/data-grid-item', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			selectItem: function selectItem() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_checked = $("#" + this_id).find(".grid-check-box").hasClass("checked");
				//console.log( this_checked );.picture-header 

				if (!this_checked) {
					$("#" + this_id).find(".grid-check-box").addClass("checked");
				} else {
					$("#" + this_id).find(".grid-check-box").removeClass("checked");
				}

				var this_has_checked = false;

				var this_checked_length = $(".grid-check-box[class*='checked']").length;
				//console.log( this_checked_length );

				var this_input_length = $(".grid-check-box").length;
				//console.log( this_input_length );

				var this_row_checked_length = $("#" + this_id).parents(".picture-show").find(".grid-check-box[class*='checked']").length;
				//console.log( this_row_checked_length );

				var this_row_input_length = $("#" + this_id).parents(".picture-show").find(".grid-check-box").length;
				//console.log( this_row_input_length );

				for (var i = 0; i < this_input_length; i++) {
					this_has_checked = this_has_checked || $(".grid-check-box").eq(i).hasClass("checked");
					//console.log( this_has_checked );
				}
				//console.log( "*-*-*-*"+this_has_checked );

				//区分出是grid(false)还是picture(true),去边在于隐藏cell-btns还是picture-header,inputcheckbox再picture种有多个，每个item有一个

				var this_picture = $("#" + this_id).parent().hasClass("picture-show");
				//console.log( this_picture );

				if (this_picture) {

					if (!this_has_checked) {
						$("#picture-header").stop().slideUp(500);
						$("#picture-header .input-checkbox label").html("");
					} else {
						$("#picture-header").stop().slideDown(500);
						$("#picture-header .input-checkbox label").html("已选中" + this_checked_length + "个文件/文件夹");
					}

					//每个页面的全选checkbox状态
					if (this_checked_length == this_input_length) {
						$("#picture-header .input-checkbox span").addClass("active").siblings("input").attr("checked", true);
					} else {
						$("#picture-header .input-checkbox span").removeClass("active").siblings("input").attr("checked", false);
					}

					//每一列（picture-show）的全选checkbox状态
					if (this_row_checked_length == this_row_input_length) {
						$("#" + this_id).parents(".data-by-picture").find(".picture-title .input-checkbox span").addClass("active").siblings("input").attr("checked", true);
					} else {
						$("#" + this_id).parents(".data-by-picture").find(".picture-title .input-checkbox span").removeClass("active").siblings("input").attr("checked", false);
					}
				} else {

					if (!this_has_checked) {
						$("#cell-btns").addClass("hide");
						$("#grid-header .input-checkbox label").html("");
					} else {
						$("#cell-btns").removeClass("hide");
						$("#grid-header .input-checkbox label").html("已选中" + this_checked_length + "个文件/文件夹");
					}

					//每个页面的全选checkbox状态
					if (this_checked_length == this_input_length) {
						$("#grid-header .input-checkbox span").addClass("active").siblings("input").attr("checked", true);
					} else {
						$("#grid-header .input-checkbox span").removeClass("active").siblings("input").attr("checked", false);
					}
				};
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