import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

const API_URL = "https://jsonplaceholder.typicode.com/todos";

function UseEffectTodo() {
  const count = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);

  const fetchTodo = async () => {
    // const response = await fetch(API_URL); 
    // we did not use fetch becaue it is little bit complecated with headers and body, we will use axios
    let res = await axios.get(API_URL);
    // await is used to wait for the response to come back, then we can execute the next line code
    setTodo(res.data);
    setIsLoading(false);
  } 

  // useEffcet -> we can assume this as a callback. Every time the state and prope changes
  useEffect(() => {
    console.log("render");
    fetchTodo();
  }, [count, todo]) // my function would execute everytime either my count change or my todo change
  // It has 2 argument -
  // 1. Callback Function
  // 2. depencecy array -> we execute everytime whenever state changes. 
  //                       If it blank [] -> do not rerender every time, only do in first render
  
  if(isLoading){
    return <h1>Loading...</h1>
  }else{
    return (
      <div className='todos'>
        {todo.map((todo, index) => {
          return (
            <Todo key={index} todo={todo}/>
          )})
        }
      </div>
    )
  }
}

export default UseEffectTodo

/**
 * JavaScript is single threded
 * single threded -> only one function can be executed at a time also each function is executed in sequence
 */

/**
 * Imediately Invoked Function Expression (IIFE)
 * (() => {})()
 */