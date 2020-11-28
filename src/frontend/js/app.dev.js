// JavaScript by Aditya (twitter.com/TheCodingGuru) and PineappleRind (https://pineapplerind.github.io), 2020

"use strict";
var t = document.getElementById("menuOpen"),
    r = document.getElementById("navShade"),
    s = {
        n: document.querySelector(".nav-toggle"),
        l: function(e) {
            e.preventDefault(), this.n.classList.toggle("expanded")
        }
    };

function openNav() {
    "300px" === t.style.marginRight ? (t.style.marginRight = "0px", r.style.left = "100%") : (t.style.marginRight = "300px", setTimeout(function() {
        r.style.left = "calc(100% - 400px)"
    }, 300))
}
t.addEventListener("click", function(e) {
    openNav(), s.l(e)
});

console.log("JavaScript by Aditya (twitter.com/TheCodingGuru) and PineappleRind (https://pineapplerind.github.io), 2020")