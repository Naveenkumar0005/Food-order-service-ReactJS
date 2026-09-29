import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
    const {restObj} = props;

const {name, cuisines, avgRating, cloudinaryImageId, sla,costForTwo} = restObj?.info;
    return (    
        <div className="m-1 p-1 w-[200px] shadow-lg bg-pink-50 hover:bg-pink-100 ">
            <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} alt="restaurant" />
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating: {avgRating} ,  {sla.slaString}  </h4>     
            <h4>Cost for two: {costForTwo} </h4>          
        </div>
    );
};

// higher order component (HOC) - a function which takes a component as an argument and returns a new component
// input - RestaurantCard  and output is PromotedRestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <RestaurantCard {...props} />
                <span className="promoted-label">Promoted</span>
            </div>
        );
    }
};

export default RestaurantCard;