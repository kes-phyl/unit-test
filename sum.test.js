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


describe('Strings', ()=>{
    it('there is not I in team', ()=>{
        expect('team').not.toMatch(/I/);
    })
})

describe('array', ()=>{
    it('if an array contains an element', ()=>{
        const currentTags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P','LI', 'A']
        const tags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P','LI', 'A']
        expect(currentTags).toEqual(tags);
    })
})


function compileAndroidCode(){
    throw new Error('You are using the wrong JDK!')
}

describe('exceptions', ()=>{
    it('compiling goes as expected', ()=>{
        expect(()=> compileAndroidCode()).toThrow();
    })
})


