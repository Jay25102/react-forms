import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = function() {
    const [todos, setTodos] = useState([]);

    const addTodo = function(todoObj) {
        setTodos(todos => [...todos, todoObj]);
    }

    const removeTodo = function(id) {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todos.map(t => (
                    <Todo 
                        id={t.id}
                        key={t.id}
                        task={t.task}
                        handleRemove={removeTodo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;