const Engineer = require("../lib/Engineer");

test("testing to see if constructor can take name val", () => {
  const name = "owen";
  const testEmp = new Engineer(name);
  expect(testEmp.name).toBe(name);
});

test("testing to see if constructor can take id val", () => {
  const name = "owen";
  const id = "5";
  const testEmp = new Engineer(name, id);
  expect(testEmp.id).toBe(id);
});

test("testing to see if constructor can take email val", () => {
  const name = "owen";
  const id = "5";
  const email = "test@gmail.com";
  const testEmp = new Engineer(name, id, email);
  expect(testEmp.email).toBe(email);
});

test("testing to see if constructor can take role val", () => {
  const name = "owen";
  const id = "5";
  const email = "test@gmail.com";
  const role = "Engineer";
  const testEmp = new Engineer(name, id, email, role);
  expect(testEmp.role).toBe(role);
});

test("testing to see if constructor can take gitHub val", () => {
  const name = "owen";
  const id = "5";
  const email = "test@gmail.com";
  const role = "Engineer";
  const gitHub = "testGitHub";
  const testEmp = new Engineer(name, id, email, role, gitHub);
  expect(testEmp.github).toBe(gitHub);
});

test("testing to see if getName returns this.name", () => {
  const name = "owen";
  const testEmp = new Engineer(name);
  expect(testEmp.getName()).toBe(name);
});

test("testing to see if getId returns this.id", () => {
  const name = "owen";
  const id = "5";
  const testEmp = new Engineer(name, id);
  expect(testEmp.getId()).toBe(id);
});

test("testing to see if getemail returns this.email", () => {
  const name = "owen";
  const id = "5";
  const email = "test@gmail.com";
  const testEmp = new Engineer(name, id, email);
  expect(testEmp.getEmail()).toBe(email);
});

test("testing to see if getRole returns this.role", () => {
  const name = "owen";
  const id = "5";
  const email = "test@gmail.com";
  const role = "Engineer";
  const testEmp = new Engineer(name, id, email, role);
  expect(testEmp.getRole()).toBe(role);
});

test("testing to see if getGithub returns this.github", () => {
  const name = "owen";
  const id = "5";
  const email = "test@gmail.com";
  const role = "Engineer";
  const gitHub = "testGitHub";
  const testEmp = new Engineer(name, id, email, role, gitHub);
  expect(testEmp.getGithub()).toBe(gitHub);
});
