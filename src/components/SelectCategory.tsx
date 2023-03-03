import { Category, categoryState } from "../atoms";

import { useRecoilState } from "recoil";

const SelectCategory = () => {
  const [category, setCategory] = useRecoilState(categoryState);

  const changeCategory = (e: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setCategory(value as Category);
  };

  return (
    <select value={category} onInput={changeCategory}>
      <option>TO_DO</option>
      <option>DOING</option>
      <option>DONE</option>
    </select>
  );
};

export default SelectCategory;
