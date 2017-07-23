import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

export default class BaseStore extends EventEmitter {
  subscribe(actionSubscribe) {
    this.dispatchToken = dispatcher.register(actionSubscribe);
  }

  emitChange() {
    this.emit('CHANGE');
  }

  addChangeListener(cb) {
    this.on('CHANGE', cb);
  }

  removeChangeListener(cb) {
    this.removeListener('CHANGE', cb);
  }
}