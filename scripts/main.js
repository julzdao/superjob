import { Job } from "./modules/job.js";
import { showModal } from "./modules/modals.js";
import createCard from "./modules/dom.js";
import dragger from "./modules/dragger.js";

const newJob = new Job("Google", "Tech Lead", "SanFran", true);

createCard(newJob, "wish-list");
dragger();
showModal();
