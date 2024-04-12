const buttonSubscribe = document.getElementById("btnSubscribe");
const divNewslatter = document.getElementById("sectionNewsLetter");
const sectionSuccess = document.getElementById("sectionSuccess");
const btnDismiss = document.getElementById("btnDismiss");
const email_input = document.getElementById("email-input");
const errorEmailmsg = document.getElementById("errorEmail");
const articleActive = document.getElementById("articleActive");
buttonSubscribe.onclick = (e) => {
  e.preventDefault();
  let valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (valid.test(email_input.value)) {
    // divNewslatter.classList.add("toggleView");
    articleActive.classList.add("toggleView");
    sectionSuccess.style.transform = "translateX(0%)";
  } else {
    errorEmailmsg.style.opacity = "1";
    email_input.classList.remove("border-Dark-Slate-Grey/50");
    email_input.classList.add("border-Tomato");
    email_input.classList.add("text-Tomato");
    email_input.classList.add("bg-Tomato/50");
    errorEmailmsg.classList.remove("animate-shake");
    errorEmailmsg.offsetWidth;
    errorEmailmsg.classList.add("animate-shake");
  }
};

email_input.onfocus = () => {
  email_input.classList.remove("border-Tomato");
  email_input.classList.remove("text-Tomato");
  email_input.classList.remove("bg-Tomato/50");
  email_input.classList.add("border-Grey");
};

email_input.blur = () => {
  email_input.classList.add("border-Grey");
};

btnDismiss.onclick = () => {
  articleActive.classList.remove("toggleView");
  sectionSuccess.style.transform = "translateX(-100%)";
  articleActive.style.transform = "translateX(0%)";
  errorEmailmsg.style.opacity = "0";
  email_input.classList.remove("border-Tomato");
  email_input.classList.add("border-Dark-Slate-Grey/50");
  email_input.classList.remove("border-Tomato");
  email_input.classList.remove("text-Tomato");
  email_input.classList.remove("bg-Tomato/50");
  email_input.value = "";
};
