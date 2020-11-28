"use strict";

var menuOpen = document.getElementById("menuOpen");
var navGrad = document.getElementById("navShade");

function openNav() {
  var e = document.getElementById("menuImg");
  "300px" === menuOpen.style.marginRight ? (menuOpen.style.marginRight = "0px", e.style.animationName = "scale-out", e.style.height = "40px", e.style.width = "40px", navGrad.style.left = "100%", setTimeout(function () {
    e.src = "imgs/hamburgermenu.png", e.style.animationName = "scale-in";
  }, 300)) : (menuOpen.style.marginRight = "300px", e.style.animationName = "scale-out", setTimeout(function () {
    e.src = "imgs/close.png", e.style.animationName = "scale-in", navGrad.style.left = "calc(100% - 400px)", e.style.height = "55px", e.style.width = "55px";
  }, 300));
}

menuOpen.addEventListener("click", function () {
  openNav();
});