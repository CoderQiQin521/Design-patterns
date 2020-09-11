import ListItem from './ListItem';
function createDiscount(itemData) {
    // 代理模式
    return new Proxy(itemData, {
        get(target, key, receiver) {
            // console.log('target, key, receiver: ', target, key, receiver);
            // 处理特价逻辑
            if (key === 'name') {
                return target[key] + ' [折扣] ';
            }

            if (key === 'price') {
                return target[key] * 0.8;
            }

            return target;
        },
    });
}

// 工厂模式
export const createItem = (list, listData) => {
    if (listData.discount) {
        listData = createDiscount(listData);
    }
    return new ListItem(list, listData);
};
