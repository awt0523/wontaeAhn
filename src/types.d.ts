interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type OnToggle = (id: number) => void;
type OnRemove = (id: number) => void;

type OnCreate = (text: string) => void;
