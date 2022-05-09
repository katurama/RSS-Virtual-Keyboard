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

const keyboardWraper = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114,
  116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104,
  106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

keyboard.insertAdjacentHTML('afterbegin', '<div class = "keyboard-row row5"></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class = "keyboard-row row4"></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class = "keyboard-row row3"></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class = "keyboard-row row2"></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class = "keyboard-row row1"></div>');

const keyboardRow1 = [];
for (let i = 0; i < 13; i += 1) {
  keyboardRow1.push(keyboardWraper[i]);
}
function initFirstRow() {
  let out = '';
  for (let i = 0; i < keyboardRow1.length; i += 1) {
    out += `<div class = "keyboard-key eng-key">${String.fromCharCode(keyboardRow1[i])}</div>`;
  }
  document.querySelector('.row1').innerHTML = out;
  document.querySelector('.row1').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys backspace" keyname = "Backspace">Backspace</div>');
}
initFirstRow();

const keyboardRow2 = [];
for (let i = 13; i < 26; i += 1) {
  keyboardRow2.push(keyboardWraper[i]);
}
function initSecondRow() {
  let out = '';
  for (let i = 0; i < keyboardRow2.length; i += 1) {
    out += `<div class = "keyboard-key eng-key">${String.fromCharCode(keyboardRow2[i])}</div>`;
  }
  document.querySelector('.row2').innerHTML = out;
  document.querySelector('.row2').insertAdjacentHTML('afterbegin', '<div class = "keyboard-key  dop-keys tab" keyname = "Tab">Tab</div>');
  document.querySelector('.row2').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys del" keyname = "Del">Del</div>');
}
initSecondRow();

const keyboardRow3 = [];
for (let i = 26; i < 37; i += 1) {
  keyboardRow3.push(keyboardWraper[i]);
}
function initThirdRow() {
  let out = '';
  for (let i = 0; i < keyboardRow3.length; i += 1) {
    out += `<div class = "keyboard-key eng-key">${String.fromCharCode(keyboardRow3[i])}</div>`;
  }
  document.querySelector('.row3').innerHTML = out;
  document.querySelector('.row3').insertAdjacentHTML('afterbegin', '<div class = "keyboard-key dop-keys capsLock" keyname = "CapsLock">CapsLock</div>');
  document.querySelector('.row3').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys enter" keyname = "Enter">Enter</div>');
}
initThirdRow();

const keyboardRow4 = [];
for (let i = 37; i < 47; i += 1) {
  keyboardRow4.push(keyboardWraper[i]);
}
function initFourthRow() {
  let out = '';
  for (let i = 0; i < keyboardRow4.length; i += 1) {
    out += `<div class = "keyboard-key eng-key">${String.fromCharCode(keyboardRow4[i])}</div>`;
  }
  document.querySelector('.row4').innerHTML = out;
  document.querySelector('.row4').insertAdjacentHTML('afterbegin', '<div class = "keyboard-key dop-keys shift shiftLeft" keyname = "ShiftLeft">Shift</div>');
  document.querySelector('.row4').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys arrow" keyname = "ArrowUp" >&#9651</div>');
  document.querySelector('.row4').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys shift shiftRight" keyname = "ShiftRight">Shift</div>');
}
initFourthRow();

document.querySelector('.row5').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys ctrl" keyname = "ControlLeft">Ctrl</div>');

document.querySelector('.row5').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys win" keyname = "MetaLeft">Win</div>');

document.querySelector('.row5').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys alt" keyname = "AltLeft">Alt</div>');

document.querySelector('.row5').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys space" keyname = "Space"></div>');

document.querySelector('.row5').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys alt" keyname = "AltRight">Alt</div>');

document.querySelector('.row5').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys arrow" keyname = "ArrowLeft">&#9665</div>');
document.querySelector('.row5').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys arrow" keyname = "ArrowDown">&#9661</div>');
document.querySelector('.row5').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys arrow" keyname = "ArrowRight">&#9655</div>');

document.querySelector('.row5').insertAdjacentHTML('beforeend', '<div class = "keyboard-key dop-keys ctrl" keyname = "ControlRight">Ctrl</div>');

