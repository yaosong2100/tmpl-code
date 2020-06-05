/**
 *异常处理装饰器
 *
 * @export
 * @param {*} target
 * @param {*} property
 * @param {*} descriptor
 */
export function aberrant(target, property, descriptor) {
    let fn = descriptor.value;
    descriptor.value = function() {
        return fn
            .apply(this || target, arguments)
            .then(res => ({ err: null, res }))
            .catch(err => ({ err }));
    };
}

/**
 *独占型装饰器
 *
 * @export
 * @param {*} target
 * @param {*} property
 * @param {*} descriptor
 */
export function exclusive(target, property, descriptor) {
    let fn = descriptor.value;
    let promise;
    let status = false;
    descriptor.value = function() {
        if (status) {
            return promise;
        } else {
            status = true;
            promise = fn.apply(this || target, arguments).finally(() => {
                status = false;
            });
            return promise;
        }
    };
}
