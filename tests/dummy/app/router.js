import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('docs', function() {
    this.route('guides');
    this.route('api');
  });

});

export default Router;