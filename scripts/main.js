import Job from "./modules/job.js";
import UI from "./modules/ui.js";
import Storage from "./modules/localStorage.js";
import { Modals } from "./modules/modals.js";
import { Listeners } from "./modules/listeners.js";
import dragger from "./modules/dragger.js";

document.addEventListener("DOMContentLoaded", (e) => {
  //Fetch jobs from the localStorage and display them
  UI.displayJobs(Storage.getJobs());
  
  //Initialize Dragger
  dragger();

  //Initialize Modals
  Modals.openModalListener();
  Modals.closeModalListener();

  //Initialize Listeners
  Listeners.listenErrorImg()
  Listeners.listenSupercheck();
});

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  const company = document.querySelector("#company").value.trim();
  const position = document.querySelector("#position").value.trim();
  const location = document.querySelector("#location").value.trim();
  const offerLink = document.querySelector("#link").value.trim();
  const isSuperJob = document.querySelector("#super").checked;
  const date = new Date();
  const stage = Modals.getCurrentStage();

  if (Modals.validateForm()) {
    const job = new Job(
      company,
      position,
      location,
      offerLink,
      isSuperJob,
      stage,
      date
    );
    
    //Save job into the localStorage
    Storage.saveJob(job);
    UI.addJobToStage(job);
    UI.clearInputs();
    Listeners.listenSupercheck();
    Listeners.listenErrorImg()
  }
});
