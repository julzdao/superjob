const CreateCard = ({ company, position, location, superjob }, stage) => {
  const selection = document.querySelector(`[data-stage='${stage}']`);
  const card = document.createElement("div");
  const leftWrapper = document.createElement("div");
  const circularImg = document.createElement("div");
  const companyContentWrapper = document.createElement("div");
  const companyTitle = document.createElement("div");
  const positionTitle = document.createElement("div");
  const rightWrapper = document.createElement("div");
  const checkbox = document.createElement("INPUT");
  const tag = document.createElement("span");

  const addClasses = () => {
    card.classList.add("card");
    card.setAttribute("draggable", "true");
    leftWrapper.classList.add("card__left-wrapper");
    circularImg.classList.add("circular-img", "circular-img--no-img");
    companyContentWrapper.classList.add("left-wrapper__company-content");
    companyTitle.classList.add("card__company-title");
    positionTitle.classList.add("card__position-title");
    rightWrapper.classList.add("card__right-wrapper");
    tag.classList.add("tag");
    checkbox.classList.add("supercheck");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "supercheck");
  };

  const addContent = () => {
    circularImg.textContent = company[0];
    companyContentWrapper.textContent = company;
    positionTitle.textContent = position;
    tag.textContent = location;
  };

  const checkSuperjob = () => {
    if (superjob === true) {
      checkbox.checked = "true";
      card.classList.add("card--supercard");
    }
  };

  const appendCard = () => {
    selection.append(card);
    card.append(leftWrapper, rightWrapper);
    leftWrapper.append(circularImg, companyContentWrapper);
    companyContentWrapper.append(companyTitle, positionTitle);
    rightWrapper.append(checkbox, tag);
  };

  const create = () => {
    addClasses();
    addContent();
    checkSuperjob();
    appendCard();
  };

  return { create };
};

export { CreateCard };
