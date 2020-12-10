import React, {useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../context/Context"
import useHover from "../hooks/useHover"

function CartItem({item}) { //console.log(item)

    const {removeCartItem} = useContext(Context)
    const [hovered, ref] = useHover()
    const trashIcon = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    const price = item.price.toLocaleString("en-US", 
        {style: "currency", 
        currency: "USD"
    }) 
    
    return (
        <div className="cart-item">
            <i 
                ref={ref}
                className={trashIcon}
                onClick={() => removeCartItem(item.id)}
            >                
            </i>
            <img src={item.url} width="130px" />
            <p>{price}</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem