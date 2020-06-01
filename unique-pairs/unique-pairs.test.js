const uniquePairs = require('./unique-pairs');

describe('unique pairs', () => {
    it('2 students, 1 unique pair', () => {
        expect(uniquePairs.projectPartners(2)).toBe(1);
    });

    it('3 students, 3 unique pairs', () => {
        expect(uniquePairs.projectPartners(3)).toBe(3);
    });

    it('4 students, 6 unique pairs', () => {
        expect(uniquePairs.projectPartners(4)).toBe(6);
    });

});

