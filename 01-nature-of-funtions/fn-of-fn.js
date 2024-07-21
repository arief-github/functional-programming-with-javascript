// a function that receives or returns one or more other function values has the special name : Higher-Order Function

/**
 * Iterates over a list and applies a function to each element.
 *
 * @param {Array} list - The list to iterate over.
 * @param {Function} fn - The function to apply to each element.
 */

function forEach(list, fn) {
    for (let v of list) {
        fn(v)
    }
}

forEach([1,2,3,4], function each(val) {
    console.log(val)
})

// a higher order function can also output another function

/**
 * A function that returns a function which takes a string and returns it in uppercase.
 *
 * @return {Function} The inner function that converts the input string to uppercase.
 */


function foo() {
    return function inner(msg) {
        return msg.toUpperCase()
    }
}

let bar = foo()
console.log(bar('hello'))