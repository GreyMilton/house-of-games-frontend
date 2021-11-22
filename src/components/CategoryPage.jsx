import DisplayReviews from "./DisplayReviews";
import SelectReviews from "./SelectReviews";

function CategoryPage () {
  return (
    <section className="category-page">
      <h2>CategoryPage</h2> 
      <SelectReviews />
      <DisplayReviews />
    </section>);
}

export default CategoryPage ;