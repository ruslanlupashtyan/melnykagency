// REVIEWS
let reviewBlock = {
  1: "Даю гарантію 95% що цю агенцію чекає успіх",
  2: "Базару ноль. А тепер прикол - Антон-андон, АХАХАХАХАХ",
  3: "Я Марійка. Просто Марійка",
};

let reviewDisplay = document.querySelector(".review-display");

let circlesReviews = document.querySelectorAll("[data-review]");

console.log(reviewDisplay);
console.log(circlesReviews);

circlesReviews.forEach((el) => {
  el.addEventListener("click", function () {
    reviewDisplay.innerHTML = reviewBlock[el.getAttribute("data-review")];
  });
});

// ANIMATIONS

$(".services-button").on("click", function () {
  $(".services__items").fadeToggle(250);
  $(this).toggleClass("active");
});

$("#hamburger").on("click", function () {
  $(".header-mob").fadeToggle();
  $(".header-mob").toggleClass("active");
  $(this).toggleClass("active");
  $("body").toggleClass("hidden");
  if (window.scrollY < 70) {
    $(".header").toggleClass("red");
  }
});

$(window).on("scroll", function () {
  if (window.scrollY > 70) {
    $(".header").addClass("red");
  } else {
    $(".header").removeClass("red");
  }
});
