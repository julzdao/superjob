// Add event listener from + button
const showModal = () => {
  const buttonsLong = document.querySelectorAll(".button--long");
  buttonsLong.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      modal.classList.remove("modal--hide");
      console.log(button.dataset.button);
      return button.dataset.button;
      // console.log(this.stage);
    });
  });
};

// Get values from inputs
// Get those values to Job Constructor
// Check for Success or Fail
// Close modal

export { showModal };
