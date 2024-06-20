        /** 순수함수
         * 1. 동일한 인자에 대해 항상 동일한 값을 반환한다.
         * 2. 함수 외부의 어떤 상태도 바꾸지 않는다.
         * 
         * 평가 시점이 중요하지 않다.
         */
        function add(a, b) {
            return a + b;
        }
        console.log(add(1, 2));
        console.log(add(1, 2));
        console.log(add(1, 2));
        let c = 100;
        /**
         *  c 에 의해 add2함수가 순수함수가 될지, 안될지 정해지게 된다.
         */

        function add2(a, b) {
            return a + b + c;
        }

        /**
         *  함수 내부에서 외부의 상태를 변경하게 되면 순수함수가 아니다.
         */
        function add3(a, b) {
            c = b;
            return a + b;
        }
        const obj = {
            val: 1
        }
        function add4(obj, b) {
            obj.val += b;
        }
        function add5(obj, b) {
            return {
                val: obj.val + b
            }
        }

        /** 일급함수
         * 함수를 값으로 다룰 수 있다.
         * 함수를 변수에 담을 수 있다.  
         * 인자로 사용가능
         */

        const f1 = function (a) {
            return a * a;
        }

        function f3(f) {
            return f();
        }

        f3(function () { return 10 });
        /** 
         * 순수함수의 예시중
         * closure 와 1급 함수를 이용하여 구현한 add_maker 
         */
        function add_maker(a) {
            return function (b) {
                return a + b;
            }
        }

        console.log(add_maker(10)(5))