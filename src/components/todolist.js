import React from "react";
import { connect } from "react-redux";
import Todo from "./todo";

export const TodoList = ({ todos, allCompleted, toggleAll }) => {
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={allCompleted}
        onChange={e => toggleAll(e.target.checked)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
};

const getVisibleTodos = (todos, filters) => {
  let filter = filters.find(item => item.selected);
  switch (filter.label) {
    case "Active":
      return todos.filter(m => !m.completed);
    case "Completed":
      return todos.filter(m => m.completed);
    default:
      return todos;
  }
};

const mapStateToProps = ({ todos, filters }) => ({
  allCompleted: todos.every(todo => todo.completed),
  todos: getVisibleTodos(todos, filters)
});

const mapDispatchToProps = dispatch => ({
  toggleAll: checked =>
    dispatch({
      type: "TOGGLE_ALL",
      data: checked
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
