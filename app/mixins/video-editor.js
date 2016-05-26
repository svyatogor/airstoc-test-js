import Ember from 'ember';

export default Ember.Mixin.create({
  allCategories: function() {
    this.get('store').findAll('category').then(categories => this.set('allCategories', categories.toArray()));
  }.property('cl'),

  actions: {
    createCategory(category) {
      let categoryObject = this.get('store').createRecord('category', {name: category});
      categoryObject.save().then(c => {
        this.get('allCategories').addObject({id: c.get('id'), name: c.get('name')});
        this.get('model.categories').pushObject(c);
      });
    }
  }
});
