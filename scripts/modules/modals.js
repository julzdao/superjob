const Modals = (() => {
  const modal = document.querySelector(".modal");
  const addJobButtons = document.querySelectorAll("[data-button]");
  const textInput = document.querySelectorAll(".form__input");
  const fieldRequired = document.createElement("p");

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

  const openModalListener = () => {
    addJobButtons.forEach((button) => {
      button.addEventListener("click", () => {
        modal.classList.remove("modal--hide");
        blockScrolling(true);
        currentStage = button.dataset.button;
      });
    });
  };

  const closeModalListener = () => {
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
    let goodbyeValidation;
    // Input validation form here
    textInput.forEach((input) => {
      let currentControl = input.parentElement.parentElement;
      if (input.value === "") {
        input.classList.add("form__wrong");
        input.classList.remove("form__right");
        // Add field Required validation text
        fieldRequired.textContent = "This field is required";
        fieldRequired.classList.add("form__required");
        currentControl.appendChild(fieldRequired);
        // Set the timeout for fadeout effect
        goodbyeValidation = setTimeout(function () {
          currentControl.removeChild(currentControl.lastChild);
        }, 3000);
        console.log(currentControl.contains(fieldRequired));
        return false;
        // } else if (currentControl.contains(fieldRequired) && input.value > 0) {
        //   currentControl.removeChild(currentControl.lastChild);
      } else {
        input.classList.add("form__right");
        rightInputs.push(input);
      }
    });

    if (rightInputs.length === 3) {
      modal.classList.add("modal--hide");
      blockScrolling(false);
      return true;
    }
  };

  const getCurrentStage = () => currentStage;

  return {
    openModalListener,
    closeModalListener,
    getCurrentStage,
    validateForm,
  };
})();

export { Modals };
