import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | packets/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:packets/new');
    assert.ok(route);
  });
});
