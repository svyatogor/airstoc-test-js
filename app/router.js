import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('videos', function() {
    this.route('new');
    this.route('edit', {path: ':id/edit'});
  });

  this.route('categories', function() {
    this.route('category', {path: ':id'});
  });
});

export default Router;
