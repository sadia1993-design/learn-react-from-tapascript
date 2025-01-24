const Search = () => {
  return (
    <>
      <div className="flex mb-3 gap-3 items-center">
        <input type="text" name="search" className="border-2 rounded px-2 border-gray-300  py-1.5" placeholder="Search cars..." />
        <div className="premium-cars">
          <input
            type="checkbox"
            name="premium_cars"
            value="Show Premium Only"
            className="mr-2"
          />
          <label>Show Premium Only</label>
        </div>
      </div>
    </>
  );
};

export default Search;
