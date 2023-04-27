const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('Kyrie Irving', 1234, 'kyrieirving@gmail.com');
      expect(employee.getName()).toBe('Kyrie Irving');
    });
    it('should return employee ID', () => {
      const employee = new Employee('Kyrie Irving', 1234, 'kyrieirving@gmail.com');
      expect(employee.getId()).toBe(1234);
    });
    it('should return employee email', () => {
      const employee = new Employee('Kyrie Irving', 1234, 'kyrieirving@gmail.com');
      expect(employee.getEmail()).toBe('kyrieirving@gmail.com');
    });
    it('should return employee role', () => {
      const employee = new Employee('Kyrie Irving', 1234, 'kyrieirving@gmail.com');
      expect(employee.getRole()).toBe('Employee');
    });
}); 
