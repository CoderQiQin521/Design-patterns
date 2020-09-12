// 没有对外暴露,保证只有一个cart
class Cart {
    constructor() {
        this.list = [];
    }

    add(data) {
        this.list.push(data);
    }

    del(id) {
        this.list = this.list.filter((item) => item.id !== id);
    }

    showList() {
        return this.list.map((item) => item.name).join('\n');
    }
}

// 单例模式
export const getCart = (() => {
    let cart;

    return function () {
        if (!cart) {
            cart = new Cart();
        }
        return cart;
    };
})();
