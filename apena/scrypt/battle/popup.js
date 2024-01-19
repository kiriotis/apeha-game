export function popUPRender(otvet) {
  let popUP_container = document.createElement("div");
  popUP_container.classList.add("popUP_container_win");
  let popUP = document.createElement("div");
  popUP.classList.add("popUP_main_win");
  popUP_container.appendChild(popUP);
  document.querySelector("body").prepend(popUP_container);

  let popUP_bool = document.createElement("div");
  popUP_bool.classList.add("popUP_otvet_win");
  popUP_bool.innerHTML = "Вы победили " + otvet;
  popUP.appendChild(popUP_bool);



  let popUP_btn = document.createElement("div");
  popUP_btn.classList.add("popUP_btn_win");
  popUP_btn.innerHTML = "Еще раз?";
  popUP_btn.addEventListener("click", () => {location.reload();})
  popUP.appendChild(popUP_btn);
}
