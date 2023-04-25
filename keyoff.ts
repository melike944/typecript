interface Person {
    firstname: string;
    age: number;
  }
  
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  
  let person1 = {
    firstname: "Max",
    age: 27
  };
  
  printPersonProperty(person, "firstname"); // Printing person property name: "Max"s