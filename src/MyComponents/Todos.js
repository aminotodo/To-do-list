import React from 'react';
import TodoItem from "./TodoItem";

export default function Todos(props) {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        props.todos.map((todo) => (
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        ))
      )}
    </div>
  );
}
