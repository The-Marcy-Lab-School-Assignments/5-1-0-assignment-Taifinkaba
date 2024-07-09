import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
    constructor() {
        this.id = getId(); 
        this.#cartItems = []; 
        if (!ShoppingCart._allCarts) {
            ShoppingCart._allCarts = []; 
        }
        ShoppingCart._allCarts.push(this);
    }
    // Private
    #cartItems;
    createItem(name, price) {
        const newItem = new CartItem(name, price);
        this.#cartItems.push(newItem);
        return newItem; 
    }
    getItems() {
        return [...this.#cartItems]; 
    }
    removeItem(id) {
        this.#cartItems = this.#cartItems.filter(item => item.id !== id);
    }
    getTotal() {
        return this.#cartItems.reduce((total, item) => total + item.price, 0);
    }
    
    static listAll() {
        return [...ShoppingCart._allCarts];
    }
    static findBy(id) {
        return ShoppingCart._allCarts.find(cart => cart.id === id);
    }
}

export default ShoppingCart;