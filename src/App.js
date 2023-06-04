import Header from './components/Header';
import MainPage from './pages/MainPage';
import { GlobalStyles } from './styles/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import { AppStyle } from './styles/appStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <AppStyle>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/story" element={<NewsPage />} />
        </Routes>
      </AppStyle>
    </BrowserRouter>
  );
}

export default App;
