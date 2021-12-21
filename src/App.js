import './App.css';
import { Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';
import { UserContext } from './contexts/user-context';
import { getCategories } from "./utils/api";
import Header from './components/Header';
import Nav from './components/Nav';
import CategoryPage from './components/CategoryPage';
import LoginPage from './components/LoginPage';
import ReviewPage from './components/ReviewPage';

function App() {
  const [currentUser, setCurrentUser] = useState("cooljmessy")
  const [allCategories, setAllCategories] = useState();

  useEffect(() => {
    getCategories().then((res) => {
      setAllCategories(res);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <Header />
        <Nav allCategories={allCategories}/>
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/reviews/all" element={<CategoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reviews/:review_id" element={<ReviewPage />} />
          {allCategories && allCategories.map((category, index) => {
            return (
              <Route path={`reviews/${category.slug}`} key={index} element={<CategoryPage />} />
            );
          })}
        </ Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
