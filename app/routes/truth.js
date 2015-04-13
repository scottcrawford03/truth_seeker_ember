import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('post', {category_name: params.truth_id});
  }
});
