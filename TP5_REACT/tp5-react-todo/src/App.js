import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Charger les tâches depuis le localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Sauvegarder les tâches à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //Ajouter une tâche
  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  //Cocher / décocher une tâche
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //Supprimer une tâche
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Ma To-Do List</h1>

      {/* Champ et bouton pour ajouter */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={addTodo}>Ajouter</button>

      {/* Liste des tâches */}
      <p>Tâches restantes : {todos.filter(todo => !todo.completed).length}</p>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
