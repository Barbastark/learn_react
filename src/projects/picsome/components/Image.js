
import React, {useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../context/Context"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    
    const [hovered, ref] = useHover()
    
    const {
        toggleFavorite, 
        addCartItem, 
        cartItems, 
        removeCartItem
    } = useContext(Context)
    
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
    function cartIcon() {
        const inCart = cartItems.some(item => item.id === img.id)
        if(inCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeCartItem(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addCartItem(img)}></i>
        }
    }
    
    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

export default Image

Image.propTypes = {
    className: PropTypes.oneOf(['big', 'wide']),
    img: PropTypes.object.isRequired,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}