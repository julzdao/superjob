const Modals = (() => {
  const modal = document.querySelector(".modal");
  const addJobButtons = document.querySelectorAll("[data-button]");
  let currentStage = "wish-list";
  const companyForm = document.querySelector("#company");
  const positionForm = document.querySelector("#position");
  const locationForm = document.querySelector("#location");
  const textInput = document.querySelectorAll(".form__input");

  // Add event listener from + button
  const openModal = () => {
    addJobButtons.forEach((button) => {
      button.addEventListener("click", () => {
        modal.classList.remove("modal--hide");
        currentStage = button.dataset.button;
      });
    });
  };

  const closeModal = () => {
    modal.addEventListener("click", (e) => {
      let isModal = e.target.classList.contains("modal");
      let isCloseBtn = e.target.classList.contains("close-button");
      if (isModal || isCloseBtn) modal.classList.add("modal--hide");
    });
  };

  const validateForm = () => {
    let rightInputs = [];
    // Input validation form here
    textInput.forEach((input) => {
      if (input.value === "") {
        input.classList.add("form__wrong");
        return false;
      } else {
        input.classList.add("form__right");
        rightInputs.push(input);
      }
      console.log(rightInputs);
    });

    if (rightInputs.length === 3) {
      modal.classList.add("modal--hide");
      return true;
    }
  };

  const getCurrentStage = () => currentStage;

  return { openModal, closeModal, getCurrentStage, validateForm };
})();

// Check for Success or Fail

export { Modals };
