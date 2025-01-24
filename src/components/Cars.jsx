import CarLists from "./CarLists";
import Header from "./Header";
import Search from "./Search";

const Cars = () => {
  return (
    <>
      <div className="px-9 pt-8">
        <Header />
        <Search />
        <CarLists />
      </div>
    </>
  );
};

export default Cars;
