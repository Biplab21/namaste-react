import { useEffect, useState } from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu = (resId) => {
    const [ resInfo, setResInfo ] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(`${MENU_API}${resId}`)
        const json = await data.json()
        console.log("json", json);
        setResInfo(json.data)
    }

    return resInfo
}

export default useRestaurantMenu