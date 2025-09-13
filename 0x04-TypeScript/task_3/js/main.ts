/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert a row and store the ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${JSON.stringify(row)}`);

// Update the row object
const updatedRow: RowElement = {
  ...row,
  age: 23
};

// Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);