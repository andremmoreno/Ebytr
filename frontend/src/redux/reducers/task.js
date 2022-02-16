const INITIAL_STATE = {
  task: [],
};

const task = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_TASK':
    return { ...state, task: [...state.task, action.payload] };
  default:
    return state;
  }
};

export default task;
