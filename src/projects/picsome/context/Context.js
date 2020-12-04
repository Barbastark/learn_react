import React, {useState, useEffect} from "react"
import {getPrice, url} from "../utils"

const Context = React.createContext()

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
        
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const dataWithPrice = data.map(item => (
                    {...item, price: getPrice()}
                ))
                setAllPhotos(dataWithPrice)
            })
    }, [])

    function toggleFavorite(id) { 
        const updatedPhotos = allPhotos.map(photo => {
            if(photo.id === id) { 
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedPhotos)  
    }

    function addCartItem(imgObj) {
        setCartItems([...cartItems, imgObj])
    }    

    function removeCartItem(id) {
        setCartItems(prevItems => (
            prevItems.filter(item => item.id !== id)
        ))
    } 
    
    function clearCart() {
        setCartItems([])
    }
    return (
        <Context.Provider value={
            {
                allPhotos, 
                toggleFavorite, 
                cartItems, 
                addCartItem, 
                removeCartItem,
                clearCart
            }
        }>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}