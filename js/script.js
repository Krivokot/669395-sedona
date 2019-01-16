document.getElementById('modal-search').classList.add("modal-close");

var link = document.querySelector(".btn-search-modal");
var popup = document.querySelector(".modal-search-hotels");

var submit = document.querySelector(".search-button");
var datein = document.querySelector("[name=date-in]");
var dateout = document.querySelector("[name=date-out]");
var childrens = document.querySelector("[name=childrens]");
var peoples = document.querySelector("[name=peoples]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  datein.focus();
  popup.classList.remove("modal-error");
});

submit.addEventListener("click", function(evt) {
    if (!datein.value || !dateout.value || !childrens.value || !peoples.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
