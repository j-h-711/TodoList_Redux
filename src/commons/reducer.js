import { ADD, COMPLETE, DELETE, EDIT } from "./actions";

const initialState = {
  todos: [
    {
      id: 1,
      title: "식사 장소 예약하기",
      isComplete: false,
      time: "2024. 1. 11. 오후 2:14:44",
    },
    {
      id: 2,
      title: "1월 10일 저녁 7시에 헬스장 가기",
      isComplete: true,
      time: "2024. 1. 11. 오후 6:10:30",
    },
  ],
};

// action.type/action.payload 를 가지고
// action의 type에 따라 어떤 결과를 내어야 할지 정의
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, action.todo],
      };
    case DELETE:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    case EDIT:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, title: action.title } : todo
      );
      return {
        todos: updatedTodos,
      };
    case COMPLETE:
      const updatedTodosComplete = state.todos.map((todo) =>
        todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
      return {
        todos: updatedTodosComplete,
      };
    default:
      return state;
  }
};
