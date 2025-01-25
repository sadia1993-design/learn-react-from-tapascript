import CarBox from "./CarBox";
import cars from '../car.json'; // Import the car.json file

const CarLists = () => {
  
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {
          cars.map( (carItem) =>{
           return <CarBox key={carItem.id} car={carItem} />            
          })
        }
        

      </div>
    </>
  );
};

export default CarLists;
