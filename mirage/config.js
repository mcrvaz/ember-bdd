export default function() {
  this.passthrough('/write-coverage');

  this.urlPrefix = 'http://localhost:8000';
  this.namespace = '/api/v1';

  this.get('/workshops');
  this.post('/workshops');
  this.get('/consulta-cnpj', (schema, request) => {
    const cnpj = request.queryParams.cnpj;
    if(cnpj === "72.439.173/0001-11") {
      return {'error': 'CNPJ inexistente.'};
    }
    return {
      'razao-social': "Razão Teste",
      'nome-fantasia': "Nome Teste",
      'endereco': "Endereço Teste",
      'telefone': "Telefone Teste",
      'email': "Email Teste",
    };
  });

}
