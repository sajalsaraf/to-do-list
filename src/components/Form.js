import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
    const [val, setValue] = useState(""); //value is stored in "val" -- value is updated by "setInput"

    const onInputChange = (event) => {
        setValue(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.setTodos([...props.todos, { id: uuidv4(), title: val, completed: false }]);
        setValue("");
    };

    return (
        // onSubmit is property of form and onFormSubmit function is called
        <form onSubmit={onFormSubmit}> 
            <input
                type="text"
                placeholder="Enter a todo..."
                className="task-input"
                value={val} // value is the variable to store the value on input box. "val" is the value stored.(argument)
                required={true}
                onChange={onInputChange} //onChange is the variable to store the function to be run whenever the "value" on inut box changes
            />
            <button className="button-add" type="submit">
                Add
            </button>
        </form>

    );
};
export default Form;