import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./TodoItem.styles";
import { deleteTodo, completeTodo, editTodo } from "../../commons/reducer";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, title, time, isComplete } = todo;
  // 수정 중 여부와 수정된 제목 상태 추가
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  // 완료 체크 버튼 클릭시 실행 함수
  const handleComplete = () => {
    dispatch(completeTodo(id));
  };

  // 수정 버튼 클릭시 실행 함수
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // 수정 input창 onchange 함수
  const handleEditTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  // 수정-저장 버튼 클릭시 실행 함수
  const handleSaveClick = () => {
    const payload = { id, newTitle };
    dispatch(editTodo(payload));
    setIsEditing(false);
  };

  // 삭제 버튼 클릭시 실행 함수
  const handleDeleteClick = () => {
    dispatch(deleteTodo(id));
  };

  const timeDate = new Date(time);
  // 시간 변환
  const KRtime = timeDate.toLocaleString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: "Asia/Seoul",
  });

  return (
    <S.Container>
      <S.TextColumn>
        {isEditing ? (
          // 수정 중일 때 수정창과 저장 버튼 표시
          <>
            <S.InputEdit
              type="text"
              value={newTitle}
              onChange={handleEditTitleChange}
            />
            <S.ButtonsContainer>
              <S.SaveButton onClick={handleSaveClick}>💾</S.SaveButton>
              <S.CompleteButton onClick={handleComplete}>✅</S.CompleteButton>
              <S.DeleteButton onClick={handleDeleteClick}>{"X"}</S.DeleteButton>
            </S.ButtonsContainer>
          </>
        ) : (
          <>
            <S.TextAndTime>
              <S.Text isComplete={isComplete}>{title}</S.Text>
              <S.Time>{KRtime}</S.Time>
            </S.TextAndTime>
            <S.ButtonsContainer>
              <S.EditButton onClick={handleEditClick}>✏️</S.EditButton>
              <S.CompleteButton onClick={handleComplete}>✅</S.CompleteButton>
              <S.DeleteButton onClick={handleDeleteClick}>{"X"}</S.DeleteButton>
            </S.ButtonsContainer>
          </>
        )}
      </S.TextColumn>
    </S.Container>
  );
};

export default TodoItem;
