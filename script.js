document.addEventListener("DOMContentLoaded", function () {
  const spans = document.querySelectorAll(".total");
  const resultado = document.querySelector(".total-somado");

  let soma = 0;

  spans.forEach(function (span) {
    const numero = Number(span.textContent.trim().replace(",", "."));

    if (!isNaN(numero)) {
      soma += numero;
    }
  });

  resultado.textContent = soma;
});