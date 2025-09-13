// Teacher interface from the previous task
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // This is the ONLY place this line should be
}

// New Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Log the director object to the console
console.log(director1);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function that matches the interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe"));

// Interface for the StudentClass constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// The StudentClass implementation
class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new Student('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());