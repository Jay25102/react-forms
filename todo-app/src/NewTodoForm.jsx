import { useState } from "react";
import {v4 as uuid} from "uuid";

const NewTodoForm = function({ addTodo }) {
    const initialState = {
        task: ""
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = function(e) {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value,
        }));
    }

    const handleSubmit = function(e) {
        e.preventDefault();
        addTodo({task: formData.task, id: uuid()});
        setFormData(initialState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">New Task: </label>
                <input 
                    id="task"
                    name="task"
                    type="text"
                    onChange={handleChange}
                    value={formData.task}
                ></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewTodoForm;