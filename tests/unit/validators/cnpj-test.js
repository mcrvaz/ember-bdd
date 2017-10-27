import { moduleFor, test } from 'ember-qunit';
import validator from 'ember-yadda-test/validators/cnpj';

moduleFor('validator:cnpj', 'Unit | Validator | CNPJ', {});

test('44.776.164/0001-80 is valid', function(assert) {
    //masked
    assert.ok(validator('44.776.164/0001-80'));
});

test('44776164000180 is valid', function(assert) {
    //unmasked
    assert.ok(validator('44776164000180'));
});

test('4477616400018 is invalid', function(assert) {
    //less than 14 characters
    assert.notOk(validator('4477616400018'));
});

test('447761640001800 is invalid', function(assert) {
    //more than 14 characters
    assert.notOk(validator('4477616400018'));
});

test('11111111111111 is invalid', function(assert) {
    assert.notOk(validator('11111111111111'));
});
