import { useState } from 'react';

function ToDoItem({ todo, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>💾 Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
          <button onClick={handleEdit}>✏️ Edit</button>
        </>
      )}
      <button onClick={() => deleteTask(todo.id)}>🗑️ Delete</button>
    </li>
  );
}

export default ToDoItem;
