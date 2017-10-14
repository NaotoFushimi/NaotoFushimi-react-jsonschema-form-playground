import test from 'ava';

test.serial(async t => {
    t.deepEqual([1, 2], [1, 2]);
    t.deepEqual([800, 2], [80 * 10, 2]);

    const wait = await new Promise(res => setTimeout(res , 2000));

    t.is(3 * 4 , 12)
});
