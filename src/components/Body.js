import { useState } from "react"
import resList from "../utils/mockData"
import ResturantCard from "./ResturantCard"

const Body = () => {

    let [ listOfResturants, setListOfResturants ] = useState(resList)
    let [searchKeyword, setSearchKeyword] = useState("")

    const handleSearch=(e)=>{
        const keyword = e.target.value
        setSearchKeyword(keyword)
        const searchedItem = keyword !== "" ? resList.filter((res)=>res.info.name.toLowerCase().includes(searchKeyword.toLowerCase())): resList
        setListOfResturants(searchedItem)
    }

    return (
        <div className="body">
            <div className="search">
                <input
                    type="text"
                    className="searchBox"
                    placeholder="Search Resturants" 
                    onChange={handleSearch}
                    value={searchKeyword}
                />
            </div>
            <div className="filter">
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
                    listOfResturants.map((resturant) => (
                        <ResturantCard key={ resturant.info.id } resData={ resturant } />
                    ))
                }
            </div>
        </div>
    )
}


export default Body
