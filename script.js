const header = document.createElement('header');
const main = document.createElement('main');
const section = document.createElement('section');
const textarea = document.createElement('textarea');
const divKeyboard = document.createElement('div');
const h1 = document.createElement('h1');
const footer = document.createElement('footer');

h1.innerText = 'Virtual Keyboard';
h1.className = 'title';

section.className = 'section';
textarea.className = 'textarea';
divKeyboard.className = 'keyboard';

footer.className = 'footer';
footer.innerText = 'This keyboard is created on the macOS operating system.\nTo change the language, use the key combination: Command + Space';

const body = document.querySelector('body');

body.append(header);
body.append(main);
body.append(footer);
main.append(section);
header.append(h1);
section.append(textarea);
section.append(divKeyboard);

const keyboard = document.querySelector('.keyboard');

function getKeyboardRows(rowsCount) {
  const keyboardRowsArr = [];
  for (let i = 1; i <= rowsCount; i += 1) {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard__row';
    keyboardRowsArr.push(keyboardRow);
  }
  return keyboardRowsArr;
}

function getKeyboardKeys(keyCount) {
  const keyboardKeysArr = [];
  for (let i = 1; i <= keyCount; i += 1) {
    const keyboardKey = document.createElement('div');
    keyboardKey.className = 'keyboard__key';
    keyboardKeysArr.push(keyboardKey);
  }
  return keyboardKeysArr;
}

keyboard.append(...getKeyboardRows(5));

const keyboardRow = document.querySelectorAll('.keyboard__row');

keyboardRow[0].append(...getKeyboardKeys(15));
keyboardRow[1].append(...getKeyboardKeys(14));
keyboardRow[2].append(...getKeyboardKeys(14));
keyboardRow[3].append(...getKeyboardKeys(14));
keyboardRow[4].append(...getKeyboardKeys(10));
