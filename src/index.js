import "jquery"
import "popper.js"
import "bootstrap"
import Typed from "typed.js"
import "./main.scss"
import "./toggler"
import "./scroll"
import sal from "sal.js"

 /* PRELOADER */
 $(window).on("load", function() {
      $("#status").fadeOut();
      $("#preloader").fadeOut();
})

/* PRELOADER  END*/

/* Typed.JS start */
var typed = new Typed(".type", {
    strings: [
        "stunning websites.", "flawless code." 
    ],
    typeSpeed:60,
    backSpeed:30,
    backDelay: 2000,
    loop:true,
  });
  /* Typed.JS end */


  

  /* SAL */

  sal({
    once:true,
  })
  /* SAL END */

 








