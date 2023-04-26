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
footer.innerText = 'This keyboard is created on macOS operating system.\nTo change the language, use the key combination: Command + Space';

const body = document.querySelector('body');

body.append(header);
body.append(main);
body.append(footer);
main.append(section);
header.append(h1);
section.append(textarea);
section.append(divKeyboard);

const keyboard = document.querySelector('.keyboard');

function getKeyboardRows() {
  const fragment = new DocumentFragment();
  for (let i = 1; i <= 5; i += 1) {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard__row';
    fragment.append(keyboardRow);
  }
  return fragment;
}

keyboard.append(getKeyboardRows());
