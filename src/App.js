import $ from 'jquery';
import List from './List/List';
import ShoppingCart from './Shoppingcart/ShoppingCart';
import { getCart } from './Shoppingcart/getCart';

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
        const cart = getCart();
        const shoppingCart = new ShoppingCart(this, cart);
        shoppingCart.init();
    }
}
