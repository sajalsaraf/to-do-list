import React from "react";

const Todoslist = ({ todos, setTodos }) => {
    console.log("arr",todos)
    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />
                </li>
                // <div>{todo.title}</div>
            ))}
        </div>
    );
};
export default Todoslist;