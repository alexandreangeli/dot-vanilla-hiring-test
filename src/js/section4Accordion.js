let accordionItems = [
  {
    title: "Lorem ipsum",
    content: `
      <img class="section-4-accordion-item-body-img" src="img/bg-1.png"/>
      <p class="section-4-accordion-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
      </p>
    `,
  },
  {
    title: "Lorem ipsum",
    content: `
      <img class="section-4-accordion-item-body-img" src="img/bg-2.png"/>
      <p class="section-4-accordion-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
      </p>
    `,
  },
  {
    title: "Lorem ipsum",
    content: `
      <img class="section-4-accordion-item-body-img" src="img/bg-3.png"/>
      <p class="section-4-accordion-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
      </p>
    `,
  },
  {
    title: "Lorem ipsum",
    content: `
      <img class="section-4-accordion-item-body-img" src="img/bg-1.png"/>
      <p class="section-4-accordion-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
      </p>
    `,
  },
  {
    title: "Lorem ipsum",
    content: `
      <img class="section-4-accordion-item-body-img" src="img/bg-2.png"/>
      <p class="section-4-accordion-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
      </p>
    `,
  },
];

function closeAccordion() {
  let ativeAccordion = document.querySelector(
    ".section-4-accordion-item-active"
  );
  if (!!ativeAccordion) {
    ativeAccordion.classList.remove("section-4-accordion-item-active");
  }
}

function updateAccordion(index) {
  closeAccordion();

  let accordionItems = document.querySelectorAll(".section-4-accordion-item");
  accordionItems[index].classList.add("section-4-accordion-item-active");
}

function startAccordion() {
  let accordion = document.querySelector(".section-4-accordion");

  accordionItems.forEach((item, i) => {
    let accordionItem = document.createElement("div");
    accordionItem.classList.add("section-4-accordion-item");
    accordion.appendChild(accordionItem);

    let accordionItemHeader = document.createElement("div");
    accordionItemHeader.classList.add("section-4-accordion-item-header");
    accordionItem.appendChild(accordionItemHeader);

    let accordionItemHeaderTitle = document.createElement("p");
    accordionItemHeaderTitle.classList.add(
      "section-4-accordion-item-header-title"
    );
    accordionItemHeaderTitle.textContent = item.title;
    accordionItemHeader.appendChild(accordionItemHeaderTitle);

    let accordionItemHeaderDownArrow = document.createElement("img");
    accordionItemHeaderDownArrow.classList.add(
      "section-4-accordion-item-header-down-arrow"
    );
    accordionItemHeaderDownArrow.src = "img/arrow-down-white.png";
    accordionItemHeaderDownArrow.onclick = () => updateAccordion(i);
    accordionItemHeader.appendChild(accordionItemHeaderDownArrow);

    let accordionItemHeaderUpArrow = document.createElement("img");
    accordionItemHeaderUpArrow.classList.add(
      "section-4-accordion-item-header-up-arrow"
    );
    accordionItemHeaderUpArrow.src = "img/arrow-up-gray.png";
    accordionItemHeaderUpArrow.onclick = () => closeAccordion();
    accordionItemHeader.appendChild(accordionItemHeaderUpArrow);

    let accordionItemBodyWrapper = document.createElement("div");
    accordionItemBodyWrapper.classList.add(
      "section-4-accordion-item-body-wrapper"
    );
    accordionItem.appendChild(accordionItemBodyWrapper);

    let accordionItemBody = document.createElement("div");
    accordionItemBody.classList.add("section-4-accordion-item-body");
    accordionItemBody.innerHTML = item.content;
    accordionItemBodyWrapper.appendChild(accordionItemBody);
  });
}

startAccordion();
