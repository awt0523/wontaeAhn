import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

interface Props {
  todo: Todo[];
  onCreate: OnCreate;
  onToggle: OnToggle;
  onRemove: OnRemove;
}

function App() {
  const [num, setNum] = useState<number>(1);

  // const initialTodo: Todo[] = [];

  const [todos, setTodos] = useState<Todo[]>([]);

  const onCreate: OnCreate = (text: string) => {
    const newTodo = [
      ...todos,
      {
        id: num,
        text,
        done: false,
      },
    ];
    setTodos(newTodo);
    setNum(num + 1);
  };

  const onRemove: OnRemove = (id: number) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const onToggle: OnToggle = (id: number) => {
    const selectedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(selectedTodo);
  };

  return (
    <div>
      <Form onCreate={onCreate} />
      <TodoList onToggle={onToggle} onRemove={onRemove} todos={todos} />
    </div>
  );
}
export default App;
