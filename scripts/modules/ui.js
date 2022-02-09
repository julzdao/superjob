import Storage from "./localStorage.js";
export default class UI {
  static displayJobs(jobs) {
    jobs.forEach((job) => UI.addJobToStage(job));
  }

  static checkSuperjob(checked) {
    if (checked) {
      return "checked";
    } else {
      return "";
    }
  }

  static addJobToStage(job) {
    //Select the stage to add the job
    const stage = document.querySelector(`[data-stage="${job.stage}"]`);
    // // Update jobCounter with the number of jobs within the stage
    // const jobsCounter = stage.parentElement.querySelector(".stage__stage-count"); 
    // jobsCounter.innerHTML = `${stage.children.length + 1} jobs`;
    
    //Create card element with Job data
    const card = document.createElement("div");
    card.classList.add("card");
    // Add an id with the first letters of company, position and location+ random num
    card.id = job.id;
    if (job.superjob) {
      card.classList.add("card--supercard");
    }
    card.setAttribute("draggable", "true");
    card.innerHTML = `
    <div class="card__left-wrapper">
      <div class="circular-img">
        <img src="https://logo.clearbit.com/${job.company}.com" id="circular-${
      job.company
    }" class="company-logo" draggable="false">
      </div>
      <div class="left-wrapper__company-content">
          <h3 class="card__company-title">${job.company}</h3>
          <h3 class="card__position-title">${job.position}</h3>
      </div>
    </div>

    <div class="card__right-wrapper">
      <input type="checkbox" class="supercheck" name="supercheck" ${UI.checkSuperjob(
        job.superjob
      )}>
      <div class="card__links-wrapper">
        <button class="icon icon--trash" draggable="false"> 
          <img src="./assets/icons/trash.svg" alt="trash icon" draggable="false">
        </button>
        <button class="icon icon--link" draggable="false" onclick="location.href='${job.link}'" type="button">
          <img src="./assets/icons/icon_link.svg" alt="link icon" draggable="false">
        </button>
      </div>                       
    </div> 
    `;

    //Append card as the first child of the stage
    stage.insertAdjacentElement("afterbegin", card);
    UI.updateJobCounters();
    UI.changeBorderSuperjob();
  }

  static deleteJobListener() {
    const trashIcons = document.querySelectorAll(".icon--trash");
    
    trashIcons.forEach(icon => {
      icon.addEventListener("click", () => {
        const card = icon.closest(".card");
        const id = card.id;
        card.remove();
        Storage.deleteJob(id);
        UI.updateJobCounters();
      })
    })
  };

  static updateJobCounters() {
    const jobCounters = document.querySelectorAll(".stage__stage-count");
    jobCounters.forEach((counter) => {
      const stage = counter.parentElement.parentElement;
      const stageContainer = stage.querySelector(".stage__card-container");
      counter.innerHTML = `${stageContainer.children.length} jobs`;
    })
  }

  static changeBorderSuperjob () {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const stage = card.parentElement;
      const stageCategory = stage.dataset.stage;
      console.log(card, stageCategory);
      if (card.classList.contains("card--supercard")) {
        switch (stageCategory) {
          case "wish-list":
            card.style.border = "8px solid #F3DF26";
            break;
          case "applied":
            card.style.border = "8px solid #4C6FFF";
            break;
          case "interview":
            card.style.border = "8px solid #F34B26";
            break;
          case "offer":
            card.style.border = "8px solid #26F36B";
            break;
          case "other":
            card.style.border = "8px solid black";
            break;
        }
      } else {
        card.style.border = "8px solid #E6E6E6";
      }
      
    })
  }

  static showAlert() {}

}
