import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                login: 'Demo',
                html_url: 'Example',
            }
        }
        console.log("Constructor called");

    }

    async componentDidMount () {
        console.log("componentDidMount called");
        const data = await fetch("https://api.github.com/users/Biplab21")
        const json = await data.json()
        console.log(json);

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate () {
        console.log("componentDidUpdate Called");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount Called");
    }

    render () {
        console.log("Render called");
        const { login, html_url, avatar_url } = this.state.userInfo

        return (
            <div className="user-card">
                <img src={ avatar_url } alt="" />
                <h2>User Name: { login }</h2>
                <h3>Profile Url: { html_url }</h3>
                <h4>Contact: @biplab21</h4>
            </div>
        )
    }
}

export default UserClass