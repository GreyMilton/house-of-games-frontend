function SortComments () {

  function handleChange(event) {
    console.log("this is the event.target.value:", event.target.value);
  }

  return (
    <section className="sort-comments">
      {/* <span>Sort comments: </span> */}
      <label>Sort comments:
        <select className="sort-by-select" onChange={handleChange}>
          <option value="created_at">Created at</option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
        </select>
        <select className="order-select" onChange={handleChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </section>);
}

export default SortComments ;