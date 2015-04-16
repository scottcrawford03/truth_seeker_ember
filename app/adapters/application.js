import DS from 'ember-data';
import ENV from 'truth-seeker-ember/config/environment'

const url = ENV.apiUrl;

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',
  host: url
});
