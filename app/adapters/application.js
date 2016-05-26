import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'https://airstoc-test-rb.herokuapp.com/api/',
  coalesceFindRequests: true
});
