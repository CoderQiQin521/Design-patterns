import $ from 'jquery';
import { getCart } from '../Shoppingcart/getCart';
// import { log } from '../utils/log';

export default class ListItem {
    constructor(list, data) {
        this.list = list;
        this.data = data;
        this.el = $('<div class="item">');
        this.cart = getCart();
    }

    init() {
        this._initContent();
        this._initBtn();
        this._render();
    }

    _initContent() {
        let data = this.data;
        let el = this.el;
        el.append(`<p>名称: ${data.name}</p>`);
        el.append(`<p>价格: ${data.price}</p>`);
    }

    // @log('add')
    _initBtn() {
        let that = this;
        let el = this.el;
        const btn = $('<button>添加到购物车</button>');
        btn.click(function () {
            // TODO: 状态机
            that._addToCartHandle();
        });
        el.append(btn);
    }
    _addToCartHandle() {
        this.cart.add(this.data);
    }
    _deleteFromCartHandle() {
        this.cart.del(this.data.id);
    }

    _render() {
        this.list.el.append(this.el);
    }
}
