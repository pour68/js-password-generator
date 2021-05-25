const passwordGeneratorBtn = document.querySelector("#password-generator");
const password = document.querySelector(".password");
const copyBtn = document.querySelector("#copy");
const alert = document.querySelector("#alert");

passwordGeneratorBtn.addEventListener("click", () => {
  password.value = passwordGenerator(10);
});

copyBtn.addEventListener("click", () => {
  password.select();
  password.setSelectionRange(0, 99999);
  document.execCommand("copy");
  password.value = "";
  password.blur();

  alert.style.transform = "translateX(0)";

  setTimeout(() => {
    alert.style.transform = "translateX(-100%)";
  }, 2000);
});

const passwordGenerator = (passwordLength) => {
  const lowercaseLetters = [
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
  const uppercaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specialCharacters = ["@", "$", "#", "%", "&"];

  const lettersCollection = [
    ...lowercaseLetters,
    ...uppercaseLetters,
    ...digits,
    ...specialCharacters,
  ];

  const generatedPasswordCollection = [];

  for (let i = 1; i <= passwordLength; i++) {
    let randomCharacter =
      lettersCollection[Math.floor(Math.random() * lettersCollection.length)];

    generatedPasswordCollection.push(randomCharacter);
  }

  return generatedPasswordCollection.join("");
};
