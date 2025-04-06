// Данные для карточек --------------
const coursesData = [
    { price: "30€", description: "⚡️Вы умеете читать и понимаете базовые вещи, но хотите больше лексики и плавного выхода на новый уровень? <br><br> ⚡️Тренажерный формат: практика ответов и переводов с последующей проверкой <br><br> ⭐️Основные темы для начала изучения французского языка <br><br> 💥Спокойное и развернутое объяснение <br><br>  <br><br>" , link: "https://t.me/julie_lov_fr" },
    { price: "40€", description: "⚡️Вы умеете читать и понимаете базовые вещи, но хотите больше лексики и плавного выхода на новый уровень? <br><br> ⚡️Тренажерный формат: практика ответов и переводов с последующей проверкой <br><br> ⭐️Основные темы для начала изучения французского языка <br><br> 💥Спокойное и развернутое объяснение <br><br>  <br><br>", link: "https://t.me/julie_lov_fr" },
    { price: "50€", description: "⚡️У Вас уже есть А2-В1, но понимание на слух и скорость реакции подводит? <br><br> ⚡️Понимаете, что не хватает практики и ищите возможности развивать навык понимания на слух? <br><br> ⭐️Это главные сложности, с которыми можно столкнуться на таком уровне. <br><br> 💥Я это учла в своем курсе 21-30 (А2-В1) и постаралась составить видео-уроки так, чтобы Вы получили не только знания, но и навыки для дальнейшего самообучения. <br><br>  <br><br>", link: "https://t.me/julie_lov_fr" },
    { price: "100€", description: "☑️10 Видео-уроков (~12ч. материала) <br><br> ☑️Тренажерный формат: практика ответов и переводов с последующей проверкой <br><br> ☑️Основные темы для начала изучения французского языка <br><br> ☑️Спокойное и развернутое объяснение <br><br> ☑️Доступ к курсу — 2 месяца, достаточно для прохождения и практики (особые случаи обсуждаются лично) <br><br> ☑️ Материалы для повторения и закрепления после уроков <br><br> ☑️ Длительность каждого урока ~1 ч (+ время на ответы и конспектирование, всего ~2,5 ч на урок)", link: "https://t.me/julie_lov_fr" }
];

const marathonsData = [
    { price: "25€", description: "10 дневный марафон по аудированию! <br><br> Уровень А2-В1 <br><br> Темы диалогов: <br><br> 1. Здоровье 👩🏼‍🔬 <br> 2. Разговор за кофе о досуге 📖 <br> 3. День экзамена 🧑🏻‍🎓 <br> 4. Новая работа и график 👨🏼‍💻 <br> 5. Транспорт 🚌 <br><br> 🔹Я Вам отправляю видео инструкцию, как развивать понимание речи на слух (уровень А2). <br> 🔹Туда же включено аудио диалога, где говорят носители. <br> 🔹Рассказываю по пунктам, как проработать это аудио. <br> 🔹На следующий день даю расшифровку. <br> 🔹Учим этот диалог наизусть или отрабатываем чтение, делимся видео в чате! <br><br>", link: "https://t.me/julie_lov_fr" },
];

const purchasesData = [
    { price: "50€", description: "💛Текстовая методичка курса с Софией доступна для покупки🛍️ <br><br> ✨260 страниц материала, которые можно распечатать и использовать во время работы по видео <br><br> ✨20 аудио, по которым работаем с Софией в курсе  <br><br> 💛Ссылка на этот плейлист, чтобы было легче находить нужные видео: ", link: "https://t.me/julie_lov_fr" },
];

