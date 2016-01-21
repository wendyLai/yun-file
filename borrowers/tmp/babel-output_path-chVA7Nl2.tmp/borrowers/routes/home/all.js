define("borrowers/routes/home/all", ["exports", "ember"], function (exports, _ember) {

	var listData = [{
		level: "1",
		name: "文件夹1",
		size: "-",
		date: "2016-01-12 18:08"
	}, {
		level: "1",
		name: "文件夹2",
		size: "-",
		date: "2016-01-13 15:00"
	}, {
		level: "1",
		name: "文件夹3",
		size: "-",
		date: "2016-01-15 11:14"
	}, {
		level: "1",
		name: "文件夹4",
		size: "-",
		date: "2016-01-16 04:25"
	}, {
		level: "1",
		name: "文件夹2",
		size: "-",
		date: "2016-01-13 15:00"
	}];
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			return listData;
		}
	});
});