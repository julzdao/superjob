import Job from "./modules/job.js";
import UI from "./modules/ui.js";
import { Modals } from "./modules/modals.js";
import { toggleSuper, listenErrorImg } from "./modules/listeners.js";
import dragger from "./modules/dragger.js";

document.addEventListener("DOMContentLoaded", (e) => {
  UI.displayJobs();
  dragger();
  Modals.openModalListener();
  Modals.closeModalListener();
  toggleSuper();
});

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  const company = document.querySelector("#company").value;
  const position = document.querySelector("#position").value;
  const location = document.querySelector("#location").value;
  const isSuperJob = document.querySelector("#super").checked;
  const stage = Modals.getCurrentStage();
  if (Modals.validateForm()) {
    const job = new Job(company, position, location, isSuperJob, stage);

    UI.addJobToStage(job);
    UI.clearInputs();
    toggleSuper();
    listenErrorImg();
  }
});
