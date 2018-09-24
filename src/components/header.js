// @flow
import React from "react";
import ReduxContainer from './reduxContainer';
import * as actionCreators from '../actions/headerActions'

const ENTER_KEY_CODE = 13;
export const Header = ({ addTodo }: {addTodo: (label: string) => void}) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyPress={e => {
          let label = e.target.value.trim();
          if (e.charCode === ENTER_KEY_CODE && label !== "") {
            addTodo(label);
            e.target.value = "";
          }
        }}
      />
    </header>
  );
};

const mapStateToProps = () => ({});

export default ReduxContainer(Header, mapStateToProps, actionCreators);
