import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  provider: DS.attr('string'),
  text: DS.attr('string'),
  lat: DS.attr('number'),
  long: DS.attr('number'),
});
