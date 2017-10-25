import DS from 'ember-data';
const attr = DS.attr;

export default DS.Model.extend({
    cnpj: attr('string'),
    name: attr('string'),
    address: attr('string'),
    phone: attr('string'),
    email: attr('string'),
});
