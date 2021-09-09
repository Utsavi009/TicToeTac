import { useEffect, useState } from "react";
import "../index.css";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  console.log(todo);
  console.log(todoList);

 /*  useEffect(() => {
      setTodoList(localStorage.setItem('list', JSON.stringify(todoList)))
  }, [todoList]) */

  const handleComplete = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: uuidv4(), title: todo, completed: false }]);
    setTodo("");
  };

  return (
    <div className="board">
      <h1 className="header">Todo</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your todo wish"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {todoList &&
          todoList.map((item) => {
            return (
              <div key={item.id} className="todo-list">
                {item.title}
                
                <button type="button" onClick={() => handleComplete(item.id)}>
                  {item.completed ? "Completed" : "Complete"}
                </button>
                <button type="button" onClick={() => handleDelete(item.id)}>
                  delete
                </button>
                
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todo;
