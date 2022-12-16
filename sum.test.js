const sum = require('./sum');


it('Should add num1 with num 2', ()=>{
    const result = sum(1,2);
    expect(result).toBe(3);
})