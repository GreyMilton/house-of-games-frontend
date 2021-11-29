import Header from './components/Header';
import './App.css';
import CategoryPage from './components/CategoryPage';
import { Route, Routes } from 'react-router';
import LoginPage from './components/LoginPage';
import ReviewPage from './components/ReviewPage';
import { useEffect, useState } from 'react';
import { UserContext } from './contexts/user-context';
import { getCategories } from "./utils/api";
import Nav from './components/Nav';

function App() {
  const [currentUser, setCurrentUser] = useState("weegembump")
  useEffect(() => {
    console.log("currentUser has been set:", currentUser);
  }, [currentUser])

  const [allCategories, setAllCategories] = useState();

  useEffect(() => {
    getCategories().then((res) => {
      setAllCategories(res);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  useEffect(() => {
    console.log("allCategories has been set:", allCategories);
  }, [allCategories]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <Header />
        <Nav allCategories={allCategories} setAllCategories={setAllCategories}/>
        <Routes>
          <Route path="/" element={<CategoryPage allCategories={allCategories} setAllCategories={setAllCategories} />} />
          <Route path="/reviews" element={<CategoryPage allCategories={allCategories} setAllCategories={setAllCategories} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reviews/:review_id" element={<ReviewPage />} />
          {allCategories && allCategories.map((category, index) => {
            return (
              <Route path={`reviews/${category.slug}`} key={index} element={<CategoryPage allCategories={allCategories} setAllCategories={setAllCategories} /> } />
            );
          })}
        </ Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
