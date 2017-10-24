import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        create() {
            this.get('model')
                .save()
                .then(() => { this.transitionToRoute("/workshop"); });
        }
    }
});
