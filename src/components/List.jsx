import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../action/todoAction";

class List extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.props.todo_list.map((todo, index) => (
          <div key={index}>
            {todo.description} -- {JSON.stringify(todo.done)}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo_list: state.todo.todo_list
});

export default connect(
  mapStateToProps,
  { fetchData }
)(List);
