import React, { useState, useEffect } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    const storedTodo = localStorage.getItem('todoList');
    if (storedTodo) {
      setListTodo(JSON.parse(storedTodo));
    }
  }, []);

  const saveToLocalStorage = (todos) => {
    try {
      localStorage.setItem('todoList', JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };

  const addList = (inputText) => {
    if (inputText.trim() !== '') {
      const newTodoList = [...listTodo, { text: inputText, completed: false }];
      setListTodo(newTodoList);
      saveToLocalStorage(newTodoList);
    }
  };

  const deleteListItem = (index) => {
    const newListTodo = [...listTodo];
    newListTodo.splice(index, 1);
    setListTodo(newListTodo);
    saveToLocalStorage(newListTodo);
  };

  const toggleComplete = (index) => {
    const newListTodo = [...listTodo];
    newListTodo[index].completed = !newListTodo[index].completed;
    setListTodo(newListTodo);
    saveToLocalStorage(newListTodo);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">TODO List</h1>
        <TodoInput addList={addList} />
        <ul className="todo-list">
          {listTodo.map((todo, index) => (
            <TodoList
              key={index}
              index={index}
              todo={todo}
              deleteItem={deleteListItem}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
