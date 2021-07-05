const cards = document.querySelectorAll(".card");
const stages = document.querySelectorAll(".stage__card-container");

let draggedCard = null;

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  card.addEventListener("dragstart", function () {
    draggedCard = card;

    setTimeout(function () {
      card.style.display = "none";
    }, 0);
  });

  card.addEventListener("dragends", function () {
    setTimeout(function () {
      draggedCard.style.display = "block";
      draggedCard = null;
    }, 0);
  });

  for (let j = 0; j < stages.length; j++) {
    const stage = stages[j];

    stage.addEventListener("dragover", function (e) {
      e.preventDefault;
    });

    stage.addEventListener("dragenter", function (e) {
      e.preventDefault;
    });

    stage.addEventListener("drop", function (e) {
      this.append(draggedCard);
      console.log(stages);
    });
  }
}
