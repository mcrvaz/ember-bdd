import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
    host: 'http://localhost:8000',
    namespace: '/api/v1/'
});