export default class {
    constructor(message, validator) {
        this.message = message;
        this.validator = validator;
    }

    get validation() {
        return [{
            message: this.message,
            validate: this.validator
        }];
    }
}
