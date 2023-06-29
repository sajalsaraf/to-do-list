import React from "react";

const Todoslist = (props) => {
    // console.log("arr",todos)
    const handleDelete = (x) => {
       props.setTodos(props.todos.filter((todo) => todo.id !== x.id ));
    }; 
    return (
        <div>
            {props.todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />
                    <div>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <i class="fa fa-trash">Delete</i>  
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};
export default Todoslist;