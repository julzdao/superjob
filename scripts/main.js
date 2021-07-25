import Job from "./modules/job.js";
import UI from "./modules/ui.js";
import Storage from "./modules/localStorage.js";
import { Modals } from "./modules/modals.js";
import { toggleSuper, listenErrorImg } from "./modules/listeners.js";
import dragger from "./modules/dragger.js";

document.addEventListener("DOMContentLoaded", (e) => {
  //Fetch jobs from the localStorage and display them
  UI.displayJobs(Storage.getJobs());
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
  const offerLink = document.querySelector("#link").value;
  const isSuperJob = document.querySelector("#super").checked;
  const stage = Modals.getCurrentStage();
  if (Modals.validateForm()) {
    const job = new Job(company, position, location, offerLink, isSuperJob, stage);
    //Save job into the localStorage
    Storage.saveJob(job);
    UI.addJobToStage(job);
    UI.clearInputs();
    toggleSuper();
    listenErrorImg();
  }
});
