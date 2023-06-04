import styled from 'styled-components';

export const CommentStyle = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #edece6;
  background-color: #fff;
  padding-left: 10px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 5px 0px 5px 0px;
`;

export const Text = styled.div`
  color: #b5b5b1;
  font-size: 90%;
  display: flex;
  flex-wrap: wrap;
`;

export const Comment = styled.div`
  padding: 0px 0px 5px 7px;
  border-left: 2px solid #b5b5b1;
`;

export const Button = styled.button`
  width: 85px;
  height: 25px;
  border: 1px solid #8c8c89;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
  line-height: 25px;
  color: #8c8c89;
`;
