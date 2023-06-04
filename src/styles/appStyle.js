import styled from 'styled-components';

export const AppStyle = styled.div`
  width: 100vw;
  min-height: calc(100vh - 60px);
  height: 100%;
  background-color: #fffef7;
  padding: 20px 120px 20px 120px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media screen and (max-width: 768px) {
    padding: 20px 50px 20px 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 20px 20px 20px;
  }
`;
