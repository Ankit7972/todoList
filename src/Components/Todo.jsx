import React,{useState}from 'react'
import { v4 as uuidv4 } from 'uuid';

function Todo() {

    let [todo,setTodo]=useState([{task: "sample task", id: uuidv4()}]); 

    let addNewTask=()=>{
        setTodo((prevTodos)=>{
          return [...prevTodos,{task:newTodo, id:uuidv4()}]
        });
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo=(id)=>{
     // setTodo(todo.filter((todo)=>todo.id != id)); //method-1
     setTodo((prevTodos)=> todo.filter(prevTodos => prevTodos.id != id));//method-2
    }
  return (
    <div>
      <input placeholder='write your task'value={newTodo} onChange={updateTodoValue}></input>
      <br></br>
      <button onClick={addNewTask}>click here!</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h3>Tasks</h3>
      <hr></hr>
      <ul>
      { todo.map((todo)=>
        <li key={todo.id}>
         <span>{todo.task}</span>
         &nbsp;&nbsp;
         <button onClick={()=>deleteTodo(todo.id)}>delete</button>
        </li>
       )
      }
      </ul>
       
    </div>
  );
}

export default Todo
