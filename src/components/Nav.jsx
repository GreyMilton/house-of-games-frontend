import { capitaliseAndReplaceDashes } from "../utils/string-utils";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav (props) {

  const [showDropdown, setShowDropdown] = useState(false);
  const [navNumber, setNavNumber] = useState(7);
  const [buttonState, setButtonState] = useState("not-clicked");
  const [dropdownCategoryClicked, setDropdownCategoryIsClicked] = useState(false);

  function clickOfButton () {
    showDropdown ? setShowDropdown(false) : setShowDropdown(true);
    setButtonState((prevState) => {
      return (prevState === "not-clicked") ? "clicked" : "not-clicked";
    })
  }

  function clickMainLink () {
    setDropdownCategoryIsClicked(false);
  }

  function clickDropdownLink () {
    setDropdownCategoryIsClicked(true);
  }

  return (
    <>
      <nav className="nav-main">
        <NavLink to="/reviews/all">All categories</NavLink>
        {props.allCategories && props.allCategories.map((category, index) => {
          if (index + 1 < navNumber) {
            return (
              <NavLink key={category.slug} to={`reviews/${category.slug}`} onClick={clickMainLink}>{capitaliseAndReplaceDashes(category.slug)}</NavLink>
            )
          }
        })}
       {navNumber < 8 && <button className={`categories-button ${buttonState} ${dropdownCategoryClicked ? "dropdown-clicked" : "main-clicked"}`} onClick={clickOfButton} >More categories...</button>}
      </nav>
      <nav className="nav-dropdown">    
        {(showDropdown && navNumber < 1) && <NavLink to="/reviews/all">All categories</NavLink>}
        {showDropdown && props.allCategories && props.allCategories.map((category, index) => {
          if (index + 1 >= navNumber) {
            return (
              <NavLink key={category.slug + '-dropdown'} to={`reviews/${category.slug}`} onClick={clickDropdownLink}>{capitaliseAndReplaceDashes(category.slug)}</NavLink>
            )
          }
        })}
      </nav>
    </>);
}

export default Nav;