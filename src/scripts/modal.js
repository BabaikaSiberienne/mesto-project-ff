import { delCard } from "./card"
import { popUpEdit, popUpAdd } from "../index.js"
let profileTitle = document.querySelector(".profile__title")
let profileDescription = document.querySelector(".profile__description")
const popUpTypeImage = document.querySelector('.popup_type_image')
const popUpImage = document.querySelector('.popup__image')
const popUpImageCaption = document.querySelector('.popup__caption')

const toClosePopUp = (modal) => {
    if (event.target === event.currentTarget) {
        closePopUp(modal)
        document.removeEventListener('keydown', handleEscape);
    }

}

function closePopUp (modal) {
    modal.classList.remove('popup_is-opened');
}

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopUp = document.querySelector('.popup_is-opened')
        closePopUp(openedPopUp)
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
    closePopUp(popUpEdit)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»


function handleImagePopup(image, title) {
    // popUpImage.src = event.target.src
    // // popUpImageCaption.textContent = obj.querySelector('.card__description .card__title').textContent
    // // return popUpTypeImage
    // console.log(event.target)
    popUpImage.src = image.src
    popUpImageCaption.textContent = title.textContent
    // console.log( popUpImage, popUpImageCaption)
    openPopUp(popUpTypeImage)
}



export { openPopUp, closePopUp, toClosePopUp, handleImagePopup, handleProfileFormSubmit}