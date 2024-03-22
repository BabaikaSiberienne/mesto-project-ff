import { delCard } from "./card"
const buttonAdd = document.querySelector('.profile__add-button')
const buttonEdit = document.querySelector('.profile__edit-button')

const popups = document.querySelectorAll('.popup')

const closeModal = (modal) => {
    if (event.target === event.currentTarget)  {
        modal.classList.remove('popup_is-opened');
        // let formElements = document.querySelectorAll(".popup__form")
        // formElements.forEach((formElement) => {
        // formElement.reset();
        // })
    
    }
    document.removeEventListener('keydown', () => { escapeModal(modal) })
}

const escapeModal = (modal) => {
    if (event.key === "Escape") {
        modal.classList.remove('popup_is-opened');
    }}
    
const openModalWindow = (modal) => {
    modal.classList.add("popup_is-opened");
    document.addEventListener('keydown', () => { escapeModal(modal) })
    
  };

const popUpEdit = document.querySelector(".popup_type_edit");
const popUpAdd = document.querySelector(".popup_type_new-card")
buttonAdd.addEventListener("click", () => { openModalWindow(popUpAdd) });
buttonEdit.addEventListener("click", () => { openModalWindow(popUpEdit) });


popups.forEach((popup) => {
    const delButton = popup.querySelector('.popup__close') //выдергиваем кнопку close и сохраняем её в переменную
    delButton.addEventListener('click', () => { closeModal(popup) })
    popup.addEventListener('click', () => { closeModal(popup) })
  })
    
let inputName = document.querySelector(".popup__input_type_name")
let inputJob = document.querySelector(".popup__input_type_description")
inputName.value = document.querySelector(".profile__title").textContent
inputJob.value = document.querySelector(".profile__description").textContent

// Находим форму в DOM
const formElement = document.querySelector(".popup__form") // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector(".popup__input_type_name")// Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".popup__input_type_description")// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInputValue = nameInput.value
    let jobInputValue = jobInput.value
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileTitle = document.querySelector(".profile__title")
    let profileDescription = document.querySelector(".profile__description")
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInputValue
    profileDescription.textContent = jobInputValue 
    popUpEdit.classList.remove('popup_is-opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

function coloringHeart (event) {
event.target.classList.toggle('card__like-button_is-active')        

}

function enhanceImage (obj) {
    document.querySelector('.popup__image').src = obj.querySelector('.card__image').src
    document.querySelector('.popup__caption').textContent = obj.querySelector('.card__description .card__title').textContent
    return document.querySelector('.popup_type_image')
}



export { buttonAdd, buttonEdit, openModalWindow, popUpAdd, coloringHeart, enhanceImage}