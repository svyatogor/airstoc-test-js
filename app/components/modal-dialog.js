import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['modal', 'fade'],
	classNameBindings: ['klass'],

	openModal: function() {
		var that = this;
		this.$().modal().on('hidden.bs.modal', function () {
			if (that.get('onClose')) {
				that.get('onClose')();
			}
		}.bind(this));
	}.on('didInsertElement')
});
