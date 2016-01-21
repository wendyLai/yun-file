define("borrowers/routes/home/trash", ["exports", "ember"], function (exports, _ember) {

	var deleteData = [{
		level: "1",
		name: "文件夹1",
		size: "-",
		vaild: "9天",
		date: "2016-01-12 18:08"
	}, {
		level: "1",
		name: "文件夹2",
		size: "-",
		vaild: "9天",
		date: "2016-01-13 15:00"
	}];
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			return deleteData;
		}
	});
});