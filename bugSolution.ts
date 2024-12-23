function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

//Solution 1: Type assertion
console.log(greeter(user as string)); //This will compile but may lead to runtime errors if user is not a string

//Solution 2: Modify the function to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}
console.log(greeterArray(user));