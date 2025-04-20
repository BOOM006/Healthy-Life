const validHealthyActivities = [
  "overthinking",
  "hiking",
  "climbing",
  "boxing",
  "kickboxing",
  "rowing",
  "skiing",
  "snowboarding",
  "football",
  "basketball",
  "tennis",
  "martialarts",
  "crossfit",
  "skating",
  "dancing",
  "stretching",
  "yoga",
  "pilates",
  "badminton",
  "volleyball",
  "golf",
  "gardening",
  "frisbee",
  "cleaning",
  "biking",
  "reading",
  "writing",
  "journaling",
  "meditating",
  "painting",
  "drawing",
  "puzzling",
  "relaxing",
  "cooking",
  "baking",
  "sleeping",
  "knitting",
  "learning",
  "chess",
  "studying",
  "overthinking",
  "",
];
const validHighCost = [
  "running",
  "swimming",
  "cycling",
  "hiking",
  "climbing",
  "boxing",
  "kickboxing",
  "rowing",
  "skiing",
  "snowboarding",
  "football",
  "basketball",
  "tennis",
  "martialarts",
  "crossfit",
  "skating",
];

const validMidCost = [
  "walking",
  "dancing",
  "stretching",
  "yoga",
  "pilates",
  "badminton",
  "volleyball",
  "golf",
  "gardening",
  "frisbee",
  "cleaning",
  "biking", // pre rekreačné bicyklovanie
];

const validLowCost = [
  "reading",
  "writing",
  "journaling",
  "meditating",
  "painting",
  "drawing",
  "puzzling",
  "relaxing",
  "cooking",
  "baking",
  "sleeping",
  "knitting",
  "learning",
  "chess",
  "studying",
  "overthinking",
];

const activities = [
  "walking",
  "running",
  "cycling",
  "swimming",
  "workouting",
  "smoking",
  "vaping",
  "drinking",
];

const mediaQuery = window.matchMedia("(max-width: 768px)");

let activitiesList = []; //empty - až input
let outputP = document.getElementById("output");
let activityLabel = document.getElementById("activityLabel");
let activityInput = document.getElementById("activity");
let enterBtn = document.getElementById("getActivity");
let okBtn = document.getElementById("okay");
let mainWidth = document.getElementById("main");
//let submitBtn = document.getElementById("endGetting");
let resetBtn = document.getElementById("reset");
let hideLeft = document.getElementById("left");
let hideRight = document.getElementById("right");
let showYesBtn = document.getElementById("yes");
let showNoBtn = document.getElementById("no");

document.getElementById("getActivity").onclick = function () {
  getActivity(getActivitiesStatus);
};

document.getElementById("yes").onclick = showScore;
document.getElementById("no").onclick = isOK;
document.getElementById("endGetting").onclick = endGetting;
document.getElementById("reset").onclick = reset;

function isHealthy(element) {
  return validHealthyActivities.includes(element.toLowerCase());
}

function isHighCost(element) {
  return validHighCost.includes(element.toLowerCase());
}

function isLowCost(element) {
  return validLowCost.includes(element.toLowerCase());
}

function isMidCost(element) {
  return validMidCost.includes(element.toLowerCase());
}

function isHighCost(element) {
  return validHighCost.includes(element.toLowerCase());
}

function getActivity(callback) {
  const activity = document.getElementById("activity").value; //input

  /*if (!activity) {
    outputP.style.display = "block";
    outputP.textContent = "Please enter an activity!";
    activityLabel.style.display = "none";
    activityInput.style.display = "none";
    enterBtn.style.display = "none";
    okBtn.style.display = "block";
    submitBtn.style.visibility = "hidden";
    mainWidth.style.width = "90%";
    document.getElementById("okay").onclick = isOK;
  } 
 else */
  if (activities.includes(activity)) {
    outputP.style.display = "block";
    outputP.textContent = "Activity is already answered!";
    activityLabel.style.display = "none";
    activityInput.style.display = "none";
    enterBtn.style.display = "none";
    okBtn.style.display = "block";
    hideLeft.style.visibility = "hidden";
    hideRight.style.visibility = "hidden";
    //submitBtn.style.visibility = "hidden";
    mainWidth.style.width = "90%";
    document.getElementById("activity").value = "";
    document.getElementById("okay").onclick = isOK;
  } else if (activity === "") {
    outputP.style.display = "block";
    outputP.textContent = "Do you want to submit quiz?";
    showYesBtn.style.display = "block";
    showNoBtn.style.display = "block";
    activityLabel.style.display = "none";
    activityInput.style.display = "none";
    enterBtn.style.display = "none";
    okBtn.style.display = "none";
    hideLeft.style.visibility = "hidden";
    hideRight.style.visibility = "hidden";
   // submitBtn.style.visibility = "hidden";
    mainWidth.style.width = "90%";
  } else if (activitiesList.includes(activity)) {
    outputP.style.display = "block";
    outputP.textContent = "Activity is already in the list!";
    activityLabel.style.display = "none";
    activityInput.style.display = "none";
    enterBtn.style.display = "none";
    okBtn.style.display = "block";
    hideLeft.style.visibility = "hidden";
    hideRight.style.visibility = "hidden";
   // submitBtn.style.visibility = "hidden";
    mainWidth.style.width = "90%";
    document.getElementById("activity").value = "";
    document.getElementById("okay").onclick = isOK;
  } else if (!validHealthyActivities.includes(activity)) {
    outputP.style.display = "block";
    outputP.textContent = "Activity is not recognized!";
    activityLabel.style.display = "none";
    activityInput.style.display = "none";
    enterBtn.style.display = "none";
    okBtn.style.display = "block";
    //submitBtn.style.visibility = "hidden";
    hideLeft.style.visibility = "hidden";
    hideRight.style.visibility = "hidden";
    mainWidth.style.width = "90%";
    document.getElementById("okay").onclick = isOK;
  } else {
    activitiesList.push(activity); //všetko ide do poľa
    document.getElementById("activity").value = "";

    //submitBtn.style.visibility = "visible";
  }

  callback();
}

