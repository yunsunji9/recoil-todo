import { categoryState, todosSelector } from "./atoms";

import CreateTodo from "./components/CreateTodo";
import SelectCategory from "./components/SelectCategory";
import Todo from "./components/Todo";
import { useRecoilValue } from "recoil";

function App() {
  const todos = useRecoilValue(todosSelector);
  const category = useRecoilValue(categoryState);

  return (
    <>
      <CreateTodo />
      <SelectCategory />
      <h1>{category}</h1>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

export default App;
