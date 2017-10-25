import steps from '../steps';

export default function(assert) {
  server.createList('workshop', 10);
  return steps(assert)
    .then('I should find $num workshops', function (num, next) {
      assert.equal(this.ctx.workshops.size(), num);
      next();
    })
    .then('I should be on "$page" page', function(page, next) {
      assert.equal(currentURL(), page);
      next();
    });
}
