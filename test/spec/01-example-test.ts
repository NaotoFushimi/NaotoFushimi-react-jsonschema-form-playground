import test from 'ava';

test(t => {
    t.deepEqual([1, 2], [1, 2]);
    t.deepEqual([800, 2], [80 * 10, 2]);
    t.deepEqual([1, 2], [1, 2]);
});

