import RestaurantCard from "./RestaurantCard";
import {restaurants} from "../utils/mockData";
import {useState} from "react";
import {useEffect} from "react";
import {RESTAURANT_API} from "../utils/constants";  
import Shimmer from "./Shimmer";


const Body = () => {

const [restaurantList, setRestaurantList] = useState([]);
const [searchText, setSearchText] = useState("");
const [filterRestaurants, setFilterRestaurants] = useState([]);



useEffect(() => {
    //fetch data from API and update restaurantList and filterRestaurants
    fetchData();
}, []);

    const fetchData = async () => { 
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);        
    }
     
    if (restaurantList.length === 0) {
        return <Shimmer />;
    }  


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="search" value={searchText} 
                    onChange={(e) => { setSearchText(e.target.value);  }}  />
                    <button className="search-btn" onClick={() => {
                        // filter logic for search
                            const filteredRestaurants = restaurantList.filter((restaurant) =>
                            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    // filter logic for top rated restaurants
                    const topRatedRestaurants = restaurantList.filter((restaurant) => restaurant.info.avgRating >= 4.4);
                    setFilterRestaurants(topRatedRestaurants);
                    }}>Top rated Restaurants</button>
            </div>

            <div className="restaurant-container">
                {filterRestaurants.map((restaurant) => (                 
               <RestaurantCard key={restaurant.info.id} restObj={restaurant} />
                ))}
            </div>
        </div>
    );
    }

   export default Body;