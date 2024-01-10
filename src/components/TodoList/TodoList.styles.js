import styled from "styled-components";

export const Container = styled.div`
  max-height: 420px;
  overflow-y: auto; // 여기 수정
  border-radius: 15px;
`;

export const ListContainer = styled.div`
  width: 464px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  background: white;

  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);
  box-sizing: border-box;
`;
