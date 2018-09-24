// @flow
import React from "react";
import ReduxContainer from './reduxContainer';
import * as actionCreators from '../actions/todoListActions'
import Todo from "./todo";

export const TodoList = ({ todos, allCompleted, toggleAll }: {todos: any, allCompleted: boolean, toggleAll: (checked: boolean) => void}) => {
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

export default ReduxContainer(TodoList, mapStateToProps, actionCreators);