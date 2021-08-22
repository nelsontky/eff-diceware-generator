import wordList from "lib/word-list.json";

const NUMBER_OF_DICE = 5;

function getRandomIntInclusive(min: number, max: number) {
  const randomBuffer = new Uint32Array(1);

  window.crypto.getRandomValues(randomBuffer);

  const randomNumber = randomBuffer[0] / (0xffffffff + 1);
  return Math.floor(randomNumber * (max - min + 1)) + min + "";
}

function rollDices(dices: number) {
  return Array.from({ length: dices }, () => getRandomIntInclusive(1, 6)).join(
    ""
  );
}

export function genPassphrase(words: number) {
  return Array.from(
    { length: words },
    () => (wordList as any)[rollDices(NUMBER_OF_DICE)]
  ).join(" ");
}
