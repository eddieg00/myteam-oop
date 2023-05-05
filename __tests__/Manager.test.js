import Employee from '../lib/Manager.js';

describe('Employee', () => {
    it('should return the role', () => {
      const employee = new Employee('Kyrie Irving', 1234, 'kyrieirving@gmail.com');
      expect(employee.getRole()).toBe('Manager');
    });
});