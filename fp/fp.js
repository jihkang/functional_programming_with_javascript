const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'cam', age: 24 },
    { name: 'Mike', age: 30 },
    { name: 'Tom', age: 40 },
]

const temp_users = [];

/**
 *  
 * before created function 
 *  to check data
 */

for (let i = 0; i < users.length; ++i) {
    if (users[i].age > 30) {
        temp_users.push(users[i]);
    }
}

const names = [];
for (let i = 0; i < temp_users.length; ++i) {
    const { name } = temp_users[i];

    names.push(name);
}
/**
 *  remove duplication code with function
 */

function _each(arr, iter) {
    for (let i = 0;i < arr.length; ++i) {
        iter(arr[i]);
    }
    return arr;
}

const _map = (arr, map) => {
    const ret_arr = [];
    _each(arr, (item) => ret_arr.push(map(item)));
    return ret_arr;
}

function _filter(arr, predict) {
    const ret_arr = [];
    _each(arr, (item) => {
        if (typeof predict === 'function' && predict(item)) {
            ret_arr.push(item);
        }
    });
    return ret_arr;
}

function _curry(fn) {
    return function(a, b) {
        return arguments.length === 2? fn(a, b) : function(b) {
            return fn(a, b);
        }
    }
}

function _curryr(fn) {
    return function(a, b) {
        return arguments.length === 2? fn(a, b) : function (b) {
            return fn(b, a);
        }
    }
}

const _get = _curryr(function(obj, key) {
    console.log(obj, key);
    return obj == null ? undefined : obj[key];
    
});

function test() {
/**
 *  test _map, _filter function 
 */
    // console.log(temp_users);
    // console.log(names);
    // console.log(_map(users, (user) => ({
    //     ...user,
    //     age: user.age + 30
    // })), users);
    // console.log(users);
    // console.log(_filter(users, (user) => user.age));
    const get_age = _get('age');
    console.log(get_age(users[0]))
    console.log(_map(_filter(users, (user) => user.age < 40), (user) => user.age));
    console.log(_map(_filter(users, (user) => user.age < 40), _get('age')));
    console.log(_map(document.querySelectorAll("*"), function(node) {
        return node.nodeName;
    }))
    const curry = _curry((a, b) => a + b);
    console.log(curry(10)(5));
    const curry10 = curry(10);
    console.log(curry10(5));
    const curryr = _curryr((a, b) => a - b);
    const sub10 = curryr(10);
    console.log(curryr(5, 10));
    console.log(curryr(10)(5));
}

test();