import { ADD, COMPLETE, DELETE, EDIT } from "./actions";

const initialState = {
  todos: [],
};

// action.type/action.payload 를 가지고
// action의 type에 따라 어떤 결과를 내어야 할지 정의
export const reducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return {
      todos: [...state.todos, action.todo],
    };
  } else if (action.type === DELETE) {
    return {
      todos: [...state.todos.filter((todo) => todo.id !== action.id)],
    };
  } else if (action.type === EDIT) {
    const updatedTodos = state.todos.map((todo) =>
      todo.id === action.id ? { ...todo, title: action.title } : todo
    );
    return {
      todos: updatedTodos,
    };
  } else if (action.type === COMPLETE) {
    // COMPLETE 액션을 처리하고, 해당 액션에 따라 상태 업데이트
    const updatedTodos = state.todos.map((todo) =>
      todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    return {
      todos: updatedTodos,
    };
  } else {
    return state;
  }
};
