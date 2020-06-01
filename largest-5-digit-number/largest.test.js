const largest = require('./largest');

describe ('largest 5 digit number', () => {
    
    it('67890 is the largest five-number in 123456789', () => {
        const number = "1234567890";
        const largestNumber = largest.largestFiveDigitNumber(number);

        expect(largestNumber).toBe(67890);
        
    });

    it('93275 is the largest five-number in 5419327514', ()=> {
        const number = "5419327514";
        const largestNumber = largest.largestFiveDigitNumber(number);

        expect(largestNumber).toBe(93275);
    });

});

