import Storage from "./localStorage.js";
export default class DOM {
  static displayJobs(jobs) {
    jobs.forEach((job) => DOM.appendJob(job));
  }

  static checkSuperjob(checked) {
    if (checked) {
      return "checked";
    } else {
      return "";
    }
  }

  static appendJob(job) {
    //Select the stage to add the job
    const selectedStage = document.querySelector(`[data-stage="${job.stage}"]`);
    
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
      <input type="checkbox" class="supercheck" name="supercheck" ${DOM.checkSuperjob(
        job.superjob
      )}>
      <span class="tag">${job.location}</span>                        
    </div> 
    <div class="card__down-wrapper">
      <a href="${job.link}" class="button--link" draggable="false" target="_blank">Link</a>
      <button class="icon icon--arrow" draggable="false"> 
        <img src="./assets/icons/down-arrow.png" alt="expand icon" draggable="false">
      </button>
      <div>
        <button class="icon icon--edit" draggable="false">
          <img src="./assets/icons/edit.png" alt="edit icon" draggable="false">
        </button>
        <button class="icon icon--trash" draggable="false"> 
          <img src="./assets/icons/trash.svg" alt="trash icon" draggable="false">
        </button>
      </div>
    `;

    //Append card as the first child of the stage
    selectedStage.insertAdjacentElement("afterbegin", card);
    DOM.updateJobCounters();
  }

  static updateJobCounters() {
    const jobCounters = document.querySelectorAll(".stage__stage-count");
    jobCounters.forEach((counter) => {
      const counterStage = counter.parentElement.parentElement;
      const counterStageContainer = counterStage.querySelector(".stage__card-container");
      counter.innerHTML = `${counterStageContainer.children.length} jobs`;
    })
  }
  
}
