const morse = require('./morse-code');

describe('morse code', () => {
    it('hey jude', () => {
        const hey = morse.decode(".... . -.--   .--- ..- -.. .");
        expect(hey).toBe("hey jude");
    });
});