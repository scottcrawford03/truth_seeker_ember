import {
  moduleForModel,
  test
} from 'ember-qunit';

import Post from 'truth-seeker-ember/models/post';

moduleForModel('post', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it has attributes', function(assert){
  var property = Post.metaForProperty('provider');
  assert.ok(property.isAttribute);
});
