const cards = document.querySelectorAll(".card");
const stages = [...document.querySelectorAll(".stage__card-container")];
let draggedCard;

/* events fired on the draggable target */
document.addEventListener("drag", function (event) {}, false);

document.addEventListener(
  "dragstart",
  function (event) {
    // store a ref. on the dragged elem
    draggedCard = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function (event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function (event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.style.background = "purple";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "stage__card-container") {
      event.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    console.log(event.pageY);
    // console.log(stages[0]);
    // console.log(
    //   window.scrollY +
    //     document.querySelector("#try-card").getBoundingClientRect().top +
    //     35
    // );
    // move dragged elem to the selected drop target
    if (event.target.className == "stage__card-container") {
      event.target.style.background = "";
      draggedCard.parentNode.removeChild(draggedCard);
      event.target.appendChild(draggedCard);
    }

    for (let i = 0; i < stages.length; i++) {
      const stage = stages[i];

      if (stage.contains(event.target)) {
        stage.style.background = "";
        draggedCard.parentNode.removeChild(draggedCard);
        stage.appendChild(draggedCard);
      }
    }
  },
  false
);

// How to get the card in the position that we want
// Check to see if the drop is in between two cards
// How to know which cards are we talking about?
// Calculate the distance between the top of the previous card and the bottom of the next card
// How to get the dropEvent Y -> event.pageY
// How to get the center of a div position Y _> window.scrollY + document.querySelector('#elementId').getBoundingClientRect().top + card.height/2
// If the drop event Y is in between this distance
// Get the position in the array of both cards
//
// Append the card just in the position
// Check to see if there is only one card but it needs to be first
