import { useEffect, useState } from "react";
import DisplayReviews from "./DisplayReviews";
import SortReviews from "./SortReviews";
import { useLocation } from "react-router";



function CategoryPage () {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location])

  const [currentSortBy, setCurrentSortBy] = useState("created_at");
  const [currentOrder, setCurrentOrder] = useState("desc");

  return (
    <section className="category-page">
      <SortReviews currentLocation={currentLocation} setCurrentSortBy={setCurrentSortBy} setCurrentOrder={setCurrentOrder} />
      <DisplayReviews currentLocation={currentLocation} currentSortBy={currentSortBy} currentOrder={currentOrder} />
    </section>);
}

export default CategoryPage ;