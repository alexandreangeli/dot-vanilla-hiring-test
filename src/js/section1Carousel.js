let section1CarouselItems = ["img/bg-1.png", "img/bg-2.png", "img/bg-3.png"];

function updateSection1Carousel(bgIndex) {
  let activeButton = document.querySelector(
    ".section-1-carousel-button-active"
  );
  if (!!activeButton) {
    activeButton.classList.remove("section-1-carousel-button-active");
  }

  let carouselButtons = document.querySelectorAll(".section-1-carousel-button");
  carouselButtons[bgIndex].classList.add("section-1-carousel-button-active");

  let carouselContainer = document.querySelector(
    ".section-1-carousel-container"
  );

  carouselContainer.scrollLeft =
    (carouselContainer.scrollWidth * bgIndex) / section1CarouselItems.length;
}

function startSection1Carousel() {
  let carouselContainer = document.querySelector(
    ".section-1-carousel-container"
  );
  let carouselSlider = document.querySelector(".section-1-carousel-slider");

  section1CarouselItems.forEach((bgPath, i) => {
    let carouselButtonCircle = document.createElement("div");
    carouselButtonCircle.classList.add("section-1-carousel-button-circle");

    let carouselButton = document.createElement("div");
    carouselButton.classList.add("section-1-carousel-button");
    carouselButton.appendChild(carouselButtonCircle);
    carouselButton.onclick = () => updateSection1Carousel(i);
    carouselSlider.appendChild(carouselButton);

    let carouselImg = document.createElement("img");
    carouselImg.classList.add("section-1-carousel-img");
    carouselImg.src = bgPath;
    carouselContainer.appendChild(carouselImg);
  });

  updateSection1Carousel(0);
}

startSection1Carousel();
