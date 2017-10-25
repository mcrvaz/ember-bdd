import steps from '../steps';

export default function(assert) {
  server.createList('workshop', 10);
  return steps(assert)
    .when('I look into the "$listName" list', function(listName, next) {
      const list = find(`.${listName}-list`);
      this.ctx[listName] = list;
      assert.ok(list.length);
      andThen(() => next());
    })
    .then('I should find $num workshops', function (num, next) {
      assert.equal(this.ctx['workshop'].children().length, num);
      next();
    })
}
