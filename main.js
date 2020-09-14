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
var logActivityBtn = document.querySelector("#log-activity-button");
var createNewActivityBtn = document.querySelector("#create-activity-button")

var radioBtnGrp = document.querySelector('.radio-button-group');
var warningMessage = document.querySelector(".warning-message-box").classList;
var cardColorIndicator = document.querySelector(".color-indicator");
var congratMessage = document.querySelector("#congrats-message").classList;

var newActivity;
var pastActivities = [];
var isFormCorrect;
var color;

//EVENT LISTENERS
startActivityBtn.addEventListener('click', submitActivityForm);
radioBtnGrp.addEventListener(`click`, switchCategoryBtnImg);
roundBtn.addEventListener('click', startTimerCountdown);
logActivityBtn.addEventListener('click', logCompletedActivity);
createNewActivityBtn.addEventListener('click', returnToMainPage);
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
  else {
    roundBtn.style.borderColor = "#FD8078";
  }
};

function switCardIndicatorColor(selectedCategory) {
  if(selectedCategory === "study") {
    return color = "#B3FD78";
  }
  else if (selectedCategory === "meditate") {
    return color = "#C278FD";
  }
  else {
    return color = "#FD8078";
  }
};

function submitActivityForm () {

  scanUserFormForErrors();

  if(isFormCorrect === true) {
    displayCurrentActivityWindow()
    createUserNewActivity();
    displayUserInput();
    switchRoundBtnColor(getRadioBtnCategory());
    switCardIndicatorColor(getRadioBtnCategory());
  }
};

function scanUserFormForErrors() {
  var errors = {
    error1: "Please enter minutes(00-99) and seconds(00-59)",
    error2: "Please enter numbers only!",
    error3: "Please select a category!",
  }

  var dotSymbol = ".";
  var dashSymbol = "-";
  var timeErrorBox = document.querySelector("#time-error-message").classList;
  var timeErrorMessage = document.querySelector("#time-warning-phrase");
  (minuteInput.value.length !== 2 || secondInput.value.length !== 2 || secondInput.value > 59) ? (timeErrorMessage.innerText = errors.error1, timeErrorBox.remove("hidden"))
  : (minuteInput.value.includes(dashSymbol) || secondInput.value.includes(dashSymbol)) ? (timeErrorMessage.innerText = errors.error2, timeErrorBox.remove("hidden"))
  : (minuteInput.value.includes(dotSymbol) || secondInput.value.includes(dotSymbol)) ? (timeErrorMessage.innerText = errors.error2, timeErrorBox.remove("hidden"))
  : (activityInput.value === "") ? warningMessage.remove("hidden")
  : (!studyRadioBtn.checked && !meditateRadioBtn.checked && !exerciseRadioBtn.checked) ? (timeErrorMessage.innerText = errors.error3, timeErrorBox.remove("hidden"))
  : isFormCorrect = true;

  return isFormCorrect;
};

function createUserNewActivity() {
  newActivity = new Activity (
  getRadioBtnCategory(),
  activityInput.value,
  parseInt(minuteInput.value),
  parseInt(secondInput.value),
  false,
  )
};

function displayNewActivityWindow() {
  completedActivityView.add("hidden");
  completedActivityTitle.add("hidden");
  newActivityFormView.remove("hidden");
  newActivityTitle.remove("hidden");
}

function displayCurrentActivityWindow() {
  newActivityFormView.add("hidden");
  newActivityTitle.add("hidden");
  currentActivityView.remove("hidden");
  currentActivityTitle.remove("hidden");
  logActivityBtn.classList.remove("hidden");
  userTimeInput.classList.remove("hidden");
  roundBtn.innerText = "START";
  logActivityBtn.disabled = true;
}

function displayCompletedActivityWindow() {
  document.querySelector("#no-activity-message").classList.add("hidden")
  completedActivityTitle.remove("hidden");
  completedActivityView.remove("hidden");
  currentActivityView.add("hidden");
  currentActivityTitle.add("hidden");
  logActivityBtn.classList.add("hidden");
  congratMessage.add("hidden");
}

function displayUserInput() {
  var userDescription = document.querySelector("#current-activity-description");
  var userMinutes = newActivity.minutes;
  var userSeconds = newActivity.seconds;

  userDescription.innerText = newActivity.description;
  userTimeInput.innerHTML = (userMinutes < 10 ? "0" : "") + String(userMinutes) + ":" + (userSeconds < 10 ? "0" : "") + String(userSeconds);
};

function startTimerCountdown() {
  newActivity.startTimer();
}

function displayCompleteMessage() {

  roundBtn.innerText = "COMPLETE!";

  congratMessage.remove("hidden")
  userTimeInput.classList.add("hidden")
}

function logCompletedActivity() {
  displayCompletedActivityWindow()
  addCompletedActivityCard();
}

function addCompletedActivityCard() {
  newActivity.markComplete()
  pastActivities.push(newActivity)
}

function clearFormInputs() {
  studyRadioBtn.checked = false;
  meditateRadioBtn.checked = false;
  exerciseRadioBtn.checked = false;
  activityInput.value = "";
  minuteInput.value = "";
  secondInput.value = "";
  warningMessage.add("hidden");
}

function returnToMainPage() {
  clearFormInputs();
  switchCategoryBtnImg();
  displayNewActivityWindow()
}
