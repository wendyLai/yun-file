import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		selectList:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );

			$("#"+this_id).find(".list-btn").removeClass("hovered").addClass("active").siblings("button").removeClass("active");
			
		},
		selectGrid:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );

			$("#"+this_id).find(".grid-btn").removeClass("hovered").addClass("active").siblings("button").removeClass("active");
		},
		listBtnHover:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );

			var this_has_active=$("#"+this_id).find(".list-btn").hasClass("active");

			if( !this_has_active ){
				$("#"+this_id).find(".list-btn").addClass("hovered").siblings("button").removeClass("hovered");
			}

		},
		listBtnUnHover:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );

			$("#"+this_id).find(".list-btn").removeClass("hovered");
		},
		gridBtnHover:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );

			var this_has_active=$("#"+this_id).find(".grid-btn").hasClass("active");

			if( !this_has_active ){
				$("#"+this_id).find(".grid-btn").addClass("hovered").siblings("button").removeClass("hovered");
			}
		},
		gridBtnUnHover:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );

			$("#"+this_id).find(".grid-btn").removeClass("hovered");
		}

	}
});
