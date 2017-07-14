const axios = require('axios');

function StoriesService() {
  return store => dispatch => action => {
    dispatch(action)

    switch (action.type) {
      case 'FETCH_STORIES':
        axios.get('/stories')
          .then(response => response.data)
          .then(stories => dispatch({ type: 'SET_STORIES', stories }))
          .catch(error => console.log(error))
        break;
      case 'CREATE_STORY':
        const { title, url } = action;
        axios.post('/stories', { title, url, score: 0 })
          .then(response => console.log(response))
          .then(_ => dispatch({ type: 'ADD_STORY', title, url }))
          .catch(error => console.log(error))
        break;
      case 'PUT_STORY':
        const { id, score } = action;
        axios.put(`/stories/${id}`, { score })
          .then(response => console.log(response))
          .then(_ => dispatch({ type: 'UPVOTE', id }))
          .catch(error => console.log(error))
        break;
    }
  }
}

module.exports = { StoriesService };