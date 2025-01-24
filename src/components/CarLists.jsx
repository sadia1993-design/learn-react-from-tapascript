import CarBox from "./CarBox";

const CarLists = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <CarBox />
        <CarBox />
        <CarBox />
        <CarBox />
        <CarBox />
      </div>
    </>
  );
};

export default CarLists;
