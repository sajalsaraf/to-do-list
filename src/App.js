import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import Header from "./components/Header";
import Todoslist from "./components/Todolist";

const App = () => {
  
  const [todos, setTodos] = useState([]);

  return (
    <div className="container"> 

      <div className="app-wrapper">
        <div> <Header /></div>
        <div>
          <Form
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div> <Todoslist  todos={todos} setTodos={setTodos} /></div>
      </div>

    </div>
  );
};
export default App;
