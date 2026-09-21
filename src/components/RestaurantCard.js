const RestaurantCard = (props) => {

const {name, cuisine, rating, image, deliveryTime} = props.restobj;
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={image} alt="restaurant" />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>Rating: {rating} ,  {deliveryTime}  </h4>               
        </div>
    );
};

export default RestaurantCard;