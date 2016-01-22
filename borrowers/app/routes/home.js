import Ember from 'ember';

var listData = [
		{
			level:"1",
			name:"文件夹1",
			size:"-",
			date:"2016-01-12 18:08",
			children:[
				{
					level:"2",
					name:"文件1",
					size:"-",
					date:"2016-01-12 18:08"
				},
				{
					level:"2",
					name:"文件2",
					size:"-",
					date:"2016-01-12 18:04"
				}
			]
		},
		{
			level:"1",
			name:"文件夹2",
			size:"-",
			date:"2016-01-13 15:00"
		},
		{
			level:"1",
			name:"文件夹3",
			size:"-",
			date:"2016-01-15 11:14"
		},
		{
			level:"1",
			name:"文件夹4",
			size:"-",
			date:"2016-01-16 04:25"
		},
		{
			level:"1",
			name:"文件夹2",
			size:"-",
			date:"2016-01-13 15:00"
		}
	];


export default Ember.Route.extend({
	model: function(){
		return listData;
	},
	afterModel:function(){
		this.transitionTo("home.all");
	}
});