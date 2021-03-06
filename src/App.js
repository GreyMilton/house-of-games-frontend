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
import BadURLPage from './components/BadURLPage';
import BadCategoryInURLPage from './components/BadCategoryInURLPage';

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [mostRecentUser, setMostRecentUser] = useState();
  const [allCategories, setAllCategories] = useState();
  const [dropdownCategoryIsClicked, setDropdownCategoryIsClicked] = useState(false);

  useEffect(() => {
    getCategories().then((res) => {
      setAllCategories(res);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, mostRecentUser, setMostRecentUser }}>
      <div className="App">
        <Header />
        {allCategories ?
        <>
          <Nav allCategories={allCategories} dropdownCategoryIsClicked={dropdownCategoryIsClicked} setDropdownCategoryIsClicked={setDropdownCategoryIsClicked}/>
          <Routes>
            <Route path="/" element={<CategoryPage setDropdownCategoryIsClicked={setDropdownCategoryIsClicked}/>} />
            <Route path="/reviews/all" element={<CategoryPage setDropdownCategoryIsClicked={setDropdownCategoryIsClicked}/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/review/:review_id" element={<ReviewPage />} />
            {allCategories && allCategories.map((category, index) => {
              return (
                <Route path={`reviews/${category.slug}`} key={index} element={<CategoryPage setDropdownCategoryIsClicked={setDropdownCategoryIsClicked}/>} />
              );
            })}
            <Route path="reviews/*" element={<BadCategoryInURLPage/>} />
            <Route path="*" element={<BadURLPage/>} />
          </ Routes>
        </>
         :
         <p>Loading...</p>
         }
      </div>
    </UserContext.Provider>
  );
}

export default App;
