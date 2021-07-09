const Modals = (() => {
  const modal = document.querySelector(".modal");

  // Add event listener from + button
  const showModal = () => {
    const buttonsLong = document.querySelectorAll(".button--long");
    buttonsLong.forEach((button) => {
      button.addEventListener("click", () => {
        modal.classList.remove("modal--hide");
        console.log(button.dataset.button);
        return button.dataset.button;
        // console.log(this.stage);
      });
    });
  };

  const closeModal = () => {
    const closeButton = document.querySelectorAll(".close-button");
    const formContainer = document.querySelector(".form-container");

    closeButton.forEach((close) => {
      close.addEventListener("click", (e) => {
        if (close.contains(e.target)) {
          modal.classList.add("modal--hide");
          console.log(close.parentElement);
        }
      });
    });

    modal.addEventListener("click", (e) => {
      if (!formContainer.contains(e.target)) {
        modal.classList.add("modal--hide");
        console.log(e.target);
      }
    });
  };

  return { showModal, closeModal };
})();

// Get values from inputs
// Get those values to Job Constructor
// Check for Success or Fail

export { Modals };
