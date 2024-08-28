const MaxPoints = document.querySelector(".calc_MaxInput");
const Name = document.querySelector(".calc_NameInput");
const Points = document.querySelector(".calc_PointsInput");

const CountButton = document.querySelector(".calc_count");
const AddButton = document.querySelector(".calc_add");

const PercentInfo = document.querySelector(".percentInfo");
const GradeInfo = document.querySelector(".gradeInfo");

let maxValue = 10;
let nameValue = "Unknow";
let pointsValue = 10;

let percentValue = 0;
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

CountButton.addEventListener("click", () => {
  percentValue = (pointsValue * 100) / maxValue;
  percentValue = Math.floor(percentValue);
  PercentInfo.innerText = `Proceny:${percentValue}`;
  if (percentValue >= GradesArray[0].Percent) {
    GradeInfo.innerText = "Ocena:6";
  }
  if (
    percentValue < GradesArray[0].Percent &&
    percentValue >= GradesArray[1].Percent
  ) {
    GradeInfo.innerText = "Ocena:5";
  }
  if (
    percentValue < GradesArray[1].Percent &&
    percentValue >= GradesArray[2].Percent
  ) {
    GradeInfo.innerText = "Ocena:4";
  }
  if (
    percentValue < GradesArray[2].Percent &&
    percentValue >= GradesArray[3].Percent
  ) {
    GradeInfo.innerText = "Ocena:3";
  }
  if (
    percentValue < GradesArray[3].Percent &&
    percentValue >= GradesArray[4].Percent
  ) {
    GradeInfo.innerText = "Ocena:2";
  }
  if (percentValue < GradesArray[4].Percent) {
    GradeInfo.innerText = "Ocena:1";
  }
});
