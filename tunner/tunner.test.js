const tunner = require('./tunner');

describe ('tunner', () => {
    
    it('should return tuned', () => {
        const frequencies = [330, 247, 196, 146, 110, 82];
        expect(tunner.tune(frequencies)).toBe("tuned");
    });

    it('should return e:20 G:11 A:-21', () => {
        const frequencies = [310, 247, 185, 146, 131, 82];
        expect(tunner.tune(frequencies)).toBe("e:20 G:11 A:-21");
    });

});






