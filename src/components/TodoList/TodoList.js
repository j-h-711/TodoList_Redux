import React from "react";

import * as S from "./TodoList.styles.js";
import { useEffect, useRef, useState } from "react";

import TodoItem from "../TodoItem/TodoItem.js";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  // console.log(todos);
  // const listRef = useRef();
  // const [listBottom, setListBottom] = useState(0);

  // useEffect(() => {
  //   // 스크롤을 맨 아래로 이동
  //   if (listRef.current) {
  //     listRef.current.scrollTop = listRef.current.scrollHeight;
  //     // 맨 아래 위치를 상태에 저장
  //     setListBottom(listRef.current.scrollHeight);
  //   }
  // }, [todos]);

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
