function NewComment () {
  return (
    <section className="new-comment">
      <form>
        <label htmlFor="">New comment:
          <input type="text" name="" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </section>);
}

export default NewComment ;