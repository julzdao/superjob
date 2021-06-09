const allBtns = [...document.getElementsByClassName("btn")];
const popUp = document.getElementById("pop-up");

// Create an empty array for storing all Applications
let applicationsArr = [];
// Create function Constructor for new Applications (company, position, location, salary, superjob)

//   this company name = company
//   this position name = position
//   this location name = location
// Create function inside the prototype for Application for the superjob checkbox
//   if (superjob) then tick the checkbox
// Create function for adding new Applications to the ApplicationArray
//   Create new const for currentApplication = new App(newCompany, newPosition, newLocation, newSalary, newSuperjob)
//   const applicationArr.push(currentApplication)
// Add event listener for newApplication button
//   Display pop up with form so the user can get the input
// Add event listener for removing each application
//   Find the index of the application in the applicationArr given the data-attribute
//   Splice the array so you remove only that element
// Create a function that toggles the superjob status when onClick()
//   Get the data-attribute from the application clicked
//   Assign that superjob status on its object to true or false if checkbox is ticked or not
// --------EVENT LISTENERS----------//

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

  console.log(e.target, popUp);
});
console.log(allBtns);
