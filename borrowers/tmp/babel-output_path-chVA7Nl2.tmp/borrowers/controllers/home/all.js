define('borrowers/controllers/home/all', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		/*iflist:true,
  ifgrid:false,*/
		iflist: false,
		ifgrid: true
	});
});