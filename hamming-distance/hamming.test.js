const hamming = require('./hamming');

describe ('hamming distance', () => {
    it('aaa e aab should return distance 1', () => {
        expect(hamming.hamming("aaa","aab")).toBe(1);
    });

    it('aaaa aabb should return distance 2', () => {
        expect(hamming.hamming("aaaa","aabc")).toBe(2);
    });
});