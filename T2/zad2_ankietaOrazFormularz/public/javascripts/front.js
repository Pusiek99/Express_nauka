const numberAInput = document.querySelector('#numberA');
const numberBInput = document.querySelector('#numberB');
const result = document.querySelector('#result');
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const numberA = Number(numberAInput.value);
  const numberB = Number(numberBInput.value);
  result.innerHTML = 'Loading...';
  const res = await fetch('/calc/check', {
    method: 'POST',
    body: JSON.stringify({ numberA, numberB }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  if (data.result) result.innerText = `Number ${numberA} is divisible by ${numberB}`;
  else result.innerText = `Number ${numberA} is not divisible by ${numberB}`;
});
