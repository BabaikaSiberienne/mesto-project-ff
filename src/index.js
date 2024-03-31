import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, delCard, handleLike, cardImage, cardTitle } from './scripts/card';
import { openPopUp, closePopUp, toClosePopUp, handleImagePopup, handleProfileFormSubmit } from './scripts/modal';

let popUpAddForm = document.querySelector(".popup_type_new-card .popup__form")
const inputNameCard = document.querySelector(".popup__input_type_card-name")
const inputLinkCard = document.querySelector(".popup__input_type_url")
const placesContainer = document.querySelector('.places__list'); //берем коробку с местами
const popUpEdit = document.querySelector(".popup_type_edit");
const popUpAdd = document.querySelector(".popup_type_new-card")
const buttonAdd = document.querySelector('.profile__add-button')
const buttonEdit = document.querySelector('.profile__edit-button')
const profileForm = document.querySelector(".popup__form") // Воспользуйтесь методом querySelector()

buttonAdd.addEventListener("click", () => { openPopUp(popUpAdd) });
buttonEdit.addEventListener("click", () => { openPopUp(popUpEdit) });


const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
    const closeButton = popup.querySelector('.popup__close') //выдергиваем кнопку close и сохраняем её в переменную
    closeButton.addEventListener('click', () => { toClosePopUp(popup) })
    popup.addEventListener('click', () => { toClosePopUp(popup) })
})

profileForm.addEventListener('submit', handleProfileFormSubmit);

initialCards.forEach((card) => {
    placesContainer.append(createCard(card.name, card.link, delCard, handleLike, handleImagePopup));
});


function handleCardFormSubmit(evt) {
    evt.preventDefault();
    placesContainer.prepend(createCard(inputNameCard.value, inputLinkCard.value, delCard, handleLike, handleImagePopup));
    popUpAddForm.reset()
    closePopUp(popUpAdd);

}

popUpAddForm.addEventListener('submit', handleCardFormSubmit)
export { popUpAdd, popUpEdit }