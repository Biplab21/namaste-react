import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"

const RestaurantMenu = () => {

    const [ resInfo, setResInfo ] = useState(null)

    const {resId} = useParams()

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(`${MENU_API}${resId}`)
        const json = await data.json()
        console.log("json", json);
        setResInfo(json.data)
    }

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[ 0 ]?.card?.card?.info

    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card || resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("itemsCards", itemCards);
    return (
        <div className="menu">
            <h1>{ name }</h1>
            <h3>{ cuisines.join(", ") }</h3>
            <h3>{ costForTwoMessage }</h3>

            <ul>
                { itemCards.map((item) => {
                    return <li key={item?.card?.info?.id} style={{margin:"10px"}}>{ item?.card?.info?.name } - Rs. {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
                }) }
            </ul>
        </div>
    )
}

export default RestaurantMenu