import yadda from '../../helpers/yadda';
import dashify from 'npm:dashify';

export default function(assert) {

  function visitPage(page, next) {
    visit(page);
    andThen(() => {
      assert.equal(currentURL(), page);
      next();
    });
  }

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
          next();
        });
      });
    })
    .when('I click on the "$buttonName" button', function(buttonName, next) {
      click(`#${buttonName.toLowerCase()}-button`);
      andThen(() => next());
    })

    .then('I should see the "$fieldName" field filled', function(fieldName, next) {
      assert.ok(
        find(`#input-${dashify(fieldName)}`).val(),
        `${fieldName} is not empty`
      );
      next();
    })
    .then('I should see the "$fieldName" field empty', function(fieldName, next) {
      assert.notOk(
        find(`#input-${dashify(fieldName)}`).val(),
        `${fieldName} is empty`
      );
      next();
    })
    .then('I should not be able to edit the "$fieldName" field', function(fieldName, next) {
      assert.ok(
        find(`#input-${dashify(fieldName)}`).prop('disabled'),
        `${fieldName} is disabled`
      );
      next();
    })
    .then('I should be able to edit the "$fieldName" field', function(fieldName, next) {
      assert.notOk(
        find(`#input-${dashify(fieldName)}`).prop('disabled'),
        `${fieldName} is not disabled`
      );
      next();
    })

    .then('I should see a "$fieldName" validation error', function(fieldName, next) {
      assert.ok(
        find(`#error-input-${dashify(fieldName)}-0`).text(),
        `${fieldName} is invalid`
      );
      next();
    })
    .then('I should see a "$fieldName" validation error saying "$text"', function(fieldName, text, next) {
      assert.equal(find(`#error-input-${dashify(fieldName)}-0`).text().trim(), text);
      next();
    })

}
