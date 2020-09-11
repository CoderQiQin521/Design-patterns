import $ from 'jquery';
import { getCart } from '../Shoppingcart/getCart';

export default class ShoppingCart {
    constructor(app) {
        this.app = app;
        this.cart = getCart();
        this.el = $('<div>').css({
            paddingBottom: '10px',
            borderBottom: '1px solid #ddd',
        });
    }

    initBtn() {
        let that = this;
        let btn = $('<button>购物车</button>');
        btn.click(function () {
            that.showCart();
        });
        this.el.append(btn);
    }

    showCart() {
        alert(this.cart.showList());
    }

    init() {
        this.initBtn();
        this.render();
    }

    render() {
        this.app.el.append(this.el);
    }
}
