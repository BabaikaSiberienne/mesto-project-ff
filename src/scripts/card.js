import { openModalWindow } from "./modal";
function createCard (card, handDel, handColor, handEnhance) {
    const cardTemplate = document.querySelector('#card-template').content; //получаем содержимое шаблона
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем элемент
    cardElement.querySelector('.card__image').src = card.link; //присваиваем картинке путь из массива js файла
    cardElement.querySelector('.card__title').textContent = card.name; //присваиваем тайтлу текст из массива js файла
    cardElement.querySelector('.card__image').alt = card.alt; //присваиваем картинке альтернативное описание из массива js файла
    const delButton = cardElement.querySelector('.card__delete-button'); //берем кнопку удаления
    delButton.addEventListener('click', handDel);
    cardElement.querySelector('.card__like-button').addEventListener('click', handColor)       
    const popUpImage = document.querySelector(".popup_type_image")
    cardElement.querySelector('.card__image').addEventListener('click', () => { openModalWindow(handEnhance(cardElement)) });       
    return cardElement

}

// @todo: Функция удаления карточки
function delCard (event) {
    const cardElementClosest = event.target.closest('.card');
    cardElementClosest.remove();
}


function makingCard (evt, handDel, handColor, handEnhance) { 
    evt.preventDefault();
    const cardTemplate = document.querySelector('#card-template').content; //получаем содержимое шаблона
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем элемент   
    let inputLinkCard = document.querySelector(".popup__input_type_url"); //берем инпут, содержащий ссылку
    let inputNameCard = document.querySelector(".popup__input_type_card-name") //берем инпут, содержащий название карточки
    let inputLinkCardValue = inputLinkCard.value; //сохраняем значение инпута ссылки
    let inputNameCardValue = inputNameCard.value; //сохраняем значение инпута тайтла
    cardElement.querySelector('.card__image').src = inputLinkCardValue; //берем инпут, содержащий ссылку
    cardElement.querySelector('.card__title').textContent = inputNameCardValue //присваиваем тайтлу текст из инпута
    const delButton = cardElement.querySelector('.card__delete-button'); //берем кнопку удаления
    delButton.addEventListener('click', handDel);
    cardElement.querySelector('.card__like-button').addEventListener('click', handColor)
    const popUpImage = document.querySelector(".popup_type_image")
    cardElement.querySelector('.card__image').addEventListener('click', () => { openModalWindow(handEnhance(cardElement)) });    
    return cardElement
}

export { createCard, delCard, makingCard }