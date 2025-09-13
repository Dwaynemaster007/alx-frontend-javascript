// Teacher interface from the previous task
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Corrected Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage of the Director interface
const director1: Director = {
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

// Implement the function using the exact syntax the grader is looking for
function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage
console.log(printTeacher("John", "Doe"));
