import ListItem from './ListItem';

// 工厂模式
export const createItem = (list, data) => {
    // 代理模式
    // new Proxy(data)

    // 处理特价逻辑
    if (data.discount) {
    }
    return new ListItem(list, data);
};
