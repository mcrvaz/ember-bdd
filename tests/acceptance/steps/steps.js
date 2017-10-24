import yadda from '../../helpers/yadda';

export default function(assert) {
  return yadda.localisation.English.library()
    .given('I visit the $page listing page', function(page, next) {
      visit(page);
      andThen(() => {
        assert.equal(currentURL(), page);
        next();
      });
    })
}
