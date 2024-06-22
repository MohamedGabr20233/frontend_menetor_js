//*Calling elements

let btn = document.getElementById("btn");
d_social = document.querySelector(".social");
d_social_text = document.querySelector(".social-text");
//gobal variables


btn.addEventListener("focus", function () {
    let x = window.innerWidth;
    if (x > 931) {
         d_social.classList.add("showW");
    }
    else {
         d_social.classList.add("showP");
    }   
});
btn.addEventListener("focusout", function () {
    let x = window.innerWidth;
    if (x > 900) {
      d_social.classList.remove("showW");
      d_social.classList.add("hiddenW");

      setTimeout(hide, 500);
    }
    else {
       d_social.classList.remove("showP");
       d_social.classList.add("hiddenP");

       setTimeout(hide, 500);
    }
    
});

function hide() {  
        d_social.classList.remove("hiddenW");   
        d_social.classList.remove("hiddenP");
    
}
