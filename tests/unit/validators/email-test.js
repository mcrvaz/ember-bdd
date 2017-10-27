import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:email', 'Unit | Validator | Email', {});

test('very.common@example.com is valid', function(assert) {
    const validator = this.subject();
    assert.ok(validator.isValid('very.common@example.com'));
});

test('disposable.style.email.with+symbol@example.com is valid', function(assert) {
    const validator = this.subject();
    assert.ok(validator.isValid('disposable.style.email.with+symbol@example.com'));
});

test('x@example.com is valid', function(assert) {
    const validator = this.subject();
    assert.ok(validator.isValid('x@example.com'));
});

test('Abc.example.com is invalid', function(assert) {
    const validator = this.subject();
    assert.notOk(validator.isValid('Abc.example.com'));
});

test('A@b@c@example.com is invalid', function(assert) {
    const validator = this.subject();
    assert.notOk(validator.isValid('A@b@c@example.com'));
});

test('1234567890123456789012345678901234567890123456789012345678901234+x@example.com is invalid', function(assert) {
    const validator = this.subject();
    assert.notOk(validator.isValid('1234567890123456789012345678901234567890123456789012345678901234+x@example.com'));
});
