import { Category, ITodos, todosState } from "../atoms";

import { useRecoilState } from "recoil";

const Todo = ({ id, text, category }: ITodos) => {
  const [todos, setTodos] = useRecoilState(todosState);

  const changeState = (category: Category) => {
    const targetIdx = todos.findIndex((todo) => todo.id === id);
    const frontTodos = todos.slice(0, targetIdx);
    const backTodos = todos.slice(targetIdx + 1);

    setTodos([...frontTodos, { id, category, text }, ...backTodos]);
  };

  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <li key={id}>
      {text}
      <button onClick={deleteTodo}>삭제</button>
      {category !== Category.TO_DO && (
        <button
          onClick={() => {
            changeState(Category.TO_DO);
          }}
        >
          TO_DO
        </button>
      )}
      {category !== Category.DOING && (
        <button
          onClick={() => {
            changeState(Category.DOING);
          }}
        >
          DOING
        </button>
      )}
      {category !== Category.DONE && (
        <button
          onClick={() => {
            changeState(Category.DONE);
          }}
        >
          DONE
        </button>
      )}
    </li>
  );
};

export default Todo;