// Функция для генерации карточек
function generateCards(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="price">${item.price}</div>
            <div class="description">${item.description}</div>
            <a href="https://t.me/julie_lovitska" class="button" target="_blank" rel="noopener noreferrer">Подробнее</a>
        `;

        container.appendChild(card);
    });
}

// Генерация карточек для всех секций
document.addEventListener('DOMContentLoaded', () => {
    generateCards(coursesData, 'courses-info-box');
    generateCards(marathonsData, 'marathons-info-box');
    generateCards(purchasesData, 'purchases-info-box');
});

// Выборка элементов
const coursesBox = document.getElementById('courses-info-box');
const coursesCards = [];
let activeCourseIndex = 0;




// Массив с URL видео --------------
const youtubeVideos = [
    "https://www.youtube.com/embed/3ckHuPlJMmo",
    "https://www.youtube.com/embed/cOhg8GitXXc",
    "https://www.youtube.com/embed/7PV8ZTC-8gE",
    "https://www.youtube.com/embed/UFyrQVjsDjg",
    "https://www.youtube.com/embed/M7MdKvs_Bg0",
    "https://www.youtube.com/embed/dOV-wILT8f4",
    "https://www.youtube.com/embed/Opt18yrEbLI"
];

let youtubeIndex = 0;
let youtubeInterval;

// Функция обновления видео
function updateYouTubeVideo(index) {
    const youtubePlayer = document.querySelector(".youtube-player");
    const youtubeOverlay = document.querySelector(".youtube-overlay");

    const videoId = youtubeVideos[index].split("/embed/")[1]; // Извлекаем ID видео
    youtubePlayer.src = `${youtubeVideos[index]}?rel=0&showinfo=0&enablejsapi=1`;
    youtubeOverlay.href = `https://www.youtube.com/watch?v=${videoId}`;
}


// Функция для переключения на следующее видео
function nextYouTubeVideo() {
    youtubeIndex = (youtubeIndex + 1) % youtubeVideos.length;
    updateYouTubeVideo(youtubeIndex);
}

// Функция для переключения на предыдущее видео
function previousYouTubeVideo() {
    youtubeIndex = (youtubeIndex - 1 + youtubeVideos.length) % youtubeVideos.length;
    updateYouTubeVideo(youtubeIndex);
}

// Функция сброса автоматического интервала
function resetYouTubeInterval() {
    clearInterval(youtubeInterval);
    youtubeInterval = setInterval(nextYouTubeVideo, 20000);
}

// Listen for play event and stop the interval
function monitorPlayback() {
    const youtubePlayer = document.querySelector(".youtube-player");
    youtubePlayer.contentWindow.postMessage(
      JSON.stringify({ event: "listening" }),
      "*"
    );
  
    window.addEventListener("message", (event) => {
        let messageData;
      
        try {
          messageData = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        } catch (error) {
          console.error("Ошибка при разборе JSON:", error, "Данные:", event.data);
          return; // Выход из обработчика, если JSON недействителен
        }
      
        if (messageData.event === "onStateChange" && messageData.info === 1) {
          // Video is playing
          clearInterval(youtubeInterval);
        } else if (messageData.event === "onStateChange" && messageData.info === 0) {
          // Video has ended, restart the interval
          resetYouTubeInterval();
        }
      });
      
  }


  document.addEventListener("DOMContentLoaded", () => {
    updateYouTubeVideo(youtubeIndex);
    resetYouTubeInterval();
    monitorPlayback();
  });

// Обработчики событий для кнопок
document.querySelector(".left-button.youtube").addEventListener("click", () => {
    previousYouTubeVideo();
    resetYouTubeInterval();
});

document.querySelector(".right-button.youtube").addEventListener("click", () => {
    nextYouTubeVideo();
    resetYouTubeInterval();
});

// Запуск автоматической смены видео
youtubeInterval = setInterval(nextYouTubeVideo, 20000);



// Массив с отзывами --------------
const reviews = [
    { nickname: "Иван Иванов", feedback: "Очень полезный курс, многое узнал!" },
    { nickname: "Анна Петрова", feedback: "Понравился подход и формат обучения." },
    { nickname: "Иван Иванов", feedback: "Очень полезный курс, многое узнал!" },
    { nickname: "Анна Петрова", feedback: "Понравился подход и формат обучения." },
    { nickname: "Алексей Сидоров", feedback: "Отличный марафон, рекомендую всем!" },
];

const reviewsList = document.querySelector('.reviews-list');

reviews.forEach(review => {
    const card = document.createElement('div');
    card.classList.add('review-card');
    
    const nickname = document.createElement('p');
    nickname.classList.add('nickname');
    nickname.textContent = review.nickname;

    const feedback = document.createElement('p');
    feedback.classList.add('feedback');
    feedback.textContent = review.feedback;

    card.appendChild(nickname);
    card.appendChild(feedback);
    reviewsList.appendChild(card);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
