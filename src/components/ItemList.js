import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) =>{
        //dispatch an action
        dispatch(addItem(item))
    }

    return (
        <div>
            { items.map((item) => (
                <div key={ item.card.info.id } className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div>
                        <div className="py-2">
                            <span> { item?.card?.info?.name }</span>
                            <span> - ₹ { item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100 }</span>
                        </div>
                        <p className="text-xs text-left">{ item.card.info.description }</p>
                    </div>
                    <div className="relative">
                        <img src={ CDN_URL + item.card.info.imageId } alt="image" className="w-24 h-16 object-cover ml-3 rounded-lg" />
                        <button
                            onClick={()=>handleAddItem(item)}
                            className="bg-green-500 p-2 text-xs absolute top-5 right-2">
                            Add +
                        </button>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default ItemList