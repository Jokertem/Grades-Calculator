const MaxPoints = document.querySelector(".calc_MaxInput");
const Name = document.querySelector(".calc_NameInput");
const Points = document.querySelector(".calc_PointsInput");

const CountButton = document.querySelector(".calc_count");
const AddButton = document.querySelector(".calc_add");

const PercentInfo = document.querySelector(".percentInfo");
const GradeInfo = document.querySelector(".gradeInfo");

const StudentList = [];

let maxValue = 10;
let nameValue = "Unknow";
let pointsValue = 10;

let percentValue = 0;
let gradeValue = 6;
const SetMax = (e) => {
  maxValue = e.target.value;
};
const SetName = (e) => {
  nameValue = e.target.value;
};
const SetPoints = (e) => {
  pointsValue = e.target.value;
};
MaxPoints.addEventListener("change", SetMax);
Name.addEventListener("change", SetName);
Points.addEventListener("change", SetPoints);

const Count = () => {
  if (maxValue <= 0) {
    alert("Maksymalne punkty nie mogą być równe ani mniejsze od zera");
    return;
  }
  percentValue = (pointsValue * 100) / maxValue;
  percentValue = Math.round(percentValue);
  PercentInfo.innerText = `Proceny:${percentValue}`;
  if (percentValue >= GradesArray[0].Percent) {
    gradeValue = 6;
    GradeInfo.innerText = `Ocena${gradeValue}`;
  }
  if (
    percentValue < GradesArray[0].Percent &&
    percentValue >= GradesArray[1].Percent
  ) {
    gradeValue = 5;
    GradeInfo.innerText = `Ocena${gradeValue}`;
  }
  if (
    percentValue < GradesArray[1].Percent &&
    percentValue >= GradesArray[2].Percent
  ) {
    gradeValue = 4;
    GradeInfo.innerText = `Ocena${gradeValue}`;
  }
  if (
    percentValue < GradesArray[2].Percent &&
    percentValue >= GradesArray[3].Percent
  ) {
    gradeValue = 3;
    GradeInfo.innerText = "Ocena:3";
  }
  if (
    percentValue < GradesArray[3].Percent &&
    percentValue >= GradesArray[4].Percent
  ) {
    gradeValue = 2;
    GradeInfo.innerText = `Ocena${gradeValue}`;
  }
  if (percentValue < GradesArray[4].Percent) {
    gradeValue = 1;
    GradeInfo.innerText = `Ocena${gradeValue}`;
  }
};
CountButton.addEventListener("click", Count);

const AddGrade = () => {
  Count();
  const student = new Student(nameValue, pointsValue, percentValue, gradeValue);
  StudentList.push(student);
  console.log(StudentList);
  renderStudents();
};
AddButton.addEventListener("click", AddGrade);
