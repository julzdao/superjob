import { Job } from "./modules/job.js";
import { Modals } from "./modules/modals.js";
import { toggleSuper } from "./modules/listeners.js";
import { CreateCard } from "./modules/dom.js";
import dragger from "./modules/dragger.js";

const newJob = new Job("Starbucks", "Tech Lead", "SanFran", true);

CreateCard(newJob, "wish-list").create()

dragger();
Modals.showModal();
Modals.closeModal();
toggleSuper();
