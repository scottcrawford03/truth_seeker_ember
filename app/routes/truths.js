import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.$.getJSON('/api/v1/categories').then( (data) => {
      return data.categories.map( (category) => category );
    });
  }
});
