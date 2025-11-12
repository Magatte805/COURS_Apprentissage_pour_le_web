import React from 'react';
import TodoItem from './TodoItem';

function App() {
  const todos = [
    { id: 1, text: 'Faire mes fiches de cours' },
    { id: 2, text: 'Réviser React' },
    { id: 3, text: 'rendre le TP de React' }
  ];

  return (
    <div>
      <h1>Ma To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default App;
