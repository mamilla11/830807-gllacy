var feedback_open_link  = document.querySelector(".feedback__button--open");
var feedback_close_link = document.querySelector(".feedback__button--close");
var feedback_modal      = document.querySelector(".feedback__modal");
var overlay             = document.querySelector(".overlay");
var feedback_name       = document.querySelector("[name=feedback-name]");
var search_link         = document.querySelector(".user-action__item.search");
var search_input        = document.querySelector(".form__input--search");
var login_link          = document.querySelector(".user-action__item.auth");
var login_input         = document.querySelector("[name=login]");


feedback_open_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback_modal.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  feedback_name.focus();
});

feedback_close_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback_modal.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback_modal.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

search_link.addEventListener("mouseover", function(evt) {
  search_input.focus();
});

login_link.addEventListener("mouseover", function(evt) {
  login_input.focus();
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (feedback_modal.classList.contains("modal-show")) {
      evt.preventDefault();
      feedback_modal.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});
