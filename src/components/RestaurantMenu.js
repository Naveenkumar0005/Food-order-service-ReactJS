import {useEffect} from "react";

const RestaurantMenu = () => {

    useEffect(() => {
        // API call to get the restaurant menu based on the restaurant ID from the URL
    fetchMenu();
    }, []);

const fetchMenu = async () => {
    // fetch data from the API using the restaurant ID from the URL
    const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4253544&lng=77.06304709999999&restaurantId=17572&catalog_qa=undefined&submitAction=ENTER");
    console.log("Status:", response.status);
    console.log("OK:", response.ok);
    console.log("Content-Type:", response.headers.get("content-type"));

    const json = await response.text();
    console.log(json);
    // process the menu data and update the state
}


    return (
        <div>
            <h1>Name of the Restaurant </h1>
            <h3>Menu</h3>
            <ul>
                <li>Paneer Butter Masala</li>
                <li>Dal Makhani</li>
                <li>Butter Naan</li>
                <li>Veg Biryani</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;