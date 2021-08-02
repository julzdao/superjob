const Modals = (() => {
  const modal = document.querySelector(".modal");
  const form = document.querySelector(".form");
  const companyInput = document.querySelector("#company");
  const positionInput = document.querySelector("#position");
  const locationInput = document.querySelector("#location");
  const linkInput = document.querySelector("#link");
  const addJobButtons = document.querySelectorAll("[data-button]");
  const textInput = [...document.querySelectorAll(".form__input")];
  const allErrors = document.querySelectorAll(".form__error");
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
    const companyValue = companyInput.value.trim();
    const positionValue = positionInput.value.trim();
    const locationValue = locationInput.value.trim();
    const linkValue = linkInput.value.trim();

    // Clear all errors
    allErrors.forEach((error) => {
      error.style.visibility = "hidden";
    })

    let rightInputs = [];

    if (companyValue === "") {
      setErrorFor(companyInput, "Company cannot be blanked");
    } else if (companyValue.length > 14) {
      setErrorFor(companyInput, "Company must be less than 14 letters")
    } else {
      setSuccessFor(companyInput);
    };

    if (positionValue === "") {
      setErrorFor(positionInput, "Position cannot be blanked");
    } else if (positionValue.length > 14) {
      setErrorFor(positionInput, "Position must be less than 14 letters")
    } else {
      setSuccessFor(positionInput);
    }

    if (locationValue === "") {
      setErrorFor(locationInput, "Location cannot be blanked");
    } else if (locationValue.length > 10) {
      setErrorFor(locationInput, "Location must be less than 10 letters")
    } else {
      setSuccessFor(locationInput);
    }

    if (linkValue === "") {
      setErrorFor(linkInput, "Link cannot be blanked");
    } else {
      setSuccessFor(linkInput);
    }

    // Check if all inputs are with form__right
    for (let i = 0; i < textInput.length; i++) {
      if(textInput[i].classList.contains("form__right")) {
        rightInputs.push(textInput[i]);
      }
    }
    
    // Submit the form only when all inputs are correctly filled
    if (rightInputs.length === 4) {
      modal.classList.add("modal--hide");
      blockScrolling(false);
      return true;
    } 

    return false;
  };

  const setErrorFor = (input, message) => {
    const errorText = input.parentElement.parentElement.querySelector(".form__error");

    errorText.textContent = message;
    errorText.style.visibility = "visible";

    input.classList.add("form__wrong");
    input.classList.remove("form__right");
  }

  const setSuccessFor = (input) => {
    input.classList.add("form__right");
    input.classList.remove("form__wrong")
  }

  const getCurrentStage = () => currentStage;

  return {
    openModalListener,
    closeModalListener,
    getCurrentStage,
    validateForm,
  };
})();

export { Modals };
