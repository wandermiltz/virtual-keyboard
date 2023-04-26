const body = document.querySelector('body');

const header = document.createElement('header');
const main = document.createElement('main');
const section = document.createElement('section');
const textarea = document.createElement('textarea');
const div = document.createElement('div');
const h1 = document.createElement('h1');

body.append(header);
body.append(main);
main.append(section);
header.append(h1);
section.append(textarea);
section.append(div);

h1.innerText = 'Virtual Keyboard';
h1.className = 'title';
section.className = 'section';
textarea.className = 'textarea';
div.className = 'keyboard';
