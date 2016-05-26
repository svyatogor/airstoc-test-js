import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('videos/new', {
        into: 'application',
        outlet: 'modal'
    });
  },

  deactivate() {
    if (this.get('currentModel.isNew')) {
      this.get('store').deleteRecord(this.get('currentModel'));
    }

    Ember.$('.modal').modal('hide');
    this.disconnectOutlet({
       outlet: 'modal',
       parentView: 'application'
    });
  },

  model() {
    return this.store.createRecord('video');
  },

  actions: {
    close() {
      this.transitionTo('videos');
    },

    save() {
      this.get('currentModel').save().then(() => {
        this.transitionTo('videos');
      });
    },
  }
});
