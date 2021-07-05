const cards = document.querySelectorAll(".card");
const stages = document.querySelectorAll(".stage__card-container");

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
    console.log(event.target);
    // move dragged elem to the selected drop target
    if (event.target.className == "stage__card-container") {
      event.target.style.background = "";
      draggedCard.parentNode.removeChild(draggedCard);
      event.target.appendChild(draggedCard);
    } else if (
      event.target.parentNode.className == "card" ||
      event.target.parentNode.className == "stage__card-container"
    ) {
      event.target.style.background = "";
      draggedCard.parentNode.removeChild(draggedCard);
      event.target.parentNode.appendChild(draggedCard);
    }
  },
  false
);
// for (let i = 0; i < cards.length; i++) {
//   const card = cards[i];

//   card.addEventListener("dragstart", function () {
//     draggedCard = card;

//     setTimeout(function () {
//       card.style.display = "none";
//     }, 0);
//   });

//   card.addEventListener("dragend", function () {
//     setTimeout(function () {
//       draggedCard.style.display = "flex";
//       draggedCard = null;
//     }, 0);
//   });

//   for (let j = 0; j < stages.length; j++) {
//     const stage = stages[j];

//     stage.addEventListener("dragover", function (e) {
//       e.preventDefault;
//       stage.style.backgroundColor = "pink";
//     });

//     stage.addEventListener("dragenter", function (e) {
//       e.preventDefault;
//     });

//     stage.addEventListener("drop", function (e) {
//       stage.append(draggedCard);

//       console.log(e.target);
//     });
//   }
// }
