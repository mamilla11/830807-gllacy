var search_link         = document.querySelector(".user-action__item.search");
var search_input        = document.querySelector(".form__input--search");
var login_link          = document.querySelector(".user-action__item.auth");
var login_input         = document.querySelector("[name=login]");

search_link.addEventListener("mouseover", function(evt) {
  search_input.focus();
});

login_link.addEventListener("mouseover", function(evt) {
  login_input.focus();
});
