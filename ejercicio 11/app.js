// Ejercicio 11

const url = 'data.json';

function getNumber(promptMessage, options = {}) {
  while (true) {
    const userInput = prompt(promptMessage);
    if (options?.allowedNullish && !userInput) return userInput;
    const castedInput = parseInt(userInput);
    if (!Number.isNaN(castedInput)) return castedInput;
    alert('Please enter a valid number.');
  }
}

function getOption({
  optionsArray,
  promptMessage,
  invalidMessage = 'Please enter a valid option.',
}) {
  const formattedListString = optionsArray
    .map((element, index) => `${index + 1}. ${element}`)
    .join('\n');

  while (true) {
    const option = getNumber(`${promptMessage}\n` + formattedListString);
    const isValidOption = option && option > 0 && option <= optionsArray.length;
    if (isValidOption) return optionsArray[option - 1];
    alert(invalidMessage);
  }
}

function getDate({ promptMessage, timeString }) {
  const dateFormat = 'yyyy-mm-dd';
  while (true) {
    const date = prompt(`${promptMessage} Format: ${dateFormat}`) + timeString;
    const isValidDate = !Number.isNaN(Date.parse(dateInput));
    if (isValidDate) return new Date(dateInput);
    alert('Please enter a valid date.');
  }
}

function idGenerator(initialId) {
  return function () {
    return initialId++;
  };
}
const generateId = idGenerator(1);
