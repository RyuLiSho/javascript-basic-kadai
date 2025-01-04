'use strict';

{
  const text = document.querySelector('#text');
  const btn = document.querySelector('#btn');

  btn.addEventListener('click', () => {
    setTimeout(() => {
      text.textContent = 'ボタンがクリックされました';
    }, 2000);
  });
}
