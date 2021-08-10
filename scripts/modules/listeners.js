import Job from "./job.js";
import Storage from "./localStorage.js";
import UI from "./ui.js";
import { Modals } from "./modals.js";

const Listeners = (() => {
  
  const listenSupercheck = () => {
    const checkboxes = document.querySelectorAll("input[name=supercheck]");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const card = checkbox.parentElement.parentElement;

        //If the checkbox is checked, add supercard class otherwise remove it.
        checkbox.checked
          ? card.classList.add("card--supercard")
          : card.classList.remove("card--supercard");
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
    const deleteJob = () => {
      // Select all cards
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        // Within each card, select the trash icon
        const trashIcon = card.querySelector(".icon--trash"); 
        // Get array of Storage jobs
        const currentJobsArr = Storage.getJobs();

        trashIcon.addEventListener("click", () => {
          const index = currentJobsArr.indexOf(card);
          currentJobsArr.splice(index, 1);
        });
      });
    }
  

  return {
    listenSupercheck,
    listenErrorImg,
    deleteJob,
  };
})();

export { Listeners };
