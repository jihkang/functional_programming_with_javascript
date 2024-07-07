/**
 * 컬렉션 중심 프로그래밍 4가지 유형과 함수
 * 
 * 1. 수집하기 - map, values, pluck
 * 
 * 2. 거르기 - filter, reject, compact, without 
 * 3. 찾아내기 - find, find_index, some, every
 * 4. 접기 - reduce, min, max, group_by, count_by
 */


function _is_object(obj) {
    return typeof obj == 'object' && !!obj;

}

function _keys(obj) {
    return _is_object(obj) ? Object.keys(obj) : [];
}


function _map(arr, mapper) {
    const mapped_arr = [];
    const keys = _keys(arr);
    for (let i = 0; i < keys.length; i++) {
        mapped_arr.push(mapper(arr[keys[i]]));
    } 
    return mapped_arr;
}


function _identity(val) {
    return val;
}

function _values(obj) {
    return _map(obj, _identity);
}

function _pluck(arr, key) {
    return _map(arr, function(obj) {
        return obj[key]
    });
}

function _is_object(obj) {
    return typeof obj == 'object' && !!obj;

}

function _keys(obj) {
    return _is_object(obj) ? Object.keys(obj) : [];
}


function _map(arr, mapper) {
    const mapped_arr = [];
    const keys = _keys(arr);
    for (let i = 0; i < keys.length; i++) {
        mapped_arr.push(mapper(arr[keys[i]]));
    } 
    return mapped_arr;
}


function _identity(val) {
    return val;
}

function _values(obj) {
    return _map(obj, _identity);
}

function _pluck(arr, key) {
    return _map(arr, function(obj) {
        return obj[key]
    });
}

function _filter(obj, predicate) {
    const result = [];
    const keys = _keys(obj);
    for (let i = 0, len = keys.length; i < len; ++i) {
        const key = keys[i];
        if (predicate(obj[key])) {
            result.push(obj[key]);
        }
    }
    return result
}
/**
 * 
 * filter 와 map 함수 모두, 객체를 순회한다는 특징이 있다. 이를 추상화 하여 함수로 만들어 보자.
 */


/**
* _each 함수를 이용해서  map 과 filter 를 제구현 해보자 
*/

function _re_map(obj, mapper) {
    const result = [];
    _each(obj, function(val) {
        result.push(mapper(val))
    })
    return result;
}

function _each(obj, iter) {
    const keys = _keys(obj);
    for (let i = 0, len = keys.length; i < len; ++i) {
        iter(obj[keys[i]]);
    }
    return obj;
}

function _re_filter(obj, predicate) {
    const result = [];
    _each(obj, function(val) {
        predicate(val) && result.push(val);
    })
    return result;
}

function _reject(obj, predicate) {
    return _re_filter(obj, function(val) {
        return !predicate(val);
    })
}

function _compact(obj) {
    return _re_filter(obj, _identity)
}

function _without(arr, condition) {
    return _filter(arr, function(val) {
        return !condition(val);
    })
}

// console.log(values({
//     id: 123,
//     name: 'hi',
//     value: 123
// }))

console.log(_reject(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    function(val) {
    return val % 2;
}))
console.log(_compact(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, undefined, 0]
))

function _find(list, predicate) {
    const keys = _keys(obj);
    for (let i = 0, len = keys.length; i < len; ++i) {
        const val = list[keys[i]];
        if (predicate(val))
            return val
    }
}

function _find_index(list, predicate) {
    const keys = _keys(obj);
    for (let i = 0, len = keys.length; i < len; ++i) {
        if (predicate(list[keys[i]]))
            return i
    }
}