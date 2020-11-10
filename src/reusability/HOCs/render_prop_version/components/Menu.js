import React from "react"
import Toggler from "../Toggler"

const Menu = () =>  {
    return (
        <Toggler 
            defaultOnValue={true}
            render={
                ({toggle, on}) => (
                    <div>
                        <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
                        <nav style={{display: on ? "block" : "none"}}>
                            <h6>Signed in as Coder123</h6>
                            <ul>
                            <li><a>Your Profile</a></li>
                            <Toggler 
                                defaultOnValue={false}
                                render={
                                    ({toggle, on}) => (
                                        <div>
                                        <a onClick={toggle}>Your Profile</a>
                                        <nav style={{display: on ? "block" : "none"}}>
                                            <ul>
                                                <li><a>item1</a></li>
                                                <li><a>item2</a></li>
                                                <li><a>item3</a></li>
                                            </ul>
                                        </nav>
                                        </div>
                                    )
                                }
                            />
                            <li><a>Your Repositories</a></li>
                            <li><a>Your Stars</a></li>
                            <li><a>Your Gists</a></li>
                            </ul>
                        </nav>
                    </div>
                )
            }
        />
    ) 
}

export default Menu;