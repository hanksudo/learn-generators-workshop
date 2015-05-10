// Run Stop Run
function *range(from, to) {
    for (var i = from; i <= to; i++) {
        yield i;
    }
}

for (var r of range(5, 10)) {
    console.log(r); // 5, 6, 7, 8, 9, 10
}
