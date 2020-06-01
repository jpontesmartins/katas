const args = require('./args');

beforeEach(() =>{
    const flagL = {
        name: '-l',
        type: 'boolean'
    }
    args.addToSchema(flagL);
});

test('should receive command like -l -p 8080 -d /usr/logs', ()=> {
    //arrange
    const input = '-l -p 8080 -d /usr/logs';

    //act
    const command = args.execute(input);
    
    //assert
    expect(command).toBe('-l -p 8080 -d /usr/logs');
});

test('should receive boolean for flag -l', ()=> {
    //arrange
    const input = '-l';

    //act
    const command = args.getFlagType(input);

    //assert
    expect(command).toBe('boolean');
});