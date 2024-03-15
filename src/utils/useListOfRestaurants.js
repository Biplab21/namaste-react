import { useEffect, useState } from "react"

const useListOfRestaurants = () => {
    let [ listOfResturants, setListOfResturants ] = useState([])
    let [ filteredResturants, setFilteredResturants ] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setListOfResturants(json?.data?.cards[ 4 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResturants(json?.data?.cards[ 4 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return {
        listOfResturants, filteredResturants
    }
}

export default useListOfRestaurants