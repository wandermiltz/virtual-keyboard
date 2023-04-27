// eslint-disable-next-line import/extensions
import keys from './keyboard-keys.js';

const header = document.createElement('header');
const main = document.createElement('main');
const section = document.createElement('section');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const h1 = document.createElement('h1');
const footer = document.createElement('footer');

h1.innerText = 'Virtual Keyboard';
h1.className = 'title';

section.className = 'section';
textarea.className = 'textarea';
keyboard.className = 'keyboard';

footer.className = 'footer';
footer.innerText = 'This keyboard is created on the macOS operating system.\nTo change the language, use the key combination: Command + Space';

const body = document.querySelector('body');

body.append(header);
body.append(main);
body.append(footer);
main.append(section);
header.append(h1);
section.append(textarea);
section.append(keyboard);

function getKeyboardRows(rowsCount) {
  const keyboardRowsArr = [];
  for (let i = 0; i < rowsCount; i += 1) {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard__row';
    keyboardRowsArr.push(keyboardRow);
  }
  return keyboardRowsArr;
}

function getKeyboardKeys(keyCount) {
  const keyboardKeysArr = [];
  for (let i = 0; i < keyCount; i += 1) {
    const keyboardKey = document.createElement('div');
    keyboardKey.className = 'keyboard__key';
    keyboardKeysArr.push(keyboardKey);
  }
  return keyboardKeysArr;
}

const keyboardRowsArr = getKeyboardRows(5);
const keyboardKeysArr = [];
keyboardKeysArr[0] = getKeyboardKeys(14);
keyboardKeysArr[1] = getKeyboardKeys(14);
keyboardKeysArr[2] = getKeyboardKeys(13);
keyboardKeysArr[3] = getKeyboardKeys(13);
keyboardKeysArr[4] = getKeyboardKeys(9);

keyboard.append(...keyboardRowsArr);
keyboardRowsArr[0].append(...keyboardKeysArr[0]);
keyboardRowsArr[1].append(...keyboardKeysArr[1]);
keyboardRowsArr[2].append(...keyboardKeysArr[2]);
keyboardRowsArr[3].append(...keyboardKeysArr[3]);
keyboardRowsArr[4].append(...keyboardKeysArr[4]);

function addKeyboardKeyValues() {
  for (let i = 0; i < keyboardKeysArr.length; i += 1) {
    for (let j = 0; j < keyboardKeysArr[i].length; j += 1) {
      keyboardKeysArr[i][j].classList.add(keys[i][j].code);
      keyboardKeysArr[i][j].innerText = keys[i][j].eng.caseDown;
    }
  }
}

addKeyboardKeyValues();
