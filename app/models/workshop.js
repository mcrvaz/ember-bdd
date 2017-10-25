import DS from 'ember-data';
const attr = DS.attr;

export default DS.Model.extend({
    cnpj: attr('string'),
    tradeName: attr('string'), //nome fantasia
    companyName: attr('string'), //razão social
    address: attr('string'),
    phone: attr('string'),
    email: attr('string'),
});
