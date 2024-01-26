import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import Quiz from './components/Quiz/Quiz'
import QuizResult from './components/QuizResult/QuizResult'
import LoadingPage from './pages/LoadingPage/LoadingPage'
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quiz/:quizId' element={<Quiz />} />
          <Route path='/quiz/result/' element={<QuizResult />} />
          <Route path='/loading/:selectedResult' element={<LoadingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
