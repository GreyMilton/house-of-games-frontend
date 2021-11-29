import { capitaliseAndReplaceDashes } from "../utils/string-utils";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav (props) {

  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <nav className="nav">
      <button className="categories-button" onClick={() => {showDropdown ? setShowDropdown(false) : setShowDropdown(true)}} >Categories</button>      
      {showDropdown && <NavLink to="/reviews/all">All categories</NavLink>}
      {showDropdown && props.allCategories && props.allCategories.map((category,) => {
        return (
          <NavLink key={category.slug} to={`reviews/${category.slug}`}>{capitaliseAndReplaceDashes(category.slug)}</NavLink>
        )
      })}
    </nav>);
}

export default Nav;