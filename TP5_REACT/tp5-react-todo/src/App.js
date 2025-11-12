import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('Toutes'); 

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

  // Ajouter une tâche
  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  // Cocher , décocher une tâche
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Supprimer une tâche
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filtrer les tâches selon le filtre choisi
  const filteredTodos = todos.filter(todo => {
    if (filter === 'Toutes') return true;
    if (filter === 'Actives') return !todo.completed;
    if (filter === 'Terminées') return todo.completed;
  });

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

      {/* Boutons de filtre */}
      <div style={{ marginTop: '10px', marginBottom: '10px' }}>
        <button onClick={() => setFilter('Toutes')}>Toutes</button>
        <button onClick={() => setFilter('Actives')}>Actives</button>
        <button onClick={() => setFilter('Terminées')}>Terminées</button>
      </div>

      {/* Compteur */}
      <p>Tâches restantes : {todos.filter(todo => !todo.completed).length}</p>

      {/* Liste des tâches filtrées */}
      <ul>
        {filteredTodos.map(todo => (
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
