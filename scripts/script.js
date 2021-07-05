const cards = document.querySelectorAll(".card");

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
    }
    const stages = [...document.querySelectorAll(".stage__card-container")];
    console.log(stages);
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
