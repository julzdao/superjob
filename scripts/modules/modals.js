const Modals = (() => {
  const modal = document.querySelector(".modal");
  const addJobButtons = document.querySelectorAll("[data-button]");
  let currentStage = "wish-list";
  const companyInput = document.querySelector("#company");
  const positionInput = document.querySelector("#position");
  const locationInput = document.querySelector("#location");

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
    modal.classList.add("modal--hide");
    // Input validation form here
  };

  const getCurrentStage = () => currentStage;

  return { openModal, closeModal, getCurrentStage, validateForm };
})();

// Check for Success or Fail

export { Modals };
