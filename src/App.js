import Header from './components/Header';
import './App.css';
import CategoryPage from './components/CategoryPage';
import { Route, Routes } from 'react-router';
import LoginPage from './components/LoginPage';
import ReviewPage from './components/ReviewPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/reviews" element={<CategoryPage />} />
        <Route path="/reviews/all" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reviews/:review_id" element={<ReviewPage />} />
      </ Routes>
    </div>
  );
}

export default App;
