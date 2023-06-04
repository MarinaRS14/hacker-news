import { styled } from 'styled-components';

export const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.span`
  color: #b5b5b1;
`;
export const Heading = styled.b`
  font-size: 26px;
  text-transform: uppercase;
`;

export const StoryLink = styled.div`
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  color: #b5b5b1;
  border: 2px solid #b5b5b1;
  border-radius: 5px;

  &:hover {
    color: #8c8c89;
    cursor: pointer;
    border: 2px solid #8c8c89;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
