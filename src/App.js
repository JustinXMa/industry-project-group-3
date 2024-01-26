import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import Quiz from './components/Quiz/Quiz'
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quiz/:quizId' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
