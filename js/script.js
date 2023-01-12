const texto = document.querySelector(".txt");

const cripto = document.querySelector(".btn_cripto");
const descripto = document.querySelector(".btn_descripto");
const bt_cripto = document.querySelector(".bt-copiar");
const btn_reset = document.querySelector(".reset");

const conteudo = document.querySelector(".texto_cripto");
const texto_cripto = document.querySelector(".texto_cripto");
const caixa_h1 = document.querySelector(".caixa_h1");
const caixa_p = document.querySelector(".caixa_p");

const chk = document.getElementById("chk");
const value = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-bs"
);

cripto.onclick = criptar;
descripto.onclick = descriptar;
bt_cripto.onclick = copiar;
btn_reset.onclick = resetar;
chk.onclick = drk_mode;

function criptar() {
  const cripto = f_criptar();
  conteudo.innerHTML = `${cripto}`;
  limpar();
}

function descriptar() {
  const txt = texto.value;

  const desc = f_descripto();
  conteudo.innerHTML = `${desc}`;
  limpar();
}

function copiar() {
  navigator.clipboard.writeText(texto_cripto.value);
  conteudo.innerHTML = `${texto.value}`;
}

// Funções

function f_criptar() {
  const txt = texto.value;

  const cripto = txt
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return cripto;
}

function f_descripto() {
  const txt = texto.value;

  const desc = txt
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return desc;
}

function limpar() {
  bt_cripto.style.display = "block";
  texto_cripto.style.display = "block";
  caixa_h1.style.display = "none";
  caixa_p.style.display = "none";

  texto.value = "";
}

function resetar() {
  bt_cripto.style.display = "none";
  texto_cripto.style.display = "none";
  caixa_h1.style.display = "block";
  caixa_p.style.display = "block";
}

function drk_mode() {
  if (chk.checked) {
    document.documentElement.style.setProperty("--color-bs", "#5B5656");
    document.documentElement.style.setProperty("--color-principal", "#ffffff");
    document.documentElement.style.setProperty("--color-white", "#205CA5");
    document.documentElement.style.setProperty("--color-grey", " #BCD6EB");
    console.log(chk.checked);
  } else {
    document.documentElement.style.setProperty("--color-bs", "#e5e5e5");
    document.documentElement.style.setProperty("--color-principal", "#0a3871");
    document.documentElement.style.setProperty("--color-white", "#ffffff");
    document.documentElement.style.setProperty("--color-grey", " #495057");
    console.log(chk.checked);
  }
}
