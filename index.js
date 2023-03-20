function vaxTrail(people) {
    const A = [];
    const B = [];
    const C = [];
    const D = [];
  
    // sort people by age
    people.sort((a, b) => a.age - b.age);
  
    // group people into A, B, C, and D
    for (let person of people) {
      if (person.temperature < 100) {
        if (person.age >= 20 && person.age <= 30) {
          A.push(person);
        } else if (person.age >= 31 && person.age <= 40) {
          B.push(person);
        } else if (person.age >= 41 && person.age <= 50) {
          C.push(person);
        } else {
          D.push(person);
        }
      } else {
        D.push(person);
      }
    }
  
    // sort A, B, C by even ages
    A.sort((a, b) => a.age % 2 - b.age % 2 || a.age - b.age);
    B.sort((a, b) => a.age % 2 - b.age % 2 || a.age - b.age);
    C.sort((a, b) => a.age % 2 - b.age % 2 || a.age - b.age);
  
    // sort D by age
    D.sort((a, b) => a.age - b.age);
  
    return { A, B, C, D };
  }
  
  
  const people = [
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'sunila', age: 31, temperature: 98 },
    { name: 'Biplaaap', age: 42, temperature: 98 },
    { name: 'sunil', age: 35, temperature: 98 },
    { name: 'Biplap', age: 49, temperature: 108 },
    { name: 'sunil', age: 51, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 100 },
  ];
  const result = vaxTrail(people);
  console.log(result);
  