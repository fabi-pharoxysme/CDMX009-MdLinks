const app = require('../app.js');
const getFile = app.modGetFile;
// const readFile = app.modReadFile;
describe('validate module getFile', ()=>{
    it('getFile is a function', ()=>{
        expect(typeof getFile).toBe('function');
    });
});
// describe ('validate module getFile', () =>{
//     it('getFile is a function', ()=>{
//         expect(typeof getFile).toBe('function');
//     })
// })
// describe('validate module getFile', () =>{
//     it('getFile is a function', ()=>{
//     expect(typeof getFile).toBe('function');
//     });
//     // it('getFile value is a file', ()=>{
//     //     expect(getFile()).toBe('string');
//     // });
// });
// describe ('validate module readFile', () =>{
//     it('readFile is a function', ()=>{
//         expect(typeof readFile).toBe('function');
//     });
// });
// test('Validate function to get file', ()=> {
//     expect(typeof getFile).toBe('function');
// });
// const readFile = app.modReadFile;
// test('Validate function to read file ', ()=>{
//     expect(typeof readFile).toBe('function');
// });
// describe ('group to validate function get file', ()=>{
//     it('get file is a function', ()=>{
//         expect(typeof getFile).toBe('function')
//     })
//     it('function get file return a value', ()=>{
//         expect(getFile()).toBe('string')
//     });
// })
