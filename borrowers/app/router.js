import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', function() {
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

export default Router;
