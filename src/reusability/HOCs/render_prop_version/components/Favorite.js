import React from "react"

const Favorite = (props) => {
    const {on, toggle} = props;
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span onClick={toggle}>
                    {on ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    ) 
}


export default Favorite;
