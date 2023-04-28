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
footer.innerText = 'This keyboard is created on the macOS operating system.\nTo change the language, use the key combination: cmd + space';

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
keyboardKeysArr[4] = getKeyboardKeys(10);

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

      const engKey = document.createElement('span');
      const rusKey = document.createElement('span');

      engKey.classList.add('eng');
      rusKey.classList.add('rus');
      rusKey.classList.add('hidden');

      const caseDownEng = document.createElement('span');
      const caseUpEng = document.createElement('span');
      const shiftCapsEng = document.createElement('span');
      const capsEng = document.createElement('span');

      const caseDownRus = document.createElement('span');
      const caseUpRus = document.createElement('span');
      const shiftCapsRus = document.createElement('span');
      const capsRus = document.createElement('span');

      caseDownEng.classList.add('caseDown');
      caseUpEng.classList.add('caseUp');
      caseUpEng.classList.add('hidden');
      shiftCapsEng.classList.add('shiftCaps');
      shiftCapsEng.classList.add('hidden');
      capsEng.classList.add('caps');
      capsEng.classList.add('hidden');

      caseDownRus.classList.add('caseDown');
      caseUpRus.classList.add('caseUp');
      shiftCapsRus.classList.add('shiftCaps');
      capsRus.classList.add('caps');

      caseDownEng.innerText = keys[i][j].eng.caseDown;
      caseUpEng.innerText = keys[i][j].eng.caseUp;

      caseDownRus.innerText = keys[i][j].rus.caseDown;
      caseUpRus.innerText = keys[i][j].rus.caseUp;

      keyboardKeysArr[i][j].append(engKey);
      keyboardKeysArr[i][j].append(rusKey);

      engKey.append(caseDownEng);
      engKey.append(caseUpEng);

      rusKey.append(caseDownRus);
      rusKey.append(caseUpRus);
    }
  }
}

addKeyboardKeyValues();

const keyboardKeys = document.querySelectorAll('.keyboard__key');

keyboardKeys.forEach((key) => {
  key.addEventListener('mouseover', (e) => {
    e.currentTarget.classList.add('hover');
  });
  key.addEventListener('mouseout', (e) => {
    e.currentTarget.classList.remove('hover');
  });
  key.addEventListener('mousedown', (e) => {
    e.currentTarget.classList.add('pressed');
  });
  key.addEventListener('mouseup', (e) => {
    e.currentTarget.classList.remove('pressed');
  });
});
