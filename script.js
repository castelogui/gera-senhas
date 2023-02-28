const numeral = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const alfabetico = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const especiais = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "¨",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "[",
  "]",
  "/",
  "?",
  ";",
  ":",
  ",",
  "|",
];

const listSenhas = document.querySelector(".list-senhas");
const mensagem = document.querySelector(".mensagem");
const qtd = document.querySelector("#qtd");
const inputNumeral = document.querySelector("#numeral");
const inputAlfabetico = document.querySelector("#alfabetico");
const inputUpper = document.querySelector("#maiusculas");
const inputEspeciais = document.querySelector("#especiais");
const deleteSenha = document.querySelector(".delete-senha");
const uppercase = [];
alfabetico.forEach((e) => uppercase.push(e.toUpperCase()));
var caracteres = [];
const senhas = [];

function criaElemento(senha) {
  const newSenha = document.createElement("div");
  const remover = document.createElement("button");
  const senhaFormatada = document.createTextNode(senha.join(""));
  remover.classList.add("delete", "delete-senha");
  newSenha.classList.add("notification", "is-link");
  newSenha.appendChild(senhaFormatada);
  newSenha.appendChild(remover);
  return newSenha;
}

function alteraCheckBox(input) {
  if (input.value == "false") {
    input.value = "true";
    concatCaracteres(input);
  } else {
    input.value = "false";
    removeCaracteres(input);
  }
}

function concatCaracteres(input) {
  if (input.id == "numeral") {
    caracteres = caracteres.concat(numeral);
  }
  if (input.id == "alfabetico") {
    caracteres = caracteres.concat(alfabetico);
  }
  if (input.id == "especiais") {
    caracteres = caracteres.concat(especiais);
  }
  if (input.id == "maiusculas") {
    caracteres = caracteres.concat(uppercase);
  }
}

function removeLista(listaCompleta, lista) {
  lista.forEach((item) => {
    let indice = listaCompleta.indexOf(item);
    while (indice >= 0) {
      listaCompleta.splice(indice, 1);
      indice = listaCompleta.indexOf(item);
    }
  });
}

function removeCaracteres(input) {
  if (input.id == "numeral") {
    removeLista(caracteres, numeral);
  }
  if (input.id == "alfabetico") {
    removeLista(caracteres, alfabetico);
  }
  if (input.id == "especiais") {
    removeLista(caracteres, especiais);
  }
  if (input.id == "maiusculas") {
    removeLista(caracteres, uppercase);
  }
}

function geraMensagem() {
  if (qtd.value <= 0) {
    mensagem.parentElement.style.display = "flex";
    mensagem.textContent = "A quantidade não pode ser igual ou menor que zero";
    return false;
  }
  if (caracteres.length == 0) {
    mensagem.parentElement.style.display = "flex";
    mensagem.textContent = "Selecione ao menos uma opção";
  } else {
    mensagem.textContent = "";
    mensagem.parentElement.style.display = "none";
    return true;
  }
}

function listaSenhas() {
  senhas.forEach((senha) => {
    listSenhas.appendChild(senha);
  });
}

function removeSenha(senha) {
  senha.parentNode.removeChild(senha);
}


function limparSenhas() {
  senhas.forEach((senha) => removeSenha(senha));
  senhas.length = 0;
}

function gerarSenha() {
  const senha = [];
  if (geraMensagem()) {
    for (var i = 0; i < qtd.value; i++) {
      var sorteio = Math.floor(Math.random() * caracteres.length);
      senha.push(caracteres[sorteio]);
    }
    senhas.push(criaElemento(senha));
    listaSenhas();
  }
}