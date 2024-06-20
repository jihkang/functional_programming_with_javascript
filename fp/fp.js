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

const _map = (arr, callback) => {
    const ret_arr = Array.from(arr);
    for (let i = 0; i < arr.length; ++i) {
        if (typeof callback === 'function') {
            ret_arr[i] = (callback(arr[i]));
        }
    }
    return ret_arr;
}

function _filter(arr, callback) {
    const ret_arr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (typeof callback === 'function' && callback(arr[i])) {
            ret_arr.push(arr[i]);
        }
    }
    return ret_arr;
}


function test() {
/**
 *  test _map, _filter function 
 */
    console.log(temp_users);
    console.log(names);
    console.log(_map(users, (user) => ({
        ...user,
        age: user.age + 30
    })), users);
    console.log(users);
    console.log(_filter(users, (user) => user.age > 100));

}