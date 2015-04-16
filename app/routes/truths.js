import Ember from 'ember';
import ENV from 'truth-seeker-ember/config/environment';

export default Ember.Route.extend({
  model: function () {
    return $.getJSON(`${ENV.apiUrl}/api/v1/categories`).then( (data) => {
      return data.categories.map( (category) => category );
    });
  }
});
