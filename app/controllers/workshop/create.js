import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
    ajax: service('ajax'),
    disableChanges: false,
    actions: {
        create() {
            this.get('model')
                .save()
                .then(() => { this.transitionToRoute("/workshop"); });
        },
        queryCNPJ(cnpj) {
            this.get('ajax').request('consulta-cnpj', {
                method: 'GET',
                data: {
                    cnpj: cnpj
                }
            }).then(res => {
                const model = this.get('model');
                model.set('tradeName', res['nome-fantasia']);
                model.set('companyName', res['razao-social']);
                model.set('address', res['endereco']);
                model.set('phone', res['telefone']);
                model.set('email', res['email']);
                this.set('disableChanges', true);
            })
            .catch(() => {
                //suppress ajax operation aborted
            });
        }
    }
});
