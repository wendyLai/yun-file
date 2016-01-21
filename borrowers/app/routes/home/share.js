import Ember from 'ember';

var deleteData = [
		{
			level:"1",
			name:"文件夹1",
			view:"214",
			save:"21",
			download:"35",
			date:"2016-01-12 18:08"
		},
		{
			level:"1",
			name:"文件夹2",
			view:"41",
			save:"2",
			download:"5",
			date:"2016-01-13 15:00"
		}
	];
export default Ember.Route.extend({
	model: function(){
		return deleteData;
	}
});