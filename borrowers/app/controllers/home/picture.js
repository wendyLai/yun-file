import Ember from 'ember';

export default Ember.Controller.extend({
	showType:"timer",
	ifTimer:Ember.computed("showType",function(){
		//console.log( this.get('showType') );

		if( this.get('showType')=="timer" ){
			return true;
		}else{
			return false;
		}
	}),
	ifLately:Ember.computed("showType",function(){
		//console.log( this.get('showType') );

		if( this.get('showType')=="lately" ){
			return true;
		}else{
			return false;
		}
	}),
	actions:{
		isTimer:function() {
			var $=Ember.$;
			$(".underline-title.timer").addClass("active").siblings().removeClass("active");
			this.set('showType',"timer");
		},
		isLately:function(){
			var $=Ember.$;
			$(".underline-title.lately").addClass("active").siblings().removeClass("active");
			this.set('showType',"lately");
		}
	}
});
