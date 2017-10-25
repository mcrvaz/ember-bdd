import { module } from 'qunit';
import { resolve } from 'rsvp';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
// import AjaxService from 'ember-ajax/services/ajax';

// const MyAjaxService = AjaxService.extend({
//   host: 'http://localhost:8000',
//   namespace: '/api/v1/'
// });

export default function(name, options = {}) {
  module(name, {
    needs: ['service:ajax'],
    beforeEach() {
      this.application = startApp();
      // this.application.register('service:ajax', MyAjaxService);
      // this.application.inject('component:location-map', 'maps', 'service:stubMaps');

      if (options.beforeEach) {
        return options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
      return resolve(afterEach).then(() => destroyApp(this.application));
    }
  });
}
