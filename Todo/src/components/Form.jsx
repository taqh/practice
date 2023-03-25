import { useState } from "react";

function Form(props) {
    
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const handleSubmit= (e) => {
        e.preventDefault();
        if(value.trim().length === 0){return}
        // pass input value to <Main />
        props.addItem(value)
        setValue('')
        console.log(`New Task: ${value}`)
    };
    
    return (
        <form className="create-todo" onSubmit={handleSubmit}>           
                <button className="add-btn">
                    <span className="visually-hidden">Click to add task</span>
                </button>
            <label>
                <input 
                    autoFocus
                    type="text"
                    name="taskInput"
                    className="input-task"
                    autoComplete="off"
                    value={value}
                    onChange={handleChange}
                    placeholder="Create a new todo..."
                />
            </label>
        </form>
    )
}

export default Form