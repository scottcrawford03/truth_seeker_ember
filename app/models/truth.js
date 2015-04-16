import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  falsity: DS.attr('string'),
  truth: DS.attr('string'),
  post: DS.hasMany('post')
});
