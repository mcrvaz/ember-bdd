// import Ember from 'ember';
import steps from '../steps';

export default function(assert) {
  return steps(assert)
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
