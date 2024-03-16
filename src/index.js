import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, delCard } from './scripts/card';
// @todo: Темплейт карточки
const content = document.querySelector('.content'); //берем страницу
const cardTemplate = document.querySelector('#card-template').content; //получаем содержимое шаблона
// @todo: DOM узлы
const placesContainer = document.querySelector('.places__list'); //берем коробку с местами
const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клонируем элемент
// @todo: Функция создания карточки

// @todo: Вывести карточки на страницу

initialCards.forEach((card) => {
    placesContainer.append(createCard(card, delCard));
});

