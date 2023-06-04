import styled from 'styled-components';

export const StoryStyle = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid #edece6;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  background-color: #fff;
`;

export const StoryCell = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;

  &:nth-child(1) {
    width: 7%;
    align-items: center;
  }

  &:nth-child(2) {
    width: 93%;
  }
`;

export const StoryInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const TextOrange = styled.b`
  color: #ff7f50;
`;

export const TextGrey = styled.span`
  color: #b5b5b1;
  font-size: 12px;
`;
