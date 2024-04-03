import { delCard } from "./card"
const popUpEdit = document.querySelector(".popup_type_edit");
const popUpAdd = document.querySelector(".popup_type_new-card")




function closePopUp (modal) {
    modal.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscape);
}

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopUp = document.querySelector('.popup_is-opened')
        closePopUp(openedPopUp)
    }
}


const openPopUp = (modal) => {
    modal.classList.add("popup_is-opened");
    document.addEventListener('keydown', handleEscape);
};





// Находим поля формы в DOM

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»





export { openPopUp, closePopUp, popUpEdit, popUpAdd}