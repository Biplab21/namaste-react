import { CDN_URL } from "../utils/constants"

const ResturantCard = ({ resData }) => {
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = resData?.info
    return (<div className="res-card">
        <img
            className='res-logo'
            src={ CDN_URL + cloudinaryImageId }
            alt="food image" />
        <h3>{ name }</h3>
        <h4>{ cuisines.join(", ") }</h4>
        <h4>{ avgRating }</h4>
        <h4>{ costForTwo }</h4>
        <h4>{ sla.deliveryTime }</h4>
    </div>)
}

export default ResturantCard