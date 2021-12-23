import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import SortReviews from "./SortReviews";
import DisplayReviews from "./DisplayReviews";

function CategoryPage (props) {
  const [currentSortBy, setCurrentSortBy] = useState("created_at");
  const [currentOrder, setCurrentOrder] = useState("desc");
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);
  const [isNetworkErrorCategoryPage, setIsNetworkErrorCategoryPage] = useState(false);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location])

  return (
    <section className="category-page">
      {isNetworkErrorCategoryPage
        ? <p className="error-message">Network Error</p>
        :
        <>
          <SortReviews currentLocation={currentLocation} setCurrentSortBy={setCurrentSortBy} setCurrentOrder={setCurrentOrder} />
          <DisplayReviews currentLocation={currentLocation} currentSortBy={currentSortBy} currentOrder={currentOrder} setDropdownCategoryIsClicked={props.setDropdownCategoryIsClicked} setIsNetworkErrorCategoryPage={setIsNetworkErrorCategoryPage}/>
        </>
      }
    </section>);
}

export default CategoryPage ;