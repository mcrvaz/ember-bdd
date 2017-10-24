export default function() {
  this.passthrough('/write-coverage');

  this.urlPrefix = 'http://localhost:8000';
  this.namespace = '/api/v1';

  this.get('/workshops');
  this.post('/workshops');

}
