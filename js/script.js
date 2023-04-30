import { allKeyValues, functionalKeyValues } from './keyboard-key-values.js';
import { generateKeyboardElements, addKeyboardKeyValues } from './keyboard-generate.js';
import { getCurrentState, changeLang, setKeyboardLang } from './change-lang.js';
import setKeyboardCase from './change-case.js';

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
textarea.setAttribute('autofocus', '');
keyboard.className = 'keyboard';

footer.className = 'footer';
footer.innerText = 'This keyboard is created on the macOS operating system.\nTo change the language, use the keys:\ncmd + space or ctrl + space';

const body = document.querySelector('body');

body.append(header);
body.append(main);
body.append(footer);
main.append(section);
header.append(h1);
section.append(textarea);
section.append(keyboard);

textarea.addEventListener('blur', () => {
  textarea.focus();
});

const keyboardRowClassName = 'keyboard__row';
const keyboardKeyClassName = 'keyboard__key';

const keyboardRowsArr = generateKeyboardElements(5, keyboardRowClassName);
const keyboardKeysArr = [];
keyboardKeysArr[0] = generateKeyboardElements(14, keyboardKeyClassName);
keyboardKeysArr[1] = generateKeyboardElements(14, keyboardKeyClassName);
keyboardKeysArr[2] = generateKeyboardElements(13, keyboardKeyClassName);
keyboardKeysArr[3] = generateKeyboardElements(13, keyboardKeyClassName);
keyboardKeysArr[4] = generateKeyboardElements(10, keyboardKeyClassName);

keyboard.append(...keyboardRowsArr);

for (let i = 0; i < keyboardRowsArr.length; i += 1) {
  keyboardRowsArr[i].append(...keyboardKeysArr[i]);
}

let isCmdPressed = false;
let isCtrlPressed = false;
let isShiftPressed = false;
let isCapsPressed = false;

addKeyboardKeyValues(keyboardKeysArr, allKeyValues);
const currentLang = getCurrentState().keyLang;
setKeyboardLang(currentLang);

const keyboardKeys = document.querySelectorAll(`.${keyboardKeyClassName}`);

keyboardKeys.forEach((key) => {
  key.addEventListener('mouseover', (event) => {
    event.currentTarget.classList.add('hover');
  });

  key.addEventListener('mouseout', (event) => {
    event.currentTarget.classList.remove('hover');
  });

  key.addEventListener('mousedown', (event) => {
    event.currentTarget.classList.add('pressed');

    const keyboardEvent = new KeyboardEvent('keydown', {
      code: event.currentTarget.classList[1],
      key: event.currentTarget.innerText,
    });
    body.dispatchEvent(keyboardEvent);
  });

  key.addEventListener('mouseup', (event) => {
    event.currentTarget.classList.remove('pressed');

    const keyboardEvent = new KeyboardEvent('keyup', {
      code: event.currentTarget.classList[1],
      key: event.currentTarget.innerText,
    });
    body.dispatchEvent(keyboardEvent);
  });
});

body.addEventListener('keydown', (event) => {
  event.preventDefault();
  document.querySelector(`.${event.code}`).classList.add('pressed');

  if (!functionalKeyValues.includes(event.code)) {
    const key = document.querySelector(`.${event.code}`).innerText;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = `${text.slice(0, start)}${key}${text.slice(end)}`;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
  }

  if (event.code === 'Enter') {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = `${text.slice(0, start)}\n${text.slice(end)}`;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
  }

  if (event.code === 'Tab') {
    const tab = '    ';
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = `${text.slice(0, start)}${tab}${text.slice(end)}`;
    textarea.selectionStart = start + 4;
    textarea.selectionEnd = start + 4;
  }

  if (event.code === 'Space' && !(isCtrlPressed || isCmdPressed)) {
    const space = ' ';
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = `${text.slice(0, start)}${space}${text.slice(end)}`;
    textarea.selectionStart = start + 4;
    textarea.selectionEnd = start + 4;
  }

  if (event.code === 'Backspace') {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    if (start === end) {
      textarea.value = `${text.slice(0, start - 1)}${text.slice(end)}`;
      textarea.selectionStart = start - 1;
      textarea.selectionEnd = start - 1;
    } else {
      textarea.value = `${text.slice(0, start)}${text.slice(end)}`;
      textarea.selectionStart = start;
      textarea.selectionEnd = start;
    }
  }

  if (event.code === 'MetaLeft' || event.code === 'MetaRight') {
    isCmdPressed = true;
  }

  if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    isCtrlPressed = true;
  }

  if ((isCmdPressed || isCtrlPressed) && event.code === 'Space') {
    changeLang();
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftPressed = true;
    if (isCapsPressed) {
      setKeyboardCase(!isShiftPressed);
    } else {
      setKeyboardCase(isShiftPressed);
    }
  }

  if (event.code === 'CapsLock') {
    if (isCapsPressed) {
      isCapsPressed = false;
      document.querySelector(`.${event.code}`).classList.remove('pressed');
      setKeyboardCase(isCapsPressed);
    } else {
      isCapsPressed = true;
      document.querySelector(`.${event.code}`).classList.add('pressed');
      setKeyboardCase(isCapsPressed);
    }
  }
});

body.addEventListener('keyup', (event) => {
  event.preventDefault();

  document.querySelector(`.${event.code}`).classList.remove('pressed');

  if (event.code === 'MetaLeft' || event.code === 'MetaRight') {
    isCmdPressed = false;
  }

  if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    isCtrlPressed = false;
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftPressed = false;
    if (isCapsPressed) {
      setKeyboardCase(isCapsPressed);
    } else {
      setKeyboardCase(isShiftPressed);
    }
  }
  if (event.code === 'CapsLock' && isCapsPressed) {
    document.querySelector(`.${event.code}`).classList.add('pressed');
  }
});
