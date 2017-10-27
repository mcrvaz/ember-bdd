import EmailValidator from 'npm:email-validator';

export default function(email) {
    return EmailValidator.validate(email);
}
