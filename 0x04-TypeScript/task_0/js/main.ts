interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {firstName: "Brian", lastName: "Mutua", age: 20, location: "Nairobi"};
const student2: Student = {firstName: "Daniel", lastName: "Kim", age: 22, location: "Kahawa"};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    const header1 = document.createElement("th");
    header1.textContent = "First Name";
    headerRow.appendChild(header1);
    const header2 = document.createElement("th");
    header2.textContent = "Location";
    headerRow.appendChild(header2);

    studentsList.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = student.firstName;
        const cell2 = row.insertCell();
        cell2.textContent = student.location;
    });

    document.body.appendChild(table);
});

