var studyImageEnable = document.querySelector('#study-color-enabled').classList;
var studyImageDisable = document.querySelector('#study-color-disabled').classList;
var meditateImageEnable = document.querySelector('#meditate-color-enabled').classList;
var meditateImageDisable = document.querySelector('#meditate-color-disabled').classList;
var exerciseImageEnable = document.querySelector('#exercise-color-enabled').classList;
var exerciseImageDisable = document.querySelector('#exercise-color-disabled').classList;

var radioBtnGrp = document.querySelector('.radio-button-group');
radioBtnGrp.addEventListener(`click`, highlightActivityButton);


function highlightActivityButton() {

  event.target.id === "study" ?(studyImageEnable.remove("hidden"), studyImageDisable.add("hidden")) :(studyImageEnable.add("hidden"),studyImageDisable.remove("hidden"));

  event.target.id === "meditate" ?(meditateImageEnable.remove("hidden"), meditateImageDisable.add("hidden")) :(meditateImageEnable.add("hidden"),meditateImageDisable.remove("hidden"));

  event.target.id === "exercise" ?(exerciseImageEnable.remove("hidden"), exerciseImageDisable.add("hidden")) :(exerciseImageEnable.add("hidden"),exerciseImageDisable.remove("hidden"));
};
