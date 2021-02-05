let accordionItems = [
  {
    title: "Lorem ipsum",
    content: `<div>teste</div>`,
  },
];

function updateAccordion(bgIndex) {}

function startAccordion() {
  let accordion = document.querySelector(".accordion");

  accordionItems.forEach((_, i) => {
    let accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    let accordionItemHeader = document.createElement("div");
    accordionItemHeader.classList.add("accordion-item-header");
    accordionItem.classList.add(accordionItemHeader);

    accordion.appendChild(accordionItem);
  });
}

startAccordion();
