import React from "react";
import { connect } from "react-redux";

const Filters = ({ filters, switchFilter }) => {
  return (
    <ul className="filters">
      {filters.map(({ label, selected }, index) => {
        return (
          <li key={index}>
            <a
              href="#/"
              className={selected ? "selected" : ""}
              onClick={() => switchFilter(label)}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const ClearBtn = ({ isShowClearBtn, clearCompleted }) => {
  if (isShowClearBtn) {
    return (
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    );
  }
  return null;
};

const Footer = props => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong> {props.activeCount} </strong> item left
      </span>
      <Filters {...props} />
      <ClearBtn {...props} />
    </footer>
  );
};

const mapStateToProps = ({ todos, filters }) => ({
  filters,
  activeCount: todos.filter(todo => !todo.completed).length,
  isShowClearBtn: todos.some(todo => todo.completed)
});

const mapDispatchToProps = dispatch => ({
  clearCompleted: () =>
    dispatch({
      type: "CLEAR_COMPLETED"
    }),
  switchFilter: data =>
    dispatch({
      type: "SWITCH_FILTER",
      data
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
