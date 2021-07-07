import { Job } from "./modules/job.js";
import createCard from "./modules/dom.js";

const newJob = new Job("Google", "Tech Lead", "SanFran", true);

createCard(newJob , "wish-list");
