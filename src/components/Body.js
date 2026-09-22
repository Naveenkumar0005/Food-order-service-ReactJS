import RestaurantCard from "./RestaurantCard";
import {restaurants} from "../utils/mockData";
import {useState} from "react";


const Body = () => {

const [restaurantList, setRestaurantList] = useState(restaurants);
const [searchText, setSearchText] = useState("");
const [filterRestaurants, setFilterRestaurants] = useState(restaurants);

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="search" value={searchText} 
                    onChange={(e) => { setSearchText(e.target.value);  }}  />
                    <button className="search-btn" onClick={() => {
                        // filter logic for search
                            const filteredRestaurants = restaurantList.filter((restaurant) =>
                            restaurant.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    // filter logic for top rated restaurants
                    const topRatedRestaurants = restaurantList.filter((restaurant) => restaurant.rating >= 4.5);
                    setFilterRestaurants(topRatedRestaurants);
                    }}>Top rated Restaurants</button>
            </div>

            <div className="restaurant-container">
                {filterRestaurants.map((restaurant) => (                 
               <RestaurantCard key={restaurant.id} restobj={restaurant} />
                ))}
            </div>
        </div>
    );
    }

   export default Body;