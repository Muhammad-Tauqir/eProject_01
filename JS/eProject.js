document.querySelector("#show-login").addEventListener("click", function () {
      document.querySelector(".popup").classList.add("active");
  });
  document.querySelector(".popup .close-btn").addEventListener("click", function () {
      document.querySelector(".popup").classList.remove("active");
  });
  function SigInClass(element, classname) {
      element.classList.remove(classname);
  }

  document.getElementsByClassName("show-signup")[0].addEventListener("click", function () {
      let form = document.getElementsByClassName("form")[0];
      SigInClass(form, "signin");
      form.classList.add("signup");
      document.getElementById("submit-btn").innerText = "Sign Up"
  });

  document.getElementsByClassName("show-signin")[0].addEventListener("click", function () {
      let form = document.getElementsByClassName("form")[0];
      SigInClass(form, "signup");
      form.classList.add("signin");
      document.getElementById("submit-btn").innerText = "Sign In"
  });