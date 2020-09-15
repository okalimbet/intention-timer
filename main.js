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

var studyRadioBtn = document.querySelector("#Study");
var meditateRadioBtn = document.querySelector("#Meditate");
var exerciseRadioBtn = document.querySelector("#Exercise");
var startActivityBtn = document.querySelector('#start-button-box, .activity-window-buttons');
var roundBtn = document.querySelector("#round-button");
var logActivityBtn = document.querySelector("#log-activity-button");
var createNewActivityBtn = document.querySelector("#create-activity-button");

var noActivitiesMessage = document.querySelector("#no-activity-message").classList;
var timeErrorBox = document.querySelector("#time-error-message").classList;
var radioBtnGrp = document.querySelector('.radio-button-group');
var warningMessage = document.querySelector(".warning-message-box").classList;
var cardColorIndicator = document.querySelector(".color-indicator");
var congratMessage = document.querySelector("#congrats-message").classList;
var descriptionLine = document.querySelector("#user-activity-inputs hr").style;

var ul = document.querySelector('ul');
var li = document.createElement('li');

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
window.addEventListener('load', displaySavedPastActivities);
//FUNCTOINS
function switchCategoryBtnImg() {
  var studyImageEnable = document.querySelector('#study-color-enabled').classList;
  var studyImageDisable = document.querySelector('#study-color-disabled').classList;
  var meditateImageEnable = document.querySelector('#meditate-color-enabled').classList;
  var meditateImageDisable = document.querySelector('#meditate-color-disabled').classList;
  var exerciseImageEnable = document.querySelector('#exercise-color-enabled').classList;
  var exerciseImageDisable = document.querySelector('#exercise-color-disabled').classList;
  event.target.id === "Study" ? (studyImageEnable.remove("hidden"), studyImageDisable.add("hidden"))
  :(studyImageEnable.add("hidden"),studyImageDisable.remove("hidden"));
  event.target.id === "Meditate" ? (meditateImageEnable.remove("hidden"), meditateImageDisable.add("hidden"))
  :(meditateImageEnable.add("hidden"),meditateImageDisable.remove("hidden"));
  event.target.id === "Exercise" ? (exerciseImageEnable.remove("hidden"), exerciseImageDisable.add("hidden"))
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
  if(choosenCategory === "Study") {
    roundBtn.style.borderColor = "#B3FD78";
  }
  else if (choosenCategory === "Meditate") {
      roundBtn.style.borderColor = "#C278FD";
  }
  else {
    roundBtn.style.borderColor = "#FD8078";
  }
};

function switCardIndicatorColor(selectedCategory) {
  if(selectedCategory === "Study") {
    return color = "#B3FD78";
  }
  else if (selectedCategory === "Meditate") {
    return color = "#C278FD";
  }
  else {
    return color = "#FD8078";
  }
};

function submitActivityForm () {

  scanUserFormForErrors();

  if(isFormCorrect === true) {
    displayCurrentActivityWindow();
    switCardIndicatorColor(getRadioBtnCategory());
    createUserNewActivity();
    displayUserInput();
    switchRoundBtnColor(getRadioBtnCategory());
  }
};

function scanUserFormForErrors() {
  var errors = {
    error1: "Please enter minutes(00-99) and seconds(00-59)",
    error2: "Please enter numbers only!",
    error3: "Please select a category!",
  };

  var dotSymbol = ".";
  var dashSymbol = "-";
  var timeErrorMessage = document.querySelector("#time-warning-phrase");
  (minuteInput.value.length !== 2 || secondInput.value.length !== 2 || secondInput.value > 59) ? (timeErrorMessage.innerText = errors.error1, timeErrorBox.remove("hidden"))
  : (minuteInput.value.includes(dashSymbol) || secondInput.value.includes(dashSymbol)) ? (timeErrorMessage.innerText = errors.error2, timeErrorBox.remove("hidden"))
  : (minuteInput.value.includes(dotSymbol) || secondInput.value.includes(dotSymbol)) ? (timeErrorMessage.innerText = errors.error2, timeErrorBox.remove("hidden"))
  : (activityInput.value === "") ? (warningMessage.remove("hidden"), descriptionLine.borderColor = "#EFB7EC")
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
  color,
  )
};

