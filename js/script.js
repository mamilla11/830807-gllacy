var feedback_open_link  = document.querySelector(".feedback__button--open");
var feedback_close_link = document.querySelector(".feedback__button--close");
var feedback_modal      = document.querySelector(".feedback__modal");
var overlay             = document.querySelector(".overlay");

feedback_open_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback_modal.classList.add("modal-show");
    overlay.classList.add("overlay-show");
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
