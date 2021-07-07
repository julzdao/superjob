export default function createCard(
  { company, position, location, superjob },
  stage
) {
  console.log(company, position, location, superjob);
  const selection = document.querySelector(`[data-stage='${stage}']`);

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("draggable", "true");

  const leftWrapper = document.createElement("div");
  leftWrapper.classList.add("card__left-wrapper");

  const circularImg = document.createElement("div");
  circularImg.classList.add("circular-img", "circular-img--no-img");
  circularImg.textContent = company[0];

  const companyContentWrapper = document.createElement("div");
  companyContentWrapper.classList.add("left-wrapper__company-content");

  const companyTitle = document.createElement("div");
  companyTitle.classList.add("card__company-title");
  companyContentWrapper.textContent = company;

  const positionTitle = document.createElement("div");
  positionTitle.classList.add("card__position-title");
  positionTitle.textContent = position;

  const rightWrapper = document.createElement("div");
  rightWrapper.classList.add("card__right-wrapper");

  const checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  if (superjob === true) {
    checkbox.checked = "true";
  }
  checkbox.classList.add("supercheck");

  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = location;

  selection.append(card);
  card.append(leftWrapper, rightWrapper);
  leftWrapper.append(circularImg, companyContentWrapper);
  companyContentWrapper.append(companyTitle, positionTitle);
  rightWrapper.append(checkbox, tag);
}
