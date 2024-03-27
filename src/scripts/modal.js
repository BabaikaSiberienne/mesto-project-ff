import { delCard } from "./card"
import { popUpEdit, popUpAdd } from "../index.js"
let profileTitle = document.querySelector(".profile__title")
let profileDescription = document.querySelector(".profile__description")
const popUpImage = document.querySelector('.popup__image')
const popUpImageCaption = document.querySelector('.popup__caption')

const closePopUp = (modal) => {
    if (event.target === event.currentTarget) {
        modal.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', handleEscape);
    }

}


function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopUp = document.querySelector('.popup_is-opened')
        openedPopUp.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', handleEscape);
    }
}


const openPopUp = (modal) => {
    modal.classList.add("popup_is-opened");
    document.addEventListener('keydown', handleEscape);
};





// Находим поля формы в DOM

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInputValue = document.querySelector(".popup__input_type_name").value
    let jobInputValue = document.querySelector(".popup__input_type_description").value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInputValue
    profileDescription.textContent = jobInputValue
    popUpEdit.classList.remove('popup_is-opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»


function handleImagePopup(obj) {
    popUpImage.src = obj.querySelector('.card__image').src
    popUpImageCaption.textContent = obj.querySelector('.card__description .card__title').textContent
    return document.querySelector('.popup_type_image')
}



export { openPopUp, closePopUp, handleImagePopup, handleProfileFormSubmit }