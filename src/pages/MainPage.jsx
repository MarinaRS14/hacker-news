import { useEffect } from 'react';
import { UpdateButton } from '../styles/mainPageStyle';
import StoryBlock from '../components/StoryBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../store/reducers/ActionCreators';
import axios from 'axios';
import Loader from '../components/Loader';
import { BASE_URL } from '../api/hnApi';

function MainPage() {
  const dispatch = useDispatch();
  const { allStories } = useSelector((state) => state.newsReducer);

  const updateLastNews = async () => {
    const ids = await axios
      .get(`${BASE_URL}newstories.json`)
      .then((response) => response.data.slice(0, 100));
    const requests = await ids.map((id) => axios.get(`${BASE_URL}item/${id}.json`));

    Promise.all(requests)
      .then((data) => data.map((i) => i.data))
      .then((response) => dispatch(fetchStories(response)));
  };

  useEffect(() => {
    updateLastNews();
  }, []);

  return (
    <>
      <UpdateButton onClick={updateLastNews}>Update News</UpdateButton>

      {allStories.length !== 0 ? (
        allStories.map((story) => <StoryBlock key={story.id} story={story} />)
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MainPage;
