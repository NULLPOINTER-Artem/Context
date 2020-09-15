
let calc = {a: 40, b: 10};

function sub(c, reverse) {
    return !reverse ? this.a - this.b - c : c - this.b - this.a;
}

let subBinded = bind(sub, calc) // ваша функция;
let res = subBinded(12, true); // передаем аргументы для sub
console.log(res);

/**
 * This function change LE for a functions
 * 
 * @param {function} func 
 * @param {object} context
 * @returns {function} Returns new function with new context
 */
function bind(func, context) {
    return function (...args) {
        return func.call(context, ...args);
    }
}