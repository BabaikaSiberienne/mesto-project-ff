// @todo: Темплейт карточки
const content = document.querySelector('.content'); //берем страницу
const cardTemplate = document.querySelector('#card-template').content //получаем содержимое шаблона
// @todo: DOM узлы
const placesContainer = document.querySelector('.places__list'); //берем коробку с местами
const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем элемент
// @todo: Функция создания карточки

initialCards.forEach((card) => {
        const cardTemplate = document.querySelector('#card-template').content //получаем содержимое шаблона
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем элемент
        cardElement.querySelector('.card__image').src = card.link; //присваиваем картинке путь из массива js файла
        cardElement.querySelector('.card__title').textContent = card.name; //присваиваем тайтлу текст из массива js файла
        const delButton = cardElement.querySelector('.card__delete-button'); //берем кнопку удаления
        delButton.addEventListener('click', delCard);
    placesContainer.append(cardElement); //добавляем в коробку с местами места
});

// @todo: Функция удаления карточки
function delCard (event) {
    const cardElementClosest = event.target.closest('.card')
    cardElementClosest.remove()
}
// @todo: Вывести карточки на страницу
