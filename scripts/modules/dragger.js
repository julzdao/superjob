import Storage from "./localStorage.js";

const Dragger = (() => {
  /* Private props */
  let _draggedCard;

  /* Listeners */
  document.addEventListener(
    "dragstart",
    function (event) {
      // store a ref. on the dragged elem
      _draggedCard = event.target;
      // make it half transparent
      _draggedCard.style.opacity = 0.5;
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
    "drop",
    function (event) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // Get the current stage in which the drop event happens
      let currentStage;
      // Get the event path in Chrome and Firefox
      const path =
        event.path ||
        (event.composedPath && event.composedPath()) ||
        composedPath(event.target);

      // make sure that the drop.path is inside the stage card container and assign it
      for (let i = 0; i < path.length; i++) {
        if (path[i].className === "stage__card-container") {
          currentStage = path[i];
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
      _draggedCard.parentNode.removeChild(_draggedCard);
      currentStage.insertBefore(_draggedCard, currentStage.children[dropIndex]);

      //Storage
      let cardId = _draggedCard.id;
      let stageName = currentStage.dataset.stage;
      console.log(cardId);
      Storage.editJob(cardId, "stage", stageName);
    },
    false
  );
})();

export { Dragger };
