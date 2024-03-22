import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, delCard, makingCard} from './scripts/card';
import {  popUpAdd, coloringHeart, enhanceImage } from './scripts/modal';

// @todo: Темплейт карточки
const content = document.querySelector('.content'); //берем страницу
const cardTemplate = document.querySelector('#card-template').content; //получаем содержимое шаблона
// @todo: DOM узлы
const placesContainer = document.querySelector('.places__list'); //берем коробку с местами
const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем элемент
// @todo: Вывести карточки на страницу

initialCards.forEach((card) => {
    placesContainer.append(createCard(card, delCard, coloringHeart, enhanceImage));
});


function addingCard(evt) {
    evt.preventDefault(); 
    placesContainer.prepend(makingCard(evt, delCard, coloringHeart, enhanceImage));
    let popUpAddForm = document.querySelector(".popup_type_new-card .popup__form")
    popUpAddForm.reset()
    popUpAdd.classList.remove('popup_is-opened');

}

popUpAdd.addEventListener('submit', addingCard, delCard)
