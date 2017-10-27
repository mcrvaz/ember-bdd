import { moduleFor, test } from 'ember-qunit';
import validator from 'ember-yadda-test/validators/email';

moduleFor('validator:email', 'Unit | Validator | Email', {});

test('very.common@example.com is valid', function(assert) {
    assert.ok(validator('very.common@example.com'));
});

test('disposable.style.email.with+symbol@example.com is valid', function(assert) {
    assert.ok(validator('disposable.style.email.with+symbol@example.com'));
});

test('x@example.com is valid', function(assert) {
    assert.ok(validator('x@example.com'));
});

test('Abc.example.com is invalid', function(assert) {
    assert.notOk(validator('Abc.example.com'));
});

test('A@b@c@example.com is invalid', function(assert) {
    assert.notOk(validator('A@b@c@example.com'));
});

test('1234567890123456789012345678901234567890123456789012345678901234+x@example.com is invalid', function(assert) {
    assert.notOk(validator('1234567890123456789012345678901234567890123456789012345678901234+x@example.com'));
});
