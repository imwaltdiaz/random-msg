const messages = [
  "oscar",
  "Ana",
  "Nicol",
  "Yesica",
  "Diego",
  "Laura",
  "Carol",
  "Paula"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}
module.exports = { randomMsg };
