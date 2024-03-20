import { useState } from "react"

const User = ({ name }) => {
    const [count, setCount] = useState(0)

    return (
        <div className="p-8 border-solid border-black">
            <h1>Count = {count}</h1>
            <h2>Name: { name }</h2>
            <h3>Location: Kolkata</h3>
            <h4>Contact: @biplab21</h4>
        </div>
    )
}

export default User