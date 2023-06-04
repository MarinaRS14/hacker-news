import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StoryCell, StoryInfo, StoryStyle, TextGrey, TextOrange } from '../styles/storyStyle';

function StoryBlock({ story }) {
  const navigate = useNavigate();

  return (
    <>
      <StoryStyle onClick={() => navigate('/story', { state: { id: story.id } })}>
        <StoryCell>
          <TextOrange>{story.score}</TextOrange>
          <TextGrey>POINTS</TextGrey>
        </StoryCell>

        <StoryCell>
          <b>{story.title}</b>
          <StoryInfo>
            <TextGrey>by {story.by}</TextGrey>
            <TextGrey>{new Date(story.time * 1000).toLocaleString()}</TextGrey>
          </StoryInfo>
        </StoryCell>
      </StoryStyle>
    </>
  );
}

export default StoryBlock;
