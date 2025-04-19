const validHealthyActivities = [
  "overthinking",
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

const mediaQuery = window.matchMedia("(max-width: 768px)");

let activitiesList = []; //empty - až input
let outputP = document.getElementById("output");
let activityLabel = document.getElementById("activityLabel");
let activityInput = document.getElementById("activity");
let enterBtn = document.getElementById("getActivity");
let okBtn = document.getElementById("okay");
let mainWidth = document.getElementById("main");
let submitBtn = document.getElementById("endGetting");
let resetBtn = document.getElementById("reset");

document.getElementById("getActivity").onclick = getActivity;
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

function getActivity() {
  const activity = document.getElementById("activity").value; //input

  if (!activity) {
    outputP.style.display = "block";
    outputP.textContent = "Please enter an activity!";
    activityLabel.style.display = "none";
    activityInput.style.display = "none";
    enterBtn.style.display = "none";
    okBtn.style.display = "block";
    submitBtn.style.visibility = "hidden";
    mainWidth.style.width = "90%";
    document.getElementById("okay").onclick = isOK;
  } else if (!validHealthyActivities.includes(activity)) {
    outputP.style.display = "block";
    outputP.textContent = "Activity is not recognized!";
    activityLabel.style.display = "none";
    activityInput.style.display = "none";
    enterBtn.style.display = "none";
    okBtn.style.display = "block";
    submitBtn.style.visibility = "hidden";
    mainWidth.style.width = "90%";
    document.getElementById("okay").onclick = isOK;
    return;
  } else {
    activitiesList.push(activity); //všetko ide do poľa
    console.log(activitiesList);
    document.getElementById("activity").value = "";

    submitBtn.style.visibility = "visible";
  }
}

function endGetting() {
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

function reset() {
  activitiesList = [];
  document.getElementById("activity").value = "";

  enterBtn.style.display = "block";
  submitBtn.style.display = "block";
  submitBtn.style.visibility = "hidden";
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

  if (mediaQuery.matches) {
    mainWidth.style.width = "90%";
  } else {
    mainWidth.style.width = "65%";
  }
  


  if (activitiesList.length != 0) {
    submitBtn.style.visibility = "visible";
  }
}


