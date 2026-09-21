import RestaurantCard from "./RestaurantCard";
import {restaurants} from "../utils/mockData";
import {useState} from "react";


const Body = () => {

const [restaurantList, setRestaurantList] = useState(restaurants);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // filter logic for top rated restaurants
                    const topRatedRestaurants = restaurantList.filter((restaurant) => restaurant.rating >= 4.5);
                    setRestaurantList(topRatedRestaurants);
                    }}>Top rated Restaurants</button>
            </div>

            <div className="restaurant-container">
                {restaurantList.map((restaurant) => (                 
               <RestaurantCard key={restaurant.id} restobj={restaurant} />
                ))}
            </div>
        </div>
    );
    }

   export default Body;