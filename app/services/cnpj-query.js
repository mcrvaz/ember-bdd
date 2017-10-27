import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
    ajax: service('ajax'),
    getCNPJData(cnpj) {
        return this.get('ajax').request('consulta-cnpj', {
            method: 'GET',
            data: { cnpj: cnpj }
        });
    }
});
