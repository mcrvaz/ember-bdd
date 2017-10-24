import yadda from '../../helpers/yadda';

export default function(assert) {
  function visitPage(page, next) {
    visit(page);
    andThen(() => {
      assert.equal(currentURL(), page);
      next();
    });
  }

  function lookIntoList(listName, next) {
    const list = find(`.${listName}-list`);
    assert.ok(list.length);
    this.ctx[listName] = list;
    next();
  }

  return yadda.localisation.English.library()
    .given('I visit the "$page" page', function(page, next) {
      visitPage(page, next);
    })
    .then('I visit the "$page" page', function(page, next) {
      visitPage(page, next);
    })

    .when('I fill the "$field" field with "$value"', function(field, value, next) {
      fillIn(`#${field.toLowerCase()}-input`, value);
      assert.ok(true, this.step);
      andThen(() => next());
    })
    .when('I click on the "$buttonName" button', function(buttonName, next) {
      click(`#${buttonName.toLowerCase()}-button`);
      andThen(() => next());
    })

    .when('I look into the "$listName" list', function(listName, next) {
      lookIntoList(listName, next);
    })
    .then('I look into the "$listName" list', function(listName, next) {
      lookIntoList(listName, next);
    })
}
