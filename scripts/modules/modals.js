const Modals = (() => {
  const modal = document.querySelector(".modal");
  const addJobButtons = document.querySelectorAll("[data-button]");
  const textInput = document.querySelectorAll(".form__input");
  let currentStage = "wish-list";

  const blockScrolling = (bool) => {
    const body = document.querySelector("body");
    const cardContainers = document.querySelectorAll(".stage__card-container");

    if (bool) {
      body.classList.add("scroll-blocked");
      cardContainers.forEach((container) =>
        container.classList.add("scroll-blocked")
      );
    } else {
      body.classList.remove("scroll-blocked");
      cardContainers.forEach((container) =>
        container.classList.remove("scroll-blocked")
      );
    }
  };

  const openModal = () => {
    addJobButtons.forEach((button) => {
      button.addEventListener("click", () => {
        modal.classList.remove("modal--hide");
        blockScrolling(true);
        currentStage = button.dataset.button;
      });
    });
  };

  const closeModal = () => {
    modal.addEventListener("click", (e) => {
      let isModal = e.target.classList.contains("modal");
      let isCloseBtn = e.target.classList.contains("close-button");
      if (isModal || isCloseBtn) {
        modal.classList.add("modal--hide");
        blockScrolling(false);
      }
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
