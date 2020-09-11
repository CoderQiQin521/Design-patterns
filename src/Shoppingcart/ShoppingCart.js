import $ from 'jquery';

export default class ShoppingCart {
    constructor(app, cart) {
        this.app = app;
        this.cart = cart;
        this.el = $('<div>').css({
            paddingBottom: '10px',
            borderBottom: '1px solid #ddd',
        });
    }

    initBtn() {
        let that = this;
        let btn = $('<button>购物车</button>');
        btn.click(function () {
            alert(that.cart.showList());
        });
        this.el.append(btn);
    }

    init() {
        this.initBtn();
        this.render();
    }

    render() {
        this.app.el.append(this.el);
    }
}
