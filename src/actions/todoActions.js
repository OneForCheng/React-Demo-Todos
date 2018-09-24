export const toggleTodo = id =>({
  type: "TOGGLE_TODO",
  id
});

export const  removeTodo = id =>({
  type: "REMOVE_TODO",
  id
});

export const  updateTodo = (id, label) =>({
  type: "UPDATE_TODO",
  data: {
    id,
    label
  }
});