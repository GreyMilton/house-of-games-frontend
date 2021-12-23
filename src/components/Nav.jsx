import { capitaliseAndReplaceDashes } from "../utils/string-utils";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Nav (props) {
  const windowDimensions = useWindowDimensions();
  const [showDropdown, setShowDropdown] = useState(false);
  const [navNumber, setNavNumber] = useState(8);
  const [buttonState, setButtonState] = useState("not-clicked");

  useEffect(() => {
    if (windowDimensions.width < 284) setNavNumber(1);
    else if (windowDimensions.width < 380) setNavNumber(2);
    else if (windowDimensions.width < 463) setNavNumber(3);
    else if (windowDimensions.width < 590) setNavNumber(4);
    else if (windowDimensions.width < 715) setNavNumber(5);
    else if (windowDimensions.width < 892) setNavNumber(6);
    else setNavNumber(8);
  }, [windowDimensions])

  function clickOfButton () {
    showDropdown ? setShowDropdown(false) : setShowDropdown(true);
    setButtonState((prevState) => {
      return (prevState === "not-clicked") ? "clicked" : "not-clicked";
    })
  }

  function clickMainLink () {
    props.setDropdownCategoryIsClicked(false);
  }

  function clickDropdownLink () {
    props.setDropdownCategoryIsClicked(true);
  }

  return (
    <>
      <nav className="nav-main">
        <NavLink to="/reviews/all" onClick={clickMainLink}>All categories</NavLink>
        {props.allCategories && props.allCategories.map((category, index) => {
          if (index + 1 < navNumber) {
            return (
              <NavLink key={category.slug} to={`reviews/${category.slug}`} onClick={clickMainLink}>{capitaliseAndReplaceDashes(category.slug)}</NavLink>
            )
          }
          else return null;
        })}
       {navNumber < 8 && <button className={`categories-button ${buttonState} ${props.dropdownCategoryIsClicked ? "dropdown-clicked" : "main-clicked"}`} onClick={clickOfButton} >More...</button>}
      </nav>
      <nav className="nav-dropdown">    
        {(showDropdown && navNumber < 1) && <NavLink to="/reviews/all">All categories</NavLink>}
        {showDropdown && props.allCategories && props.allCategories.map((category, index) => {
          if (index + 1 >= navNumber) {
            return (
              <NavLink key={category.slug + '-dropdown'} to={`reviews/${category.slug}`} onClick={clickDropdownLink}>{capitaliseAndReplaceDashes(category.slug)}</NavLink>
            )
          }
          else return null;
        })}
      </nav>
    </>);
}

export default Nav;