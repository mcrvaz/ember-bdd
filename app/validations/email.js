import BaseValidation from './base-validation';
import emailValidator from '../validators/email';

export default class extends BaseValidation{
    constructor(message, validator) {
        super(
            message ? message:"Email inválido",
            validator ? validator:emailValidator
        );
    }
}
