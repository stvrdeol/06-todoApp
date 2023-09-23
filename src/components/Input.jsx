import { useAppContext } from "../context/GlobalContext";
import { useState } from "react";
function Input() {
  const { todos, setTodos } = useAppContext();
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length < 1) return;
    if (todos.length == 0) {
      setTodos([
        { id: crypto.randomUUID(), todo, completed: false, edit: false },
      ]);
    } else {
      setTodos([
        { id: crypto.randomUUID(), todo, completed: false, edit: false },
        ...todos,
      ]);
    }
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex">
      <input
        type="text"
        className="w-full p-2 px-3 rounded-s-full outline-none text-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="what to do?"
      />
      <button className="min-w-fit px-2 bg-blue-400 rounded-e-full ">
        Add Todo
      </button>
    </form>
  );
}

export default Input;
