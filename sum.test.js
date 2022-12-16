const sum = require('./sum');


describe('testing matchers', ()=>{
    it('Should add num1 with num 2', ()=>{
        const result = sum(1,2);
        expect(result).toBe(3);
    })

    it(
        'should check whether it is a truthy value', ()=>{
            const n = null;
            expect(n).toBeFalsy();
        }
    )
    it('adding float', ()=>{
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3);
    })

})



