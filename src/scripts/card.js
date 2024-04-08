import { openPopUp } from "./modal";
// @todo: Функция удаления карточки
function delCard(event) {
    const cardElementClosest = event.target.closest('.card');
    cardElementClosest.remove();
}

function createCard(name, link, handleDelete, handleLike, id, handImagePopup, likes) {
    const cardTemplate = document.querySelector('#card-template').content; //получаем содержимое шаблона
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем элемент   
    const cardImage = cardElement.querySelector('.card__image')
    const cardTitle =  cardElement.querySelector('.card__title')
    cardTitle.textContent = name
    cardImage.src = link
    cardImage.alt = name;
    const delButton = cardElement.querySelector('.card__delete-button'); //берем кнопку удаления
    delButton.addEventListener('click', handleDelete);
    cardElement.querySelector('.card__like-button').addEventListener('click', handleLike)
    cardElement.querySelector('.counter').textContent = likes
    id = id
    cardImage.addEventListener('click', () => handImagePopup(cardImage, cardTitle));
    return cardElement

}

function handleLike(event) {
    event.target.classList.toggle('card__like-button_is-active')

}


export { createCard, delCard, handleLike, }

