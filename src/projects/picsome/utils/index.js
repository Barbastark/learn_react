export function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}

export function getPrice() {
    
    let price = Math.random() * 100
    const isFloat = price.toString().includes('.')
    
    if(isFloat) {
        price = parseFloat(price.toFixed(2))
    } else {
        price = parseInt(price)
    }
    
    return price
}

export const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"