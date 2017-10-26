import Ember from 'ember';
import CPF_CNPJ from 'npm:cpf_cnpj';

const CNPJ = CPF_CNPJ.CNPJ;

export default Ember.Object.extend({
    isValid(cnpj) {
        return CNPJ.isValid(cnpj);
    }
});
