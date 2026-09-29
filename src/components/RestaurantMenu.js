import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from  "../utils/useRestaurantMenu"
import {useEffect} from "react";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const dummy = "Dummy Data";
    console.log("resId::",resId);

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

      if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;


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