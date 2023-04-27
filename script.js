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

const keyboardRows = getKeyboardRows(5);

keyboard.append(...keyboardRows);
keyboardRows[0].append(...getKeyboardKeys(15));
keyboardRows[1].append(...getKeyboardKeys(14));
keyboardRows[2].append(...getKeyboardKeys(14));
keyboardRows[3].append(...getKeyboardKeys(14));
keyboardRows[4].append(...getKeyboardKeys(10));
