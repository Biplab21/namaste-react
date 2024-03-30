import React from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {
    const { resId } = useParams()

    const [showIndex, setShowIndex] = useState(null)

    const resInfo = useRestaurantMenu(resId)
    
    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[ 2 ]?.card?.card?.info

    const { itemCards } = resInfo?.cards[ 2 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[ 4 ]?.card?.card || resInfo?.cards[ 3 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[ 2 ]?.card?.card || resInfo?.cards[ 2 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[ 2 ]?.card?.card || resInfo?.cards[ 4 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[ 4 ]?.card?.card

    const beforeFilter = resInfo?.cards[ 4 ]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const filteredMenu = beforeFilter.filter((c) => c.card?.card?.[ "@type" ] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{ name }</h1>
            <p className="font-bold text-lg">
                { cuisines.join(", ") } - { costForTwoMessage }
            </p>
            {
                filteredMenu.map((category, index) => {
                    // controlled component
                    return <RestaurantCategory
                        data={ category?.card?.card }
                        key={ category?.card?.card.title }
                        showItems={ index === showIndex && true }
                        setShowIndex={()=> setShowIndex(index)}
                        
                    />
                })
            }
        </div>
    )
}

export default RestaurantMenu
