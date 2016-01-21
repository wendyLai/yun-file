import Ember from 'ember';

export default Ember.Component.extend({
	contents:Ember.computed("this.get('label')",function(){
		//console.log(this.get("label").split(","));
		return this.get("label").split(",");
	}),
	urls:Ember.computed("this.get('link')",function(){
		//console.log(this.get("link").split(","));
		return this.get("link").split(",");
	}),
	icons:Ember.computed("this.get('item-icon')",function(){
		//console.log(this.get("item-icon"));
		return this.get("item-icon").split(",");
	}),
	items:Ember.computed("this.get('contents')","this.get('urls')","this.get('icons')",function(){
		var items=[];
		for(var i=0;i<this.get('contents').length;i++){
			items[i]=[];
			//items[0].content=this.get('contents')[0];
			//items[0].get("url")=this.get('urls')[0];
			var this_url=this.get('urls')[i];
			var this_content=this.get('contents')[i];
			var this_icon=this.get('icons')[i];
			items[i].url=this_url;
			items[i].content=this_content;
			items[i].icon=this_icon;
			//console.log( this_url );
			//console.log( this_content );
		}
		//console.log(items);
		return items;
	}),
	actions:{
		overDropdown:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );

			$("#"+this_id).find("ul").show();
			$("#"+this_id).find("label").show();
			$("#"+this_id).find(".span-dropdown").attr("show",true);		

		},
		outDropdown:function () {
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );

			$("#"+this_id).find("ul").delay(800).hide();
			$("#"+this_id).find("label").delay(800).hide();
			$("#"+this_id).find(".span-dropdown").attr("show",false);
		}
	}
});
