import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import SortReviews from "./SortReviews";
import DisplayReviews from "./DisplayReviews";

function CategoryPage () {
  const [currentSortBy, setCurrentSortBy] = useState("created_at");
  const [currentOrder, setCurrentOrder] = useState("desc");
  const [currentLocation, setCurrentLocation] = useState();
  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location])

  return (
    <section className="category-page">
      <SortReviews currentLocation={currentLocation} setCurrentSortBy={setCurrentSortBy} setCurrentOrder={setCurrentOrder} />
      <DisplayReviews currentLocation={currentLocation} currentSortBy={currentSortBy} currentOrder={currentOrder} />
    </section>);
}

export default CategoryPage ;