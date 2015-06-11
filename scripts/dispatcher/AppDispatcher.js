/**
 * The Dispatcher will be the nexus through which all activity goes through:
 * Views will emit actions – which the Dispatcher will redistribute to the Stores who subscribe to those.
 * Stores in turn will fire change events which will be captured by the Views so that they can update themselves.
 */

var Dispatcher = require('./Dispatcher'),
  copyProperties = require('react/lib/copyProperties'),
  PayloadSources = require('../constants/PayloadSources');

var AppDispatcher = copyProperties(new Dispatcher(), {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
    handleServerAction(action) {
    console.log('server action', action);

    if (!action.type) {
      throw new Error('Empty action.type: you likely mistyped the action.');
    }

    this.dispatch({
      source: PayloadSources.SERVER_ACTION,
      action: action
    });
  },

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
    handleViewAction(action) {
    console.log('view action', action);

    if (!action.type) {
      throw new Error('Empty action.type: you likely mistyped the action.');
    }

    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action: action
    });
  }
});

module.exports = AppDispatcher;