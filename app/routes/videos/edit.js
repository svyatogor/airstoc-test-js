import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('videos/edit', {
        into: 'application',
        outlet: 'modal'
    });
  },

  deactivate() {
    if (this.get('currentModel.hasDirtyAttributes')) {
      this.get('currentModel').rollbackAttributes();
    }

    Ember.$('.modal').modal('hide');
    this.disconnectOutlet({
       outlet: 'modal',
       parentView: 'application'
    });
  },

  model(p) {
    return this.store.findRecord('video', p.id);
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
