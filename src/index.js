import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, delCard, handleLike, cardImage, cardTitle } from './scripts/card';
import { openPopUp, closePopUp, popUpEdit, popUpAdd } from './scripts/modal';
import { enableValidation, clearValidation } from './scripts/validation';

const popUpAddForm = document.querySelector(".popup_type_new-card .popup__form")
const inputNameCard = document.querySelector(".popup__input_type_card-name")
const inputLinkCard = document.querySelector(".popup__input_type_url")
const placesContainer = document.querySelector('.places__list'); //берем коробку с местами
const buttonAdd = document.querySelector('.profile__add-button')
const buttonEdit = document.querySelector('.profile__edit-button')
const profileForm = document.querySelector(".popup__form") // Воспользуйтесь методом querySelector()
const nameInputValue = document.querySelector(".popup__input_type_name").value
const jobInputValue = document.querySelector(".popup__input_type_description").value
const profileTitle = document.querySelector(".profile__title")
const profileDescription = document.querySelector(".profile__description")


buttonAdd.addEventListener("click", () => { openPopUp(popUpAdd) });
buttonEdit.addEventListener("click", () => { 
    const profileTitle = document.querySelector(".profile__title")
    const profileDescription = document.querySelector(".profile__description")
    document.querySelector(".popup__input_type_name").value = profileTitle.textContent
    document.querySelector(".popup__input_type_description").value = profileDescription.textContent
    openPopUp(popUpEdit)
 });


const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
    const closeButton = popup.querySelector('.popup__close') //выдергиваем кнопку close и сохраняем её в переменную
    closeButton.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
        closePopUp(popup)
    }})
    popup.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
        closePopUp(popup)
    }})
})

profileForm.addEventListener('submit', handleProfileFormSubmit);
profileForm.addEventListener('input', enableValidation);


initialCards.forEach((card) => {
    placesContainer.append(createCard(card.name, card.link, delCard, handleLike, handleImagePopup));
});

function handleImagePopup(image, title) {
    // popUpImage.src = event.target.src
    // // popUpImageCaption.textContent = obj.querySelector('.card__description .card__title').textContent
    // // return popUpTypeImage
    // console.log(event.target)
    popUpImage.src = image.src
    popUpImageCaption.textContent = title.textContent
    popUpImage.alt = title.textContent
    // console.log( popUpImage, popUpImageCaption)
    openPopUp(popUpTypeImage)
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInputValue
    profileDescription.textContent = jobInputValue
    closePopUp(popUpEdit)
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    placesContainer.prepend(createCard(inputNameCard.value, inputLinkCard.value, delCard, handleLike, handleImagePopup));
    popUpAddForm.reset()
    closePopUp(popUpAdd);

}

popUpAddForm.addEventListener('submit', handleCardFormSubmit)
export { popUpAdd, popUpEdit }