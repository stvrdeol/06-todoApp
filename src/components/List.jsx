import { useAppContext } from "../context/GlobalContext";

function List() {
  const { todos, setTodos } = useAppContext();
  // toggle todo checked
  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  //   delete todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  //   edit todo
  const editTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          edit: !todo.edit,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // change todo
  const changeTodo = (e, id, text) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    // add focus to the input box

    const newTodos = todos.map((todo) => {
      if (todo.id === id && todo.edit) {
        return {
          ...todo,
          todo: text,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <section>
      {todos.length ? (
        todos.map((todo) => (
          <section key={todo.id} className="flex gap-3 mb-4 items-start ">
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleTodo(todo.id)}
            />
            <p
              style={todo.checked ? { textDecoration: "line-through" } : null}
              className={todo.edit ? "hidden" : "w-full leading-5  break-all"}>
              {todo.todo}
            </p>
            <textarea
              type="text"
              className={
                !todo.edit
                  ? "hidden"
                  : "w-full bg-inherit pr-2 border-b-2 outline-none break-words resize-none overflow-hidden"
              }
              required
              value={todo.todo}
              id={`todo-${todo.id}`}
              onChange={(e) => changeTodo(e, todo.id, e.target.value)}
              cols={1}
            />
            <button
              onClick={() => editTodo(todo.id)}
              className={
                todo.edit ? "bg-blue-400 p-2 py-1" : "bg-green-600 p-2 py-1"
              }>
              {todo.edit ? "Save" : "Edit"}
            </button>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
              className="bg-[#ef233c] p-2 py-1">
              Delete
            </button>
          </section>
        ))
      ) : (
        <p>Your tasks will be shown here</p>
      )}
    </section>
  );
}

export default List;
