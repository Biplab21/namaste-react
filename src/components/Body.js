import { useEffect, useState } from "react"
import ResturantCard from "./ResturantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import useListOfRestaurants from "../utils/useListOfRestaurants"

const Body = () => {

    let [ searchKeyword, setSearchKeyword ] = useState("")
    const { listOfResturants, filteredResturants } = useListOfRestaurants()

    const onlineStatus = useOnlineStatus()
    console.log("onlineStatus", onlineStatus);

    if (!onlineStatus) return <h1>Looks like you are offline!! Please check your internet connection</h1>

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
                        <Link key={ resturant.info.id } to={ "/restaurants/" + resturant.info.id } ><ResturantCard resData={ resturant } /></Link>

                    ))
                }
            </div>
        </div>
    )
}


export default Body
