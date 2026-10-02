import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {useState, useEffect, useContext} from "react";
import {RESTAURANT_API} from "../utils/constants";  
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";


const Body = () => {

const [restaurantList, setRestaurantList] = useState([]);
const [searchText, setSearchText] = useState("");
const [filterRestaurants, setFilterRestaurants] = useState([]);
const { loggedInUser, setUserName } = useContext(UserContext);



useEffect(() => {
    //fetch data from API and update restaurantList and filterRestaurants
    fetchData();
}, []);

    const fetchData = async () => { 
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        console.log(json);
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);        
    }  

    return restaurantList.length === 0 ? (
    <Shimmer />
  ) :  (
        <div className="body">
            <div className="flex justify-left items-center">
                <div className="search">
                    <input type="text"  data-testid="searchInput" className="border border-black" placeholder="search" value={searchText} 
                    onChange={(e) => { setSearchText(e.target.value);  }}  />
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded m-2" onClick={() => {
                        // filter logic for search
                            const filteredRestaurants = restaurantList.filter((restaurant) =>
                            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded m-2" onClick={() => {
                    // filter logic for top rated restaurants
                    const topRatedRestaurants = restaurantList.filter((restaurant) => restaurant.info.avgRating >= 4.4);
                    setFilterRestaurants(topRatedRestaurants);
                    }}>Top rated Restaurants</button>

                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                    <input type ="text"
                        className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>    

            </div>

            <div className="flex flex-wrap">
                {filterRestaurants.map((restaurant) => (   
                    // if the restaurant is promoted, then we will add a "Promoted" label to the restaurant card  
                               
               <RestaurantCard key={restaurant?.info.id} restObj={restaurant?.info} />
                ))}
            </div>
        </div>
    );
    }

   export default Body;