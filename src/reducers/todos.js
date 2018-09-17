const initState = [];

const todos = (state = initState, action) => {
  let clone, todo;
  switch (action.type) {
    case "ADD_TODO":
      clone = [...state];
      clone.push({
        id:
          state.length === 0
            ? 1
            : Math.max(...state.map(todo => todo.id)) + 1,
        label: action.label
      });
      return clone;
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    case "TOGGLE_ALL":
      return state.map(todo => {
        return {
          id: todo.id,
          label: todo.label,
          completed: action.data
        };
      });
    case "TOGGLE_TODO":
      clone = [...state];
      todo = clone.find(item => item.id === action.id);
      todo.completed = !todo.completed;
      return clone;
    case "REMOVE_TODO":
      clone = [...state];
      let index = clone.findIndex(item => item.id === action.id);
      clone.splice(index, 1);
      return clone;
    case "UPDATE_TODO":
      clone = [...state];
      todo = clone.find(item => item.id === action.data.id);
      todo.label = action.data.label;
      return clone;
  }
  return state;
};

export default todos;
