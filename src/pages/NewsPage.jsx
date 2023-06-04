import React, { useEffect, useState } from 'react';
import { Heading, Text, StoryLink, NewsContainer, ButtonContainer } from '../styles/newsPageStyle';
import { StoryInfo } from '../styles/storyStyle';
import Comments from '../components/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchOpenedStory } from '../store/reducers/ActionCreators';
import axios from 'axios';
import { UpdateButton } from '../styles/mainPageStyle';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../api/hnApi';

function NewsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [newsId] = useState(location.state.id);
  const { storyInfo } = useSelector((state) => state.storyReducer);

  const updatePage = async () => {
    const { data } = await axios.get(`${BASE_URL}item/${newsId}.json`);
    dispatch(fetchOpenedStory(data));
  };

  useEffect(() => {
    updatePage();
  }, []);

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <NewsContainer>
      <ButtonContainer>
        <UpdateButton onClick={updatePage}>Update News</UpdateButton>
        <UpdateButton onClick={() => navigate('/')}>Return to Main</UpdateButton>
      </ButtonContainer>

      <Heading>{storyInfo.title}</Heading>
      <StoryInfo>
        <Text>{new Date(storyInfo.time * 1000).toLocaleString()}</Text>
        <Text>{storyInfo.by}</Text>
        <Text>{storyInfo.kids ? storyInfo.kids.length : '0'} comments</Text>
      </StoryInfo>

      <StoryLink role="link" onClick={() => openInNewTab(`${storyInfo.url}`)}>
        Read more
      </StoryLink>

      {storyInfo.kids
        ? storyInfo.kids.map((item) => <Comments key={item} commentId={item} />)
        : null}
    </NewsContainer>
  );
}

export default NewsPage;
