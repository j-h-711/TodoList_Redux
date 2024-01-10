import React from "react";

import * as S from "./TodoList.styles.js";

import TodoItem from "../TodoItem/TodoItem.js";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <S.Container>
      <S.ListContainer>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </S.ListContainer>
    </S.Container>
  );
};

export default TodoList;
