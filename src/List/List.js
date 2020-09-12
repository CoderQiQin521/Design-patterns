import $ from 'jquery';
import { GET_LIST } from '../config/config';
import { createItem } from './createItem';

export default class List {
    constructor(app) {
        this.el = $('<div></div>');
        this.app = app;
    }
    // 模版方法模式
    init() {
        this._loadData()
            .then((data) => {
                this._initListItem(data);
            })
            .then(() => {
                this._render();
            });
    }

    _loadData() {
        // 观察者模式
        return fetch(GET_LIST).then((res) => res.json());
    }

    _initListItem(data) {
        data.forEach((itemData) => {
            createItem(this, itemData).init();
        });
    }

    _render() {
        this.app.el.append(this.el);
    }
}
