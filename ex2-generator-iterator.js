function *factorial(n) {
    var ans = 1;
    for (var i = 1; i <= n; i++) {
        yield ans *= i;
    }
}

for (var n of factorial(5)) {
    console.log(n);
}
