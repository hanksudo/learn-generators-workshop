// Look sync. Do async.
// https://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw
var fs = require('fs');

function run(generator) {
    var it = generator(go);

    function go(err, result) {
        if (err) {
            return it.throw(err);
        }
        it.next(result);
    }
    go();
}

run(function* (done) {
    var first_file;

    try {
        var dir_files = yield fs.readdir('NoNoNoNo', done); // No such dir
        first_file = dir_files[0]; // TypeError: Cannot read property '0' of undefined
    } catch(err) {
        first_file = null;
    }

    console.log(first_file);
});
