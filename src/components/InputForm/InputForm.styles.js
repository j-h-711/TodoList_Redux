import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 16px;
`;

export const InputBox = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px 5px;

  border-radius: 15px;
  font-size: 1rem;

  background: white;
  padding: 5px 25px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);
`;

export const Button = styled.button`
  width: 80px;
  height: 50px;

  margin-left: 20px;

  font-size: 1.2rem;

  background: white;

  border: none;
  border-radius: 15px;

  color: #20c997;

  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.34);

  cursor: pointer;
`;
