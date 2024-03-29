import React, {  } from "react";
import { Table } from "react-bootstrap";
import './List.css'
function TodoList() {
  const todos = [
    {
      id: 1,
      discription: "Love to travell",
      done: true,
      targetDate: new Date(),
    },
    {
      id: 2,
      discription: "Listenig to 90s",
      done: true,
      targetDate: new Date(),
    },
    {
      id: 3,
      discription: "going to GYM",
      done: true,
      targetDate: new Date(),
    },
    {
      id: 4,
      discription: "Developing",
      done: true,
      targetDate: new Date(),
    },
    {
      id: 5,
      discription: "etc",
      done: true,
      targetDate: new Date(),
    },
  ];

  return (
    <div className="main-div">
      {/* <table striped bordered hover variant="dark">
        <thead>
          <tr>
            Id
          </tr>

          <tr>Discription</tr>

          <tr>is Task Completed</tr>

          <tr>targetDate</tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.id}</td>
              <td>{todo.discription}</td>
              <td>{todo.done.toString()}</td>
              <td>{todo.targetDate.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <h3> List of Todos</h3>
      <Table  bordered responsive="md" variant="dark" className="table">
        
      <thead>
        
        <tr>
          <th>Id</th>
          <th>Discription</th>
          <th>is Task Completed</th>
          <th>targetDate</th>
        </tr>
      </thead>
      <tbody>
      {todos.map((todo) => (
            <tr key={todo.id}>
              <td >{todo.id}</td>
              <td>{todo.discription}</td>
              <td>{todo.done.toString()}</td>
              <td>{todo.targetDate.toDateString()}</td>
            </tr>
          ))}
      
        
      </tbody>
    </Table>
    </div>
  );
}

export default TodoList;
