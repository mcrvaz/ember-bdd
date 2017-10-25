import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
    ajax: service('ajax'),
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
                model.set('name', res['nome-fantasia']);
                model.set('address', res['endereco']);
                model.set('phone', res['telefone']);
                model.set('email', res['email']);
            });
        }
    }
});
