import { useEffect, useState } from "react"
import ResturantCard from "./ResturantCard"
import Shimmer from "./Shimmer"

const Body = () => {

    let [ listOfResturants, setListOfResturants ] = useState([])
    let [ filteredResturants, setFilteredResturants ] = useState([])
    let [ searchKeyword, setSearchKeyword ] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setListOfResturants(json?.data?.cards[ 4 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResturants(json?.data?.cards[ 4 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //Conditional rendering
    return listOfResturants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search Resturants"
                        onChange={ (e) => setSearchKeyword(e.target.value) }
                        value={ searchKeyword }
                    />
                    <button onClick={ () => {
                        const filteredRes = listOfResturants.filter((res) => res.info.name.toLowerCase().includes(searchKeyword.toLowerCase()))
                        setFilteredResturants(filteredRes)
                    } }>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={ () => {
                        const filteredList = listOfResturants.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setListOfResturants(filteredList)
                    } }>Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredResturants.map((resturant) => (
                        <ResturantCard key={ resturant.info.id } resData={ resturant } />
                    ))
                }
            </div>
        </div>
    )
}


export default Body
