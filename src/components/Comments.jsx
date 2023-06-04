import React, { useEffect, useState } from 'react';
import { Button, Comment, CommentStyle, InfoBlock, Text } from '../styles/commentsStyle';
import axios from 'axios';
import UserImg from '../assets/img/user_icon.svg';

function Comments({ commentId }) {
  const [comment, setComment] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`,
      );
      setComment(data);
    }
    fetchData();
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CommentStyle>
        <InfoBlock>
          <img src={UserImg} alt="userImg" />
          <Text>{comment.by}</Text>
          <Text>{new Date(comment.time * 1000).toLocaleString()}</Text>
        </InfoBlock>

        <Comment>{comment.text}</Comment>

        {comment.kids ? (
          <div>
            <Button onClick={handleClick}>Show answers</Button>
            {isOpen && (
              <div>
                {comment.kids.map((item) => (
                  <Comments key={item} commentId={item} />
                ))}
              </div>
            )}
          </div>
        ) : null}
      </CommentStyle>
    </>
  );
}

export default Comments;
