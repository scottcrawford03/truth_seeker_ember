import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('truths/show', {
      into: 'application'
    });
  },
  model: function (params) {
    return this.store.find('post', {category_name: params.truth_id});
  }
});
