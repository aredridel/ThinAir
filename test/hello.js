var test = require('testling');

test('json parse', function (t) {
    t.same(JSON.parse('[1,2]'), [1,2]);
    t.log('beep boop');
    t.end();
});