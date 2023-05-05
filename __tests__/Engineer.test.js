import Employee from '../lib/Engineer.js';

describe('Employee', () => {
    it('should return the engineers github', () => {
      const employee = new Employee('Kyrie Irving', 1234, 'kyrieirving@gmail.com', 'github/kyrieirving.com');
      expect(employee.getGithub()).toBe('github/kyrieirving.com');
    });
    it('should return employee role', () => {
        const employee = new Employee('Kyrie Irving', 1234, 'kyrieirving@gmail.com', 'github/kyrieirving.com');
        expect(employee.getRole()).toBe('Engineer');
      });
});    