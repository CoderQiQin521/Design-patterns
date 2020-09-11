export const log = (type) => {
    return function (target, name, descriptor) {
        const fn = descriptor.value;
        descriptor.value = function () {
            console.log(`日志上报: ${type}`);
            return fn.apply(this, arguments);
        };
        return descriptor;
    };
};
