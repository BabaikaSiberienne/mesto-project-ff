import { openPopUp } from "./modal";
// @todo: Функция удаления карточки
function delCard(event) {
    const cardElementClosest = event.target.closest('.card');
    cardElementClosest.remove();
}

function createCard(name, link, handleDelete, handColor, handEnhance) {
    const cardTemplate = document.querySelector('#card-template').content; //получаем содержимое шаблона
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем элемент   
    const cardImage = cardElement.querySelector('.card__image')
    cardElement.querySelector('.card__title').textContent = name
    cardImage.src = link
    const delButton = cardElement.querySelector('.card__delete-button'); //берем кнопку удаления
    delButton.addEventListener('click', handleDelete);
    cardElement.querySelector('.card__like-button').addEventListener('click', handColor)
    cardElement.querySelector('.card__image').addEventListener('click', () => { openPopUp(handEnhance(cardElement)) });
    return cardElement

}

function handleLike(event) {
    event.target.classList.toggle('card__like-button_is-active')

}


export { createCard, delCard, handleLike }
