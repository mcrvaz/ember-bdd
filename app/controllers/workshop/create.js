import { inject as service } from '@ember/service';
import CNPJValidator from '../../validators/cnpj';
import Controller from '@ember/controller';

const cnpjValidator = CNPJValidator.create();

export default Controller.extend({
    ajax: service('ajax'),
    disableChanges: false,
    showQuerySuccess: false,
    cnpjValidation: [{
        message: 'CNPJ inválido.',
        validate: cnpjValidator.isValid
    }],
    cnpjValidationErrors: [],
    actions: {
        create() {
            this.get('model')
                .save()
                .then(() => { this.transitionToRoute("/workshop") });
        },
        queryCNPJ(cnpj) {
            if(!cnpjValidator.isValid(cnpj)) return;
            this.get('ajax').request('consulta-cnpj', {
                method: 'GET',
                data: { cnpj: cnpj }
            }).then(res => {
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
