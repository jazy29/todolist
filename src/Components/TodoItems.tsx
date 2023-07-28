 interface Props {
  completed: boolean;
  id: string;
  title: string;
  toggleTodo: (id:string,checked:boolean) => void;
  deleteTodo: (id:string,) => void;
}
export function TodoItems({ completed, id, title,toggleTodo,deleteTodo}: Props) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
