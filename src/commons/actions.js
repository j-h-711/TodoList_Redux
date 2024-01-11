import { createAction } from "@reduxjs/toolkit";
import { createContext } from "react";

export const ADD = "ADD_TODO";
export const DELETE = "DELETE_TODO";
export const EDIT = "EDIT_TODO";
export const COMPLETE = "COMPLETE_TODO";

let id = 3;

// todo 추가와 삭제 action
// 생성,삭제 로직은 reducer에게 위임

// 추가 action
export const add_todo = (todo) => {
  return {
    type: ADD,
    todo: {
      id: id++,
      title: todo.title,
      isComplete: false,
      time: todo.time,
    },
  };
};

// 삭제 action
export const delete_todo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

// 수정 action
export const edit_todo = (todo) => {
  return {
    type: EDIT,
    id: todo.id,
    title: todo.title,
    isComplete: todo.isComplete,
    time: todo.time,
  };
};

// 완료 action
export const complete_todo = (todo) => {
  // COMPLETE 액션 타입과 함께 todo 객체 반환
  return {
    type: COMPLETE,
    id: todo.id,
    title: todo.title,
    isComplete: todo.isComplete,
    time: todo.time,
  };
};
