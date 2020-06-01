const pendulum = require('./pendulum');

describe ('pendulum', () => {
    it('positive integers', () => {
        expect(pendulum.pendulum([6, 6, 8, 5, 10])).toEqual([10,6,5,6,8]);
    });

    it('negative integers', () => {
        expect(pendulum.pendulum([-9, -2, -10, -6])).toEqual([-6,-10,-9, -2]);
    });

    it('mix of negative and positive integers', () => {
        expect(pendulum.pendulum([11, -16, -18, 13, -11, -12, 3, 18 ])).toEqual([13, 3, -12, -18, -16, -11, 11, 18]);
    });
});

