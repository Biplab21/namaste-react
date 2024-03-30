import React from "react"; 

const Contact = () => {
  return (
    <div>
        <h2 className="font-bold text-3xl p-4 m-4">Contact us page</h2>
        <form action="">
          <input type="text" className="border border-black p-2 m-2" placeholder="name" />
          <input type="text" className="border border-black p-2 m-2" placeholder="message" />
          <button className="border border-black bg-gray-100 rounded-lg p-2 m-2">Submit</button>
        </form>
    </div>
  )
}

export default Contact