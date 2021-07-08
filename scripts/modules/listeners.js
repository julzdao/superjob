const toggleSuper = () => {
  const superchecks = document.querySelectorAll(".supercheck");

  superchecks.forEach((check) => {
    check.addEventListener("change", function () {
      if (this.checked) {
        this.parentElement.parentElement.classList.add("card--supercard");
      } else {
        this.parentElement.parentElement.classList.remove("card--supercard");
      }
    });
  });
};

export { toggleSuper };
