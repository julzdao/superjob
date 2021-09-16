import Job from "./modules/job.js";
import UI from "./modules/ui.js";
import Storage from "./modules/localStorage.js";
import { Modals } from "./modules/modals.js";
import { Listeners } from "./modules/listeners.js";
import { Form } from "./modules/form.js";
import { Dragger } from "./modules/dragger.js";
document.addEventListener("DOMContentLoaded", (e) => {
  //Fetch jobs from the localStorage and display them
  UI.displayJobs(Storage.getJobs());

  //Initialize Modals
  Modals.openModalListener();
  Modals.closeModalListener();

  //Initialize Listeners
  Listeners.listenErrorImg();
  Listeners.listenSupercheck();
  UI.moveJobToTrash();
});
