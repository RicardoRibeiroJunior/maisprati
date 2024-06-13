let arr = [];

function fib(x) {

    let a = 0;
    let b = 1;
    let f = 1;

    for (let i = 0; i < x; i++) {

        arr.push(f);
        f = a + b;
        a = b;
        b = f;

    }
}

fib(8);
  
 arr.forEach((n) => {
    console.log(n);
 })
 