import Ember from 'ember';

export default Ember.Component.extend({

  hidden: false,

  actions: {
    doSomething: function () {
      this.toggleProperty('hidden');
    }
  }

});
