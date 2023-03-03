import { categoryState, todosState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";

import { useForm } from "react-hook-form";

const CreateTodo = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm();

  const submitForm = (data: any) => {
    const { todo } = data;
    const newTodo = {
      id: Date.now(),
      category: category,
      text: todo,
    };
    setTodos([newTodo, ...todos]);
    setValue("todo", "");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input type="text" {...register("todo")} />
      <button>추가</button>
    </form>
  );
};

export default CreateTodo;
