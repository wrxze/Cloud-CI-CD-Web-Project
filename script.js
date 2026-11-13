document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactBtn').addEventListener('click', function () {
  const message = document.getElementById('message');
  message.textContent = 'Спасибо за интерес! Раздел контактов можно дополнить своими данными.';
});
