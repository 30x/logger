'use strict'
class Logger {
  constructor(component) { // component is likely to corresponmd to a modeul, but does not have to
    this.component = component;
  }
  _log(level, functionName, context, message) {
    console.log(new Date().toISOString(), level, this.module, functionName, context['request-id'], content.user, message)
  }
  info(functionName, context, message) {
    console.log(new Date().toISOString(), 'info', this.module, functionName, context['request-id'] || 'no-request-id', content.user || 'INCOGNITO', message)
  }
  debug(functionName, context, message) {
    console.log(new Date().toISOString(), 'info', this.module, functionName, context['request-id'], content.user, message)
  }
  error(functionName, context, message) {
    console.log(new Date().toISOString(), 'info', this.module, functionName, context['request-id'], content.user, message)
  }
}