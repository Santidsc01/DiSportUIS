// EventService.js

const EventEmitter = require('events');

class EventService extends EventEmitter {}

const eventService = new EventService();

const publish = (eventName, data) => {
  eventService.emit(eventName, data);
};

const subscribe = (eventName, callback) => {
  eventService.on(eventName, callback);
};

module.exports = {
  publish,
  subscribe
};
