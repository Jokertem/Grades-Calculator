const StudentTable = document.querySelector(".student_table");

const clearButton = document.querySelector(".clear");

const renderStudents = () => {
  StudentTable.innerHTML = "";
  const tableFirstRow = document.createElement("tr");
  StudentTable.appendChild(tableFirstRow);
  const NameHeader = document.createElement("th");
  NameHeader.innerText = "Imie";
  const PointsHeader = document.createElement("th");
  PointsHeader.innerText = "Punkty";
  const PercentHeader = document.createElement("th");
  PercentHeader.innerText = "Procenty";
  const GradeHeader = document.createElement("th");
  GradeHeader.innerText = "Ocena";

  tableFirstRow.appendChild(NameHeader);
  tableFirstRow.appendChild(PointsHeader);
  tableFirstRow.appendChild(PercentHeader);
  tableFirstRow.appendChild(GradeHeader);

  StudentList.forEach((element, index) => {
    const row = document.createElement("tr");
    StudentTable.appendChild(row);
    const student_name = document.createElement("td");
    student_name.innerText = element.name;
    const student_points = document.createElement("td");
    student_points.innerText = element.points;
    const student_percents = document.createElement("td");
    student_percents.innerText = `${element.percent} %`;
    const student_grade = document.createElement("td");
    student_grade.classList.add("gradescont");
    student_grade.innerText = element.grades;
    row.appendChild(student_name);
    row.appendChild(student_points);
    row.appendChild(student_percents);
    row.appendChild(student_grade);

    const delIcon = document.createElement("img");
    delIcon.addEventListener("click", () => DelStudent(index));
    delIcon.src = "DeleteIcon.png";
    delIcon.alt = "Delete Icon";

    student_grade.appendChild(delIcon);
  });
};
renderStudents();
console.log(StudentList);

const DelStudent = (i) => {
  StudentList.splice(i, 1);
  renderStudents();
};
clearButton.addEventListener("click", () => {
  StudentList.length = 0;
  renderStudents();
});
