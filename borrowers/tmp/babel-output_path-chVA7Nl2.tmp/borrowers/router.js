define('borrowers/router', ['exports', 'ember', 'borrowers/config/environment'], function (exports, _ember, _borrowersConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _borrowersConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('home', function () {
      this.route('all');
      this.route('picture');
      this.route('document');
      this.route('video');
      this.route('bt');
      this.route('music');
      this.route('other');
      this.route('share');
      this.route('trash');
    });
    this.route('login');
  });

  exports['default'] = Router;
});