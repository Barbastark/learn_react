import React, {useContext} from "react"
import {Context} from "../context/Context"

function CartItem({item}) { //console.log(item)

    const {removeCartItem} = useContext(Context)

    const price = item.price.toLocaleString("en-US", 
        {style: "currency", 
        currency: "USD"
    }) 
    
    return (
        <div className="cart-item">
            <i 
                className="ri-delete-bin-line"
                onClick={() => removeCartItem(item.id)}
            >                
            </i>
            <img src={item.url} width="130px" />
            <p>{price}</p>
        </div>
    )
}

export default CartItem