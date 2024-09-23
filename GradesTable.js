const Table = document.querySelector(".table");
const tableGrades = document.querySelector(".table");

let GradesArray = [
  {
    Grade: 6,
    Percent: 100,
    Edit: false,
  },
  {
    Grade: 5,
    Percent: 90,
    Edit: false,
  },
  {
    Grade: 4,
    Percent: 75,
    Edit: false,
  },
  {
    Grade: 3,
    Percent: 50,
    Edit: false,
  },
  {
    Grade: 2,
    Percent: 32,
    Edit: false,
  },
];

let items = localStorage.getItem("grades");
if (items) {
  items = JSON.parse(items);
  GradesArray = items;
}
const RenderTable = () => {
  tableGrades.innerHTML = "";

  GradesArray.forEach((grade, index) => {
    const tableRow = document.createElement("tr");
    const tableGrade = document.createElement("td");
    tableGrade.innerText = grade.Grade;
    tableRow.appendChild(tableGrade);
    tableGrades.appendChild(tableRow);
    if (grade.Edit == false) {
      const tablePercent = document.createElement("td");
      tablePercent.innerText = grade.Percent;
      tablePercent.addEventListener("dblclick", () => ChangeEdit(index));

      tableRow.appendChild(tablePercent);
    } else {
      const tableDiv = document.createElement("div");
      tableDiv.classList.add("tablediv");
      const tableInput = document.createElement("input");
      tableInput.classList.add("tableInput");
      tableInput.type = "number";
      tableInput.value = grade.Percent;
      const ConfirmIcon = document.createElement("img");
      ConfirmIcon.src = "Confirm.png";
      ConfirmIcon.alt = "Ikona potwierdzenia zmian";
      ConfirmIcon.addEventListener("click", () =>
        SafeChange(index, tableInput.value)
      );
      tableDiv.appendChild(tableInput);
      tableDiv.appendChild(ConfirmIcon);
      tableRow.appendChild(tableDiv);
    }
  });
};

RenderTable();

const ChangeEdit = (i) => {
  GradesArray.forEach((grade) => {
    grade.Edit = false;
  });
  GradesArray[i].Edit = true;
  RenderTable();
};
const SafeChange = (i, value) => {
  if (value == "") {
    alert("nie podales wartosci");
    return;
  } else if (value <= 0) {
    alert("wartosc nie moze byc zerem ani byc mniejsza od zera");
    return;
  }
  GradesArray.forEach((grade) => {
    grade.Edit = false;
  });
  GradesArray[i].Percent = value;
  localStorage.setItem("grades", JSON.stringify(GradesArray));
  RenderTable();
};
