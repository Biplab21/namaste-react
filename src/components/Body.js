import { useContext, useState } from "react"
import ResturantCard, { newRestaurant } from "./ResturantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import useListOfRestaurants from "../utils/useListOfRestaurants"
import UserContext from "../utils/userContext"

const Body = () => {

    let [ searchKeyword, setSearchKeyword ] = useState("")
    const { listOfResturants, filteredResturants, setFilteredResturants, setListOfResturants } = useListOfRestaurants()

    const onlineStatus = useOnlineStatus()

    const {loggedInUser, setUserName} = useContext(UserContext)

    const NewResturantCard = newRestaurant(ResturantCard)

    if (!onlineStatus) return <h1>Looks like you are offline!! Please check your internet connection</h1>

    //Conditional rendering
    return listOfResturants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex items-center">
                <div className="m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        placeholder="Search Resturants"
                        onChange={ (e) => setSearchKeyword(e.target.value) }
                        value={ searchKeyword }
                    />
                    <button
                        className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                        onClick={ () => {
                            const filteredRes = listOfResturants.filter((res) => res.info.name.toLowerCase().includes(searchKeyword.toLowerCase()))
                            setFilteredResturants(filteredRes)
                        } }>Search</button>
                </div>
                <div className="m-4 p-4r">
                    <button
                        className="px-4 py-1 bg-gray-100 rounded-lg"
                        onClick={ () => {
                            const filteredList = listOfResturants.filter(
                                (res) => res.info.avgRating > 4.3
                            )
                            console.log("Filtered list: ", filteredList);
                            setFilteredResturants(filteredList)
                        } }>Top Rated Resturants
                    </button>
                </div>
                <input 
                type="text" 
                className="border border-black"
                value={loggedInUser}
                onChange={(e)=>setUserName(e.target.value)}
                />
            </div>
            <div className="flex flex-wrap">
                {
                    filteredResturants.map((resturant) => (
                        <Link key={ resturant.info.id } to={ "/restaurants/" + resturant.info.id } >
                            {/* if resturant is isNewlyOnboarded then add a 'new' label */ }
                            { resturant.info.isNewlyOnboarded ? <NewResturantCard resData={ resturant } /> : <ResturantCard resData={ resturant } /> }
                        </Link>

                    ))
                }
            </div>
        </div>
    )
}


export default Body
