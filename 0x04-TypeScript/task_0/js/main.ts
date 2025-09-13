// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London',
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Get the HTML body element
const body = document.body;

// Create the table and its body
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

// Append rows for each student
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  
  // Create cells for first name and location
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  // Append cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});

// Append the table body to the table
table.appendChild(tableBody);

// Append the table to the body of the document
body.appendChild(table);