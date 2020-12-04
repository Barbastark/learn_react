import React, {useContext, useState} from "react"
import {Context} from "../context/Context"
import CartItem from "../components/CartItem"

function Cart() {

    const {cartItems, clearCart} = useContext(Context)
    const [placingOrder, setPlacingOrder] = useState(false)
    
    const items = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    function calcTotalCost() {
        
        let totalCost = 0
        
        cartItems.forEach(({price}) => totalCost += price)
        
        totalCost = totalCost.toLocaleString("en-US", {
            style: "currency", 
            currency: "USD"
        })

        return totalCost
    } 
    
    function placeOrder() {

        setPlacingOrder(true)

        setTimeout(() => {
            setPlacingOrder(false)
            clearCart()
            alert('Order has been sent haha!!!')
        }, 2000) 
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {items}
            <p className="total-cost">Total: {calcTotalCost()}</p>
            <div className="order-button">
                <button
                    disabled={placingOrder} 
                    onClick={placeOrder}
                >
                    {placingOrder ? "Placing order..." : "Place Order"}
                </button>
            </div>
        </main>
    )
}

export default Cart