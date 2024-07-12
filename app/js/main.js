// REVIEWS
let reviewBlock = {
  1: "Даю гарантію 95% що цю агенцію чекає успіх",
  2: "Базару ноль. А тепер прикол - Антон-андон, АХАХАХАХАХ",
  3: "Я Марійка. Просто Марійка",
};

let reviewDisplay = document.querySelector(".review-display");

let circlesReviews = document.querySelectorAll("[data-review]");

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

$("[data-animate]").on("click", function () {
  anchorScroll($(this).attr("data-animate"));
});
const anchorScroll = (uri) => {
  let target = $(`[data-block="${uri}"]`);
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(target).offset().top - ($("header").height() + 20),
    },
    1000
  );
};

$('input[name="phone"]').mask("+38(099)999-99-99", { placeholder: "_" });

const TOKEN = "7428004245:AAHSqUu8uLti_f-wHagALDiGWPnE5XN21VU";
const CHAT_ID = "-1002151349939";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

$(".footer-btn").on("click", function (e) {
  let message = `<b>ПОВІДОМЛЕННЯ:</b>\n`;
  e.preventDefault();
  let phone = document.querySelector('input[name="phone"]').value;
  let name = document.querySelector('input[name="name"]').value;
  let comment = document.querySelector("textarea").value;
  let tgChckbx = document.querySelector("#tg-chckbx");
  if (name !== "") {
    message += `Ім'я:  ${name} \n`;
  }

  if (phone.length == 17) {
    message += `Номер:  ${phone} \n`;
  }
  if (comment !== "") {
    message += `Повідомлення: ${comment} \n`;
  }

  if (tgChckbx.checked) {
    message += "Напишіт мені в телеграм";
  }

  if (phone.length == 17 && name !== "") {
    $.ajax(URI_API, {
      type: "POST",
      dataType: "JSON",
      data: {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      },
      success: (ret) => {
        if (ret.ok) {
          document.querySelector('input[name="name"]').classList.remove("err");
          document.querySelector('input[name="phone"]').classList.remove("err");
          document.querySelectorAll(".input__item p").forEach((el) => {
            el.classList.remove("err");
          });
          document.querySelector(".success").classList.add("err");
          document.querySelector(".footer-btn").classList.add("success");
          document.querySelector(".tg-chckbx").classList.add("success");
        }
      },
    });
  } else {
    document.querySelector('input[name="name"]').classList.add("err");
    document.querySelector('input[name="phone"]').classList.add("err");
    document.querySelectorAll(".input__item p").forEach((el) => {
      el.classList.add("err");
    });
  }
});
