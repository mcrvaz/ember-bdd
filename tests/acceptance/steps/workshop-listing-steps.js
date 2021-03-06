import steps from './steps';

export default function(assert) {
  server.createList('workshop', 10);
  return steps(assert)
    .when('I look in the workshop list', function(next) {
      const workshops = find('.workshop-list');
      assert.ok(workshops.length);
      this.ctx.workshops = workshops;
      next();
    })
    .then('I should find $num workshops', function (num, next) {
      assert.equal(this.ctx.workshops.size(), num);
      next();
    });
}
