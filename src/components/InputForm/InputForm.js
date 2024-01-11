import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./InputForm.styles";
import { add_todo, edit_todo, complete_todo } from "../../commons/actions";

const InputForm = () => {
  const dispatch = useDispatch();

  const [title, setTtitle] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setTtitle(value);
  };

  // todo 작성 완료 클릭시
  const handleClick = () => {
    if (title === "") {
      alert("내용을 작성 후 추가해주세요.");
    } else {
      const time = new Date();
      const todo = {
        title: title,
        time: time,
      };

      dispatch(add_todo(todo));
      setTtitle("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <S.Container>
      <S.InputBox
        type="text"
        placeholder="할 일을 입력하세요!!"
        onChange={handleChange}
        value={title}
        onKeyDown={handleKeyPress}
      />
      <S.Button onClick={handleClick}>추가</S.Button>
    </S.Container>
  );
};

export default InputForm;
