const { createStore, applyMiddleware } = require('redux');
const reducer = require('./reducers');
const { StoriesService } = require('./services/stories');

module.exports = createStore(reducer,
  applyMiddleware(
    StoriesService()
  )
);