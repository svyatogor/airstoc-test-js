import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
    title: DS.attr(),
    location: DS.attr(),
    categories: DS.hasMany('category')
});
