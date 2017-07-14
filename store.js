const { createStore, applyMiddleware } = require('redux');
const reducer = require('./reducers');
const { StoriesLoader } = require('./loaders');

module.exports = createStore(reducer, 
    applyMiddleware(
        StoriesLoader()
    )
);