import React from "react";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onRemove: OnRemove;
  onToggle: OnToggle;
}

function TodoList({ todos, onToggle, onRemove }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TodoList;
