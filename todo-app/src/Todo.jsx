
const Todo = function({task = "default todo", id = 1, handleRemove}) {
    const remove = function() {
        handleRemove(id);
    }

    return (
        <div>
            <li>
                {task}
                <button onClick={remove}>X</button>
            </li>
        </div>
    )
}

export default Todo;