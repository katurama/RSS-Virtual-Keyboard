const { body } = document;
const title = document.createElement('p');
const wraper = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const description = document.createElement('p');
const language = document.createElement('p');

title.classList.add('title');
title.innerHTML = 'RSS Virtual Keyboard';
body.append(title);

wraper.classList.add('wraper');
body.append(wraper);

textarea.classList.add('textarea');
wraper.append(textarea);
