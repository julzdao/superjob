import Job from "./job.js";
import Storage from "./localStorage.js";
import UI from "./ui.js";
import { Listeners } from "./listeners.js";
import { Modals } from "./modals.js";

const Form = (() => {
  /* Private props */
  const _form = document.querySelector(".form");

  /* Private methods */
  const _getInputs = (form) => {
    return {
      company: form.querySelector("#company"),
      position: form.querySelector("#position"),
      location: form.querySelector("#location"),
      offerLink: form.querySelector("#link"),
      isSuperJob: form.querySelector("#super"),
    };
  };

  const _getInputValues = ({
    company,
    position,
    location,
    offerLink,
    isSuperJob,
  }) => {
    return {
      company: company.value.trim(),
      position: position.value.trim(),
      location: location.value.trim(),
      offerLink: offerLink.value.trim(),
      isSuperJob: isSuperJob.checked,
      stage: Modals.getCurrentStage(),
      date: new Date(),
    };
  };

  const _clearInputs = ({
    company,
    position,
    location,
    offerLink,
    isSuperJob,
  }) => {
    company.value = "";
    position.value = "";
    location.value = "";
    offerLink.value = "";
    isSuperJob.checked = false;

    company.classList.remove("form__wrong", "form__right");
    position.classList.remove("form__wrong", "form__right");
    location.classList.remove("form__wrong", "form__right");
    offerLink.classList.remove("form__wrong", "form__right");
  };

  const _createJob = ({
    company,
    position,
    location,
    offerLink,
    isSuperJob,
    stage,
    date,
  }) =>
    new Job(company, position, location, offerLink, isSuperJob, stage, date);

  const _addJob = (job) => {
    Storage.saveJob(job);
    UI.addJobToStage(job);
    Listeners.listenSupercheck();
    Listeners.listenErrorImg();
  };

  /* Listeners */
  _form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (Modals.validateForm()) {
      //Get input values
      const inputs = _getInputs(_form);
      const inputValues = _getInputValues(inputs);
      //Instantiate a new job from Job class
      const job = _createJob(inputValues);
      //Store job in localStore and render the job.
      _addJob(job);
      //Clear inputs from form
      _clearInputs(inputs);
    }
  });
})();

export { Form };
