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

    //Create card element with Job data
    const card = document.createElement("div");
    card.classList.add("card");
    // card.id = `${job.company}`;
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
      <span class="tag">${job.location}</span>                        
    </div> 
    <div class="card__down-wrapper">
      <button class="link-button" draggable="false">Link</button>
      <button class="icon icon--arrow" draggable="false"> 
        <img src="/assets/icons/down-arrow.png" alt="expand icon" draggable="false">
      </button>
      <div>
        <button class="icon icon--edit" draggable="false">
          <img src="/assets/icons/edit.png" alt="edit icon" draggable="false">
        </button>
        <button class="icon icon--trash" draggable="false"> 
          <img src="/assets/icons/trash.svg" alt="trash icon" draggable="false">
        </button>
      </div>
    `;

    //Append card as the first child of the stage
    stage.insertAdjacentElement("afterbegin", card);
  }

  static deleteJob() {}

  static showAlert() {}

}
