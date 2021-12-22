import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import SortReviews from "./SortReviews";
import DisplayReviews from "./DisplayReviews";

function CategoryPage (props) {
  const [currentSortBy, setCurrentSortBy] = useState("created_at");
  const [currentOrder, setCurrentOrder] = useState("desc");
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location])

  return (
    <section className="category-page">
      <SortReviews currentLocation={currentLocation} setCurrentSortBy={setCurrentSortBy} setCurrentOrder={setCurrentOrder} />
      <DisplayReviews currentLocation={currentLocation} currentSortBy={currentSortBy} currentOrder={currentOrder} setDropdownCategoryIsClicked={props.setDropdownCategoryIsClicked}/>
    </section>);
}

export default CategoryPage ;