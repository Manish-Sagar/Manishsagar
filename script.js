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
  strings: [
    "Student",
    "Web Developer",
    "Digital  Marketer",
    "Social Media Handler",
  ],
  typespeed: 100,
  backspeed: 60,
  loop: 0,
});
var typed = new Typed(".typing-1", {
  strings: [
    "Student",
    "Web Developer",
    "Digital  Marketer",
    "Social Media Handler",
  ],
  typespeed: 50,
  backspeed: 50,
  loop: true,
  delay: 300,
});
