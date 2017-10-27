import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import CNPJValidation from '../../validations/cnpj';
import EmailValidation from '../../validations/email';

const cnpjValidation = new CNPJValidation();
const emailValidation = new EmailValidation();

export default Controller.extend({
    cnpjQuery: service('cnpj-query'),
    disableChanges: false,
    showQuerySuccess: false,
    cnpjValidation: cnpjValidation.validation,
    emailValidation: emailValidation.validation,
    cnpjValidationErrors: [],
    actions: {
        create() {
            this.get('model')
                .save()
                .then(() => { this.transitionToRoute("/workshop") });
        },
        queryCNPJ(cnpj) {
            if(!cnpjValidation.validator(cnpj)) return;
            this.get('cnpjQuery')
                .getCNPJData(cnpj)
                .then(res => {
                    const model = this.get('model');
                    if(res['error']) {
                        this.set('cnpjValidationErrors', [res['error']]);
                        return;
                    }
                    model.set('tradeName', res['nome-fantasia']);
                    model.set('companyName', res['razao-social']);
                    model.set('address', res['endereco']);
                    model.set('phone', res['telefone']);
                    model.set('email', res['email']);
                    this.set('disableChanges', true);
                    this.set('showQuerySuccess', true);
            })
            .catch(() => {
                //suppress ajax operation aborted
            });
        }
    }
});
