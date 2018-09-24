// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

type Props = {
  label: string, 
  completed: boolean, 
  id: number, 
  toggleTodo: (id: number) => void,
  removeTodo: (id: number) => void,
  updateTodo: (id: number, label: string) => void
}

type State = {
  editing: boolean
}

export class Todo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  toggleEditing() {
    const editing = !this.state.editing;
    this.setState({ editing });
  }

  handleKeyPress(e: any, id: number) {
    if (e.charCode === 13) {
      this.toggleEditing();
      const label = e.target.value.trim();
      if (label === "") {
        this.props.removeTodo(id);
      } else {
        e.target.value = label;
        this.props.updateTodo(id, label);
      }
    }
  }

  render() {
    const { label, completed = false, id, toggleTodo, removeTodo } = this.props;
    let clazz = completed ? "completed" : "";
    if (this.state.editing) {
      clazz += " editing";
    }
    return (
      <li className={clazz}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => toggleTodo(id)}
          />
          <label onDoubleClick={() => this.toggleEditing()}>{label}</label>
          <button className="destroy" onClick={() => removeTodo(id)} />
        </div>
        <input
          className="edit"
          defaultValue={label}
          onKeyPress={e => this.handleKeyPress(e, id)}
        />
      </li>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id =>
    dispatch({
      type: "TOGGLE_TODO",
      id
    }),
  removeTodo: id =>
    dispatch({
      type: "REMOVE_TODO",
      id
    }),
  updateTodo: (id, label) =>
    dispatch({
      type: "UPDATE_TODO",
      data: {
        id,
        label
      }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
