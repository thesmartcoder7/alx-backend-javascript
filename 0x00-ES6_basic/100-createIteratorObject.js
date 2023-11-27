export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next() {
      if (
        currentDepartmentIndex >= report.getNumberOfDepartments(report.allEmployees)
      ) {
        return { done: true };
      }

      const currentDepartment = Object.keys(report.allEmployees)[
        currentDepartmentIndex
      ];

      const currentEmployees = report.allEmployees[currentDepartment];

      if (currentEmployeeIndex >= currentEmployees.length) {
        // Move to the next department
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next(); // Recursively call next for the next department
      }

      const currentEmployee = currentEmployees[currentEmployeeIndex++];
      return { value: currentEmployee, done: false };
    },
  };

  return iterator;
}
