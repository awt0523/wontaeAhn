import React from "react";
interface Props {
  todo: Todo;
  onRemove: OnRemove;
  onToggle: OnToggle;
}

function TodoItem({ todo, onRemove, onToggle }: Props) {
  return (
    <li>
      <input
        onClick={() => onToggle(todo.id)}
        type="checkbox"
        checked={todo.done}
        style={{ textDecoration: todo.done ? "line-through" : undefined }}
      />
      {todo.text}
      <span onClick={() => onRemove(todo.id)}>X</span>
    </li>
  );
}

export default TodoItem;
