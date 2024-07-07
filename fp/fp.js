const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "cam", age: 24 },
  { name: "Mike", age: 30 },
  { name: "Tom", age: 40 },
];

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


function _curry(fn) {
  return function (a, b) {
    return arguments.length === 2
      ? fn(a, b)
      : function (b) {
          return fn(a, b);
        };
  };
}

function _curryr(fn) {
  return function (a, b) {
    return arguments.length === 2
      ? fn(a, b)
      : function (b) {
          return fn(b, a);
        };
  };
}

const _get = _curryr(function (obj, key) {
  return obj == null ? undefined : obj[key];
});

/**
 * pipe function
 * 여러 함수를 인자로 받아 연속적으로 실행해주는 함수.
 */

function _rest(list, num) {
  return Array.prototype.slice.call(list, num);
}

function _reduce(arr, apply, init) {
  arr = _rest(arr, init ? 0 : 1);
  _each(arr, (item) => {
    init = apply(init, item);
  });
  return init;
}

function _pipe(...fns) {
  return function (arg) {
    console.log('arg: ', arg);
    return _reduce(
      fns,
      function (arg, fn) {
        return fn(arg);
      },
      arg
    );
  };
}

function _go(arg, ...fns) {
  return _pipe.apply(null, fns)(arg);
}


const _length = _get("length");

const _each = _curryr(function (arr, iter) {
  const keys = _keys(arr);
  for (let i = 0, len = keys.length; i < len; ++i)  {
    iter(arr[keys[i]]);
  }
  return arr;
})

const _map = _curryr(function(arr, map) {
  const ret_arr = [];
  _each(arr, (item) => ret_arr.push(map(item)));
  return ret_arr;
});

const _filter = _curryr(function (arr, predict) {
  const ret_arr = [];
  _each(arr, (item) => {
    if (typeof predict === "function" && predict(item)) {
      ret_arr.push(item);
    }
  });
  return ret_arr;
});

const _is_object = (obj) => {
  return typeof obj == 'object' && !!obj; 
}

function _keys(obj) {
  return _is_object(obj) ?  Object.keys(obj) : [];
}

const pipe = _pipe(
  (a) => a + 1,
  (a) => a * 5,
  (a) => a * 10
);

function test() {
  /**
   *  test _map, _filter function
   */
  const get_age = _get("age");
  console.log(get_age(users[0]));
  console.log(
    _map(
      _filter(users, (user) => user.age < 40),
      (user) => user.age
    )
  );
  console.log(
    _map(
      _filter(users, (user) => user.age < 40),
      _get("age")
    )
  );
  console.log(
    _map(document.querySelectorAll("*"), function (node) {
      return node.nodeName;
    })
  );
  console.log(
    'curryr apply to _map',
    _map((a) => a * 5)([1,2,3,4])
  )
  _go(
    users,
    _map(_get("age")),
    _filter((age) => age > 24),
    console.log
  )
  const curry = _curry((a, b) => a + b);
  console.log(curry(10)(5));
  const curry10 = curry(10);
  console.log(curry10(5));
  const curryr = _curryr((a, b) => a - b);
  const sub10 = curryr(10);
  console.log(curryr(5, 10));
  console.log(curryr(10)(5));
  console.log(_reduce([1, 2, 3, 4], (a, b) => a + b, 30));
  console.log(_reduce([1, 2, 3, 4], (a, b) => a + b, 20));
  _go(
    _filter((user) => user.age < 33)),
    _map((_get("age")),
    users,
    console.log
  );
  console.log(
    _map({ a: 100, b: 2, c: 3 }, (v) => v * 10) 
  )
}



test();
