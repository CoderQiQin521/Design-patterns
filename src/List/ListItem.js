import $ from 'jquery';
import { getCart } from '../Shoppingcart/getCart';
import StateMachine from 'javascript-state-machine';
import { log } from '../utils/log';

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

    _initBtn() {
        const $btn = $('<button>');
        let that = this;

        //  状态模式
        let fsm = new StateMachine({
            init: '添加到购物车',
            transitions: [
                {
                    name: 'addToCart',
                    from: '添加到购物车',
                    to: '移出购物车',
                },
                {
                    name: 'deleteFromCart',
                    from: '移出购物车',
                    to: '添加到购物车',
                },
            ],
            methods: {
                onAddToCart() {
                    that._addToCartHandle();
                    updateText();
                },
                onDeleteFromCart() {
                    that._deleteFromCartHandle();
                    updateText();
                },
            },
        });

        function updateText() {
            $btn.text(fsm.state);
        }

        $btn.click(function () {
            // 状态机
            fsm.is('添加到购物车') ? fsm.addToCart() : fsm.deleteFromCart();
        });

        updateText();
        this.el.append($btn);
    }

    // 装饰者模式
    @log('add')
    _addToCartHandle() {
        this.cart.add(this.data);
    }

    @log('del')
    _deleteFromCartHandle() {
        this.cart.del(this.data.id);
    }

    _render() {
        this.list.el.append(this.el);
    }
}
