import Header from './components/Header';
import './App.css';
import CategoryPage from './components/CategoryPage';
import { Route, Routes } from 'react-router';
import LoginPage from './components/LoginPage';
import ReviewPage from './components/ReviewPage';
import { useEffect, useState } from 'react';
import { UserContext } from './contexts/user-context';

function App() {
  const [currentUser, setCurrentUser] = useState("weegemBump")
  useEffect(() => {
    console.log("currentUser has been set:", currentUser);
  }, [currentUser])

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
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
    </UserContext.Provider>
  );
}

export default App;
