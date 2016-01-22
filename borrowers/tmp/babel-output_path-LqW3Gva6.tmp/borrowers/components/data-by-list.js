define('borrowers/components/data-by-list', ['exports', 'ember'], function (exports, _ember) {
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

				//点击全选checkbox 1.#cell-btns隐藏/显示 2.li:first的label文字改变 3.li:first的checkbox的checked值false/true 4.排序icon隐藏/显示

				if (!this_checked) {
					$("#" + this_id).find("#list-main .input-checkbox span").removeClass("active").siblings("input").attr("checked", false);
					$("#" + this_id).find("#list-header .input-checkbox label").html("文件名");
					$("#" + this_id).find("#cell-btns").addClass("hide");
					$("#" + this_id).find(".sort-by-name").removeClass("hide");
				} else {
					$("#" + this_id).find("#list-main .input-checkbox span").addClass("active").siblings("input").attr("checked", true);
					$("#" + this_id).find("#list-header .input-checkbox label").html("已选中" + this_input_length + "个文件/文件夹");
					$("#" + this_id).find("#cell-btns").removeClass("hide");
					$("#" + this_id).find(".sort-by-name").addClass("hide");
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

				//确定整个页面是否有处于选中状态的checkbox
				for (var i = 0; i < this_input_length; i++) {
					this_has_checked = this_has_checked || $("#" + this_id).find("#list-main input").eq(i).attr("checked");
					//console.log( this_has_checked );
				}
				//console.log( "*-*-*-*"+this_has_checked );

				//若有选中的项，1.#cell-btns显示 2.排序icon隐藏 3.label值改为选中N个项 (反之每个项都没被选中...)
				if (!this_has_checked) {
					$("#" + this_id).find("#cell-btns").addClass("hide");
					$("#" + this_id).find(".sort-by-name").removeClass("hide");
					$("#" + this_id).find("#list-header .input-checkbox label").html("文件名");
				} else {
					$("#" + this_id).find("#cell-btns").removeClass("hide");
					$("#" + this_id).find(".sort-by-name").addClass("hide");
					$("#" + this_id).find("#list-header .input-checkbox label").html("已选中" + this_checked_length + "个文件/文件夹");
				}

				//如果所有项都选中，全选的checkbox也要选中
				if (this_checked_length == this_input_length) {
					$("#" + this_id).find("#list-header .input-checkbox span").addClass("active").siblings("input").attr("checked", true);
				} else {
					$("#" + this_id).find("#list-header .input-checkbox span").removeClass("active").siblings("input").attr("checked", false);
				}
			},
			sortByName: function sortByName() {
				var $ = _ember['default'].$;
				var this_id = this.get('elementId');
				//console.log( this_id );

				var this_desc = $("#" + this_id).find(".sort-by-name i").hasClass("icon-down");
				//console.log( this_desc );

				//icon样式改变
				if (this_desc) {
					$("#" + this_id).find(".sort-by-name i").removeClass("icon-down").addClass("icon-up");
				} else {
					$("#" + this_id).find(".sort-by-name i").removeClass("icon-up").addClass("icon-down");
				}

				//数据排序

				/*var this_model=this.get("model");
    console.log( this_model );
    	var ToDoList = Ember.Object.extend({
    		todosSortingDesc: ['name:desc'],
    	sortedTodosDesc: Ember.computed.sort("data","todosSortingDesc"),
    	});
    	var datalist = ToDoList.create({data: this_model});
    
    datalist.get('sortedTodosDesc');  
    	console.log( datalist.get('sortedTodosDesc') );*/
			}
		}
	});
});