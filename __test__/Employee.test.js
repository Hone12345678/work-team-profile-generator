const Employee = require("../lib/Employee");

test("testing to see if constructor can take name val", () => {
  const name = "owen";
  const testEmp = new Employee(name);
  expect(testEmp.name).toBe(name);
});

test("testing to see if constructor can take id val", () => {
  const name = "owen";
  const id = "5";
  const testEmp = new Employee(name, id);
  expect(testEmp.id).toBe(id);
});

test("testing to see if constructor can take email val", () => {
    const name = "owen";
    const id = "5";
    const email = "test@gmail.com";
    const testEmp = new Employee(name, id, email);
    expect(testEmp.email).toBe(email);
  });

  test("testing to see if constructor can take role val", () => {
    const name = "owen";
    const id = "5";
    const email = "test@gmail.com";
    const role = "Employee";
    const testEmp = new Employee(name, id, email, role);
    expect(testEmp.role).toBe(role);
  });
  

test("testing to see if getName returns this.name", () => {
  const name = "owen";
  const testEmp = new Employee(name);
  expect(testEmp.getName()).toBe(name);
});

test("testing to see if getId returns this.id", () => {
  const name = "owen";
  const id = "5";
  const testEmp = new Employee(name, id);
  expect(testEmp.getId()).toBe(id);
});

test("testing to see if getemail returns this.email", () => {
  const name = "owen";
  const id = "5";
  const email = "test@gmail.com";
  const testEmp = new Employee(name, id, email);
  expect(testEmp.getEmail()).toBe(email);
});

test("testing to see if getRole returns this.role", () => {
  const name = "owen";
  const id = "5";
  const email = "test@gmail.com";
  const role = "Employee";
  const testEmp = new Employee(name, id, email, role);
  expect(testEmp.getRole()).toBe(role);
});
