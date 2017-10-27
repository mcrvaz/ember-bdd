import BaseValidation from './base-validation';
import cnpjValidator from '../validators/cnpj';

export default class extends BaseValidation{
    constructor(message, validator) {
        super(
            message ? message:"CNPJ inválido",
            validator ? validator:cnpjValidator
        );
    }
}
