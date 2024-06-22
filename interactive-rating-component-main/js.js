//caling elements
let b_submit = document.getElementById("submit");
let s_state = document.querySelector(".state");
let s_thanx = document.querySelector(".Thank_you");
let d_selected = document.querySelector(".selected");
//golbal variable
var value;
let wrongValue;
//

function getvalue(id) {
  value = id;
}

b_submit.addEventListener("click", function (e) {
  wrongValue = document.querySelector(".container");
  if (value > 0) {
    
    s_state.classList.add("hidden");
    s_thanx.classList.remove("hidden");
    d_selected.innerHTML ="You selected  " + value +d_selected.innerHTML;

  } else {
    wrongValue.classList.add("wrong");
    setTimeout(reomveWrong, 1000);
  }

});

function reomveWrong() {
  wrongValue.classList.remove("wrong");
  console.log("d");
}

(function () {
  console.log("1");
})();


