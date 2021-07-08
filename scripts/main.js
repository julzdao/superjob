import { Job } from "./modules/job.js";
import { showModal, closeModal } from "./modules/modals.js";
import { toggleSuper } from "./modules/listeners.js";
import createCard from "./modules/dom.js";
import dragger from "./modules/dragger.js";

const newJob = new Job("Starbucks", "Tech Lead", "SanFran", true);

createCard(newJob, "wish-list");
dragger();
showModal();
closeModal();
toggleSuper();
