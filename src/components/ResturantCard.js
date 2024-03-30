import React from "react"
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/userContext"

const ResturantCard = ({ resData }) => {
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = resData?.info

    return (
        <div data-testid="resCard"
         className=" h-96 w-[250px] bg-slate-100 p-1.5 m-1.5 rounded-lg hover:bg-slate-200">
            <img
                className='h-[150px] w-full object-cover'
                src={ CDN_URL + cloudinaryImageId }
                alt="food image" />
            <h3 className="font-bold py-4 text-lg">{ name }</h3>
            <h4>{ cuisines.join(", ") }</h4>
            <h4>{ avgRating }</h4>
            <h4>{ costForTwo }</h4>
            <h4>{ sla.deliveryTime } minutes</h4>
            <UserContext.Consumer>
                {({loggedInUser})=> <h4>User: {loggedInUser}</h4> }
            </UserContext.Consumer>
        </div>
    )
}

export const newRestaurant = (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> New </label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}

export default ResturantCard