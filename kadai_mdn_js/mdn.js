'use strict';

{
  const t = new Date();
  const y = t.getFullYear();
  const m = String(t.getMonth() + 1).padStart(2, '0');
  const d = String(t.getDate()).padStart(2, '0');

  console.log(`${y}年${m}月${d}日`);
}
