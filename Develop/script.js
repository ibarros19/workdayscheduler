window.onload = function(){
  colorCode();
  nine();
  ten();
  eleven();
  twelve();
  one();
  two();
  three();
  four();
  five();
 }

// Day and time display

var today = moment().format("dddd LL");
$("#today").append(today);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// Time blocks with colors

var now = new Date().getHours();

function colorCode() {
  if (now > 9) {
    $("#at9am").addClass("past");
  } else if (now >= 9 && now < 10) {
    $("#at9am").addClass("present");
  } else if (now < 9) {
    $("#at9am").addClass("future");
  }
  if (now > 10) {
    $("#at10am").addClass("past");
  } else if (now >= 10 && now < 11) {
    $("#at10am").addClass("present");
  } else if (now < 10) {
    $("#at10am").addClass("future");
  }
  if (now > 11) {
    $("#at11am").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#at11am").addClass("present");
  } else if (now < 11) {
    $("#at11am").addClass("future");
  }
  if (now > 12) {
    $("#at12pm").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#at12pm").addClass("present");
  } else if (now < 12) {
    $("#at12pm").addClass("future");
  }
  if (now > 13) {
    $("#at1pm").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#at1pm").addClass("present");
  } else if (now < 13) {
    $("#at1pm").addClass("future");
  }
  if (now > 14) {
    $("#at2pm").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#at2pm").addClass("present");
  } else if (now < 14) {
    $("#at2pm").addClass("future");
  }
  if (now > 15) {
    $("#at3pm").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#at3pm").addClass("present");
  } else if (now < 15) {
    $("#at3pm").addClass("future");
  }
  if (now > 16) {
    $("#at4pm").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#at4pm").addClass("present");
  } else if (now < 16) {
    $("#at4pm").addClass("future");
  }
  if (now > 17) {
    $("#at5pm").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#at5pm").addClass("present");
  } else if (now < 17) {
    $("#at5pm").addClass("future");
  }
}


// Enter the desired event, store and keep after refreshing the page.

function nine() {
  var textOne = document.querySelector("#at9am");
  var output_div = document.querySelector("#at9am");
  var save_button = document.querySelector("#button9am");

  save_button.addEventListener("click", updateOutput);

  output_div.textContent = localStorage.getItem("content");
  textOne.value = localStorage.getItem("content");

  function updateOutput() {
    localStorage.setItem("content", textOne.value);

    output_div.textContent = textOne.value;
  }
}



function ten() {
  var textTwo = document.querySelector("#at10am");
  var output_div2 = document.querySelector("#at10am");
  var save_button2 = document.querySelector("#button10am");

  save_button2.addEventListener("click", updateOutput2);

  output_div2.textContent = localStorage.getItem("content2");
  textTwo.value = localStorage.getItem("content2");

  function updateOutput2() {
    localStorage.setItem("content2", textTwo.value);

    output_div2.textContent = textTwo.value;
  }
}


function eleven() {
  var textThree = document.querySelector("#at11am");
  var output_div3 = document.querySelector("#at11am");
  var save_button3 = document.querySelector("#button11am");

  save_button3.addEventListener("click", updateOutput3);

  output_div3.textContent = localStorage.getItem("content3");
  textThree.value = localStorage.getItem("content3");

  function updateOutput3() {
    localStorage.setItem("content3", textThree.value);

    output_div3.textContent = textThree.value;
  }
}


function twelve() {
  var textFour = document.querySelector("#at12pm");
  var output_div4 = document.querySelector("#at12pm");
  var save_button4 = document.querySelector("#button12pm");

  save_button4.addEventListener("click", updateOutput4);

  output_div4.textContent = localStorage.getItem("content4");
  textFour.value = localStorage.getItem("content4");

  function updateOutput4() {
    localStorage.setItem("content4", textFour.value);

    output_div4.textContent = textFour.value;
  }
}


function one() {
  var textFive = document.querySelector("#at1pm");
  var output_div5 = document.querySelector("#at1pm");
  var save_button5 = document.querySelector("#button1pm");

  save_button5.addEventListener("click", updateOutput5);

  output_div5.textContent = localStorage.getItem("content5");
  textFive.value = localStorage.getItem("content5");

  function updateOutput5() {
    localStorage.setItem("content5", textFive.value);

    output_div5.textContent = textFive.value;
  }
}


function two() {
  var textSix = document.querySelector("#at2pm");
  var output_div6 = document.querySelector("#at2pm");
  var save_button6 = document.querySelector("#button2pm");

  save_button6.addEventListener("click", updateOutput6);

  output_div6.textContent = localStorage.getItem("content6");
  textSix.value = localStorage.getItem("content6");

  function updateOutput6() {
    localStorage.setItem("content6", textSix.value);

    output_div6.textContent = textSix.value;
  }
}


function three() {
  var textSeven = document.querySelector("#at3pm");
  var output_div7 = document.querySelector("#at3pm");
  var save_button7 = document.querySelector("#button3pm");

  save_button7.addEventListener("click", updateOutput7);

  output_div7.textContent = localStorage.getItem("content7");
  textSeven.value = localStorage.getItem("content7");

  function updateOutput7() {
    localStorage.setItem("content7", textSeven.value);

    output_div7.textContent = textSeven.value;
  }
}


function four() {
  var textEight = document.querySelector("#at4pm");
  var output_div8 = document.querySelector("#at4pm");
  var save_button8 = document.querySelector("#button4pm");

  save_button8.addEventListener("click", updateOutput8);

  output_div8.textContent = localStorage.getItem("content8");
  textEight.value = localStorage.getItem("content8");

  function updateOutput8() {
    localStorage.setItem("content8", textEight.value);

    output_div8.textContent = textEight.value;
  }
}


function five() {
  var textNine = document.querySelector("#at5pm");
  var output_div9 = document.querySelector("#at5pm");
  var save_button9 = document.querySelector("#button5pm");

  save_button9.addEventListener("click", updateOutput9);

  output_div9.textContent = localStorage.getItem("content9");
  textNine.value = localStorage.getItem("content9");

  function updateOutput9() {
    localStorage.setItem("content9", textNine.value);

    output_div9.textContent = textNine.value;
  }
}