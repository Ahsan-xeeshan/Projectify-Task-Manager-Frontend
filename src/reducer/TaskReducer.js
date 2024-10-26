const initialState = {
  taskData: [],
};

const TaskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_TASK":
      return {
        taskData: [...state.taskData, action.payload],
      };
      break;
    case "EDIT_TASK":
      return {
        taskData: state.taskData.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
      break;
    case "REMOVE_FROM_TASK":
      return {
        ...state,
        taskData: state.taskData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      break;
    default:
      return state;
  }
};

export { TaskReducer, initialState };
