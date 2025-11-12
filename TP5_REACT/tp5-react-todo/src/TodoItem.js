import React from 'react';

function TodoItem({ text }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{text}</span>
      <button>Supprimer</button>
    </li>
  );
}

export default TodoItem;
