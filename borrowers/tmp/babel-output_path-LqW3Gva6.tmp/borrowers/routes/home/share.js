define("borrowers/routes/home/share", ["exports", "ember"], function (exports, _ember) {

	var deleteData = [{
		level: "1",
		name: "文件夹1",
		view: "214",
		save: "21",
		download: "35",
		date: "2016-01-12 18:08"
	}, {
		level: "1",
		name: "文件夹2",
		view: "41",
		save: "2",
		download: "5",
		date: "2016-01-13 15:00"
	}];
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			return deleteData;
		}
	});
});