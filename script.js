const body = document.querySelector('body');

const header = document.createElement('header');
const main = document.createElement('main');
const section = document.createElement('section');
const textarea = document.createElement('textarea');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const footer = document.createElement('footer');

body.append(header);
body.append(main);
body.append(footer);
main.append(section);
header.append(h1);
section.append(textarea);
section.append(div);

h1.innerText = 'Virtual Keyboard';
h1.className = 'title';

section.className = 'section';
textarea.className = 'textarea';
div.className = 'keyboard';

footer.className = 'footer';
footer.innerText = 'This keyboard is created on macOS operating system.\nTo change the language, use the key combination: Command + Space';
