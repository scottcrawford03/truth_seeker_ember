import Ember from 'ember';

export default Ember.Controller.extend({

  _setup: function () {
    this.set('searchTerm', '');
  }.on('init'),

  searchTerm: '',

  matchingPosts: function () {
    debugger;
    let searchTerm = this.get('searchTerm').toLowerCase();
    if (searchTerm) {
      return this.get('model').filter( (post) => {
        if (!post.get('text')) return false;
        return post.get('text').toLowerCase().indexOf(searchTerm) > -1;
      });
    }
    return this.get('model');
  }.property('searchTerm')
});
