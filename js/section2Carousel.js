let section2CarouselItems = [
  {
    img: "assets/bg-1.png",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "assets/bg-2.png",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "assets/bg-3.png",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "assets/bg-3.png",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "assets/bg-1.png",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "assets/bg-2.png",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "assets/bg-2.png",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "assets/bg-3.png",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    img: "assets/bg-1.png",
    title: "LOREM IPSUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

let currentPage = 1;
const cardsPerPage = 3;
const lastPage = Math.ceil(section2CarouselItems.length / cardsPerPage);

function nextSection2CarouselPage() {
  updateSection2Carousel(currentPage + 1);
}

function previousSection2CarouselPage() {
  updateSection2Carousel(currentPage - 1);
}

function updateSection2Carousel(page) {
  if (page > lastPage) {
    page = 1;
  } else if (page < 1) {
    page = lastPage;
  }
  currentPage = page;

  let carouselContainer = document.querySelector(
    ".section-2-carousel-container"
  );

  carouselContainer.scrollLeft =
    (carouselContainer.scrollWidth * (currentPage - 1)) / lastPage;
}

function startSection2Carousel() {
  let carouselContainer = document.querySelector(
    ".section-2-carousel-container"
  );

  let carouselPages = [];
  for (let i = 0; i < section2CarouselItems.length; i += cardsPerPage) {
    carouselPages.push(section2CarouselItems.slice(i, i + cardsPerPage));
  }

  carouselPages.forEach((cardPage) => {
    let carouselPage = document.createElement("div");
    carouselPage.classList.add("section-2-carousel-page");

    cardPage.forEach((carouselItem) => {
      let card = document.createElement("div");
      card.classList.add("section-2-carousel-card");

      let cardImg = document.createElement("img");
      cardImg.classList.add("section-2-carousel-card-img");
      cardImg.src = carouselItem.img;
      card.appendChild(cardImg);

      let cardTitle = document.createElement("p");
      cardTitle.classList.add("section-2-carousel-card-title");
      cardTitle.textContent = carouselItem.title;
      card.appendChild(cardTitle);

      let cardDescription = document.createElement("p");
      cardDescription.classList.add("section-2-carousel-card-description");
      cardDescription.textContent = carouselItem.description;
      card.appendChild(cardDescription);

      carouselPage.appendChild(card);
    });

    carouselContainer.appendChild(carouselPage);
  });

  updateSection2Carousel(currentPage);
}

startSection2Carousel();
