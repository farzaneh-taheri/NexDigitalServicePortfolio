 const marquee = document.getElementById("marquee");
  let speed = 0.5; 
  let translateX = 0;

  function animate() {
    translateX -= speed;
    marquee.style.transform = `translateX(${translateX}px)`;

    const firstCard = marquee.children[0];
    const firstCardWidth = firstCard.offsetWidth + 30; // 30 = gap

    if (Math.abs(translateX) >= firstCardWidth) {
      marquee.appendChild(firstCard);
      translateX += firstCardWidth; 
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(animate);
  });







const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');
const CARD_GAP = 20;
let isAnimating = false;
let currentDotIndex = 0; // ✅ شمارنده دات‌ها

function renderDots() {
  dotsContainer.innerHTML = "";
  const cards = Array.from(document.querySelectorAll('.service-card'));

  cards.forEach((card, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentDotIndex) dot.classList.add('active');

    dot.addEventListener('click', () => {
      moveCardToFront(card);
    });

    dotsContainer.appendChild(dot);
  });
}

function moveCardToFront(cardToMove) {
  if (isAnimating) return;
  isAnimating = true;

  const cards = Array.from(document.querySelectorAll('.service-card'));
  const originalIndex = cards.indexOf(cardToMove);
  if (originalIndex === 0) {
    isAnimating = false;
    return;
  }

  cards.forEach(c => c.classList.remove('active'));
  cardToMove.classList.add('active');

  const cardWidth = cardToMove.offsetWidth + CARD_GAP;
  const scrollDistance = cardWidth * originalIndex;

  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(-${scrollDistance}px)`;

  setTimeout(() => {
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';

    for (let i = 0; i < originalIndex; i++) {
      slider.appendChild(cards[i]);
    }

    // ✅ افزایش شمارنده دات‌ها به صورت چرخشی
    currentDotIndex = (currentDotIndex + 1) % cards.length;

    renderDots();
    isAnimating = false;
  }, 500);
}

function setup() {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach((card, i) => {
    card.dataset.id = i;
  });

  if (cards.length > 0) cards[0].classList.add('active');

  cards.forEach(card => {
    card.addEventListener('click', () => moveCardToFront(card));
  });

  renderDots();
}

window.addEventListener('load', setup);


















  const imageSets = {
    1: [
      "/assets/images/Rectangle 8.png",
      "/assets/images/Rectangle 9.png",
      "/assets/images/Rectangle 11.png",
      "/assets/images/Brochure_Mockup_1 copy.jpg",
      "/assets/images/LOGOE.jpg",
      "/assets/images/Rectangle 10.png",
      "/assets/images/Untitled-1WEB.jpg",
      "/assets/images/TEST LOGO1..jpg",
      "/assets/images/Untitled-1WEB2.jpg"
    ],
    2: [
      "/assets/images/set2-1.png",
      "/assets/images/set2-2.png",
      "/assets/images/set2-3.png",
      "/assets/images/set2-4.png",
      "/assets/images/set2-5.png",
      "/assets/images/set2-6.png",
      "/assets/images/set2-7.png",
      "/assets/images/set2-8.png",
      "/assets/images/set2-9.png"
    ],
    3: [
      "/assets/images/set3-1.png",
      "/assets/images/set3-2.png",
      "/assets/images/set3-3.png",
      "/assets/images/set3-4.png",
      "/assets/images/set3-5.png",
      "/assets/images/set3-6.png",
      "/assets/images/set3-7.png",
      "/assets/images/set3-8.png",
      "/assets/images/set3-9.png"
    ],
    4: [
      "/assets/images/set4-1.png",
      "/assets/images/set4-2.png",
      "/assets/images/set4-3.png",
      "/assets/images/set4-4.png",
      "/assets/images/set4-5.png",
      "/assets/images/set4-6.png",
      "/assets/images/set4-7.png",
      "/assets/images/set4-8.png",
      "/assets/images/set4-9.png"
    ]
  };

  const grid = document.querySelector(".grid");
  const sliderButtons = document.querySelectorAll(".slider-bar span");

  function updateImages(setNumber) {
    const newImages = imageSets[setNumber];
    if (!newImages) return;

    grid.innerHTML = "";
    newImages.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Portfolio Item";
      grid.appendChild(img);
    });
  }

sliderButtons.forEach((btn, index) => {
  btn.setAttribute("data-set", index + 1);
  btn.style.position = "relative";
  
  // مقدار z-index پایه (چپ به راست)
  btn.dataset.baseZ = (sliderButtons.length - index).toString(); // ذخیره مقدار اولیه
  btn.style.zIndex = btn.dataset.baseZ;

  btn.addEventListener("click", () => {
    // ریست: همه به z-index اولیه و حذف active
    sliderButtons.forEach(b => {
      b.classList.remove("active");
      b.style.zIndex = b.dataset.baseZ;
    });

    // فعال‌سازی span کلیک‌شده و دادن z-index بالا
    btn.classList.add("active");
    btn.style.zIndex = (sliderButtons.length + 10).toString(); // عدد بزرگ‌تر از همه

    const set = btn.getAttribute("data-set");
    updateImages(set);
  });
});






  // بارگذاری اولیه گالری
  updateImages(1);











































  document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".row");

    rows.forEach(row => {
      const left = row.querySelector(".row-left");
      const desc = row.querySelector(".description");
      const arrow = row.querySelector(".arrow");

      // کلیک روی چپ یا توضیحات
      [left, desc].forEach(el => {
        el.addEventListener("click", () => {
          // حذف active از همه
          rows.forEach(r => r.classList.remove("active"));
          // اضافه کردن به همینی که کلیک شد
          row.classList.add("active");

                          // اسکرول به بخش خاص
                document.querySelector("#target-section").scrollIntoView({
                    behavior: "smooth"
                });
        });
      });

      // کلیک روی فلش
      arrow.addEventListener("click", () => {
        // به بخشی از صفحه بریم (آیدی رو بعدا جایگزین کن)
        window.location.href = 'contact.html';
      });

    });
  });




































  function toggleMenu() {
    const nav = document.getElementById("mobileNav");
    nav.classList.toggle("show");
  }
