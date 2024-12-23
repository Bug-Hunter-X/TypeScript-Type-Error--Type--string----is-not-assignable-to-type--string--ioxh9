function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user)); //This will cause an error because the function expects a string, not an array of strings