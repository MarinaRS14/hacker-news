import styled from 'styled-components';

export const HeaderStyle = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #ff7f50;
  padding: 0 120px 0 120px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 50px 0 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 20px 0 20px;
  }
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  color: white;
  font-weight: bold;
  font-size: 26px;
  line-height: 40px;
  text-align: center;

  @media screen and (max-width: 480px) {
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    font-size: 20px;
    line-height: 30px;
  }
`;

export const HeaderTitle = styled.span`
  color: white;
  padding: 0 100px 0 20px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    padding: 0 10px 0 20px;
    font-size: 14px;
  }
`;
