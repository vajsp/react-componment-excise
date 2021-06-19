// npx jest jest.test.js --watch
test('common matcher', () => {
    expect(2 + 2).toBe(4);
    expect(2 + 2).not.toBe(5);
});

test('to be true', () => {
    expect(1).toBeTruthy();
    expect(0).toBeTruthy();
});

test('number', () => {
    expect(4).toBeGreaterThan(3);
    expect(2).toBeLessThan(3);
});

test('object', () => {
    expect({ name: 'jack' }).toEqual({ name: 'jack' });
});
