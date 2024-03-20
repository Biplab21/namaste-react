import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
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
                    <img src={ CDN_URL + item.card.info.imageId } alt="image" className="w-24 object-cover ml-3 rounded-lg" />
                </div>
            )) }
        </div>
    )
}

export default ItemList