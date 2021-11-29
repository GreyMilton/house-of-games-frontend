import { capitaliseAndReplaceDashes } from "../utils/string-utils";
import { NavLink } from "react-router-dom";

function Nav (props) {

  function selectNewCategory(event) {
    props.setCurrentCategory(event.target.value);
  }

  return (
    <nav className="Nav">
      <NavLink to="/reviews">All categories</NavLink>
      {props.allCategories && props.allCategories.map((category,) => {
        return (
          <NavLink key={category.slug} to={`reviews/${category.slug}`}>{capitaliseAndReplaceDashes(category.slug)}</NavLink>
        )
      })}
    </nav>);
}

export default Nav;