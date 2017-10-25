import steps from '../steps';

export default function(assert) {
  server.createList('workshop', 10);
  return steps(assert)
    .when('I look into the "$listName" list', function(listName, next) {
      const list = findWithAssert(`.${listName}-list`);
      this.ctx[listName] = list;
      andThen(() => next());
    })
    .then('I should find $num workshops', function (num, next) {
      assert.equal(this.ctx['workshop'].children().length, num);
      next();
    })
}
