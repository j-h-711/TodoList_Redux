import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  input {
    appearance: none;
    outline-style: none;
    border: none;
  }
`;

export const Wrapper = styled.div`
  height: 580px;
  padding: 20px 20px;
  border-radius: 8px;
  border: 3px solid black;
  background: #e9ecef;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  // @media (max-width: 768px) {
  //   height: auto; /* Adjust the height as needed for smaller screens */
  //   width: 100%; /* Set width to 100% for smaller screens */
  //   overflow: auto; /* Add overflow property to enable scrolling if content overflows */
  // }
`;

export const Title = styled.div`
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  font-weight: bold;
`;
