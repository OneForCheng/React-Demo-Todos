// @flow
import React from "react";
import ReduxContainer from './reduxContainer';
import * as actionCreators from '../actions/footerActions'

type FilterType = {
  label: string,
  selected?: boolean
}

type FiltersPropsType = {
  filters: Array<FilterType>,
  switchFilter: (label: string) => void
}

type CleanBtnPropsType = { 
  isShowClearBtn: boolean, 
  clearCompleted: () => void
}

type FooterPropsType = {
  filters: Array<FilterType>,
  switchFilter: (label: string) => void,
  isShowClearBtn: boolean, 
  clearCompleted: () => void,
  activeCount: boolean
}


export const Filters = ({ filters, switchFilter }: FiltersPropsType) => {
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

export const ClearBtn = ({ isShowClearBtn, clearCompleted }: CleanBtnPropsType) => {
  if (isShowClearBtn) {
    return (
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    );
  }
  return null;
};

export const Footer = (props: FooterPropsType) => {
  return <footer className="footer">
      <span className="todo-count">
        <strong>{props.activeCount}</strong> item left
      </span>
      <Filters {...props} />
      <ClearBtn {...props} />
    </footer>;
};

const mapStateToProps = ({ todos, filters }) => ({
  filters,
  activeCount: todos.filter(todo => !todo.completed).length,
  isShowClearBtn: todos.some(todo => todo.completed)
});

export default ReduxContainer(Footer, mapStateToProps, actionCreators);