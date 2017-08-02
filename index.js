'use strict'
class Logger {
  constructor(component) { // component is likely to corresponmd to a modeul, but does not have to
    this.component = component;
  }
  _log(level, functionName, context, ...args) {
    args.unshift(new Date().toISOString(), level, this.component, functionName, context['request-id'] || 'no-request-id', context.user || 'INCOGNITO')
    console.log.apply(null, args)
  }
  info(...args) {
    args.unshift('info')
    this._log.apply(this,args)
  }
  debug(...args) {
    args.unshift('debug')
    this._log.apply(this, args)
  }
  error(...args) {
    args.unshift('\x1b[30;101merror\x1b[0m')
    this._log.apply(this, args)
  }
}

exports.Logger = Logger