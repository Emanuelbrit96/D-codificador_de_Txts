const texto = document.querySelector(".txt");

const cripto = document.querySelector(".btn_cripto");
const descripto = document.querySelector(".btn_descripto");
const bt_cripto = document.querySelector(".bt-copiar");
const btn_reset = document.querySelector(".reset");

const conteudo = document.querySelector(".texto_cripto");
const texto_cripto = document.querySelector(".texto_cripto");
const caixa_h1 = document.querySelector(".caixa_h1");
const caixa_p = document.getElementById("p_txt");

const chk = document.getElementById("chk");
const rootElement = document.documentElement; // <- Pegando o elemento css :root do css

cripto.onclick = criptar;
descripto.onclick = descriptar;
bt_cripto.onclick = copiar;
btn_reset.onclick = reset;
window.onload = getThemeFromLocalStorage; //<- Ao dar load na pagina executar essa função

function criptar() {
  const cripto = f_criptar();
  conteudo.innerHTML = `${cripto}`;
  clear();
}

function descriptar() {
  const txt = texto.value;

  const desc = f_descripto();
  conteudo.innerHTML = `${desc}`;
  clear();
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

function clear() {
  bt_cripto.style.display = "block";
  texto_cripto.style.display = "block";
  caixa_h1.style.display = "none";
  caixa_p.style.display = "none";

  texto.value = "";
}

function reset() {
  bt_cripto.style.display = "none";
  texto_cripto.style.display = "none";
  caixa_h1.style.display = "block";
  caixa_p.style.display = "block";
}

// ---TRECHO DARK_THEME----

// Cores que iram alternar
const lightTheme = {
  "--color-bs": "#e5e5e5",
  "--color-principal": "#0a3871",
  "--color-white": "#ffffff",
  "--color-grey": " #495057",
};
const darkTheme = {
  "--color-bs": "#495057",
  "--color-principal": "#ffffff",
  "--color-white": "#0C53AA",
  "--color-grey": " #BCD6EB",
};

chk.addEventListener("change", function () {
  const isChecked = chk.checked;
  isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);
});

function changeTheme(theme) {
  // Para cada prop em theme, assim eu pego as chaves do meu objeto,
  // a partir dai e só pegar o objeto[prop] para conseguir o valor dele.
  // for (let prop in theme) {
  //   changeProperty(prop, theme[prop]);
  //   console.log(prop, theme[prop]);
  // }

  // Object.entries tranforma objeto em um array de arrays
  // [['prop', 'value'],[...,...],[...,...]...]
  console.log(Object.entries(theme));
  // desentruturação, para prop e value em Theme
  for (let [prop, value] of Object.entries(theme)) {
    changeProperty(prop, value);
    console.log(prop, value);
  }
  saveLocalStorage(theme);
}

function changeProperty(property, value) {
  // rootElement contém todo HTML, e usando o 'style' eu entro nos estilos
  // e assim eu o setProperty eu aponto a propriedade do css que quero mudar
  // e nela eu insiro o nome da propriedade que quero mudar e o valor tos em string.
  rootElement.style.setProperty(property, value);
}

// --- LocalStorage ---

function saveLocalStorage(theme) {
  // LocalStorage so recebe string por conta disso traformos em uma json
  localStorage.setItem("theme", JSON.stringify(theme));
}

function getThemeFromLocalStorage() {
  // Tranformando em Obj novamente
  const theme = JSON.parse(localStorage.getItem("theme"));

  // o retorno da função vai dizer se o botão vai esta checado ou não
  if (isThemeEqual(theme, darkTheme)) chk.checked = true;
  changeTheme(theme);
}

// Comparando o thema salvo no storage com o thema dark
// se estiver diferente a faz com que retorne falso.
function isThemeEqual(firstTheme, secondTheme) {
  for (let prop in firstTheme) {
    if (firstTheme[prop] != secondTheme[prop]) return false;
  }
  return true;
}
