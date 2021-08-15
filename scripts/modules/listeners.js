import Job from "./job.js";
import Storage from "./localStorage.js";
import UI from "./ui.js";
import { Modals } from "./modals.js";

const Listeners = (() => {
  
  const listenSupercheck = () => {
    const checkboxes = document.querySelectorAll("input[name=supercheck]");
    checkboxes.forEach((checkbox) => {
      const card = checkbox.closest(".card");
      const id = card.id;
      checkbox.addEventListener("change", () => {
        //If the checkbox is checked, add supercard class otherwise remove it.
        //Save changes to storage
        if(checkbox.checked){
          card.classList.add("card--supercard")
          Storage.editJob(id, "superjob", true);
        } else {
          card.classList.remove("card--supercard");
          Storage.editJob(id, "superjob", false);
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
  

  return {
    listenSupercheck,
    listenErrorImg,
  };
})();

export { Listeners };
