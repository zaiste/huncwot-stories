module.exports = function (state, action) {
  state = state || {
    stories: []
  };

  switch (action.type) {
    case 'UPVOTE':
      let stories = [];
      for (story of state.stories) {
        if (story.id === action.id) {
          const newStory = Object.assign({}, story);
          newStory.score++;
          stories.push(newStory);
        } else {
          stories.push(story);
        }
      }
      console.log(stories);
      return { stories };
    case 'SET_STORIES':
      return {
        stories: action.stories
      }
    default:
      return state;
  }
};