function displayNewActivityWindow() {
  completedActivityView.add("hidden");
  completedActivityTitle.add("hidden");
  newActivityFormView.remove("hidden");
  newActivityTitle.remove("hidden");
  timeErrorBox.add("hidden");
  isFormCorrect = false;
};

function displayCurrentActivityWindow() {
  newActivityFormView.add("hidden");
  newActivityTitle.add("hidden");
  currentActivityView.remove("hidden");
  currentActivityTitle.remove("hidden");
  logActivityBtn.classList.remove("hidden");
  userTimeInput.classList.remove("hidden");
  roundBtn.innerText = "START";
  logActivityBtn.disabled = true;
};

function displayCompletedActivityWindow() {
  noActivitiesMessage.add("hidden");
  completedActivityTitle.remove("hidden");
  completedActivityView.remove("hidden");
  currentActivityView.add("hidden");
  currentActivityTitle.add("hidden");
  logActivityBtn.classList.add("hidden");
  congratMessage.add("hidden");
};

function displayUserInput() {
  var userDescription = document.querySelector("#current-activity-description");
  var userMinutes = newActivity.minutes;
  var userSeconds = newActivity.seconds;

  userDescription.innerText = newActivity.description;
  userTimeInput.innerHTML = (userMinutes < 10 ? "0" : "") + String(userMinutes) + ":" + (userSeconds < 10 ? "0" : "") + String(userSeconds);
};

function startTimerCountdown() {
  newActivity.startTimer();
};

function displayCompleteMessage() {

  roundBtn.innerText = "COMPLETE!";

  congratMessage.remove("hidden");
  userTimeInput.classList.add("hidden");
};

function logCompletedActivity() {
  displayCompletedActivityWindow();
  addCompletedActivityCard();
};

function addCompletedActivityCard() {
  newActivity.markComplete();
  pastActivities.push(newActivity);
  addSavedPastActivities();
};

function clearFormInputs() {
  studyRadioBtn.checked = false;
  meditateRadioBtn.checked = false;
  exerciseRadioBtn.checked = false;
  activityInput.value = "";
  minuteInput.value = "";
  secondInput.value = "";
  warningMessage.add("hidden");
  descriptionLine.borderColor = "#CBC9CF";
};

function returnToMainPage() {
  clearFormInputs();
  switchCategoryBtnImg();
  displayNewActivityWindow();
};

function addSavedPastActivities() {
  newActivity.saveToStorage();
};

function displaySavedPastActivities() {
  if(localStorage.length === 0) {
    return;
  }
  else {
    noActivitiesMessage.add("hidden");
    var orderedPastActivityCards = {};
    Object.keys(localStorage).sort().forEach(function(key) {
      orderedPastActivityCards[key] = localStorage[key];
    });
    var localStorageValues = Object.values(orderedPastActivityCards);

    for (var i = 0; i < localStorageValues.length; i++) {
      var savedCard = localStorageValues[i];
      var parsedSavedCard = JSON.parse(savedCard);
      var savedActivityCardBlock =
       `
         <li id=${parsedSavedCard.id}><div class="card">
           <label id="card-category">${parsedSavedCard.category}</label>
           <label id="card-time">${parsedSavedCard.minutes} MIN ${(parsedSavedCard.seconds === 0 ? "" : (parsedSavedCard.seconds + " SECONDS"))}</label>
           <label id="card-description">${parsedSavedCard.description}</label>
         </div>
         <div class="color-indicator" style="background-color: ${[parsedSavedCard.color]};"></div>
         </li>
        `
      ul.insertAdjacentHTML("afterbegin", savedActivityCardBlock);
    }
  }
};
