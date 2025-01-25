import PropTypes from "prop-types";


const CarBox = ({car} ) => {

  const { title, brand, year, price, isPremium } = car;
  
  return (
    <>
      <div className="p-4  border-2 rounded  border-gray-300 shadow-sm">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-3 ">
          <p><strong>Brand:</strong> <span>{brand}</span></p>
          <p><strong>Year:</strong> <span>{year}</span></p>
          <p><strong>Price:</strong> <span>{price}</span></p>
          <p><strong>Premium:</strong> <span>{isPremium ? 'True': 'False'}</span></p>
        </div>
      </div>
    </>
  );
};

CarBox.propTypes = {
  
  car: PropTypes.shape({
    title: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired
  }).isRequired
}

export default CarBox;
