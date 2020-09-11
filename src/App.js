import $ from 'jquery';
import List from './List/List';
import ShoppingCart from './Shoppingcart/ShoppingCart';

export default class App {
    constructor(el) {
        this.el = $(el);
    }
    init() {
        this._initShoppingCart();
        this._initList();
    }

    _initList() {
        const list = new List(this);
        list.init();
    }
    _initShoppingCart() {
        const shoppingCart = new ShoppingCart(this);
        shoppingCart.init();
    }
}
