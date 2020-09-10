import $ from 'jquery';

export default class App {
    constructor(el) {
        this.el = $(el);
    }
    init() {
        console.log(this.el.width());
        this.initList();
    }

    initList() {
        console.log('list');
    }
}
