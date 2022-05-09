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

keyboard.classList.add('keyboard');
wraper.append(keyboard);

description.classList.add('description');
body.append(description);
description.innerText = 'Клавиатура создана в операционной системе Windows';

language.classList.add('language');
body.append(language);
language.innerText = 'Для переключения языка : левые Shift + Alt';
