import { TodoItems } from "./TodoItems";
import { StateProperties } from "../App";


interface TodoListProps {
  todos: StateProperties[];
  toggleTodo: (id:string,checked:boolean) => void;
  deleteTodo: (id:string,) => void;
}

export function TodoList({todos,toggleTodo,deleteTodo}:TodoListProps) {
  return (
    <ul className="list">
      {todos.map((todos) => {
        return [
          <TodoItems {...todos} key={todos.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        ];
      })}
    </ul>
  );
}
