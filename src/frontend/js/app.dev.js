// JavaScript by Aditya (twitter.com/TheCodingGuru) and PineappleRind (https://pineapplerind.github.io), 2020

"use strict";
var t = document.getElementById("menuOpen"),
    r = document.getElementById("navShade"),
    c = document.getElementById("blurOverlay"),
    s = {
        n: document.querySelector(".nav-toggle"),
        l: function(e) {
            e.preventDefault(), this.n.classList.toggle("expanded")
        }
    };


function openNav() {
   if (r.style.left === "calc(100% - 300px)") {
       r.style.left = "100%";
       setTimeout(function(){c.style.display = 'none';
   },500);
       c.style.opacity = '0';
   } else {
       r.style.left = "calc(100% - 300px)";
       c.style.display = 'block';
       setTimeout(function(){c.style.opacity = '1';
    },5);
   }
}
t.addEventListener("click", function(e) {
    openNav();
    s.l(e);
});

console.log("JavaScript by Aditya (twitter.com/TheCodingGuru) and PineappleRind (https://pineapplerind.github.io), 2020")