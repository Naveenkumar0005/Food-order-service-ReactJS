import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
    const {restObj} = props;

const {name, cuisines, avgRating, cloudinaryImageId, sla,costForTwo} = restObj?.info;
    return (    
        <div className="restaurant-card">
            <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} alt="restaurant" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating: {avgRating} ,  {sla.slaString}  </h4>     
            <h4>Cost for two: {costForTwo} </h4>          
        </div>
    );
};

export default RestaurantCard;