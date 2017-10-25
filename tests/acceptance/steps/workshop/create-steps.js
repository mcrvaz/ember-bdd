// import Ember from 'ember';
import steps from '../steps';

export default function(assert) {
  return steps(assert)
    // .then('I should see the "Razão Social" field filled', function(next) {
    //   assert.ok(find("#input-razao-social").val(), "Razao Social is not empty");
    //   next();
    // })
    .then('I should see the "Razão Social" field filled', function(next) {
      assert.ok(find("#input-razao-social").val(), "Razão Social is not empty");
      next();
    })
    .then('I should see the "Nome Fantasia" field filled', function(next) {
      assert.ok(find("#input-nome-fantasia").val(), "Nome Fantasia is not empty");
      next();
    })
    .then('I should see the "Endereço" field filled', function(next) {
      assert.ok(find("#input-endereco").val(), "Endereço is not empty");
      next();
    })
    .then('I should see the "Telefone" field filled', function(next) {
      assert.ok(find("#input-telefone").val(), "Telefone is not empty");
      next();
    })
    .then('I should see the "E-mail" field filled', function(next) {
      assert.ok(find("#input-email").val(), "Email is not empty");
      next();
    });
  // .then('I see a workshop with "Nome" equal to "$value"', function(value, next) {
  //   const workshops = this.ctx['workshop'].children().map((i, e) => {
  //     return {
  //       name: Ember.$(e).find("label").first().text().trim(),
  //       cnpj: Ember.$(e).find("label").last().text().trim()
  //     };
  //   });
  //   const newWorkshop = workshops.filter((e) => e.name === value);
  //   assert.equal(newWorkshop.name, value);
  //   this.ctx.newWorkshop = newWorkshop;
  //   next();
  // })
  // .then('I see the same workshop with "CNPJ" equal to "$value"', function(value, next) {
  //   assert.equal(this.ctx.newWorkshop.cnpj, value);
  //   next();
  // });
}
