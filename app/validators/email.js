import Ember from 'ember';
import EmailValidator from 'npm:email-validator';

export default Ember.Object.extend({
    isValid(email) {
        return EmailValidator.validate(email);
    }
});
