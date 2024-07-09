import getId from "../utils/getId";

class CartItem {
    constructor(name, price){
        this.id = getId();
        this.name = name;
        this.price=price;
    }
}
// something
export default CartItem;