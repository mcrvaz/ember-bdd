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
            this.get('store').createRecord('workshop', {
                cnpj: this.get('cnpj'),
                email: this.get('email'),
                tradeName: this.get('tradeName'),
                companyName: this.get('companyName'),
                address: this.get('address'),
                phone: this.get('phone')
            })
            .save()
            .then(() => { this.transitionToRoute("/workshop") });
        },
        queryCNPJ(cnpj) {
            // const stripped = cnpj.replace(new RegExp(/[-\/.]/, "g"), "");
            // const fixedCNPJ = stripped.padStart(14, "0");
            // if(!cnpjValidation.validator(fixedCNPJ)) return;
            if(!cnpjValidation.validator(cnpj)) return;

            this.get('cnpjQuery')
                .getCNPJData(cnpj)
                .then(res => {
                    if(res['error']) {
                        this.set('cnpjValidationErrors', [res['error']]);
                        return;
                    }
                    this.set('tradeName', res['nome-fantasia']);
                    this.set('companyName', res['razao-social']);
                    this.set('address', res['endereco']);
                    this.set('phone', res['telefone']);
                    this.set('email', res['email']);
                    this.set('disableChanges', true);
                    this.set('showQuerySuccess', true);
            })
            .catch(() => {
                //suppress ajax operation aborted
            });
        }
    }
});
