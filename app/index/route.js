import Ember from 'ember'

const { Route } = Ember

export default Route.extend({
  setupController(controller, model) {
    controller.set('model', model)
    controller.set('now', new Date)
  },

  model() {
    return this.store.findRecord('challenge', 'current', {
      include: 'contributions'
    })
  }
})
