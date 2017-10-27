import CPF_CNPJ from 'npm:cpf_cnpj';

export default function(cnpj) {
    return CPF_CNPJ.CNPJ.isValid(cnpj);
}
