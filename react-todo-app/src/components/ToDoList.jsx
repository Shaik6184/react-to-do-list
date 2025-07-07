import ToDoItem from './ToDoItem'

function ToDoList({ todos, deleteTask, toggleComplete, editTask }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
