const first = document.querySelector(".first-input");
const second = document.querySelector(".second-input");
const third = document.querySelector(".third-input");
const forth = document.querySelector(".fourth-input");
const fifth = document.querySelector(".fifth-input");

function onSubmit() {
  if (
    first.value !== "" &&
    second.value !== "" &&
    third.value !== "" &&
    forth.value !== "" &&
    fifth.value !== "" &&
    fifth.value.length > 49
  ) {
    alert("Booking Successfull");
  }
}