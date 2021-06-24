const allBtns = [...document.getElementsByClassName("btn")];
const popUp = document.getElementById("pop-up");
const superBox = document.getElementById("super");
const appForm = document.getElementById("app-form").elements;
const submitBtn = document.getElementById("submit");
const stageContainers = [...document.getElementsByClassName("stage-container")];

console.log(appForm);
// Create an empty array for storing all Applications
let applicationsArr = [];

// Create function Constructor for new Applications (company, position, location, salary, superjob)
function Application(company, position, location, superjob) {
  this.company = company;
  this.position = position;
  this.location = location;
  this.checkSuper = function () {
    // if checkbox is ticked, then superjob is true
    if (superjob) {
      return true;
    } else {
      return false;
    }
  };
}

// Itinerate through the applicationArr everytime we push the submit button
function appendApplication() {
  let newJobDiv = document.createElement("div");
  let companyText = document.createElement("p");
  let positionText = document.createElement("p");
  let locationText = document.createElement("p");
  let superCheckbox = document.createElement("input");

  companyText.innerHTML = appForm["company"].value;
  positionText.innerHTML = appForm["position"].value;
  locationText.innerHTML = appForm["location"].value;

  newJobDiv.className = "new-job";
  newJobDiv.appendChild(companyText);
  newJobDiv.appendChild(positionText);
  newJobDiv.appendChild(locationText);

  stageContainers[0].appendChild(newJobDiv);
}
// Append a new Application to the column
// Create div for each application with Company, Position, Location and Superjob checkbox
// Append it as a child to the wish list container each loop with all the items in the arr

function addApplicationToList() {
  // Variables for inputs
  let newCompany = appForm["company"].value;
  let newPosition = appForm["position"].value;
  let newLocation = appForm["location"].value;
  let newSuper = appForm["super"].checked;

  const currentApplication = new Application(
    newCompany,
    newPosition,
    newLocation,
    newSuper
  );
  applicationsArr.push(currentApplication);
}

function emptyForm() {
  appForm["company"].value = "";
  appForm["position"].value = "";
  appForm["location"].value = "";
  appForm["super"].checked = false;
}

// Add event listener for removing each application
//   Find the index of the application in the applicationArr given the data-attribute
//   Splice the array so you remove only that element
// Create a function that toggles the superjob status when onClick()
//   Get the data-attribute from the application clicked
//   Assign that superjob status on its object to true or false if checkbox is ticked or not
// --------EVENT LISTENERS----------//

submitBtn.addEventListener("click", function () {
  addApplicationToList();
  appendApplication();
  console.log(applicationsArr);
  console.log(applicationsArr[0].checkSuper());
  emptyForm();
  popUp.classList.add("hide");
});
console.log(applicationsArr);

// Show up the pop up for the form
allBtns.forEach((b) => {
  b.addEventListener("click", function () {
    popUp.classList.toggle("hide");
  });
});

// Hide the form when clicking outside of it -> Think of a cleaner way like an X
document.addEventListener("click", function (e) {
  for (let i = 0; i < allBtns.length; i++) {
    if (
      !popUp.classList.contains("hide") &&
      !popUp.contains(e.target) &&
      !allBtns[i].contains(e.target)
    ) {
      popUp.classList.add("hide");
    }
  }
});
