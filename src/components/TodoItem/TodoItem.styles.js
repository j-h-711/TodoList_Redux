import styled from "styled-components";

export const Container = styled.div`
  margin: 4px 4px;
  padding: 4px 4px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-radius: 4px;
`;

export const TextColumn = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextAndTime = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  margin: 0 8px;

  text-decoration: ${({ isComplete }) =>
    isComplete ? "line-through" : "none"};
`;

export const Time = styled.span`
  color: gray;
  font-size: 0.8rem;
  margin-left: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const EditButton = styled.button`
  border: none;
  background: white;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  border: none;
  background: white;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const CompleteButton = styled.button`
  border: none;
  background: white;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  color: red;
  border: none;
  background: white;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const InputEdit = styled.input`
  border: 1px solid lightgrey !important;
  border-radius: 4px !important;
  padding: 4px;
  font-size: 1rem;
`;
