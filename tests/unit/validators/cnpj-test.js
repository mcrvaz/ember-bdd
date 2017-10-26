import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:cnpj', 'Unit | Validator | CNPJ', {});

test('44.776.164/0001-80 is valid', function(assert) {
    //masked
    const validator = this.subject();
    assert.ok(validator.isValid('44.776.164/0001-80'));
});

test('44776164000180 is valid', function(assert) {
    //unmasked
    const validator = this.subject();
    assert.ok(validator.isValid('44776164000180'));
});

test('4477616400018 is invalid', function(assert) {
    //less than 14 characters
    const validator = this.subject();
    assert.notOk(validator.isValid('4477616400018'));
});

test('447761640001800 is invalid', function(assert) {
    //more than 14 characters
    const validator = this.subject();
    assert.notOk(validator.isValid('4477616400018'));
});

test('11111111111111 is invalid', function(assert) {
    const validator = this.subject();
    assert.notOk(validator.isValid('11111111111111'));
});
