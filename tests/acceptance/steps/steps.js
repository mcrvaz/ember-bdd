import yadda from '../../helpers/yadda';

export default function(assert) {

  function visitPage(page, next) {
    visit(page);
    andThen(() => {
      assert.equal(currentURL(), page);
      next();
    });
  }

  // function lookIntoList(listName, next) {
  //   const list = find(`.${listName}-list`);
  //   assert.ok(list.length);
  //   this.ctx[listName] = list;
  //   andThen(() => next());
  // }

  return yadda.localisation.English.library()
    .given('I visit the "$page" page', function(page, next) {
      visitPage(page, next);
    })
    .then('I visit the "$page" page', function(page, next) {
      visitPage(page, next);
    })

    .then('I should be on "$page" page', function(page, next) {
      assert.equal(currentURL(), page);
      next();
    })

    .when('I fill the "$field" field with "$value"', function(field, value, next) {
      const selector = `#input-${field.toLowerCase()}`;
      fillIn(selector, value);
      andThen(() => {
        triggerEvent(selector, 'blur');
        andThen(() => {
          assert.ok(true, this.step);
          // setTimeout(() => {next();}, 6000);
          next();
        });
      });
    })
    .when('I click on the "$buttonName" button', function(buttonName, next) {
      click(`#${buttonName.toLowerCase()}-button`);
      andThen(() => next());
    })

    // .when('I look into the "$listName" list', function(listName, next) {
    //   lookIntoList(listName, next);
    // })
    // .then('I look into the "$listName" list', function(listName, next) {
    //   lookIntoList(listName, next);
    // })
}
