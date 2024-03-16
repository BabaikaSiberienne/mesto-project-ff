function createCard (card, handDel) {
    const cardTemplate = document.querySelector('#card-template').content; //получаем содержимое шаблона
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем элемент
    cardElement.querySelector('.card__image').src = card.link; //присваиваем картинке путь из массива js файла
    cardElement.querySelector('.card__title').textContent = card.name; //присваиваем тайтлу текст из массива js файла
    cardElement.querySelector('.card__image').alt = card.alt; //присваиваем картинке альтернативное описание из массива js файла
    const delButton = cardElement.querySelector('.card__delete-button'); //берем кнопку удаления
    delButton.addEventListener('click', handDel);
    return cardElement

}

// @todo: Функция удаления карточки
function delCard (event) {
    const cardElementClosest = event.target.closest('.card');
    cardElementClosest.remove();
}

export { createCard, delCard }