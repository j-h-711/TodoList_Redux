import React from "react";
import * as S from "./App.styles";

import InputForm from "./components/InputForm/InputForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>ToDoList Redux</S.Title>
        <InputForm />
        <TodoList />
      </S.Wrapper>
    </S.Container>
  );
}

export default App;
