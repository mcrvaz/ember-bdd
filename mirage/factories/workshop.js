import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    cnpj() {
        return faker.address.zipCode();
    },
    name() {
        return faker.company.companyName();
    },
    address() {
        return faker.address.zipCode();
    },
    phone() {
        return faker.address.zipCode();
    },
    email() {
        return faker.address.zipCode();
    },
});
