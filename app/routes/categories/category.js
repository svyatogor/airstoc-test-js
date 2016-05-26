import Ember from 'ember';

export default Ember.Route.extend({
  model(p) {
    return this.get('store').findRecord('category', p.id);
  }
});
