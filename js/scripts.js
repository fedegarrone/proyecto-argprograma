document.getElementById("slid-2").addEventListener("click", function () {
  document.getElementById("educ-formal").style.opacity = 0;
  document.getElementById("slid-1").style.backgroundColor = "var(--azul-fondo)";
  document.getElementById("educ-informal").style.opacity = 1;
  document.getElementById("slid-1").style.backgroundColor = "var(--azul-fondo)";
  document.getElementById("slid-2").style.backgroundColor =
    "var(--azul-fuente)";
});

document.getElementById("slid-1").addEventListener("click", function () {
  document.getElementById("educ-informal").style.opacity = 0;
  document.getElementById("slid-2").style.backgroundColor = "var(--azul-fondo)";
  document.getElementById("educ-formal").style.opacity = 1;
  document.getElementById("slid-1").style.backgroundColor =
    "var(--azul-fuente)";
});
