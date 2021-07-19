const toggleSuper = () => {
  const superchecks = document.querySelectorAll("input[name=supercheck]");

  superchecks.forEach((check) => {
    check.addEventListener("change", function () {
      if (this.checked) {
        this.parentElement.parentElement.classList.add("card--supercard");
      } else {
        this.parentElement.parentElement.classList.remove("card--supercard");
      }
    });
  });
};

const listenErrorImg = () => {
  //Select all cards
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    //Within each card, select the company name and company img
    const companyImg = card.querySelector(".company-logo");
    const circularDiv = card.querySelector(".circular-img");
    const company = card.querySelector(".card__company-title").textContent;

    if (companyImg === null) return;

    //For each company img, if there is an error, display first letter of company as it logo.
    companyImg.addEventListener("error", () => {
      circularDiv.classList.add(".circular-img--no-img");
      circularDiv.textContent = company[0].toUpperCase();
      companyImg.remove();
    });
  });
};

export { toggleSuper, listenErrorImg };
