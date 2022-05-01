/* Mavbar animation scroll */
let hideScroll = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (hideScroll > window.pageYOffset) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-110px";
  }

  hideScroll = currentScrollPos;
};
