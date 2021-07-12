const Modals = (() => {
  const modal = document.querySelector(".modal");
  const addJobButtons = document.querySelectorAll("[data-button]");
  let currentStage = "wish-list";

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

  const getCurrentStage = () => currentStage;

  return { openModal, closeModal, getCurrentStage };
})();

// Check for Success or Fail

export { Modals };
