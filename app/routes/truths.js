import Ember from 'ember';
import ENV from 'truth-seeker-ember/config/environment'

const url = ENV.apiUrl;

export default Ember.Route.extend({
  model: function () {
    return $.getJSON(`${url}/api/v1/categories`).then( (data) => {
      return data.categories.map( (category) => category );
    });
  }
});
