export default function dragger() {
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
      // Get the current stage in which the drop event happens
      let currentStage;

      for (let i = 0; i < event.path.length; i++) {
        if (event.path[i].className === "stage__card-container") {
          currentStage = event.path[i];
        }
      }
      // Get the Y position from the center of each card in that stage
      let positionYCards = [];
      for (let i = 0; i < currentStage.children.length; i++) {
        positionYCards.push(
          window.scrollY +
            currentStage.children[i].getBoundingClientRect().top +
            35
        );
      }
      // Get the drop event index inside all the Y positions within the stage cards
      positionYCards.push(event.pageY);
      positionYCards.sort();
      let dropIndex = positionYCards.indexOf(event.pageY);

      // Insert card just after the index position from the card before
      event.target.style.background = "";
      draggedCard.parentNode.removeChild(draggedCard);
      currentStage.insertBefore(draggedCard, currentStage.children[dropIndex]);
    },
    false
  );
}
