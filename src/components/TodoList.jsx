function TodoList({ todo, index, deleteItem, toggleComplete }) {
  return (
    <li className={todo.completed ? "list-item completed" : "list-item"}>
      <span className="todo-text" onClick={() => toggleComplete(index)}>
        {todo.text}
      </span>
      <span className="icons">
        <button className="delete-button" onClick={() => deleteItem(index)}>Delete</button>
      </span>
    </li>
  );
}

export default TodoList;