const keys = document.querySelectorAll('.eng-key');
const dopKeys = document.querySelectorAll('.dop-keys');

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('keyname', keys[i].innerText);
}
document.addEventListener('keydown', (event) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (event.key === keys[i].getAttribute('keyname')) {
      keys[i].classList.add('active');
    }
  }
  for (let i = 0; i < dopKeys.length; i += 1) {
    if (event.code === dopKeys[i].getAttribute('keyname')) {
      dopKeys[i].classList.add('active');
    }
  }
});
textarea.focus();
document.addEventListener('keyup', (event) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (event.key === keys[i].getAttribute('keyname')) {
      keys[i].classList.remove('active');
    }
    textarea.focus();
  }
  for (let i = 0; i < dopKeys.length; i += 1) {
    if (event.code === dopKeys[i].getAttribute('keyname')) {
      dopKeys[i].classList.remove('active');
    }
  }
});
keys.forEach((elem) => {
  elem.addEventListener('mouseover', () => {
    elem.classList.add('hover');
  });
  elem.addEventListener('mouseout', () => {
    elem.classList.remove('hover');
  });
  elem.addEventListener('click', () => {
    elem.classList.add('active');
    textarea.value += elem.innerText;
    setTimeout(
      () => {
        elem.classList.remove('active');
      },
      500,
    );
  });
});
dopKeys.forEach((elem) => {
  elem.addEventListener('mouseover', () => {
    elem.classList.add('hover');
  });
  elem.addEventListener('mouseout', () => {
    elem.classList.remove('hover');
  });
  elem.addEventListener('click', () => {
    elem.classList.add('active');
  });
});

document.querySelector('.backspace').addEventListener('click', () => {
  let backspaceText = [];
  backspaceText = textarea.value.split('');
  backspaceText.splice(-1, 1);
  textarea.value = backspaceText.join('');
  setTimeout(
    () => {
      document.querySelector('.backspace').classList.remove('active');
    },
    500,
  );
});

document.querySelector('.enter').addEventListener('click', () => {
  textarea.value = `${textarea.value}\n`;
  setTimeout(
    () => {
      document.querySelector('.enter').classList.remove('active');
    },
    500,
  );
});

document.querySelector('.tab').addEventListener('click', () => {
  textarea.value = `${textarea.value}\u00A0`;
  setTimeout(
    () => {
      document.querySelector('.tab').classList.remove('active');
    },
    500,
  );
});

document.querySelectorAll('.arrow').forEach((elem) => {
  elem.addEventListener('click', () => {
    textarea.value += elem.innerText;
    setTimeout(
      () => {
        elem.classList.remove('active');
      },
      500,
    );
  });
});

document.querySelector('.space').addEventListener('click', () => {
  textarea.value = `${textarea.value}\u00A0`;
  setTimeout(
    () => {
      document.querySelector('.space').classList.remove('active');
    },
    500,
  );
});

document.querySelector('.capsLock').addEventListener('click', () => {
  keys.forEach((elem) => {
    if (elem.classList.contains('upperCase')) {
      elem.classList.remove('upperCase');
      document.querySelector('.capsLock').classList.remove('active');
    } else {
      elem.classList.add('upperCase');
      document.querySelector('.capsLock').classList.add('active');
    }
  });
});

document.querySelector('.shiftLeft').addEventListener('click', () => {
  keys.forEach((elem) => {
    if (elem.classList.contains('upperCase')) {
      elem.classList.remove('upperCase');
      document.querySelector('.shiftLeft').classList.remove('active');
    } else {
      elem.classList.add('upperCase');
      document.querySelector('.shiftLeft').classList.add('active');
    }
  });
});
document.querySelector('.shiftRight').addEventListener('click', () => {
  keys.forEach((elem) => {
    if (elem.classList.contains('upperCase')) {
      elem.classList.remove('upperCase');
      document.querySelector('.shiftRight').classList.remove('active');
    } else {
      elem.classList.add('upperCase');
      document.querySelector('.shiftRight').classList.add('active');
    }
  });
});
