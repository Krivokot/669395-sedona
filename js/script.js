var link = document.querySelector(".btn-search-modal");
var popup = document.querySelector(".modal-search-hotels")

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});
