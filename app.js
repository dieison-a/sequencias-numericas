const form = document.querySelector("#formulario");
form.addEventListener("submit",
e => {
  e.preventDefault();
  const limite = Number(document.querySelector("#limite").value);
  const area = document.querySelector("#resultado");
  if (!Number.isInteger(limite) || limite<1 || limite>150) {
    area.textContent = "Informe um inteiro entre 1 e 150.";
    return
  }
  const itens = [];
  for (let n = 1; n <= limite; n++) {
    const sinal = (n % 2?"Snap":"") + (n % 5 === 0?"Crackle":"");
    itens.push(sinal || String(n))
  }
  area.textContent = itens.join(" · ")
});
form.requestSubmit()



