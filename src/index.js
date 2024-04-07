import './pages/index.css';
import { initialCards } from './scripts/cards';
import { createCard, delCard, handleLike, cardImage, cardTitle } from './scripts/card';
import { openPopUp, closePopUp} from './scripts/modal';
import { enableValidation, clearValidation} from './scripts/validation';
import { getF } from './scripts/api';

const popUpEdit = document.querySelector(".popup_type_edit");
const popUpAdd = document.querySelector(".popup_type_new-card")
const popUpAddForm = document.querySelector(".popup_type_new-card .popup__form")
const inputNameCard = document.querySelector(".popup__input_type_card-name")
const inputLinkCard = document.querySelector(".popup__input_type_url")
const placesContainer = document.querySelector('.places__list'); //берем коробку с местами
const buttonAdd = document.querySelector('.profile__add-button')
const buttonEdit = document.querySelector('.profile__edit-button')
const profileForm = document.querySelector(".popup__form") // Воспользуйтесь методом querySelector()
const nameInput = document.querySelector(".popup__input_type_name")
const jobInput = document.querySelector(".popup__input_type_description")
const profileTitle = document.querySelector(".profile__title")
const profileDescription = document.querySelector(".profile__description")
const popUpTypeImage = document.querySelector('.popup_type_image')
const popUpImage = document.querySelector('.popup__image')
const popUpImageCaption = document.querySelector('.popup__caption')
const profileImage = document.querySelector('.profile__image')

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    disabledButtonSelector: 'popup__button_disabled',
    inputErrorSelector: 'popup__input_type_error',
    errorSelector: 'popup__input-error_active'
}

enableValidation(validationConfig)

Promise.all([getF()])
    .then(([profile]) => {
        profileTitle.textContent = profile.name
        profileDescription.textContent = profile.about
        profileImage.style.backgroundImage = `url(${profile.avatar})`
    })
    .catch((error) => {
        console.log(error)
    })


buttonAdd.addEventListener("click", () => { openPopUp(popUpAdd) });
buttonEdit.addEventListener("click", () => { 
    nameInput.value = profileTitle.textContent
    jobInput.value = profileDescription.textContent
    openPopUp(popUpEdit)
 });


const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
    const closeButton = popup.querySelector('.popup__close') //выдергиваем кнопку close и сохраняем её в переменную
    closeButton.addEventListener('click', (event) => {
        closePopUp(popup)
        clearValidation(popup, validationConfig)
    })
    popup.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
        closePopUp(popup)
        clearValidation(popup, validationConfig)
    }})
})

profileForm.addEventListener('submit', handleProfileFormSubmit);


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
    profileTitle.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    closePopUp(popUpEdit)
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    placesContainer.prepend(createCard(inputNameCard.value, inputLinkCard.value, delCard, handleLike, handleImagePopup));
    popUpAddForm.reset()
    closePopUp(popUpAdd);

}

popUpAddForm.addEventListener('submit', handleCardFormSubmit)
