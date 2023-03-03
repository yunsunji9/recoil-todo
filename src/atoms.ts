import { atom, selector } from 'recoil';

// localstorage연결을 위한 라이브러리
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'todoStorage',
  storage: localStorage
});

// 실수방지를 위한 상수
export enum Category {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE'
}

export interface ITodos {
  id: number;
  category: Category;
  text: string;
}

export const todosState = atom<ITodos[]>({
  key: 'todos',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<Category>({
  key: 'category',
  default: Category.TO_DO
})

export const todosSelector = selector({
  key: 'todosSelector',
  get: ({ get }) => {
    const todos = get(todosState);
    const category = get(categoryState);

    return todos.filter((todo) => todo.category === category)
  }
})

