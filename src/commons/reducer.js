import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1705303245946,
      title: "다음주 월요일 저녁 식사 장소 예약하기",
      isComplete: false,
      time: 1705303245946,
    },
    {
      id: 1705303252755,
      title: "2월 1일 저녁 7시에 헬스장 가기",
      isComplete: true,
      time: 1705303252759,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state = initialState, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state = initialState, action) => {
      state.todos = [
        ...state.todos.filter((todo) => todo.id !== action.payload),
      ];
    },
    editTodo: (state = initialState, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.newTitle }
          : todo
      );
      state.todos = updatedTodos;
    },
    completeTodo: (state = initialState, action) => {
      const updatedTodosComplete = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
      state.todos = updatedTodosComplete;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
