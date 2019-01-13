var link = document.querySelector(".btn-search-modal");
var popup = document.querySelector(".modal-search-hotels");

var form = document.querySelector(".search-hotels-form");
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

form.addEventListener("submit", function(evt) {
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
