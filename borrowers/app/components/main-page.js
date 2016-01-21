import Ember from 'ember';

export default Ember.Component.extend({
	showType:"",
	ifList:Ember.computed("showType",function(){
		//console.log( this.get('showType') );

		if( this.get('showType')=="list" ){
			return false;
		}else{
			return true;
		}
	}),
	ifGrid:Ember.computed("showType",function(){
		//console.log( this.get('showType') );

		if( this.get('showType')=="grid" ){
			return false;
		}else{
			return true;
		}
	}),
	actions:{
		selectType:function(){
			var $=Ember.$;
			
			var this_class=$(".switch-grid-list button[class*='active']").attr("class");
			//console.log(this_class);

			var this_type="list";

			if( this_class.indexOf("list") ){
				this_type="list";
			}else{
				this_type="grid";
			}
			this.set('showType',this_type);

			//console.log(this.get("showType"));
			//console.log(this.get("ifList"));
			//console.log(this.get("ifGrid"));
		}
	}
});
