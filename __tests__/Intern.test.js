import Intern from '../lib/Intern.js';

describe('Intern', () => {
    describe('getSchool', () => {
        it('returns the school', () => {
            const intern = new Intern('Kyrie Irving', 1234, 'kyrieirving@gmail.com', 'Duke');
            expect(intern.getSchool()).toBe('Duke');
        }); 
        it('returns the role', () => {
            const intern = new Intern('Kyrie Irving', 1234, 'kyrieirving@gmail.com', 'Duke');
            expect(intern.getRole()).toBe('Intern');
        }); 
    });
});

