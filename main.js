var newActivityFormView = document.querySelector("#new-activity-window").classList;
var currentActivityView = document.querySelector("#current-activity-window").classList;
var completedActivityView = document.querySelector("#completed-activity-window").classList;

var newActivityTitle = document.querySelector("#new-activity-title").classList;
var currentActivityTitle = document.querySelector("#current-activity-title").classList;
var completedActivityTitle = document.querySelector("#completed-activity-title").classList;

var activityInput = document.querySelector('#activity-name');
var minuteInput = document.querySelector('#minutes-line');
var secondInput = document.querySelector('#seconds-line');
var userTimeInput = document.querySelector("#timer");

var studyRadioBtn = document.querySelector("#study");
var meditateRadioBtn = document.querySelector("#meditate");
var exerciseRadioBtn = document.querySelector("#exercise");
var startActivityBtn = document.querySelector('#start-button-box, .activity-window-buttons');
var roundBtn = document.querySelector("#round-button");
var logActivityBtn = document.querySelector("#log-activity-button")

var radioBtnGrp = document.querySelector('.radio-button-group');
var warningMessage = document.querySelector(".warning-message-box").classList;

var newActivity = [];
var isFormCorrect;

//EVENT LISTENERS
startActivityBtn.addEventListener('click', submitActivityForm);
radioBtnGrp.addEventListener(`click`, switchCategoryBtnImg);
roundBtn.addEventListener('click', startTimerCountdown);
logActivityBtn.addEventListener('click', logCompletedActivity)
//FUNCTOINS
function switchCategoryBtnImg() {
  var studyImageEnable = document.querySelector('#study-color-enabled').classList;
  var studyImageDisable = document.querySelector('#study-color-disabled').classList;
  var meditateImageEnable = document.querySelector('#meditate-color-enabled').classList;
  var meditateImageDisable = document.querySelector('#meditate-color-disabled').classList;
  var exerciseImageEnable = document.querySelector('#exercise-color-enabled').classList;
  var exerciseImageDisable = document.querySelector('#exercise-color-disabled').classList;
  event.target.id === "study" ? (studyImageEnable.remove("hidden"), studyImageDisable.add("hidden"))
  :(studyImageEnable.add("hidden"),studyImageDisable.remove("hidden"));
  event.target.id === "meditate" ? (meditateImageEnable.remove("hidden"), meditateImageDisable.add("hidden"))
  :(meditateImageEnable.add("hidden"),meditateImageDisable.remove("hidden"));
  event.target.id === "exercise" ? (exerciseImageEnable.remove("hidden"), exerciseImageDisable.add("hidden"))
  :(exerciseImageEnable.add("hidden"),exerciseImageDisable.remove("hidden"));
};

function getRadioBtnCategory() {
  if (studyRadioBtn.checked) {
    return studyRadioBtn.id;
  }
  else if (meditateRadioBtn.checked) {
    return meditateRadioBtn.id;
  }
  else if (exerciseRadioBtn.checked) {
    return exerciseRadioBtn.id;
  }
};

function switchRoundBtnColor(choosenCategory) {
  if(choosenCategory === "study") {
    roundBtn.style.borderColor = "#B3FD78";
  }
  else if (choosenCategory === "meditate") {
      roundBtn.style.borderColor = "#C278FD";
  }
  else if (choosenCategory === "exercise") {
    roundBtn.style.borderColor = "#FD8078";
  }
};

// function clearFormInputs() {
//   activityInput.value = ""
//   minuteInput.value = ""
//   secondInput.value = ""
//   warningMessage.add("hidden")
//
// }

function submitActivityForm () {

  scanUserFormForErrors();
  switchRoundBtnColor(getRadioBtnCategory());

  if(isCorrect === true) {
    newActivityTitle.add("hidden")
    currentActivityTitle.remove("hidden")
    newActivityFormView.add("hidden");
    currentActivityView.remove("hidden");
    submitNewActivityForm();
    displayUserInput();
  }
};

function scanUserFormForErrors() {
  var dotSymbol = ".";
  var dashSymbol = "-";
  (minuteInput.value.length !== 2 || secondInput.value.length !== 2 || secondInput.value > 59) ? alert("Please enter minutes(00-99) and seconds(00-59)")
  : (minuteInput.value.includes(dashSymbol) || secondInput.value.includes(dashSymbol)) ? alert("Please enter numbers only!")
  : (minuteInput.value === "" || secondInput.value === "") ? alert("Please enter numbers only!")
  : (minuteInput.value.includes(dotSymbol) || secondInput.value.includes(dotSymbol)) ? alert("Please enter numbers only!")
  : (activityInput.value === "") ? warningMessage.remove("hidden")
  : (!studyRadioBtn.checked && !meditateRadioBtn.checked && !exerciseRadioBtn.checked) ? alert("Please select a category!")
  : isCorrect = true;

  return isCorrect;
};

function submitNewActivityForm() {
  newActivity = new Activity (
  getRadioBtnCategory(),
  activityInput.value,
  parseInt(minuteInput.value),
  parseInt(secondInput.value),
  false,
  )
};

function displayUserInput() {
  var userDescription = document.querySelector("#current-activity-description");
  var userMinutes = newActivity.minutes;
  var userSeconds = newActivity.seconds;

  userDescription.innerText = newActivity.description;
  userTimeInput.innerHTML = (userMinutes < 10 ? "0" : "") + String(userMinutes) + ":" + (userSeconds < 10 ? "0" : "") + String(userSeconds);
};

function startTimerCountdown () {
  newActivity.startTimer();
}

function displayCompleteMessage() {

  roundBtn.innerText = "COMPLETE!";

  logActivityBtn.classList.remove("hidden");
  document.querySelector("#congrats-message").classList.remove("hidden")
  userTimeInput.classList.add("hidden")
}

function logCompletedActivity() {
  currentActivityView.add("hidden");
  completedActivityView.remove("hidden");

  completedActivityTitle.remove("hidden");
  currentActivityTitle.add("hidden");
}