/*function endGetting() {
  enterBtn.style.display = "none";
  submitBtn.style.display = "none";
  resetBtn.style.display = "block";
  activityLabel.style.display = "none";
  activityInput.style.display = "none";
  outputP.style.display = "block";

  const highCost = activitiesList.filter(isHighCost);
  let highLength = highCost.length * 5;
  console.log("High: " + highCost + " Length: " + highLength);

  const midCost = activitiesList.filter(isMidCost);
  let midLength = midCost.length * 3;
  console.log("Mid: " + midCost + " Length: " + midLength);

  const lowCost = activitiesList.filter(isLowCost);
  let lowLength = lowCost.length * 1;
  console.log("Low: " + lowCost + " Length: " + lowLength);

  let score = highLength + midLength + lowLength;
  document.getElementById("output").textContent =
    "Your health score is: " + score;
  console.log("Score: " + score);
}
*/
function reset() {
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach((radio) => {
    radio.checked = false;
  });

  activitiesList = [];
  document.getElementById("activity").value = "";

  enterBtn.style.display = "block";
 // submitBtn.style.display = "block";
 // submitBtn.style.visibility = "hidden";
  resetBtn.style.display = "none";
  activityLabel.style.display = "block";
  activityInput.style.display = "block";
  outputP.style.display = "none";
}

function isOK() {
  activityLabel.style.display = "block";
  activityInput.style.display = "block";
  enterBtn.style.display = "block";
  okBtn.style.display = "none";
  outputP.style.display = "none";
  showYesBtn.style.display = "none";
  showNoBtn.style.display = "none";
  hideLeft.style.visibility = "visible";
  hideRight.style.visibility = "visible";

  if (mediaQuery.matches) {
    mainWidth.style.width = "90%";
  } else {
    mainWidth.style.width = "65%";
  }

  if (activitiesList.length != 0) {
   // submitBtn.style.visibility = "visible";
  }
}

function getActivitiesStatus() {
  const results = {};

  activities.forEach((activity) => {
    const yesRadio = document.getElementById(activity + "Yes");
    const noRadio = document.getElementById(activity + "No");

    if (!yesRadio.checked && !noRadio.checked) {
      outputP.style.display = "block";
      outputP.textContent = "Please answer all activities!";
      activityLabel.style.display = "none";
      activityInput.style.display = "none";
      enterBtn.style.display = "none";
      okBtn.style.display = "block";
  //    submitBtn.style.visibility = "hidden";
      mainWidth.style.width = "90%";
      hideLeft.style.visibility = "hidden";
      hideRight.style.visibility = "hidden";
      showYesBtn.style.display = "none";
      showNoBtn.style.display = "none";
      document.getElementById("okay").onclick = isOK;
    } else if (activitiesList.includes(activity)) {
      //aby sa nemohli spamovať
    } else {
      results[activity] = "YES";
      activitiesList.push(activity);
    }
  });
}

function showScore() {
  enterBtn.style.display = "none";
 // submitBtn.style.display = "none";
  resetBtn.style.display = "block";
  activityLabel.style.display = "none";
  activityInput.style.display = "none";
  showNoBtn.style.display = "none";
  showYesBtn.style.display = "none";
  hideLeft.style.display = "none";
  hideRight.style.display = "none";
  outputP.style.display = "block";

  const highCost = activitiesList.filter(isHighCost);
  let highLength = highCost.length * 5;
  console.log("High: " + highCost + " Length: " + highLength);

  const midCost = activitiesList.filter(isMidCost);
  let midLength = midCost.length * 3;
  console.log("Mid: " + midCost + " Length: " + midLength);

  const lowCost = activitiesList.filter(isLowCost);
  let lowLength = lowCost.length * 1;
  console.log("Low: " + lowCost + " Length: " + lowLength);

  let score = highLength + midLength + lowLength;
  document.getElementById("output").textContent =
    "Your health score is: " + score;
  console.log("Score: " + score);
}

