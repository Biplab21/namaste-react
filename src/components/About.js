import React from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return (
      <div>
          <h1>About</h1>
          <h2>This is about page</h2>
          <UserClass name="Biplab Paul (class)" location="Dehradun Class"/>
      </div>
    )
  }
}

export default About