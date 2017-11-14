let folder = 'lib';

try {
    new Function('async function foo(){ await 1}');
} catch(e) {
    folder = 'node6';
}

module.exports = require(`./${folder}/Ezscrap`);