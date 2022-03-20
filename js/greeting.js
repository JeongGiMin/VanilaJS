const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDEEN = "hidden";
const STORAGE_KEY = "username";

function userLogin(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDEEN);
  localStorage.setItem(STORAGE_KEY, username);
  greetingToUser(username);
}

function greetingToUser(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDEEN);
}

const savedUsername = localStorage.getItem(STORAGE_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDEEN);
  loginForm.addEventListener("submit", userLogin);
} else {
  greetingToUser(savedUsername);
}
