$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(`.navbar`).addClass("sticky");
    } else {
      $(`.navbar`).removeClass("sticky");
    }
    if (this.scrollY > 100) {
      $(`.scroll-up-btn`).addClass("show");
    } else {
      $(`.scroll-up-btn`).removeClass("show");
    }
  });
  // slide up
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // toggle menu/bar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
var typed = new Typed(".typing", {
  strings: ["Student", "Developer", "Marketer"],
  typespeed: 50,
  backspeed: 50,
  loop: true,
  delay: 500,
});
var typed = new Typed(".typing-1", {
  strings: ["Student", "Developer", "Marketer"],
  typespeed: 50,
  backspeed: 50,
  loop: true,
  delay: 300,
});
