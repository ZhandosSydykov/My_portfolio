// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


// Получаем элементы формы
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Обрабатываем событие отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Отменяем стандартное поведение формы

  // Получаем значения полей ввода
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Формируем текст сообщения для отправки в Телеграм
  const CHAT_ID = "-1001930370704";
  const BOT_TOKEN = "5670394037:AAHDZUPMr-KSqkxL-H4sNUuvV8K_71Z1mvo";
  const text = `Новое сообщение с сайта:\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

  // Отправляем сообщение в Телеграм через API бота
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const data = {
    chat_id: CHAT_ID,
    text: text,
  };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Сообщение отправлено в Телеграм!');
      } else {
        console.error('Ошибка отправки сообщения в Телеграм:', response.status);
      }
    })
    .catch((error) => {
      console.error('Ошибка отправки сообщения в Телеграм:', error);
    });

  // Очищаем поля формы
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});

