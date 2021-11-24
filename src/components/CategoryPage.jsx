import DisplayReviews from "./DisplayReviews";
import SelectReviews from "./SelectReviews";

function CategoryPage () {
  return (
    <section className="category-page">
      <SelectReviews />
      <DisplayReviews />
    </section>);
}

export default CategoryPage ;