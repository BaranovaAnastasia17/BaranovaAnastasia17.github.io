

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  function onClick() {
    alert("продолжить расчет");
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");

    if (isNaN(parseInt(f1[0].value)) || isNaN(parseInt(f2[0].value))) {

      r.innerHTML = "Ошибка NaN. Введено не число";

    }
    else r.innerHTML = parseInt(f1[0].value) * parseInt(f2[0].value);
  }
  let b = document.getElementById("button1");
  b.addEventListener("click", onClick);
});
